# Foca AI

<img src="./public/banner.png">

![GitHub license](https://img.shields.io/github/license/FocaAI/FocaAI-chrome-extension)
![GitHub issues](https://img.shields.io/github/issues/FocaAI/FocaAI-chrome-extension)
![GitHub pull requests](https://img.shields.io/github/issues-pr/FocaAI/FocaAI-chrome-extension)
![GitHub contributors](https://img.shields.io/github/contributors/FocaAI/FocaAI-chrome-extension)
![GitHub forks](https://img.shields.io/github/forks/FocaAI/FocaAI-chrome-extension)
![GitHub stars](https://img.shields.io/github/stars/FocaAI/FocaAI-chrome-extension)

<!-- Badge section for technologies -->

![GitHub top language](https://img.shields.io/github/languages/top/FocaAI/FocaAI-chrome-extension)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/-Shadcn/ui-000000?logo=shadcnui&logoColor=white)

Foca AI is a Chrome extension that helps you focus on your tasks while browsing the web. With this extension, you can create tasks, assign tags to categorize them, and focus on specific topics. Manage one task at a time and stay on track with our visual aid that encourages you to maintain focus.
## Table of contents

- [Foca AI](#foca-ai)
  - [Table of contents](#table-of-contents)
  - [Running Locally](#running-locally)
    - [Setting up environment variables](#setting-up-environment-variables)
      - [Environment purposes](#environment-purposes)
    - [Using environment variables in the manifest file](#using-environment-variables-in-the-manifest-file)
    - [Building and running the project](#building-and-running-the-project)
    - [Registering the extension](#registering-the-extension)
  - [Contributing](#contributing)
    - [Contribution Guidelines and Code of Conduct](#contribution-guidelines-and-code-of-conduct)
  - [Tech Stack](#tech-stack)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Project structure](#project-structure)
      - [Chrome Manifest](#chrome-manifest)
      - [Extension Entries](#extension-entries)
        - [Content scripts](#content-scripts)
    - [Available commands](#available-commands)
  - [License](#license)

## Running Locally

If you want to run this project locally, you will need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en).

Then, you can clone this repository by running the following commands in your terminal:

```zsh
git clone git@github.com:FocaAI/FocaAI-chrome-extension.git

cd FocaAi-chrome-extension
```

### Setting up environment variables

This project uses vite to handle the environment variables.

To setup the project you should create `.env` file in the root directory following the `.env.example` format.

#### Environment purposes

Here you can see the purpose of each environment variable.

- `VITE_SUMMARIZATION_API`: Provides the token to summarization access into the manifest `trial_tokens` following [this guide from chrome documentation](https://googlechrome.github.io/OriginTrials/developer-guide.html)
- `VITE_CHROME_EXTENSION_ID`: Your chrome extension ID, used to register the token for the [summarization API](https://chromestatus.com/feature/5193953788559360).
- `VITE_GENERATOR_API`: Provides the token to prompt api access into the manifest `trial_tokens` following [this guide from chrome documentation](https://googlechrome.github.io/OriginTrials/developer-guide.html)
> [!NOTE]
> If any of them is missing, please create an issue following the [contribution guidelines](./.github.CONTRIBUTION.md).

### Using environment variables in the manifest file

To do that in the manifest builder, we had to configure the vite config in a different way.

The `vite.config.ts` file loads the environment variables in the config definition. Parsing them to the `getManifest` handler.
> [!IMPORTANT]
> To effectively use a new environment variable in the getManifest, you should provide it in the `vite.config.ts`.
>
> ```ts
> //...imports and configurations
> defineConfig(({ mode }) => {
>   const env = loadEnv(mode, process.cwd());
>   return {
>     plugin: [React(), webExtension({ manifest: getManifest(env) })],
>     // others configurations
>     define: {
>       'process.env': {
>         VITE_YOUR_ENV_FOR_MANIFEST: JSON.stringify(
>           env.VITE_YOUR_ENV_FOR_MANIFEST
>         ),
>       },
>     },
>   };
> });
> ```

### Building and running the project
Before registering the extension in you favorite browser, you should build the project.
> [!TIP]
>
> #### Running with npm:
>
> ```zsh
> npm install
> npm run watch
> ```
>
> #### Running with yarn:
>
> ```zsh
> yarn install
> yarn watch
> ```
>

>[!NOTE]
> You can see all the available commands in the [Available commands](#available-commands) section.

### Registering the extension

After building the project, you can register the extension in your browser.

To do that, you should follow the steps below:

1. Open the Extension Management page by navigating to `chrome://extensions`.
   - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over `More Tools` then select `Extensions`.
2. Enable Developer Mode by clicking the toggle switch next to Developer Mode.
3. Click the `Load unpacked` button and select the extension directory.
4. The extension will be loaded into your browser.
5. You can see the extension in the toolbar.
>[!TIP]
> You can see more information about how to load an unpacked extension in the [Chrome Getting started tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world).

## Contributing

To contribute to this project you can create an issue report, and help us to
find bugs, suggest features, and create discussions about this extension. We are always looking for improvements to the project and contributions from open-source developers are greatly appreciated.

### Contribution Guidelines and Code of Conduct

Remember to follow our [Contribution guidelines](./.github/CONTRIBUTING.md)
for information on how to do so. Also, make sure you read our [Code of Conduct](./.github/CODE_OF_CONDUCT.md) to foster an encouraging sense of community.

## Tech Stack

Here is a brief overview about the stack that we use to develop this extension.

### Languages

We use [**TypeScript**](https://www.typescriptlang.org/docs/) to build our web application, enabling autocomplete and type-checking to enhance the development experience.

### Frameworks

**To build our application**, we use [**vite**](https://vite.dev/guide/) to build our extension, enabling **hmr** into our development cycle thanks to [**@samrum/vite-plugin-web-extension**](https://github.com/samrum/vite-plugin-web-extension) plugin.

**To create simple and intuitive UI**, we use [**TailwindCSS**](https://tailwindcss.com/docs/installation), and [**Shadcn/ui**](https://ui.shadcn.com/docs) to speed up our development.

### Project structure

Here you can see more important information about the project structure.

#### Chrome Manifest

The extension manifest is defined in src/manifest.js and used by @samrum/vite-plugin-web-extension in the vite config.

#### Extension Entries

Background, content scripts, options, and popup entry points exist in the **src/entries** directory.

> [!TIP]
> You can find information about how those files are used in the [Developer chrome documentation](https://developer.chrome.com/docs/extensions/get-started?hl=pt-br).

##### Content scripts

Rendered by **src/entries/contentScript/renderContent.ts** which renders content within a **ShadowRoot** and handles **style injection** for **HMR** and build modes.

Otherwise, the project functions just like a regular Vite project.

> [!CAUTION]
> HMR during development in Manifest V3 requires Chromium version >= 110.0.5480.0.

 ### Available commands

 Here is a list of each command that you can run

 - `dev`: run the vite application normally.
 - `build`: Build the application into the `/dist` directory.
 - `watch`: **Hot Module Resolution** to update the dist folder on each change.
 - `serve:chrome`: serve files into the `/dist` on Chrome extensions.
 - `serve:firefox`: same as the previous command but on the Firefox application.

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
