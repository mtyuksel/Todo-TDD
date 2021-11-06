package models

import "gopkg.in/mgo.v2/bson"

type Task struct {
	Id   bson.ObjectId `json:"id"`
	Name string        `json:"name"`
}
