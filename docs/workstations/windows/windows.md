# Windows

The following instructions target **Windows 11**.
For previous versions: [Windows 10](windows-10.md).

## Configuration

### Power options

Open `Control Panel` > `Hardware and Sound` >  `Power Options` to enable `Hibernate` and change the action when closing the lid.

### Display

Review and update:

Parameter                               | Path
----------------------------------------|----------------------------------------------------------------------------------------------------
HDR                                     | `Settings` (Windows) > `System` > `Display` > `HDR` (in Brightness & Colour)
Windows refresh rate (for every screen) | `Settings` (Windows) > `System` > `Display` > `Advanced display` (Related settings) > `Choose a refresh rate`
NVIDIA G-SYNC                           | `NVIDIA Control Panel` > `Display` > `Set up G-SYNC` > `Enable G-SYNC`
NVIDIA 3D program settings              | `NVIDIA Control Panel` > `3D Settings` > `Manage 3D settings` > `Program settings`
NVIDIA application settings             | `Settings` (Windows) > `System` > `Display` > `Graphics` > `Customised settings for applications`

## Features

- [Windows Subsystem for Linux (WSL)](wsl.md)

## Applications

### Software development

- [Visual Studio Code](software-development.md#visual-studio-code)

### Office

- [draw.io Diagrams](https://apps.microsoft.com/detail/9mvvszk43qqw)
- [PDF24 Creator](https://apps.microsoft.com/detail/xpfd51h3vqzfm0)

### Utilities

- KeePass
  - Plugins: [KeeTheme](https://github.com/xatupal/KeeTheme) (dark theme)
- WinDirStat

    ```dos
    winget install WinDirStat.WinDirStat
    ```
