# f3router — Agent Skills

Drop-in skills for any AI agent (Claude, Cursor, ChatGPT, custom SDK). Just **copy a link** below and paste it to your AI — it will fetch the skill and use f3router for you.

> Tip: start with the **f3router** entry skill — it covers setup and links to all capability skills.

## Skills

| Capability | Copy link below and paste to your AI |
|---|---|
| **Entry / Setup** (start here) | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router/SKILL.md |
| Chat / code-gen | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-chat/SKILL.md |
| Image generation | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-image/SKILL.md |
| Video generation (xAI Grok Imagine) | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-video/SKILL.md |
| Text-to-speech | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-tts/SKILL.md |
| Speech-to-text | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-stt/SKILL.md |
| Embeddings | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-embeddings/SKILL.md |
| Web search | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-web-search/SKILL.md |
| Web fetch (URL → markdown) | https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router-web-fetch/SKILL.md |

## How to use

Paste to your AI (Claude, Cursor, ChatGPT, …):

```
Read this skill and use it: https://raw.githubusercontent.com/f3tools/f3router/refs/heads/master/skills/f3router/SKILL.md
```

Then ask normally — *"generate an image of a cat"*, *"transcribe this URL"*, etc.

## Configure your shell once

```bash
export NINEROUTER_URL="http://localhost:20128"   # local default, or your VPS / tunnel URL
export NINEROUTER_KEY="sk-..."                   # from Dashboard → Keys (only if requireApiKey=true)
```

Verify: `curl $NINEROUTER_URL/api/health` → `{"ok":true}`.

## Links

- Source: https://github.com/f3tools/f3router
- Dashboard: https://9router.com
