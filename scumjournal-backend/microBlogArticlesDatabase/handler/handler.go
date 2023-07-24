package handler

import (
	"bytes"
	"context"
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/gregidonut/scumjournal/scumjournal-backend/microBlogArticlesDatabase/contact"
	"github.com/gregidonut/scumjournal/scumjournal-backend/microBlogArticlesDatabase/utils"
)

// Response is of type APIGatewayProxyResponse since we're leveraging the
// AWS Lambda Proxy Request functionality (default behavior)
//
// https://serverless.com/framework/docs/providers/aws/events/apigateway/#lambda-proxy-integration
type Response events.APIGatewayProxyResponse

// Handler is our lambda handler invoked by the `lambda.Start` function call
func Handler(ctx context.Context) (Response, error) {
	mongoResponse := contact.ContactMongo()
	sortedMongoResponse := utils.SortArticles(mongoResponse)

	var buf bytes.Buffer

	body, err := json.Marshal(sortedMongoResponse)
	if err != nil {
		return Response{StatusCode: 404}, err
	}
	json.HTMLEscape(&buf, body)

	resp := Response{
		StatusCode:      200,
		IsBase64Encoded: false,
		Body:            buf.String(),
		Headers: map[string]string{
			"Content-Type":             "application/json",
			"X-ScumJournal-Func-Reply": "microBlogArticlesDatabase-handler",
		},
	}

	return resp, nil
}
