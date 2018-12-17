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
	//TODO return a list with existing databases
	return c.String(http.StatusOK, "Hello, World!")
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
	
	//TODO upsert document with payload
	

	return c.JSON(http.StatusCreated, u)

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

	e.Logger.Fatal(e.Start(":8080"))
}
