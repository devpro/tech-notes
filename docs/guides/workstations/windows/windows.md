# Windows

The following instructions target **Windows 11**.

For previous versions: [Windows 10](archive/windows-10.md).

<!-- https://winstall.app/ -->

## System configuration

### Power options

Actions to be done once:

1. Enable hibernate
    - Control Panel > Hardware and Sound > **Power Options**
      - Choose what the closing the lid does > **Change settings that are currently unavailable**
        - Enable **Hibernate**
2. Disable action on lid closing

For more information, see [pureinfotech.com/enable-hibernate-windows-11](https://pureinfotech.com/enable-hibernate-windows-11/).

### Display

Review and update if needed:

- Settings > System > **Display**
  - **HDR**
  - Advanced display > **Choose a refresh rate**
  - Graphics > **Customised settings for applications**
- **NVIDIA Control Panel**
  - Display > Set up G-SYNC > **Enable G-SYNC**
  - 3D Settings > Manage 3D settings > **Program settings**

## System features

Enable:

- [Windows Subsystem for Linux (WSL)](wsl.md)

## Installation

### Utilities

1. Windows Terminal
2. 1Password, or KeePass (with [KeeTheme](https://github.com/xatupal/KeeTheme)), or another password manager
3. [Sysinternals Suite](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite)

    ```dos
    winget install -e --id Microsoft.Sysinternals.Suite
    ```

4. WinDirStat

    ```dos
    winget install WinDirStat.WinDirStat
    ```

5. [WinMerge](https://winmerge.org/downloads/)

## Drivers

1. Logitech G Hub

    ```batch
    winget install -e --id Logitech.GHUB
    ```

### Binaries

Download in a directory added to the PATH environment variable:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)
- Terraform
- Helm

### Software development

1. [Visual Studio Code](../../../organizations/companies/microsoft/vscode.md)
2. Git

    Install:

    ```cmd
    winget install --id Git.Git -e --source winget
    git config --global core.autocrlf false
    git config --global core.longpaths true
    ```

    Update:

    ```cmd
    git update-git-for-windows
    ```

3. [Notepad++](https://notepad-plus-plus.org/downloads/)
4. SSH keys

    Run with Git CMD:

    ```bash
    ssh-keygen -t ed25519 -C "myaddress@myorg.somext"
    ssh-keygen -t rsa -b 4096 -C "myaddress@myorg.somext"
    ```

    Copy from WSL:

    ```bash
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    cp /mnt/c/Users/<windows_username>/.ssh/id_* ~/.ssh/
    chmod 600 ~/.ssh/id_rsa ~/.ssh/id_ed25519
    chmod 644 ~/.ssh/*.pub
    ```

5. GitKraken
6. [Node.js](../../../organizations/foundations/openjs-foundation/nodejs.md)
7. .NET SDK
8. [JetBrains Toolbox](../../../organizations/companies/jetbrains/toolbox.md)
    - [Rider](../../../organizations/companies/jetbrains/rider.md)

    ```dos
    winget install -e --id JetBrains.Rider
    ```

    - [WebStorm](../../../organizations/companies/jetbrains/webstorm.md)

    ```dos
    winget install -e --id JetBrains.WebStorm
    ```

9. [MongoDB Compass](../../../organizations/companies/mongodb/compass.md)
10. PowerShell

    ```dos
    winget install -e --id Microsoft.PowerShell
    ```

11. [Claude Code](../../../organizations/companies/anthropic/claude-code.md)

    ```dos
    winget install -e --id Anthropic.ClaudeCode
    ```

12. [Antigravity](../../../organizations/companies/google/antigravity.md)
13. [Antigravity IDE](../../../organizations/companies/google/antigravity.md)
14. [Antigravity CLI](../../../organizations/companies/google/antigravity.md)

    ```dos
    winget install -e --id Google.AntigravityCLI
    ```

### Office

1. Greenshot
2. [draw.io Diagrams](https://apps.microsoft.com/detail/9mvvszk43qqw)
3. [PDF24 Creator](https://apps.microsoft.com/detail/xpfd51h3vqzfm0)
4. [Inkscape](https://inkscape.org/)

## Upgrade

Open Terminal (Command Prompt) as Administrator and run:

```dos
winget update --all --silent
```
