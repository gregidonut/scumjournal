package contact

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"log"
	"os"
)

const (
	MONGO_URI_ENV_VAR = "MONGO_URI"
)

func ContactMongo() []bson.M {

	client, err := mongo.Connect(
		context.TODO(),
		options.Client().ApplyURI(os.Getenv(MONGO_URI_ENV_VAR)),
	)
	if err != nil {
		log.Fatalf("mongo.Connect(): %s\n", err)
	}

	err = client.Ping(context.TODO(), readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}

	microBlogArticles := client.Database("scumjournal").Collection("microBlogArticles")

	// retrieve all the documents that match the filter
	cursor, err := microBlogArticles.Find(context.TODO(), bson.D{})
	// check for errors in the finding
	if err != nil {
		log.Fatal(err)
	}

	// convert the cursor result to bson
	var results []bson.M
	// check for errors in the conversion
	if err = cursor.All(context.TODO(), &results); err != nil {
		log.Fatal(err)
	}

	return results
}
