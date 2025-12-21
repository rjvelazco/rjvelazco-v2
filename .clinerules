# Project Instructions

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5
- **Styling**: Tailwind CSS 4.1.4
- **Content**: MDX with @next/mdx
- **Package Manager**: Yarn 1.22.21

## Code Style & Conventions

### TypeScript

- Use TypeScript for ALL files (.ts, .tsx)
- Enable strict mode (already configured in tsconfig.json)
- Use explicit types for props and return values
- Prefer type over interface unless extending is needed
- Use React.FC sparingly (only when it adds value)

### React

- Use functional components exclusively
- Use React 19 hooks (useState, useEffect, useRef, etc.)
- Import hooks directly: `import { useState, useEffect } from 'react'` (NOT `import * as React from 'react'`)
- For client components, add `'use client'` directive at the top
- Use modern React patterns (no class components)

### Styling

- Use Tailwind CSS 4 for all styling
- Use the `cn()` utility from `@components/utils` for conditional class merging
- Follow mobile-first responsive design
- Use Tailwind's design tokens (don't use arbitrary values unless necessary)
- For complex component variants, consider using `class-variance-authority` (already installed)

### Imports

- Use path aliases:
  - `@components/*` for `./src/components/*`
  - `@data/*` for `./src/data/*`
  - `@utils/*` for `./src/utils/*`
- Order imports: React/Next → Third-party → Local components → Utils → Types
- Use named imports over default imports when possible

## Project Architecture

### Directory Structure

```
src/
├── app/              # Next.js App Router pages & layouts
├── components/
│   ├── ui/           # Reusable UI components (buttons, badges, etc.)
│   ├── mdx/          # MDX-specific components (code blocks, etc.)
│   ├── layout/       # Layout components (nav, headers, etc.)
│   └── utils.ts      # Component utilities (cn function)
├── data/             # Static data and content
└── utils/            # General utility functions
```

### Component Organization

- **`components/ui/`**: Generic, reusable UI components (Button, Badge, Toggle, etc.)
- **`components/mdx/`**: MDX-specific components used in blog posts
- **`components/layout/`**: Layout-specific components (NavBar, Headers, etc.)
- When creating new components, determine the appropriate folder based on its purpose
- Keep components small and focused on a single responsibility

### Component Patterns

- Export component functions directly: `export function ComponentName() {}`
- Use named exports over default exports for components
- Group related types/interfaces with the component
- Use React.ComponentPropsWithoutRef for extending HTML element props

Example:

```tsx
import { cn } from '@components/utils';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return <button className={cn('base-styles', variant === 'primary' && 'primary-styles', className)} {...props} />;
}
```

## Icons

- Use **Material Symbols Outlined** from Google Fonts
- Icons are loaded via CDN in `/src/app/layout.tsx`
- To add new icons:
  1. Add the icon name to the `icon_names` parameter in the link tag
  2. Keep names in alphabetical order
  3. Use lowercase with underscores (e.g., `arrow_left_alt`, `dark_mode`)

Usage in components:

```tsx
<span className="material-symbols-outlined text-[16px]">icon_name</span>
```

Current available icons: arrow_left_alt, arrow_right_alt, dark_mode, ios_share, light_mode, link, menu, palette, settings, share

## MDX Configuration

- MDX files are used for blog content
- Custom components are defined in `src/mdx-components.tsx`
- Use rehype-pretty-code for syntax highlighting (with Shiki)
- Use remark-gfm for GitHub Flavored Markdown support

## Best Practices

### Performance

- Use dynamic imports for heavy components
- Optimize images with Next.js Image component
- Keep client components minimal (prefer server components)
- Use React 19's useTransition and useDeferredValue for expensive operations

### Accessibility

- Use semantic HTML elements
- Include proper ARIA labels when needed
- Ensure keyboard navigation works
- Test with screen readers when adding interactive components

### Code Quality

- Follow the ESLint configuration (run `yarn lint` before committing)
- Format code with Prettier (run `yarn format`)
- Write descriptive variable and function names
- Add comments only for complex logic (code should be self-documenting)

### Git Workflow

- Branch naming: `feature/description`, `fix/description`, `style/description`
- Main branch: `main`
- Husky pre-commit hooks are configured (linting/formatting)

## Utilities

### cn() Function

Use the `cn()` utility for merging Tailwind classes with proper precedence:

```tsx
import { cn } from '@components/utils';

<div className={cn('base-class', condition && 'conditional-class', className)} />;
```

This handles:

- Conditional classes
- Prop-based className overrides
- Tailwind class conflicts (last class wins)

## Common Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check formatting

## Notes

- The project uses Webpack mode explicitly (`--webpack` flag)
- LightningCSS is used for CSS optimization
- Font: Onest Variable (included via @fontsource-variable/onest)
- The site supports internationalization (ES version exists)
