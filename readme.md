# <img src="./.github/assets/prettier.svg" width="40" align="left" alt="">  `@nberlette/prettier`

An opinionated Prettier configuration to scaffold my projects.

## Getting Started

### Install to `devDependencies`

<details open><summary><strong>PNPM</strong> <small>(recommended)</small></summary>

```sh
pnpm i -D @nberlette/prettier
```

</details>
<details><summary><strong>Yarn</strong> <small>(accepted)</small></summary>

```sh
yarn add -D @nberlette/prettier
```

</details>
<details><summary><strong>NPM</strong> <small>(avoided)</small></summary>

```sh
npm i -D @nberlette/prettier
```

</details><br>

### Add to `package.json`

```diff
diff --git a/package.json b/package.json

   "main": "index.js",
   "types": "index.d.ts",
+  "prettier": "@nberlette/prettier",
   "devDependencies": {
```

### Alternatively, use `.prettierrc`
 
From the [**Prettier Docs**](https://prettier.io/docs/en/configuration.html):

If you don’t want to use `package.json`, you can use any of the supported extensions to export a **`string`**, e.g. `.prettierrc.json`:

```json .prettierrc.json
"@nberlette/prettier"
```

> **Note**: This method does not offer a way to extend the configuration to override certain properties from the shared config. To do that, import the file in a `.prettierrc.js` file and export the modifications, e.g:

```js .prettierrc.js
module.exports = {
  ...require("@nberlette/prettier"),
  semi: false,
};
```

### [See the Prettier Docs for more info on shared config ›](https://prettier.io/docs/en/configuration.html#sharing-configurations)

---  

[MIT](./license.md) © [Nicholas Berlette](https://github.com/nberlette) · inspired by [@github/prettier-config](https://github.com/github/prettier-config)
