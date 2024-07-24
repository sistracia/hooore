# Hooore Apps

Hooore's webs apps monorepo. All web apps developed by Hooore will be placed here.

## Why Using Monorepo?

Because we dreaming to develop a lot of web apps. With monorepo we could re-use some configuration or code used in some app to other app with ease.

## Getting Started

To install all apps and packages dependencies:

```bash
pnpm install
```

Run script (dev, build, test, etc) for specific app and/or package:

```bash
pnpm run dev --filter <APP NAME / PACKAGE NAME> # run only one app or package
pnpm run dev --filter <APP NAME / PACKAGE NAME> --filter <APP NAME / PACKAGE NAME> # run multiple apps or packages
```
