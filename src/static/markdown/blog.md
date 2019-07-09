## HELLO BLOG

#### Typescript & linting

Decided to test out Typescript with this project. Because ESLint doesn't support it out of the box, but going ahead [ESLint will be supported in favour of TSLint](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration), I installed [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

[link to guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

[helpful for getting my head around the setup](https://medium.com/@dors718/linting-your-react-typescript-project-with-eslint-and-prettier-2423170c3d42)

For a while the project wasn't picking up my prettier configs - turns out I had named the config file `prettierrc.js` rather than `.prettierrc.js`.

Don't really need to use Typescript inside modules, so better to just use it inside [containers and store](https://github.com/nozzle/react-static/issues/205)

[Helpful component patterns writeup](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)

#### Typescript

Having done some basic setup for the project, it was time to properly learn the ins and outs of Typescript. [This handy guide](https://2ality.com/2018/04/type-notation-typescript.html) was great for basic concepts and syntax. [This guide](https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76) goes through step by step using Typescript with React and Redux.
