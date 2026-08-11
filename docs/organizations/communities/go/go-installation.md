# Installation of Go

🌐 [Download and install](https://go.dev/doc/install)

## Operating systems

### Ubuntu

Download and extract the latest version.

```bash
GO_VERSION=$(curl -s https://go.dev/VERSION?m=text | head -n 1)
wget https://go.dev/dl/${GO_VERSION}.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf ${GO_VERSION}.linux-amd64.tar.gz
rm ${GO_VERSION}.linux-amd64.tar.gz
```

Only once - Setup environment variables:

```bash
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
echo 'export PATH="$PATH:$(go env GOPATH)/bin"' >> ~/.bashrc
source ~/.bashrc
```

Verify the installation

```bash
go version
```

### Windows

Download `go1.xx.y.windows-amd64.msi` from [go.dev/dl](https://go.dev/dl/) and run it.

The installer will update the environment variables (need to restart any open command prompts for the change to take effect):

Variable Name | Variable Value                                                            | Variable Type
--------------|---------------------------------------------------------------------------|--------------
`GOPATH`      | `%USERPROFILE%\go`                                                        | User
`Path`        | `%USERPROFILE%\go\bin`                                                    | User
`Path`        | Go installation directory + "\bin" (by default "C:\Program Files\Go\bin") | System

To uninstall:

- Remove remove an existing Go installation from your system delete the go directory ("C:\Program Files\Go" by default in Windows).
- Remove Go bin directory from the `Path` System and User environment variable and the `GOPATH` User environment variable.

## Tips

### Multipe Go versions

Once Go has been installed, you can install other versions with for example `go get golang.org/dl/go1.10.7` and specify it afterwards `go1.10.7 version`
