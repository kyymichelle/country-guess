#### Overview

The aim of this project is to make a simple word guessing game utilising this [GraphQL API](https://countries.trevorblades.com/). Along the way, I'd like to familiarise myself with using Typescript with React and Redux. Here's some notes I've taken :)

#### Typescript & linting

Decided to test out Typescript with this project. Because ESLint doesn't support it out of the box, but going ahead [ESLint will be supported in favour of TSLint](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration), I installed [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

[link to guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

[helpful for getting my head around the setup](https://medium.com/@dors718/linting-your-react-typescript-project-with-eslint-and-prettier-2423170c3d42)

For a while the project wasn't picking up my prettier configs - turns out I had named the config file `prettierrc.js` rather than `.prettierrc.js`.

[Helpful component patterns writeup](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)

#### Typescript

Having done some basic setup for the project, it was time to properly learn the ins and outs of Typescript. [This handy guide](https://2ality.com/2018/04/type-notation-typescript.html) was great for basic concepts and syntax. [This guide](https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76) goes through step by step using Typescript with React and Redux.

#### Markdown

The first thing to do was to get this blog page up and running. To do this, I followed [these examples](https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component) in using `react-markdown`.

I had issues importing the markdown file via Typescript, as it had been giving the `Cannot find module` error. The fix was to [add a declaration file](https://github.com/webpack-contrib/raw-loader/issues/56#issuecomment-423640398) so that Typescript would pick up the `.md` file extension as a module.
