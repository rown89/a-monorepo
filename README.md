# A Monorepo

This monorepo setup features two different [Next.js](https://nextjs.org/) applications located in the [apps](apps) folder:

- **storefront**
- **backoffice**

At the root level, we have the [packages](packages) folder, which includes the following packages:

## Infrastructure Package
This package contains common service dependencies used across your projects, such as databases, CMS, config files, and clients. An example provided is the [Supabase](https://supabase.com/) clients.

## UI Package
This package includes UI-related packages, shared components, and Tailwind CSS configurations. The UI `package.json` already includes several dependencies:
- [Storybook](https://storybook.js.org/): A tool for developing UI components in isolation.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Class Variance Authority](https://cva.style/docs): A utility for managing component styles.
- [DaisyUI](https://daisyui.com/): A set of Tailwind CSS components.

## Website Package
This package contains common utilities such as hooks and utility functions.

## Configuration
Root-level configurations are extended into other packages, including:
- `prettier.config.mjs`: Prettier configuration.
- `eslint-config.mjs`: ESLint configuration.
- `tsconfig.json`: TypeScript configuration.

## Commits
[Husky](https://typicode.github.io/husky/) is set up to manage Git hooks, and [commitlint](https://github.com/conventional-changelog/commitlint) is configured to enforce conventional commit messages.

## Docker
The root `compose.yml` file defines Docker containers for both the storefront and backoffice applications.

## Turbopack
This monorepo uses [Turbopack](https://turbo.build/pack) for bundling and build orchestration.

This structure provides a scalable and maintainable foundation for developing and deploying multiple applications and packages within a single repository.
