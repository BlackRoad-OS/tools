# 🛠️ BlackRoad Tools

> **Universal tools registry and utilities for the entire BlackRoad OS ecosystem**

[![Deploy](https://github.com/BlackRoad-OS/tools/actions/workflows/deploy.yml/badge.svg)](https://github.com/BlackRoad-OS/tools/actions/workflows/deploy.yml)

## 🌐 Overview

The `tools` repository serves as the **universal integration hub** for all BlackRoad organizations and their 300+ repositories. This is the central registry and coordination point for:

- 🔗 Cross-organization tool discovery
- 📡 Inter-repo communication protocols
- 🤖 AI agent orchestration endpoints
- 📊 Ecosystem-wide metrics and monitoring
- 🔐 Unified authentication and authorization

## 🏢 Connected Organizations

This repository integrates with all **15 BlackRoad organizations**:

| Organization | Repos | Focus |
|--------------|-------|-------|
| [BlackRoad-OS](https://github.com/BlackRoad-OS) | 100+ | Core infrastructure |
| [BlackRoad-AI](https://github.com/BlackRoad-AI) | 52 | AI models & tools |
| [BlackRoad-Cloud](https://github.com/BlackRoad-Cloud) | 20 | Cloud infrastructure |
| [BlackRoad-Security](https://github.com/BlackRoad-Security) | 17 | Security tools |
| [BlackRoad-Media](https://github.com/BlackRoad-Media) | 17 | Media platforms |
| [BlackRoad-Foundation](https://github.com/BlackRoad-Foundation) | 15 | Core tools |
| [BlackRoad-Interactive](https://github.com/BlackRoad-Interactive) | 14 | Gaming |
| [BlackRoad-Labs](https://github.com/BlackRoad-Labs) | 13 | R&D |
| [BlackRoad-Hardware](https://github.com/BlackRoad-Hardware) | 13 | IoT & devices |
| [BlackRoad-Studio](https://github.com/BlackRoad-Studio) | 13 | Creative tools |
| [BlackRoad-Ventures](https://github.com/BlackRoad-Ventures) | 12 | Business tools |
| [BlackRoad-Education](https://github.com/BlackRoad-Education) | 11 | Learning |
| [BlackRoad-Gov](https://github.com/BlackRoad-Gov) | 10 | Governance |
| [Blackbox-Enterprises](https://github.com/Blackbox-Enterprises) | 9 | Stealth R&D |
| [BlackRoad-Archive](https://github.com/BlackRoad-Archive) | 9 | Data preservation |

**Total: 315+ repositories** across the BlackRoad Empire 🖤🛣️

## 🔌 Key Integrations

### Master Index
- **[index](https://github.com/BlackRoad-OS/index)** - Master registry of all organizations, repos, and infrastructure
- Auto-syncs with `index.json` for machine-readable catalog
- Connects to infrastructure map at `INTERNET.md`

### Core Services
- **[blackroad-tools](https://github.com/BlackRoad-OS/blackroad-tools)** - Agent orchestration API
- **[blackroad-os-beacon](https://github.com/BlackRoad-OS/blackroad-os-beacon)** - Service discovery
- **[blackroad-os-mesh](https://github.com/BlackRoad-OS/blackroad-os-mesh)** - Real-time agent communication

### Infrastructure
- **Cloudflare Account**: `848cf0b18d51e0170e0d1537aec3505a`
- **D1 Database**: `blackroad-continuity` (`f0721506-cb52-41ee-b587-38f7b42b97d9`)
- **Stripe Account**: `acct_1SUDM8ChUUSEbzyh`

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Deployment

```bash
npm run deploy
```

## 📡 API Endpoints

### Tool Registry
- `GET /` - Health check & service info
- `GET /registry` - List all registered tools across ecosystem
- `GET /orgs` - List all connected organizations
- `GET /repos` - Search repositories by organization
- `GET /health` - System health status

### Integration Points
- `GET /integrations/index` - Sync with master index
- `GET /integrations/beacon` - Connect to service beacon
- `GET /integrations/mesh` - Access real-time mesh

### Authentication
All requests support:
- `X-Agent-ID` - Agent identification
- `X-Org-Name` - Organization scope
- `Authorization` - Bearer token (GitHub, Cloudflare, etc.)

## 🤖 For AI Assistants

This repository is AI-native and designed for seamless agent interaction.

### Getting Started
1. Read **[CLAUDE.md](https://github.com/BlackRoad-OS/index/blob/main/CLAUDE.md)** in the index repo
2. Access GitHub token from D1 continuity database
3. Use provided MCP tools for Cloudflare, Stripe, and other services

### Key Resources
- **Index**: https://github.com/BlackRoad-OS/index
- **Documentation**: https://github.com/BlackRoad-OS/blackroad-docs
- **Internet Map**: https://github.com/BlackRoad-OS/index/blob/main/INTERNET.md

## 📚 Documentation

- [API Reference](./docs/API.md) *(coming soon)*
- [Integration Guide](./docs/INTEGRATIONS.md) *(coming soon)*
- [Contributing](./docs/CONTRIBUTING.md) *(coming soon)*

## 🔐 Security

- All secrets stored in D1 `blackroad-continuity` database
- PS-SHA-∞ verified operations
- Trinary logic for truth states: `1` (true), `0` (unknown), `-1` (false)

## 📊 Ecosystem Stats

| Metric | Count |
|--------|-------|
| **GitHub Organizations** | 15 |
| **Total Repositories** | 315+ |
| **Cloudflare Workers** | 82 |
| **D1 Databases** | 11 |
| **KV Namespaces** | 20 |
| **R2 Buckets** | 9 |
| **Domains** | 21 |
| **Stripe Products** | 11 |
| **HuggingFace Models** | 50+ |

## 🌌 Philosophy

Built on principles of:
- **Digital Sovereignty** - No vendor lock-in
- **Transparent AI** - Accountable, consent-based systems
- **Open Infrastructure** - Modular, extensible architecture
- **Enterprise Scale** - 1000+ agent orchestration ready

## 📄 License

MIT License - See [LICENSE](./LICENSE) for details

---

**Built with 🖤 by [BlackRoad OS, Inc.](https://blackroad.io)** • *The space between is where miracles happen* ✨

*Auto-syncs with [index](https://github.com/BlackRoad-OS/index) • Part of the BlackRoad Empire*