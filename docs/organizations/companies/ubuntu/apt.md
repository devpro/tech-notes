# apt

## apt vs apt-get

CLI       | Motivation
----------|-----------------------------------------------------------------
`apt`     | For daily package management (easier, better UX)
`apt-get` | For scripts and automation (more stable, no interactive prompts)

## Fixes

### The following signatures couldn't be verified because the public key is not available: NO_PUBKEY AA16FCBCA621E701

Error while running `apt update`.

Fix: `sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys AA16FCBCA621E701`.

Found on [Issue #32622](https://github.com/hashicorp/terraform/issues/32622#issuecomment-1425882901).
