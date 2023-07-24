# [ScumJournal](https://scumjournal.pages.dev)

My first legitimate blog, I plan to use this as a
portfolio that showcases the technologies I have a solid
grasp on.

## Specs

### Front-end

Framework: [Qwik](https://qwik.builder.io/docs/)  
Languages:

- TypeScript
- HTML
- CSS

Deployment:

- NPM:  [Cloudflare Pages](https://www.cloudflare.com/products/pages/)
- Images: [BunnyCDN](https://docs.bunny.net/docs)

### Back-end

Framework: [Serverless](https://www.serverless.com/framework/docs/)  
Language: Go  
Deployment: [AWS Lambda](https://aws.amazon.com/lambda/)

### Database

[MongoDB](https://www.mongodb.com/docs/)  
Deployment: [MongoDB Atlas](https://www.mongodb.com/docs/atlas/)

## Current Business Logic

Essentially, what's happening is when you go the [website](https://scumjournal.pages.dev),
it contacts the API to my Go function which then sends back a json array of all the blogs
in descending order according to the [postNumber](https://github.com/gregidonut/scumjournal/blob/a273775c7b3ac494a9fbdc291b1f3f07dc4ceea8/scumjournal-backend/microBlogArticlesDatabase/utils/utils.go#L18)

Sorting is done by Go in the function and not through the database query(I think
database queries should be as simple as possible so).

## Try it out locally.
To reproduce the whole app locally(all except for the MongoDB uri to my db instance),  
- Clone the repo
    ```bash
    git clone https://github.com/gregidonut/scumjournal.git
    ```
- cd into the front end dir
    ```bash
    cd scumjournal/scumjournal
    ```
- install npm dependencies
    ```bash
    npm install
    ```
- execute the start script
    ```bash
    npm start
    ```

from there the front end should pop up with [Vite](https://vitejs.dev/guide/)
and you can either add an array of TypeScript objects that matches the [microBlogArticle interface,](https://github.com/gregidonut/scumjournal/blob/a273775c7b3ac494a9fbdc291b1f3f07dc4ceea8/scumjournal/src/components/BlogArticles/BlogArticle.tsx#L17)
or you can upload the array of said objects to MongoDB Atlas and then create
a serverless function through AWS Lambda to access it,  

by, 
- CDing back to repo root dir
    ```bash
    cd ..
    ```
- CD into the scumjournal-backend dir
    ```bash
    cd scumjournal-backend
    ```
- create your [serverless.yml](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/)
(you can also just use mine).
- cd back out to the root of the repo coz that's where the `go.mod`
file is to tidy then back in
    ```bash
    cd ..
    go mod tidy
    cd scumjournal-backend
    ```
    
- build the Go bin
    ```bash
    export GO111MODULE=on
    env GOARCH=amd64 GOOS=linux CGO_ENABLED=0 go build -ldflags="-s -w" -o bin/microBlogArticlesDatabase microBlogArticlesDatabase/main.go
    ```
- deploy
    ```bash
    sls deploy --verbose
    ```

- make sure to add the url to your AWS Lambda api to the [fetch request](https://github.com/gregidonut/scumjournal/blob/cafd063af6cbb85caee0a0940042cc785b6da5ed/scumjournal/src/components/microBlogArticles/microBlogArticles.tsx#L92)
in the microBlogArticles component
