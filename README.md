# a-monorepo

This monorepo orchestration contains 2 different [NextJs](https://nextjs.org/) apps under the [/apps](a-monorepo/blob/main/apps) folder.

- storefront
- backoffice

The root `package.json` contains the most high level dependencies, like nextjs for apps.

At the root level we have the [/packages](a-monorepo/blob/main/packages) folder, with the following 3 packages:
- infrastructure
This package could contains common service dependencies consumed trought your projects like:
databases, cms, configs files, clients, etc...
As an example i've already defined [supabase](https://supabase.com/) clients.

- ui
This package contain UI's relative packages, shared components and tailwind configurations.
Some dependencies are already defined in the UI `package.json`:
- [storybook](https://storybook.js.org/)
- [tailwind](https://tailwindcss.com/)
- [class-variance-authority](https://cva.style/docs)
- [daisyui](https://daisyui.com/)

- website
This package could contains common utilities like hooks and utility functions.

## Prettier, EsLint, tsconfig
Root level configs are extended inside other packages, like:
- prettier.config.mjs
- eslint-config.mjs
- tsconfig.json

## commits
[Husky](https://typicode.github.io/husky/) is already configurated in conjunction with [commitlint](https://github.com/conventional-changelog/commitlint) a conventional commits library.

## Docker
We have a root `compose.yml` file with 2 containers for storefront and backoffice apps.

## Turbopack
This monorepo use [turbopack](https://turbo.build/pack).