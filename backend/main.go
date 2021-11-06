package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/mtyuksel/Todo-TDD/backend/controllers"
)

func main() {
	taskController := controllers.NewTaskController()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST",
	}))

	app.Post("/tasks/add", taskController.Add)
	app.Get("/tasks/getall", taskController.GetAll)

	app.Listen(":9000")
}
