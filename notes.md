## 3.a
- ES6 modules vs CommonJS modules
- Express library for implementing the server
    - Express automatically sets the content-type
- REST stands for Representational State Transfer
    - singular things are called resources. Every resource has an associated URL, wich is its unique address.
- CRUD

## Lint
to initialize ESlint:
`npx eslint --init`

selected options:
```bash
✔ How would you like to use ESLint? · syntax
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · javascript
✔ Where does your code run? · browser
```

modified:
`{ languageOptions: { globals: {...globals.node} }`
to globals defined in node instead of browser, as code is not gonna be executed on browser

added:
`ecmaVersion: "latest",`
so latest version o ECMAScript is supported