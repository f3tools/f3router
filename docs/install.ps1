# The f3router Windows installer lives at https://raw.githubusercontent.com/f3tools/f3router/main/docs/install.ps1
# This shim keeps old `iwr ... github.io ... | iex` one-liners working.
$ErrorActionPreference = 'Stop'
Invoke-Expression (Invoke-RestMethod -UseBasicParsing https://raw.githubusercontent.com/f3tools/f3router/main/docs/install.ps1)
