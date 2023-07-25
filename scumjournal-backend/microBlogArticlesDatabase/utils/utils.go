package utils

import (
	"encoding/json"
	"go.mongodb.org/mongo-driver/bson"
	"log"
	"sort"
)

type microBlogPost struct {
	ID      string   `json:"_id"`
	Content []string `json:"content"`
	Date    string   `json:"date"`
	Images  []struct {
		Alt    string `json:"alt"`
		Handle string `json:"handle"`
	} `json:"images"`
	PostNumber int    `json:"postNumber"`
	Title      string `json:"title"`
	Votes      struct {
		Downvotes    int    `json:"downvotes"`
		LastVoteDate string `json:"lastVoteDate"`
		Upvotes      int    `json:"upvotes"`
	} `json:"votes"`
}

func SortArticles(mongoResponse []bson.M) []microBlogPost {
	var articles []microBlogPost

	for _, result := range mongoResponse {
		object, err := json.MarshalIndent(result, "", "    ")
		if err != nil {
			log.Fatal(err)
		}

		var article microBlogPost
		rawResultJson := json.RawMessage(object)
		err = json.Unmarshal(rawResultJson, &article)
		if err != nil {
			log.Fatal(err)
		}

		articles = append(articles, article)
	}

	sort.Slice(articles, func(i, j int) bool {
		return articles[i].PostNumber > articles[j].PostNumber
	})

	return articles
}
