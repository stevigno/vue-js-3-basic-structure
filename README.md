# project
 this is the basic structure in vue js 3 (header, navbar,and footer)
 
## Getting Started
### Installing Dependencies
For windows or Mac [NodeJs](https://nodejs.org/en/download/)
### Vite
We’re going to use the official [create-vite](https://vitejs.dev/) scaffolding tool to setup the project structure so make sure you have Node 12+ installed with NPM 6+. They also support Yarn and PNPM as package managers, but we’ll only cover NPM.
 
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
You should see the following output:
```bash
npx: installed 6 in 1.051s
✔ Project name: … vue-bookstore
✔ Select a framework: › vue
✔ Select a variant: › vue

Scaffolding project in /Users/andrei/workspace/vue-bookstore...

Done. Now run:

  cd vue-bookstore
  npm install
  npm run dev 
```

Once we have followed the above instructions, we’ll get the following output from Vite telling us that the app is running:
```bash
 VITE v3.2.4  ready in 221 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```
Let’s visit the http://localhost:5173 url.

