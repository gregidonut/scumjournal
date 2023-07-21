package main

import (
	"github.com/gregidonut/scumjournal/scumjournal-backend/microBlogArticlesDatabase/handler"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(handler.Handler)
}
