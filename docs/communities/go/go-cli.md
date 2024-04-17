# Go CLI (Command Line Interface)

## Usual commands

Command                      | Action
-----------------------------|-----------------------------------------------------------------------------------------------------------
`go version`                 | Displays version
`go run .`                   | Executes the code
`go build`                   | Compiles a code (creates an executable binary)
`go mod init <domain>/<app>` | Creates go.mod file
`go install <domain>/<pkg>`  | Builds and installs the program with the go tool (in $HOME/go/bin/hello or %USERPROFILE%\go\bin\hello.exe)

[docs](https://golang.org/doc/cmd)

## Additional commands

* [gofmt](https://pkg.go.dev/cmd/gofmt)
* [golint](https://pkg.go.dev/golang.org/x/lint/golint)
* [govulncheck](https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck) ([The Go Blog - Vulnerability Management for Go](https://go.dev/blog/vuln))
