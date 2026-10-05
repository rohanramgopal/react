# Rohan's React Learning Project

<div align="center">

### A routed user directory built while learning React

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=111827)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Lint](https://img.shields.io/badge/code_style-ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

</div>

## About the Project

This project is a collection of hands-on React exercises. The active app loads a user directory from JSONPlaceholder and lets you open a detail page for each user. Other exercises in the source include a two-player XO (tic-tac-toe) game, forms, counters, theme toggling, image previews, and routed page examples.

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

### Day 5: Fetching data and image previews

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| `useEffect` | Fetch user profiles from JSONPlaceholder when `UserData` mounts. | Effects let components synchronize with external systems. |
| Async data state | Track loading, error, and successful response states. | Users get useful feedback while a request is in progress or fails. |
| API rendering | Display the fetched users with `.map()` and stable IDs. | External data can drive reusable, data-based UI. |
| `useRef` and file inputs | Open a hidden image input from a custom button. | Refs can access DOM elements without triggering a render. |
| Local image preview | Create a browser object URL for the selected image. | Users can preview a file before any server upload is implemented. |

### Day 6: Shared state with Context and Reducer

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| `useReducer` | Manage the counter with `increment`, `decrement`, and `reset` actions. | A reducer keeps related state transitions together and predictable. |
| `useContext` | Share the counter state and `dispatch` function through the `Pass` context. | Nested components can access shared state without passing props through every level. |
| Component composition | Split the display and counter actions into `Counter`, `Increment`, `Decrement`, and `Reset`. | Each component has a focused role while working with shared state. |
| State flow | Dispatch an action, return the next state from the reducer, and render the updated count. | The UI stays synchronized with a single source of truth. |

### Day 7: Routing and module exports

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| Client-side routing | Wrap the app in `BrowserRouter` and map URL paths to page components with `Routes` and `Route`. | Users can navigate between views without a full page reload. |
| Navigation links | Use `NavLink` for the main navigation and highlight the active route. | Navigation reflects the current page and remains easy to follow. |
| Nested routes | Render service detail pages inside `Services` with child routes and `Outlet`. | Related pages can share a layout while displaying different nested content. |
| Default exports | Match a component's `export default` with a default import, and check the actual module when an export error appears. | Import/export mismatches can prevent the app from loading even when the component code itself is valid. |
| Build location | Run npm scripts from the project directory that contains `package.json`. | Running a build from the wrong directory makes npm look for the wrong project. |

### Day 8: Building an XO game

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| Game state | Track the 3-by-3 board, current player, and winner with `useState`. | Related state determines what the game displays after every move. |
| Click handling | Place the current player's mark in an empty square and ignore occupied squares. | Event handlers make the board respond to player input while enforcing game rules. |
| Turn updates | Alternate between X and O after each valid move. | State transitions keep a two-player game moving predictably. |
| Win detection | Check rows, columns, and diagonals for three matching marks. | A small set of winning patterns can determine the result after each move. |
| Conditional status | Show whose turn it is or announce the winner. | The interface communicates the game's current state without a page reload. |

### Day 9: Fetching users and dynamic routes

| Concept | What I practiced | Why it matters |
| --- | --- | --- |
| Fetching API data | Load the user list from JSONPlaceholder in `UserList`. | A React view can render data provided by an external service. |
| Effect lifecycle | Start the request when the user list mounts with `useEffect`. | Effects let a component synchronize with a network request. |
| Route parameters | Read a user's ID with `useParams` on `/users/:id`. | One detail-page component can display different records based on the URL. |
| Navigation | Link each user to their detail page with React Router. | Users can move between related views without a full page reload. |
| Request states | Show loading feedback and a not-found view when a detail request fails. | The interface stays informative while data is loading or unavailable. |

## Current App: User Directory

The active app is rendered from `src/App.jsx`. The home route (`/`) displays users fetched from JSONPlaceholder, and selecting a user opens `/users/:id` with that user's contact details. The detail view includes loading and not-found states.

The XO game and the other components and pages are standalone learning exercises and are not currently composed into the active app.

## Concepts Demonstrated

```text
User action
	-> event handler
	-> state update
	-> React re-render
	-> conditional view / updated list
```

- **Data fetching:** `UserList` and `UserDetails` load user records from JSONPlaceholder and render loading or error states.
- **Client-side routing:** React Router connects the user list to parameterized user detail pages.
- **Conditional rendering:** The app displays loading, error, and user data views based on request state.
- **Game state:** The standalone `XOGame` exercise tracks the board, current player, and winner with `useState`.
- **Other exercises:** Standalone components cover image previews, forms, counters, themes, and routed pages.
- **Declarative UI:** JSX describes what should appear for the current state.
- **Separation of concerns:** JavaScript handles behavior while CSS handles presentation.

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

The user list and detail pages fetch data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), so those views require an internet connection.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview the production build locally |

## Next Learning Goals

- Revoke image object URLs when the preview changes or the component unmounts.
- Add image type and file-size validation with accessible feedback.
- Add search and filtering to the user list.
- Improve accessibility with semantic landmarks and labels.
- Add tests for API loading, error handling, and image selection.
- Connect image selection or registration to a backend when persistence is needed.
