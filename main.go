package main

import (
	"net/http"
	"os"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.ListenAndServe(":8080", nil)
}
