# GitKraken Desktop

> Countless developers and teams worldwide use GitKraken Desktop for its intuitive GUI, powerful terminal, and cross-platform support for Windows, Mac, and Linux

[gitkraken.com/git-client](https://www.gitkraken.com/git-client)

## Usage

### WSL

For users on Windows, using WSL and having repositories cloned on WSL, it's recommended to install GitKraken Desktop on the Linux distribution and open it from there (like VS Code).

[help.gitkraken.com/gitkraken-desktop/windows-subsystem-for-linux](https://help.gitkraken.com/gitkraken-desktop/windows-subsystem-for-linux/)

Install on Ubuntu with:

```bash
wget https://api.gitkraken.dev/releases/production/linux/x64/active/gitkraken-amd64.deb
sudo apt install ./gitkraken-amd64.deb
```

Run with:

```bash
gitkraken
```

Configure SSH keys:

- In File, click Preferences...
- Click SSH, select SSH Private Key and SSH Public Key (you can copy those from Windows and change permissions to 600)
