# Windows

The following instructions target **Windows 11**.

For previous versions: [Windows 10](archive/windows-10.md).

## Configuration

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

## Features

Enable Windows features:

- [Windows Subsystem for Linux (WSL)](wsl.md)

## Applications

### Utilities

1. Windows Terminal
2. 1Password, or KeePass (with [KeeTheme](https://github.com/xatupal/KeeTheme)), or another password manager
3. [Sysinternals Suite](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite)
4. WinDirStat

    ```batch
    winget install WinDirStat.WinDirStat
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
8. [Rider](../../../organizations/companies/jetbrains/rider.md) or [Visual Studio 2026](../../../organizations/companies/microsoft/vs2026.md)
9. [MongoDB Compass](../../../organizations/companies/mongodb/compass.md)
10. [WebStorm](../../../organizations/companies/jetbrains/webstorm.md)
11. Additional browsers: Firefox, Brave

### Office

1. Greenshot
2. [draw.io Diagrams](https://apps.microsoft.com/detail/9mvvszk43qqw)
3. [PDF24 Creator](https://apps.microsoft.com/detail/xpfd51h3vqzfm0)
4. [Inkscape](https://inkscape.org/)
