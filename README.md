## Rafael Velazco — Personal site & blog

Personal website + portfolio + MDX blog built with **Next.js (App Router)**, **Tailwind CSS v4**, and a small set of **shadcn/ui + Radix** primitives.

### Stack

- **Framework**: Next.js `16`
- **Content**: MDX posts under `src/app/(site)/blog/posts/*/page.mdx`
- **Styling**: Tailwind CSS v4 + Typography plugin
- **UI**: shadcn/ui primitives (Radix)
- **Formatting/Linting**: ESLint v9 (flat config) + Prettier
- **Output**: Static export (`output: "export"`) to `build/` (see `next.config.ts`)

## Getting Started

### Install

This repo uses **Yarn** (`packageManager: yarn@1.22.21`).

```bash
yarn install
```

### Development

Run the dev server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build (static export)

```bash
yarn build
```

The exported site is generated into `build/`.

## Code quality

```bash
yarn lint
yarn lint:fix
yarn format
yarn format:check
```

### Pre-commit hook

Husky runs `yarn lint` and `yarn format` on commit. If formatting changes files, re-stage them and commit again.

## Notes

- **MDX** is enabled via `@next/mdx` (`next.config.ts`).
- Some pages use Google-hosted **Material Symbols**; the stylesheet is injected in `src/app/layout.tsx`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

This project is configured as a **static export** (`output: "export"`). You can deploy the `build/` output to any static host.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
