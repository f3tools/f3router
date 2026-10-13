#!/usr/bin/env node

// Postinstall: warm-up SQLite deps into ~/.f3router/runtime so the first
// `f3router` start doesn't need network. Failure here is non-fatal —
// cli.js will retry at runtime if anything is missing.
// `npx f3router …` (npm_command=exec) is typically a one-shot `connect` — skip
// the runtime warm-up; cli.js self-heals it if the server is started later.
if (process.env.npm_command === "exec") process.exit(0);

const { ensureSqliteRuntime } = require("./sqliteRuntime");
const { ensureTrayRuntime } = require("./trayRuntime");

try {
  ensureSqliteRuntime({ silent: false });
  console.log("[f3router] runtime SQLite deps ready");
} catch (e) {
  console.warn(`[f3router] runtime warm-up skipped: ${e.message}`);
}

try {
  ensureTrayRuntime({ silent: false });
} catch (e) {
  console.warn(`[f3router] tray runtime skipped: ${e.message}`);
}

process.exit(0);
