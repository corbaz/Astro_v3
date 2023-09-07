# Astro Starter Kit: Basics

julio.corbaz@gmail.com

```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



# Astro con Tailwind

### Instalación
```cmd
node --version
18.17.1

npm -version
8.11.0

pnpm -v
8.6.7

nvm version
1.1.11

pnpm create astro@latest
npx astro add tailwind
npm install -g json-server
```

### package.json
```cmd
{
  "name": "astrov3",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "json-server": "json-server --watch ./src/data/db.json",
    "dev": "astro dev --host",
    "start": "astro dev --host",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "deploy-gh-pages": "astro build && gh-pages -d dist",
    "deploy-surge": "astro build && surge dist astro-v3.surge.sh"
  },
  "dependencies": {
    "@astrojs/react": "^3.0.1",
    "@astrojs/tailwind": "^5.0.0",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "astro": "^3.0.10",
    "json-server": "^0.17.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sonner": "^0.7.0",
    "tailwindcss": "^3.3.3",
    "tailwindcss-animated": "^1.0.1"
  }
}

```

### npm run astro
```cmd 
npm run astro

> astro03@0.0.1 astro
> astro


  astro  v3.0.7 Build faster websites.

  astro [command] [...flags]

   Commands

                add  Add an integration.
              build  Build your project and write it to disk.
              check  Check your project for errors.
                dev  Start the development server.
               docs  Open documentation in your web browser.
               info  List info about your current Astro setup.
            preview  Preview your build locally.
               sync  Generate content collection types.
          telemetry  Configure telemetry settings.

   Global Flags

    --config <path>  Specify your config file.
      --root <path>  Specify your project root folder.
       --site <url>  Specify your project site.
  --base <pathname>  Specify your project base.
          --verbose  Enable verbose logging.
           --silent  Disable all logging.
          --version  Show the version number and exit.
             --help  Show this help message.
```

### npm run astro info
```cmd
Astro                 v3.0.7
Node                  v18.17.1
System                Windows (x64)
Package Manager       npm
Output                static
Adapter               none
Integrations          @astrojs/tailwind
                      @astrojs/react"



npx astro add --help

  astro add [...integrations] [...adapters]

   Flags
      --yes   Accept all prompts.
      --help  Show this help message.

   UI Frameworks
       react  astro add react
      preact  astro add preact
         vue  astro add vue
      svelte  astro add svelte
    solid-js  astro add solid-js
         lit  astro add lit
    alpinejs  astro add alpinejs

   SSR Adapters
     netlify  astro add netlify
      vercel  astro add vercel
        deno  astro add deno
  cloudflare  astro add cloudflare
        node  astro add node

   Others
    tailwind  astro add tailwind
       image  astro add image
         mdx  astro add mdx
   partytown  astro add partytown
     sitemap  astro add sitemap
    prefetch  astro add prefetch

For more integrations, check out: https://astro.build/integrations

```
