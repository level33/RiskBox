// Main program
// @author: Dragos STOICA
// @date: 16.12.2018
// @version: 0.0.1
//

package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"regexp"

	"github.com/dop251/goja"
	"github.com/labstack/echo"
	"github.com/labstack/gommon/log"
)

type InputPayload struct {
	AccountName string                 `json:"account_name" form:"account_name" query:"account_name"`
	Payload     map[string]interface{} `json:"payload" form:"payload" query:"payload"`
}

var (
	e            *echo.Echo
	ValidDB_Name *regexp.Regexp
	ALL_DBS      []string
)

// input GET Handler
func inputGET(c echo.Context) error {
	// return a list with existing databases
	localDB := NewBoltDB("", ALL_DBS[0]+".bd")
	defer localDB.Close()
	inputDoc, _ := localDB.Read([]byte("payload"), []byte("input"))
	var doc map[string]interface{}
	err := json.Unmarshal([]byte(inputDoc), &doc)
	if err != nil {
		e.Logger.Error(e)
	}
	dbList := map[string]interface{}{"dblist": ALL_DBS, "input": doc}
	return c.JSON(http.StatusOK, dbList)
}

// input POST Handler
func inputPOST(c echo.Context) error {
	//Get the payload
	u := new(InputPayload)
	if err := c.Bind(u); err != nil {
		e.Logger.Error("Bind error")
		return err
	}

	//Create new database for account_name if not exists
	if ValidDB_Name.MatchString(u.AccountName) {

		if !Contains(ALL_DBS, u.AccountName) {
			ALL_DBS = append(ALL_DBS, u.AccountName)
		}

		newDB := NewBoltDB("", u.AccountName+".bd")
		defer newDB.Close()
		b, err := json.Marshal(u.Payload)
		if err != nil {
			e.Logger.Error("Marshal error")
			return err
		}

		newDB.UpdateDB([]byte("payload"), []byte("input"), b)

	} else {
		//return an error message to the users
		e.Logger.Error(u.AccountName + " malformed database name!")
		return echo.NewHTTPError(http.StatusInternalServerError, u.AccountName+" malformed database name!")
	}
	e.Logger.Debug(u.AccountName + " database created and doc: payload created with value from payload.")
	return c.JSON(http.StatusCreated, u)
}

// compute GET handler
func computeGET(c echo.Context) error {
	localDB := NewBoltDB("", ALL_DBS[0]+".bd")
	defer localDB.Close()

	if !localDB.ExistsDoc([]byte("result")) {
		return echo.NewHTTPError(http.StatusInternalServerError, "Result not found!")
	}

	return c.JSON(http.StatusOK, map[string]interface{}{"message": "Result ready!"})
}

// compute POST handler
func computePOST(c echo.Context) error {

	//Get data payload from database
	localDB := NewBoltDB("", ALL_DBS[0]+".bd")
	defer localDB.Close()

	inputDoc, _ := localDB.Read([]byte("payload"), []byte("input"))
	var doc map[string]interface{}
	err := json.Unmarshal([]byte(inputDoc), &doc)
	if err != nil {
		e.Logger.Error(e)
	}

	e.Logger.Debug(doc)

	//Get the body as JavaScript program
	var program string

	vm := goja.New()
	vm.Set("__input", doc)

	var bodyBytes []byte
	if c.Request().Body != nil {
		bodyBytes, _ = ioutil.ReadAll(c.Request().Body)
	}
	program = string(bodyBytes)
	e.Logger.Debug(program)
	//Save the program in the database
	err = localDB.UpdateDB([]byte("program"), []byte("javascript"), bodyBytes)
	if err != nil {
		e.Logger.Error(err)
	}
	v, err := vm.RunString(program)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	var num interface{}
	err = vm.ExportTo(v, &num)
	//Save the result in database before sending the response
	e.Logger.Debug(num)
	b, err := json.Marshal(num)
	if err != nil {
		e.Logger.Error("Marshal error")
		return err
	}

	err = localDB.UpdateDB([]byte("result"), []byte("output"), b)
	if err != nil {
		e.Logger.Error(err)
	}

	return c.JSON(http.StatusOK, num)

}

// output GET hadler
func outputGET(c echo.Context) error {
	localDB := NewBoltDB("", ALL_DBS[0]+".bd")
	defer localDB.Close()
	var doc map[string]interface{}

	if localDB.ExistsDoc([]byte("result")) {
		inputDoc, err := localDB.Read([]byte("result"), []byte("output"))
		err = json.Unmarshal([]byte(inputDoc), &doc)
		if err != nil {
			e.Logger.Error(e)
		}
	} else {
		return echo.NewHTTPError(http.StatusInternalServerError, "Result not found!")
	}

	e.Logger.Debug(doc)

	return c.JSON(http.StatusOK, doc)
}

// output POST handler
func outputPOST(c echo.Context) error {
	return c.String(http.StatusOK, "WIP!")
}

func init() {
	ValidDB_Name = regexp.MustCompile(`^[a-z][a-z0-9_$()+/-]*$`)
	//Look for *.bd files in the current location
	//Store this information in ALL_DBS variable
	//Use this variable as a proxy/cache

	ALL_DBS = []string{}
	files, _ := filepath.Glob("" + "*.bd")
	//remove _replicator and _gcfg from the list
	for _, values := range files {
		//remove .bd extension
		dbName := values[:len(values)-3]
		if ValidDB_Name.MatchString(dbName) || dbName == "_users" {
			ALL_DBS = append(ALL_DBS, dbName)
		}
	}

}

func main() {
	e = echo.New()

	e.Logger.SetLevel(log.DEBUG)

	//The root of static files is webapp
	e.Static("/", "webapp")

	e.GET("/input", inputGET)
	e.POST("/input", inputPOST)

	e.GET("/compute", computeGET)
	e.POST("/compute", computePOST)

	e.GET("/output", outputGET)
	e.POST("/output", outputPOST)

	e.Logger.Fatal(e.Start(":8080"))
}
