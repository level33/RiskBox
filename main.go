// Main program
// @author: Dragos STOICA
// @date: 16.12.2018
//

package main

import (
	"encoding/json"
	"net/http"
	"regexp"

	"github.com/Jeffail/gabs"
	"github.com/labstack/echo"
)

type InputPayload struct {
	AccountName      string                 `json:"account_name" form:"account_name" query:"account_name"`
	PayloadTimeStamp string                 `json:"payload_ts" form:"payload_ts" query: "payload_ts"`
	Payload          map[string]interface{} `json:"payload" form:"payload" query:"payload"`
}

var (
	e            *echo.Echo
	ValidDB_Name *regexp.Regexp
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

	//TODO create new database for account_name if not exists
	//TODO upser document with payload and payload_ts
	b, err := json.Marshal(u)
	if err != nil {
		e.Logger.Error("Marshal error")
		return err
	}

	jsonParsed, err := gabs.ParseJSON(b)
	if err != nil {
		e.Logger.Error("Gabs error")
		return err
	}
	e.Logger.Debug(jsonParsed.String())

	return c.JSON(http.StatusCreated, u)

}

func init() {
	ValidDB_Name = regexp.MustCompile(`^[a-z][a-z0-9_$()+/-]*$`)

}

func main() {
	e = echo.New()

	e.GET("/input", inputGET)
	e.POST("/input", inputPOST)

	e.Logger.Fatal(e.Start(":1974"))
}
