# project
 this is the basic structure in vue js 3 (header, navbar,and footer)
 
## Getting Started
### Installing Dependencies
For windows or Mac [NodeJs](https://nodejs.org/en/download/)
### Vite
We’re going to use the official create-vite[https://vitejs.dev/] scaffolding tool to setup the project structure so make sure you have Node 12+ installed with NPM 6+. They also support Yarn and PNPM as package managers, but we’ll only cover NPM.
 
 Install Vite and initialise the project with:
```bash
$ npm init vite@latest
```
Then you’ll be prompted to enter the project name and select the library which you want to use. From the list, choose vue:
```bash
~/workspace % npm init vite@latest
npx: installed 6 in 1.051s
✔ Project name: … vue-bookstore
? Select a framework: › - Use arrow-keys. Return to submit.
    vanilla
❯   vue
    react
    preact
    lit
    svelte 
```

Then select vue as the variant, since we’ll not be using TypeScript:
```bash
? Select a variant: › - Use arrow-keys. Return to submit.
❯ JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```
