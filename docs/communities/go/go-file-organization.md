# File organization in a Go project

[golang-standards/project-layout](https://github.com/golang-standards/project-layout)

## General view

```txt
<root>/
├─ pkg/
│  ├─ <somepkg1>/
│  │  └─ <...>
│  └─ <somepkg2>/
├─ .golangci.yaml
├─ go.mod
└─ go.sum
```

## Specific files

### go.mod

```txt
module myorganization/myproject

go 1.19

require (
    //
)

replace (
    //
)
```
