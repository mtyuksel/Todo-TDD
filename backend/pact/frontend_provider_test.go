package pact

import (
	"testing"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/mtyuksel/Todo-TDD/backend/controllers"
	"github.com/pact-foundation/pact-go/types"

	"github.com/pact-foundation/pact-go/dsl"
)

func TestProvider_Todo(t *testing.T) {

	pact := &dsl.Pact{
		Provider: "backend",
	}

	pact.VerifyProvider(t, types.VerifyRequest{
		ProviderBaseURL:            "http://127.0.0.1:9000",
		BrokerURL:                  "https://devtodo.pactflow.io",
		BrokerToken:                "94U6VkB3wHNnb3d3KLuYDQ",
		PublishVerificationResults: true,
		ProviderVersion:            "1",
		BeforeEach: func() error {
			taskController := controllers.NewTaskController()
			app := fiber.New()

			app.Use(cors.New(cors.Config{
				AllowOrigins: "*",
				AllowMethods: "GET,POST,PATCH",
			}))

			app.Post("/tasks/add", taskController.Add)
			app.Get("/tasks/getall", taskController.GetAll)

			go app.Listen(":9000")

			return nil
		},
		StateHandlers: types.StateHandlers{
			"a request for get all tasks": func() error { return nil },
			"a request for add new task":  func() error { return nil },
		},
	})
}
