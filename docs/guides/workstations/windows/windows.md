# Windows

The following instructions target **Windows 11**.
For previous versions: [Windows 10](archive/windows-10.md).

## Configuration

### Power options

- `Control Panel` > `Hardware and Sound` >  `Power Options`
  - `Choose what the closing the lid does` > `Change settings that are currently unavailable`
    - Enable `Hibernate`

### Display

- `Settings` > `System` > `Display`
  - `HDR`
  - `Advanced display` > `Choose a refresh rate`
  - `Graphics` > `Customised settings for applications`
- `NVIDIA Control Panel`
  - `Display` > `Set up G-SYNC` > `Enable G-SYNC`
  - `3D Settings` > `Manage 3D settings` > `Program settings`

## Features

- [Windows Subsystem for Linux (WSL)](wsl.md)

## Applications

### Utilities

- Password manager: 1Password, or KeePass (with [KeeTheme](https://github.com/xatupal/KeeTheme)) for example
- WinDirStat

    ```batch
    winget install WinDirStat.WinDirStat
    ```

- Windows Terminal

### Binaries

- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)

### Software development

1. [Visual Studio Code](../../../organizations/companies/microsoft/vscode.md)
2. Git

    Update git

    ```cmd
    git update-git-for-windows
    ```

3. Notepad++
4. [MongoDB Compass](../../../organizations/companies/mongodb/compass.md)
5. [Rider](../../../organizations/companies/jetbrains/rider.md) or [Visual Studio 2026](../../../organizations/companies/microsoft/vs2026.md)
6. [WebStorm](../../../organizations/companies/jetbrains/webstorm.md)

### Office

- [draw.io Diagrams](https://apps.microsoft.com/detail/9mvvszk43qqw)
- [PDF24 Creator](https://apps.microsoft.com/detail/xpfd51h3vqzfm0)
- [Inkscape](https://inkscape.org/)
