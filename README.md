# Rohan's React Learning Dashboard

<div align="center">

### A small React project for learning by building

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=111827)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Lint](https://img.shields.io/badge/code_style-ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

</div>

## About the Project

This project combines a personal introduction with a simple user dashboard. It is a practical space to learn React fundamentals, experiment with component structure, and see how state changes the interface.

## Learning Log

### Day 1: React foundations

| Concept | What I learned | Where it appears |
| --- | --- | --- |
| Components | Split the UI into reusable pieces instead of keeping everything in one file. | `App`, `Home`, `Login`, `SelfIntroduction`, `UserCard` |
| JSX | Describe UI with JavaScript expressions and HTML-like syntax. | Dashboard headings, profile sections, and cards |
| Props | Pass data and behavior between parent and child components. | Login and home views rendered by `App` |
| Project structure | Organize source files, styles, assets, and entry points in a Vite app. | `src/`, `public/`, `main.jsx` |

### Day 2: Interactive UI and data rendering

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| `useState` | Track whether the user is logged in. | React can respond to user interaction without a full page refresh. |
| Event handling | Toggle the login state from a button click. | User actions can update application data. |
| Conditional rendering | Show `Home` or `Login` based on the current state. | The UI reflects the current application state. |
| Array rendering | Create user cards from a `users` array with `.map()`. | Repeated UI stays data-driven and easy to extend. |
| `key` props | Give each rendered user card a stable `user.id`. | React can efficiently track list items. |
| Component styling | Connect class names to focused CSS styles. | Structure and visual design stay readable and maintainable. |

### Day 3: State management and themes

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| Local state | Use `useState` to store the counter value and theme mode. | Components can own data that changes during interaction. |
| State updates | Increment, decrement, and reset a counter from button events. | Small state transitions can be composed into a useful workflow. |
| Shared state | Keep `dark` in `App` and pass it to `ThemeToggle` and `Counter`. | Multiple components can stay synchronized through a common parent. |
| Inline styles | Change background and text colors from the current theme state. | The interface can respond immediately to user preferences. |
| Component reuse | Extract the counter and theme switcher into `src/components/`. | Focused components are easier to understand and extend. |

### Day 4: Forms and validation

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| Controlled inputs | Keep each registration field connected to React state. | React stays in sync with what the user types. |
| Form events | Handle changes, submission, and reset actions in `RegistrationForm`. | Forms can respond predictably without a page reload. |
| Validation | Check that required fields are complete before submitting. | Users receive immediate feedback about incomplete data. |
| Conditional rendering | Show an error message or submitted details only when needed. | The interface reflects the current form state. |
| Form component structure | Keep registration behavior in `src/components/RegistrationForm.jsx`. | A focused component is easier to test and reuse. |

## Concepts Demonstrated

```text
User action
	-> event handler
	-> state update
	-> React re-render
	-> conditional view / updated list
```

- **State:** `isLoggedIn` controls the authentication view.
- **Data:** the `users` array is the single source for dashboard cards.
- **Composition:** `App` coordinates smaller UI components.
- **Declarative UI:** JSX describes what should appear for the current state.
- **Separation of concerns:** JavaScript handles behavior while CSS handles presentation.
- **Controlled forms:** `RegistrationForm` stores field values, validates submissions, and resets the form with React state.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| React 19 | Build the interactive interface |
| Vite | Fast development server and production bundling |
| JavaScript | Application logic and data handling |
| CSS | Layout, colors, cards, and responsive styling |
| ESLint | Catch common JavaScript and React issues |

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview the production build locally |

## Next Learning Goals

- Add stronger validation for email, phone, age, and password values.
- Connect the form to a backend or persistence layer.
- Move the user data into a dedicated data module or API.
- Add search and filtering to the dashboard.
- Improve accessibility with semantic landmarks and labels.
- Add tests for form validation and submitted-data rendering.
