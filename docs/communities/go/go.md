# Go

> Build simple, secure, scalable systems

🌐 [go.dev](https://go.dev/), [docs](https://go.dev/doc/), [code](https://github.com/golang/go), [packages](https://pkg.go.dev/)

## Content

- [CLI](go-cli.md)
- [Installation](go-installation.md)

## Quick start

### Multipe Go versions

- Once Go has been installed, you can install other versions with for example `go get golang.org/dl/go1.10.7` and specify it afterwards `go1.10.7 version`

### Visual Studio Code

As soon as a Go file is opened, Visual Studio Code will suggest to install Go extension.

On a Go file save, Visual Studio code will suggest installing additional tools.

### Additional tools installed by Visual Studio Code

Installed at C:\Users\<username>\go\bin in module mode:

- gocode
- gopkgs
- go-outline
- go-symbols
- guru
- gorename
- gotests
- gomodifytags
- impl
- fillstruct
- goplay
- godoctor
- dlv
- gocode-gomod
- godef
- goreturns
- golint
- goimports
  
## Learn

[Learn](https://learn.go.dev/)

### Getting started

- [A Tour of Go](https://tour.golang.org/welcome/1)
- [The Go Playground](https://play.golang.org/)
- [How to Write Go Code](https://golang.org/doc/code.html)

### Additional readings

- [The Go Programming Language Specification](https://golang.org/ref/spec)
- [Effective Go](https://golang.org/doc/effective_go.html)
- [Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments)
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout)
- [Codewalk: First-Class Functions in Go](https://golang.org/doc/codewalk/functions/)
- [Codewalk: Share Memory By Communicating](https://golang.org/doc/codewalk/sharemem/)
- [A Tour of Go](https://research.swtch.com/gotour)

### Presentations

- [Go Talks](https://talks.golang.org/)
  - [Go Concurrency Patterns](https://talks.golang.org/2012/concurrency.slide#1)
  - [Advanced Go Concurrency Patterns](https://talks.golang.org/2013/advconc.slide#1)
  - [Go: a simple programming environment](https://talks.golang.org/2012/simple.slide#1)

### Videos

- [YouTube channel](https://www.youtube.com/watch?v=ytEkHepK08c&list=PLVgT4AuZGeoB85rHU6nc7DL7j90AmBZpV)

### Recipes

#### Create a REST API

- Fiber: [gofiber.io](https://gofiber.io/) ([gofiber/fiber](https://github.com/gofiber/fiber))
  - [Building a Basic REST API in Go using Fiber](https://tutorialedge.net/golang/basic-rest-api-go-fiber/)

## Tools

### Gofmt

[Gofmt](https://golang.org/cmd/gofmt/)

Formats Go programs. It uses tabs for indentation and blanks for alignment. Alignment assumes that an editor is using a fixed-width font.
