#!/usr/bin/env bash
# The f3router installer moved to https://raw.githubusercontent.com/f3tools/f3router/main/docs/install.sh
# This shim keeps old `curl ... github.io ... | bash` one-liners working.
set -euo pipefail
exec bash -c "$(curl -fsSL https://raw.githubusercontent.com/f3tools/f3router/main/docs/install.sh)"
