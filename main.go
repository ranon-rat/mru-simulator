package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))

	port := os.Getenv("PORT")

	if port == "" {

		port = "8080"
	}

	log.Println("Serve on port", port)
	http.ListenAndServe(":8080", nil)
}
