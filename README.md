# Next.js 14+ boilerplate with Next Auth, TRPC, Tailwind CSS 3.4 and TypeScript

🚀 Next.js 14 biolerplate with App Router support, Next Auth, [TRPC](https://trpc.io/), Tailwind CSS and TypeScript ⚡️ Prioritizing developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, PostCSS, Tailwind CSS, Authentication with [NextAuth](https://next-auth.js.org), Database with DrizzleORM (SQLite, PostgreSQL, and MySQL) and [Turso](https://turso.tech/), Error Monitoring with [Sentry](https://sentry.io/for/nextjs), Logging with Pino.js and Log Management, Monitoring as Code, Storybook, Multi-language (i18n), and more.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check a demo in [here](https://next14-boilerplate.paalamugan.com).

## Features

Developer experience first, extremely flexible code structure and only keep what you need:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 🔒 Integrate [NextAuth](https://next-auth.js.org/) With [TRPC](https://trpc.io/)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 🔒 Authentication with [NextAuth](https://next-auth.js.org/): Sign up, Sign in, Sign out
- 📦 Type-safe ORM with DrizzleORM, compatible with SQLite, PostgreSQL, and MySQL
- 💽 Global Database with [Turso](https://turso.tech/)
- 🌐 Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/) and [Crowdin](https://l.crowdin.com/next-js)
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form handling with React Hook Form
- 🔴 Validation library with Zod
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 Integration and E2E Testing with Playwright
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🚨 Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- ☂️ Code coverage with [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- 📝 Logging with Pino.js and Log Management with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🖥️ Monitoring as Code with [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual testing with Percy (Optional)
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and Extensions
- 🤖 SEO metadata, JSON-LD and Open Graph tags
- 🗺️ Sitemap.xml and robots.txt
- ⌘ Database exploration with Drizzle Studio and CLI migration tool with Drizzle Kit
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
- Easy to customize
- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 20+ and pnpm (If you not have pnpm installed, you can install it with `npm install -g pnpm`, For more information, you can check [pnpm installation](https://pnpm.io/installation))

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/paalamugan/next14-with-next-auth-boilerplate my-project-name
cd my-project-name
```

#### Prerequisites

- Copy the `.env.example` file to `.env.local` and update the environment variables with your own values.

```shell
cp .env.example .env.local
```

and update the `.env.local` environment variables with your own values.

Before run the application make sure you have correct node version. You can check the node version by running the following command:

```shell
node -v
```

else you can install the correct node version by running the following command:

```shell
nvm install 20.12.2 && nvm use 20.12.2
```

#### Install dependencies

```shell
pnpm install # or pn install
```

then you can run the database migration with:

```shell
pnpm db:migrate # or pn db:migrate
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
pnpm dev # or pn dev
```

Open [http://localhost:3000](http://localhost:3000) with your favorite browser to see your project.

### Set up remote database

The project uses DrizzleORM, a type-safe ORM compatible with SQLite, PostgreSQL, and MySQL databases. By default, the project is set up to work seamlessly with libSQL, and for production purposes, it's integrated with [Turso](https://turso.tech). The Next.js Boilerplate also enables a smooth transition to an alternative database provider if your project requires it.

First, you need to create a Turso account at [Turso.tech](https://turso.tech) and install the Turso CLI:

```shell
brew install tursodatabase/tap/turso
turso auth signup # Sign up to Turso
```

Then, create a new database:

```shell
turso db create next14-boilerplate
```

Now, you need to update the `DATABASE_URL` in `.env` file with the database URL provided by Turso:

```shell
turso db show next14-boilerplate --url

# .env
# DATABASE_URL=libsql://[RANDOM-CHARS]-[DB-NAME]-[ORG-NAME].turso.io
```

Finally, you also need to create a new environment variable `DATABASE_AUTH_TOKEN` in `.env.local` (not tracked by Git) with the auth token provided by Turso:

```shell
turso db tokens create next14-boilerplate

# .env.local
# DATABASE_AUTH_TOKEN=[your-auth-token]
```

### Translation (i18n) setup

For translation, the project uses `next-intl` combined with [Crowdin](https://l.crowdin.com/next-js). As a developer, you only need to take care of the English (or another default language) version. Other languages are automatically generated and handled by Crowdin. You can use Crowdin to collaborate with your translation team or translate the messages yourself with the help of machine translation.

To set up translation (i18n), create an account at [Crowdin.com](https://l.crowdin.com/next-js) and create a new project. In the newly created project, you will able to find the project ID. You'll also require to create a new Personal Access Tokens by going to Account Settings > API. Then, in your GitHub Actions, you need to define the following environment variables `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN`.

After defining the environment variables in your GitHub Actions, your localization files will be synchronized with Crowdin everytime you push a new commit to the `main` branch.

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── helpers                         # Helpers folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── lib                         # 3rd party libraries configuration
│   ├── models                      # Database models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   ├── server                      # Server folder
│   ├── db                          # database schemas
│   ├── stores                      # Store folder (Zustand)
│   ├── trpc                        # TRPC folder
│   ├── providers                   # Providers folder
│   ├── i18n                        # i18n folder (next-intl)
│   |   └── locales                 # Locales folder (i18n messages)
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next 14 Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/static/favicons/apple-touch-icon.png`, `public/static/favicons/favicon.ico`, `public/static/favicons/favicon-16x16.png` and `public/static/favicons/favicon-32x32.png`: your website favicon, you can generate from [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)
- `helpers/site.config.mjs`: site configuration file
- `src/templates/BaseTemplate.tsx`: default theme
- `next.config.mjs`: Next.js configuration
- `.env`: default environment variables

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
pnpm commit # or pn commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All unit tests are located with the source code inside the same directory. So, it makes it easier to find them. The project uses Jest and React Testing Library for unit testing. You can run the tests with:

```shell
pnpm test # or pn test
```

### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```shell
npx playwright install # Only for the first time in a new environment
pnpm test:e2e # or pn test:e2e
```

### Enable Edge runtime (optional)

The App Router folder is compatible with the Edge runtime. You can enable it by uncommenting the following lines `src/app/layout.tsx`:

```tsx
// export const runtime = 'edge';
```

For your information, the database migration is not compatible with the Edge runtime. So, you need to disable the automatic migration in `src/db/index.ts`:

```tsx
if (env.DB_MIGRATIONS_ENABLED) {
  await migrate(db, { migrationsFolder: './migrations' });
}
```

After disabling it, you are required to run the migration manually with:

```shell
pnpm db:migrate # or pn db:migrate
```

You also require to run the command each time you want to update the database schema.

### Deploy to production

During the build process, the database migration is automatically executed. So, you don't need to run the migration manually. But, in your environment variable, `DATABASE_URL` and `DATABASE_AUTH_TOKEN` need to be defined.

Then, you can generate a production build with:

```shell
pnpm build # or pn build
```

It generates an optimized production build of the boilerplate. For testing the generated build, you can run:

```shell
pnpm start # or pn start
```

The command starts a local server with the production build. Then, you can now open [http://localhost:3000](http://localhost:3000) with your favorite browser to see the project.

### Error Monitoring

The project uses [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) to monitor errors. For development environment, you don't need to do anything: Next.js Boilerplate is already configured to use Sentry and Spotlight (Sentry for Development). All errors will be automatically sent to your local Spotlight instance. So, you can try the Sentry experience locally.

For production environment, you need to create a Sentry account and create a new project. Then, in `next.config.mjs`, you need to update the `org` and `project` attribute in `withSentryConfig` function. You also need to add your Sentry DSN in `sentry.client.config.ts`, `sentry.edge.config.ts` and `sentry.server.config.ts`.

### Code coverage

Next.js Boilerplate relies on [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) for code coverage reporting solution. To use Codecov, create a Codecov account and connect it to your GitHub account. On your Codecov dashboard, it should display a list of your repositories. Select the repository you want to enable Codecov for and copy the token. Then, in your GitHub Actions, you need to define the `CODECOV_TOKEN` environment variable and paste the token you copied.

Be sure to create the `CODECOV_TOKEN` as a Github Actions secret, do not paste it directly into your source code.

### Logging

The project uses Pino.js for logging. By default, for development environment, the logs are displayed in the console.

For production environment, the project is already integrated with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) to manage and query your logs using SQL. To use Better Stack, you need to create a [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) account and create a new source: go to your Better Stack Logs Dashboard > Sources > Connect source. Then, you need to give a name to your source and select Node.js as the platform.

After creating the source, you able to see your source token and copy it. Then, in your environment variabless, you can paste the token in `LOGTAIL_SOURCE_TOKEN` variable. Now, all your logs will be automatically sent and ingested by Better Stack.

### Checkly monitoring

The project uses [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) to ensure that your production environment is always up and running. At regular intervals, Checkly runs the tests ending with `*.check.spec.ts` extension and notifies you if any of the tests fail. Additionally, you have the flexibility to execute tests across multiple locations to ensure that your application is available worldwide.

To use Checkly, you must first create an account on [their website](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate). Once you have an account, you can set the `CHECKLY_API_KEY` environment variable in GitHub Actions by generating a new API key in the Checkly Dashboard. Additionally, you will need to define the `CHECKLY_ACCOUNT_ID`, which can also be found in your Checkly Dashboard under User Settings > General.

To complete the setup, make sure to update the `checkly.config.ts` file with your own email address and production URL.

### Useful commands

#### Bundle Analyzer

Next.js Boilerplate comes with a built-in bundle analyzer. It can be used to analyze the size of your JavaScript bundles. To begin, run the following command:

```shell
pnpm build-stats # or pn build-stats
```

By running the command, it'll automatically open a new browser window with the results.

#### Database Studio

The project is already configured with Drizzle Studio to explore the database. You can run the following command to open the database studio:

```shell
pnpm db:studio # or pn db:studio
```

Then, you can open [https://local.drizzle.studio](https://local.drizzle.studio) with your favorite browser to explore your database.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with `Cmd` + `Shift` + `B` on Mac.

### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.
