# Foca AI
<img src="./public/banner.png">

## Table of contents

- [Foca AI](#foca-ai)
  - [Table of contents](#table-of-contents)
  - [About this project](#about-this-project)
  - [Running Locally](#running-locally)
  - [Contributing](#contributing)
    - [Contribution Guidelines and Code of Conduct](#contribution-guidelines-and-code-of-conduct)
    - [Development Contributions](#development-contributions)
  - [Tech Stack](#tech-stack)
    - [Language](#language)
    - [Frameworks](#frameworks)
    - [Project structure](#project-structure)
      - [Chrome Manifest](#chrome-manifest)
      - [Extension Entries](#extension-entries)
        - [Content scripts](#content-scripts)


## About this project

This is a solution for your productivity issues while navigating in the web.
We use the built-in chrome-AI to make your day-by-day more productive.
By using our extension, you can create tasks to be done, and use tags
to decide what topics you want to focus. One task at time, you can change
your focus and see our figure telling helping you to stay focused.

## Running Locally

If you want to run this project locally, you will need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en).
Them, you can clone this repository by running the following commands in your terminal:

```zsh
git clone git@github.com:FocaAI/FocaAI-chrome-extension.git

cd FocaAi-chrome-extension
```
>[!TIP]
> #### Running with npm:
> ```zsh
> npm install
> npm run watch
> ```
> #### Running with yarn:
> ```zsh
> yarn install
> yarn watch
> ```
> ### Others commands
> Here is a list of each command that you can run
> - `dev`: run the vite application normally.
> - `build`: Build the application into the `/dist` directory.
> - `watch`: **Hot Module Resolution** to update dist folder on each change.
> - `serve:chrome`: serve files into the `/dist` on chrome extensions.
> - `serve:firefox`: same as the previous command but on the firefox application.

## Contributing

To contribute to this project you can create a issue report, and help us to
find bugs, suggest features and create discussions about this extension. We are always looking for improvements to the project and contributions from open-source developers are greatly appreciated.
### Contribution Guidelines and Code of Conduct
Remember to follow our [Contribution guidelines](#foca-ai)
for information on how to do so. Also, make sure you read our [Code of Conduct](#foca-ai) to foster an encouraging sense of community.

### Development Contributions
Here you can find useful information about development tips and more.

## Tech Stack

Here is a brief overview about the stack that we use to develop this extension.

### Language 

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

>[!TIP]
>You can find information about how those files are used into in the [Developer chrome documentation](https://developer.chrome.com/docs/extensions/get-started?hl=pt-br).

##### Content scripts
 Rendered by **src/entries/contentScript/renderContent.ts** which renders content within a **ShadowRoot** and handles **style injection** for **HMR** and build modes.

Otherwise, the project functions just like a regular Vite project.
>[!CAUTION]
>HMR during development in Manifest V3 requires Chromium version >= 110.0.5480.0.
