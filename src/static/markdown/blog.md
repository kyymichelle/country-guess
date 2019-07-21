#### Overview

The aim of this project is to make a simple word guessing game utilising this [GraphQL API](https://countries.trevorblades.com/). Along the way, I'd like to familiarise myself with using Typescript and React Hooks. Here's some notes I've taken :)

#### Planning

For the guessing game, the application will first grab a list of countries from the API to populate the Redux store. Then the CountryGuessGame component can be passed random countries via its container. The CountryGuessGame component will initially be a fill-in-the-blanks string matching game, but I can later add more features to it like guesses based on country flag, keeping track of previous guesses or adjustable difficulty levels.

#### Typescript & linting

Decided to test out Typescript with this project. Because ESLint doesn't support it out of the box, but going ahead [ESLint will be supported in favour of TSLint](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration), I installed [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser). For a while the project wasn't picking up my prettier configs - turns out I had named the config file `prettierrc.js` rather than `.prettierrc.js`. Some handy reading material:

- [ESLint + Prettier with Typescript guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
- [Helpful for getting my head around the setup](https://medium.com/@dors718/linting-your-react-typescript-project-with-eslint-and-prettier-2423170c3d42)
- [Helpful component patterns writeup](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)

#### Typescript

Having done some basic setup for the project, it was time to properly learn the ins and outs of Typescript. [This handy guide](https://2ality.com/2018/04/type-notation-typescript.html) was great for basic concepts and syntax and [this is a concise styleguide](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md). [This guide](https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76) goes through step by step using Typescript with React and Redux.

#### Markdown

The first thing to do was to get this blog page up and running. To do this, I followed [these examples](https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component) in using `react-markdown`.

I had issues importing the markdown file via Typescript, as it had been giving the `Cannot find module` error. The fix was to [add a declaration file](https://github.com/webpack-contrib/raw-loader/issues/56#issuecomment-423640398) so that Typescript would pick up the `.md` file extension as a module.

#### React Hooks

Initially I had started writing the CountryGuessGame component with the usual class component method. But after reading about [react hooks](https://reactjs.org/docs/hooks-overview.html) and how you didn't need to use `this` everywhere anymore, I decided to make the switch to writing a functional component. Being early in the project, the rewrite was very simple - going from:

```
export class CountryGuessGame extends React.Component<GameProps, GameState> {
  state: GameState = {
    isCorrect: false,
    guessCount: 0,
  };

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Country name</Form.Label>
          <Form.Control type="text" placeholder="..." required />
        </Form.Group>
        <Button type="submit">Make your guess</Button>
      </Form>
    );
  }
}
```

To the following:

```
export const CountryGuessGame: React.FC<GameProps> = (props: GameProps) => {
  const [countryGuess, setCountryGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [guessCount, setguessCount] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Country name</Form.Label>
        <Form.Control type="text" placeholder="..." required />
      </Form.Group>
      <Button type="submit">Make your guess</Button>
    </Form>
  );
};
```

However that involved removing the GameState interface, so to make things a bit more elegant I refactored the state:

```
// Before
const [countryGuess, setCountryGuess] = useState('');
const [isCorrect, setIsCorrect] = useState(false);
const [guessCount, setguessCount] = useState(0);

// After
const [state, setState] = useState<GameState>({
  countryGuess: '',
  isCorrect: false,
  guessCount: 0,
});
```

After a bit of tweaking, my `CountryGuessGame` component now has a form (this may later be moved into its own component) that validates a submitted string against a solution string and then displaying a `CountryGuessAlert` component with feedback.

#### Testing components

Before moving on to starting to write the Redux store, I wanted to do some tests for the new component. Following this [useful example](https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga), I found that the `useState` import had to be removed from Game.tsx and to use `React.useState` instead so that I could mock the entire `React` module. However as `setState` was only being mocked, I ran into a problem trying to test the update of the component state, so will move on for now

#### Redux store

Although this is a simple application where the data could be handled by the React [Context API](https://reactjs.org/docs/context.html), for the purpose of refreshing my memory a Redux store will be used. [This guide](https://redux.js.org/recipes/usage-with-typescript) was super helpful in getting started.

After doing some reading, I thought it'd be good to try out these handy [react-redux hooks](https://react-redux.js.org/next/api/hooks) as they could replace the use of the `connect()` function with class components. To do this, I refactored the container components to be functional components, and the code looks noticeably neater already!

#### Game state

Initially, the redux store started with just the countries reducer - which populated the list of countries from the API. From there the React components could use a selector to grab a random value from this list to use in the game. However the value would change because there was no game state to keep track of it. So to create this state I could either: just set it up inside a component and pass it down, or create a reducer in the store.

#### TODOs

- Fix tests
- In /containers/Blog.tsx fix fetch() with something that works cross browser because it's not supported by IE - maybe a polyfill?
- Tidy up the types in the redux store - e.g. fix `any` with appropriate types
- Improve solution checking - e.g. accomodate the use of special characters
- Fill in guess character by character
