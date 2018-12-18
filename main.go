// Main program
// @author: Dragos STOICA
// @date: 16.12.2018
//

package main

import (
	"encoding/json"
	"net/http"
	"regexp"
    "path/filepath"
	"github.com/Jeffail/gabs"
	"github.com/labstack/echo"
    "github.com/dop251/goja"
    
)

type InputPayload struct {
	AccountName      string                 `json:"account_name" form:"account_name" query:"account_name"`
	Payload          map[string]interface{} `json:"payload" form:"payload" query:"payload"`
}

var (
	e            *echo.Echo
	ValidDB_Name *regexp.Regexp
	ALL_DBS []string
)

// input GET Handler
func inputGET(c echo.Context) error {
	// return a list with existing databases
	localDB := NewBoltDB("", ALL_DBS[0] + ".bd")
	defer localDB.Close()
	inputDoc, _ := localDB.Read([]byte("payload"),[]byte("input"))
	var doc map[string]interface{}
    err := json.Unmarshal([]byte(inputDoc), &doc)
    if (err != nil){
        e.Logger.Error(e)
    }
	dbList := map[string]interface{}{"dblist" : ALL_DBS, "input": doc } 
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
	if (ValidDB_Name.MatchString(u.AccountName)){
	    
	    if !Contains(ALL_DBS, u.AccountName) {
	        ALL_DBS = append(ALL_DBS, u.AccountName)
        }	        

        newDB := NewBoltDB("", u.AccountName +".bd")
	        defer newDB.Close()
	        b, err := json.Marshal(u.Payload)
        	if err != nil {
        		e.Logger.Error("Marshal error")
        		return err
        	}
	        e.Logger.Error(b)
	   
        	jsonParsed, err := gabs.ParseJSON(b)
        	if err != nil {
        		e.Logger.Error("Gabs error")
        		return err
        	}
        	e.Logger.Debug(jsonParsed.String())
	
	        newDB.UpdateDB([]byte("payload"),	[]byte("input"), b)
        	    
	}else{
	    //TODO return an error message to the users
	    e.Logger.Error(u.AccountName + " malformed database name!")
	}	
	
	return c.JSON(http.StatusCreated, u)
}

// compute GET handler
func computeGET(c echo.Context) error{
    localDB := NewBoltDB("", ALL_DBS[0] + ".bd")
	defer localDB.Close()
	inputDoc, _ := localDB.Read([]byte("payload"),[]byte("input"))
	var doc map[string]interface{}
    err := json.Unmarshal([]byte(inputDoc), &doc)
    if (err != nil){
        e.Logger.Error(e)
    }
    
    e.Logger.Error(doc)
    
    vm := goja.New()
    vm.Set("__input", map[string]interface{}(doc))
    v, err := vm.RunString(` 
        __input["result"] = [0, 2, 3];
    `)
    if err != nil {
        panic(err)
    }
    num := v.Export().(map[string]interface{}) 
    return c.JSON(http.StatusOK, num)
}

// compute POST handler
func computePOST(c echo.Context) error{
    
    return c.String(http.StatusOK, "WIP!")
}

// output GET hadler
func outputGET(c echo.Context) error{
    return c.String(http.StatusOK, "WIP!")
}

// output POST handler
func outputPOST(c echo.Context) error{
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
		if ValidDB_Name.MatchString(dbName) || dbName == "_users"{
			ALL_DBS = append(ALL_DBS, dbName)		
		} 
	}

}

func main() {
	e = echo.New()

	e.GET("/input", inputGET)
	e.POST("/input", inputPOST)
	
	e.GET("/compute", computeGET)
	e.POST("/compute", computePOST)
    
    e.GET("/output", outputGET)
    e.POST("/output", outputPOST)


	e.Logger.Fatal(e.Start(":8080"))
}
