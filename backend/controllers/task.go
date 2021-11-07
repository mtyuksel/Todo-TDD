package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/mtyuksel/Todo-TDD/backend/models"
)

type TaskController struct {
}

func NewTaskController() *TaskController {
	return &TaskController{}
}

func (controller TaskController) Add(ctx *fiber.Ctx) error {
	task := models.Task{}

	ctx.BodyParser(&task)
	ctx.Status(fiber.StatusCreated)

	responseForPact := models.Response{
		Success: true,
		Message: "",
		Data: models.TaskDTO{
			Task: models.Task{Id: "5", Name: task.Name},
		},
	}

	ctx.JSON(responseForPact)

	return nil
}

func (controller TaskController) GetAll(ctx *fiber.Ctx) error {
	var tasks []models.Task = []models.Task{
		{Id: "1", Name: "Test Task 1"},
		{Id: "2", Name: "Test Task 2"},
		{Id: "3", Name: "Test Task 3"},
	}

	responseForPact := models.Response{
		Success: true,
		Message: "",
		Data: models.TaskListDTO{
			Todolist: tasks,
		},
	}

	ctx.JSON(responseForPact)
	return nil
}
