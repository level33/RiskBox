// BoltDB helper functions
// @author: Dragos STOICA
// @date: 16.12.2018
// @version: 0.0.1
//

package main

import (
	"bytes"
	"crypto/md5"
	"crypto/rand"
	"encoding/gob"
	"encoding/hex"
	"errors"
	_ "fmt"
	"io"
	"log"
	"os"
	"time"

	"github.com/boltdb/bolt"
	"github.com/labstack/echo"
)

//Auxiliary function use to ched if a database is in ALL_DBS list
func Contains(list []string, elem string) bool {
	for _, t := range list {
		if t == elem {
			return true
		}
	}
	return false
}

//Transform interface{} to []byte
func GetBytes(key interface{}) ([]byte, error) {
	var buf bytes.Buffer
	enc := gob.NewEncoder(&buf)
	err := enc.Encode(key)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}

func GetMD5Hash(text []byte) string {
	hash := md5.Sum(text)
	return hex.EncodeToString(hash[:])
}

func GetUUID() string {
	uuid := make([]byte, 16)
	n, err := io.ReadFull(rand.Reader, uuid)
	if n != len(uuid) || err != nil {
		//w.Write(err)
	}
	// variant bits; see section 4.1.1
	uuid[8] = uuid[8]&^0xc0 | 0x80
	// version 4 (pseudo-random); see section 4.1.3
	uuid[6] = uuid[6]&^0xf0 | 0x40
	return hex.EncodeToString(uuid)
}

type BoltDB struct {
	db *bolt.DB
}

func NewBoltDB(filepath string, dbname string) *BoltDB {
	db, err := bolt.Open(filepath+dbname, 0600, &bolt.Options{Timeout: 1 * time.Second})
	if err != nil {
		log.Fatal(err)
	}

	return &BoltDB{db}
}

func ROBoltDB(filepath string, dbname string) *BoltDB {
	db, err := bolt.Open(filepath+dbname, 0666, &bolt.Options{ReadOnly: true})
	if err != nil {
		log.Fatal(err)
	}

	return &BoltDB{db}
}

func (b *BoltDB) Path() string {
	return b.db.Path()
}

func (b *BoltDB) Close() {
	b.db.Close()
}

func (b *BoltDB) Read(bucket []byte, key []byte) (value []byte, err error) {

	if b.ExistsDoc(bucket) {

		err = b.db.View(func(tx *bolt.Tx) error {
			bucket_tmp := tx.Bucket(bucket)
			value = bucket_tmp.Get(key)
			return nil
		})
		if err != nil {
			return nil, err
		}
		return value, nil
	}
	return nil, errors.New("Document does not exist!")
}

func (b *BoltDB) UpdateDB(bucket []byte, key []byte, value []byte) error {
	return b.db.Update(func(tx *bolt.Tx) error {
		b, err := tx.CreateBucketIfNotExists(bucket)
		if err != nil {
			log.Fatal("Error creating bucket: %s", err)
			return err
		}
		err = b.Put(key, value)
		if err != nil {
			log.Fatal("Error writing to bucket: %s", err)
		}
		return err
	})
}

func (b *BoltDB) ExistsDoc(bucket []byte) bool {
	var result = false
	b.db.View(func(tx *bolt.Tx) error {
		bucket_tmp := tx.Bucket(bucket)
		result = bucket_tmp != nil
		return nil
	})
	return result
}

func DeleteDB(filepath string, dbname string) error {
	return os.Remove(filepath + dbname)
}

//This works only with echo framework
func (b *BoltDB) ExportFile(filepath string, dbname string, c echo.Context) error {
	return c.Attachment(filepath+dbname, dbname)
	/*
		err := b.db.View(func(tx *bolt.Tx) error {
			c.Response().Header().Set(echo.HeaderContentType, "application/octet-stream")
			c.Response().Header().Set("Content-Disposition", `attachment; filename="`+dbname+`"`)
			c.Response().Header().Set("Content-Length", strconv.Itoa(int(tx.Size())))
			_, err := tx.WriteTo(c.Response().Writer())
			return err
		})
		return err
	*/
}
