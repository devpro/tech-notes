# WSL

> Windows Subsystem for Linux (WSL) lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dual-boot setup

🌐 [learn.microsoft.com/windows/wsl](https://learn.microsoft.com/en-us/windows/wsl/)

## Installation

🌐 [How to install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

## Configuration

🌐 [Advanced settings configuration in WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config)

## Commands

🌐 [Basic commands for WSL](https://learn.microsoft.com/en-us/windows/wsl/basic-commands)

Command          | Action
-----------------|---------------------------------------------------------------------------------------------------
`wsl --shutdown` | Immediately terminates all running distributions and the WSL 2 lightweight utility virtual machine
`wsl --update`   | Updates the WSL version to the latest version

## Tips

Linux commands can be ran from Windows command prompt by adding wsl before:

```docs
wsl ls
```

From Linux we can access Windows files in `/mnt/c/`.

From Windows we can access Linux files in `\\wsl.localhost\` (previously `\\wsl$`).

## Features

### Linux applications with a GUI

> WSL now supports running Linux GUI applications (X11 and Wayland) on Windows in a fully integrated desktop experience

🌐 [Run Linux GUI apps on the Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps)

Uses [WSLg (Windows Subsystem for Linux GUI)](https://github.com/microsoft/wslg)

Examples:

- [GitKraken](../gitkraken/gitkraken-desktop.md#wsl)
- [Visual Studio Code](vscode-installation.md#wsl)

## Performance

For some codebases, store files inside WSL directory (Windows files are in `/mnt/c` and may cause issues).

To restrict the use of resources by WSL, create a text file `%UserProfile%\.wslconfig` in the current user's profile and restart wsl (`wsl --shutdown`):

```ini file="%UserProfile%\.wslconfig"
[wsl2]
memory=8GB
processors=4
swap=2GB
```
