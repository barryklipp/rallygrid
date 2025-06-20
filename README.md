# RallyGrid

A taste-aligned AI canvas for founders and creatives. This project uses React, Tailwind CSS and shadcn/ui.

## Development

```bash
npm install
npm run dev
```

The dashboard layout is composed of three columns:

1. **Left** – Navigation and style bible modules
2. **Center** – Workspace with editable blocks and AI output
3. **Right** – Saved insights and tags panel

The code is scaffolded with Vite and is intended to be modular and extensible.

### Mock Content Generation

The `generateContent()` utility returns random placeholder text after a short delay.
It powers the "+ Add Block" button in the workspace, which uses the reusable
`Button` component from `@/components/ui/button`.

