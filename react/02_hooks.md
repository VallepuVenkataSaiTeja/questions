# Hooks in React

In React, **Hooks** are special functions that let you use React features inside functional components.

Before hooks:

* state and lifecycle were only in class components

After hooks:

* functional components became powerful and standard

---

# 1. What are Hooks?

> Hooks are functions that “hook into” React features like state, lifecycle, and context.

They always start with the word:

```text id="hook1"
use...
```

Examples:

* useState
* useEffect
* useRef
* useMemo
* useCallback

---

# 2. Why Hooks exist

Before hooks:

```text id="hook2"
Class components needed for state + lifecycle
```

Problems:

* complex syntax
* `this` confusion
* hard to reuse logic

Hooks solved this by:
✔ making functional components powerful
✔ simplifying code
✔ improving reuse of logic

---

# 3. Most important Hooks (you MUST know)

---

## 1. useState (state management)

Used to store data that changes.

```jsx id="hook3"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}
```

---

## 2. useEffect (side effects)

Used for:

* API calls
* timers
* subscriptions

```jsx id="hook4"
import { useEffect } from "react"

useEffect(() => {
  console.log("Component mounted")
}, [])
```

---

## 3. useRef (DOM reference / persistent value)

```jsx id="hook5"
import { useRef } from "react"

function App() {
  const inputRef = useRef()

  function focusInput() {
    inputRef.current.focus()
  }

  return <input ref={inputRef} />
}
```

---

## 4. useMemo (performance optimization)

Prevents recalculation of expensive values.

```jsx id="hook6"
const result = useMemo(() => expensiveFunction(), [])
```

---

## 5. useCallback (function optimization)

Prevents function re-creation on re-render.

```jsx id="hook7"
const handleClick = useCallback(() => {
  console.log("clicked")
}, [])
```

---

# 4. Hook Rules (VERY IMPORTANT)

## Rule 1: Only call hooks at top level

❌ Wrong:

```jsx id="hook8"
if (true) {
  useState()
}
```

---

## Rule 2: Only call hooks in React functions

✔ Correct:

* functional components
* custom hooks

---

## Rule 3: Hooks must not be inside loops or conditions

---

# 5. How Hooks work conceptually

```text id="hook9"
Component renders
     ↓
Hooks run in order
     ↓
React remembers hook values
     ↓
State/logic preserved between renders
```

---

# 6. Why hooks are powerful

✔ Reusable logic
✔ Cleaner code
✔ No class components needed
✔ Better separation of concerns

---

# 7. Custom Hooks (VERY IMPORTANT concept)

You can create your own hooks.

---

## Example:

```jsx id="hook10"
function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  return { count, increment }
}
```

---

## Usage:

```jsx id="hook11"
function App() {
  const { count, increment } = useCounter()

  return <button onClick={increment}>{count}</button>
}
```

---

# 8. Real-world usage of hooks

| Hook         | Use case       |
| ------------ | -------------- |
| useState     | UI state       |
| useEffect    | API calls      |
| useRef       | DOM access     |
| useMemo      | performance    |
| useCallback  | optimization   |
| custom hooks | reusable logic |

---

# 9. Mental model

```text id="hook12"
Hooks = tools that give functional components powers
```

---

# 10. Common mistakes

---

## Mistake 1: Using hooks inside conditions

Breaks React rules.

---

## Mistake 2: Forgetting dependency array

Causes infinite re-renders.

---

## Mistake 3: Overusing useMemo/useCallback

Not needed for small apps.

---

# 11. Interview key idea

Be ready to answer:

* What are hooks?
* Why were hooks introduced?
* Rules of hooks
* Difference between useState and useRef
* What is useEffect used for?

---

# 12. One-line summary

> Hooks in React are special functions that let functional components use state, lifecycle, and other React features in a simple and reusable way.

----------------------------------------------------------------------------------------

# useState in React

In React, `useState` is a Hook used to store and update data inside a functional component.

It is the **most important React Hook** and usually the first hook developers learn.

---

# 1. Why useState exists

React components need to handle changing data.

Examples:

* Counter value
* Form input
* Toggle button
* Dark mode
* Todo items

Normal JavaScript variables cannot update the UI automatically.

React needs:

```text id="us1"
State management
```

That’s what `useState` provides.

---

# 2. What is useState?

> `useState` lets functional components store and manage state.

---

# 3. Basic Syntax

```jsx id="us2"
const [state, setState] = useState(initialValue)
```

---

# 4. Understanding the syntax

Example:

```jsx id="us3"
const [count, setCount] = useState(0)
```

---

## Breakdown

### `count`

Current state value

---

### `setCount`

Function used to update state

---

### `0`

Initial value

---

# 5. First Example (Counter)

```jsx id="us4"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

---

# 6. What happens internally

```text id="us5"
Button clicked
      ↓
setCount called
      ↓
State updated
      ↓
Component re-renders
      ↓
UI updates automatically
```

---

# 7. Important React idea

```text id="us6"
Changing state → triggers re-render
```

This is one of React’s core concepts.

---

# 8. Initial Value

State can start with any value.

---

## Number

```jsx id="us7"
useState(0)
```

---

## String

```jsx id="us8"
useState("")
```

---

## Boolean

```jsx id="us9"
useState(false)
```

---

## Array

```jsx id="us10"
useState([])
```

---

## Object

```jsx id="us11"
useState({})
```

---

# 9. Updating state

---

## Correct way

```jsx id="us12"
setCount(count + 1)
```

---

## Wrong way

❌

```jsx id="us13"
count = count + 1
```

Why wrong?
Because React does NOT detect direct variable changes.

---

# 10. State updates are asynchronous

This confuses many beginners.

---

## Example

```jsx id="us14"
setCount(count + 1)

console.log(count)
```

The old value may print first.

Because:

```text id="us15"
React schedules updates
```

---

# 11. Functional Updates (VERY IMPORTANT)

Best practice when new state depends on old state.

---

## Example

```jsx id="us16"
setCount((prev) => prev + 1)
```

---

## Why important?

Avoids stale state issues.

Especially useful with:

* multiple updates
* async operations

---

# 12. Multiple state variables

You can have many states.

---

## Example

```jsx id="us17"
const [name, setName] = useState("John")
const [age, setAge] = useState(25)
```

---

# 13. useState with Objects

---

## Example

```jsx id="us18"
const [user, setUser] = useState({
  name: "John",
  age: 25
})
```

---

## Updating object state

❌ Wrong:

```jsx id="us19"
user.name = "Mike"
```

---

✅ Correct:

```jsx id="us20"
setUser({
  ...user,
  name: "Mike"
})
```

---

# Why spread operator?

Because React state should be treated as immutable.

---

# 14. useState with Arrays

---

## Example

```jsx id="us21"
const [todos, setTodos] = useState([])
```

---

## Add item

```jsx id="us22"
setTodos([...todos, "New Task"])
```

---

## Remove item

```jsx id="us23"
setTodos(
  todos.filter((todo) => todo !== "Old Task")
)
```

---

# 15. useState with Forms

Very common use case.

---

## Example

```jsx id="us24"
const [text, setText] = useState("")

<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

---

# 16. Re-rendering behavior

Whenever state changes:

```text id="us25"
State updates
      ↓
Component function runs again
      ↓
UI recalculates
      ↓
React updates DOM
```

---

# 17. Real-world examples

---

## Toggle button

```jsx id="us26"
const [isOpen, setIsOpen] = useState(false)
```

---

## Dark mode

```jsx id="us27"
const [darkMode, setDarkMode] = useState(false)
```

---

## API data

```jsx id="us28"
const [users, setUsers] = useState([])
```

---

# 18. Common mistakes

---

## Mistake 1: Direct mutation

❌

```jsx id="us29"
count++
```

---

## Mistake 2: Expecting immediate update

React batches updates.

---

## Mistake 3: Mutating arrays/objects

❌

```jsx id="us30"
todos.push("Task")
```

---

# 19. Mental model

```text id="us31"
State = component memory
```

React remembers values between renders.

---

# 20. useState vs normal variable

| Normal Variable       | useState             |
| --------------------- | -------------------- |
| Resets on render      | Preserved            |
| No UI update          | UI updates           |
| React ignores changes | React tracks changes |

---

# 21. Interview questions around useState

You should know:

* What triggers re-render?
* Why state should not mutate?
* Why functional updates are useful?
* Difference between variable and state?
* Why state updates are async?

---

# 22. One-line summary

> `useState` is a React Hook that allows functional components to store changing data and automatically re-render the UI when that data updates.

----------------------------------------------------------------------------------------

# useEffect in React

In React, `useEffect` is a Hook used to handle:

* side effects
* API calls
* timers
* subscriptions
* DOM updates
* cleanup logic

It is one of the **most important React Hooks** and a favorite interview topic.

---

# 1. Why useEffect exists

React components should mainly:

```text id="ue1"
Render UI
```

But real apps also need side operations like:

* fetching data
* setting timers
* listening to events

These are called:

```text id="ue2"
Side Effects
```

---

# 2. What is a Side Effect?

A side effect is:

> Anything that affects something outside the component rendering process.

Examples:

* API requests
* setTimeout
* localStorage
* event listeners

---

# 3. What is useEffect?

> `useEffect` lets you perform side effects in functional components.

---

# 4. Basic Syntax

```jsx id="ue3"
useEffect(() => {
  // side effect code
})
```

---

# 5. First Example

```jsx id="ue4"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    console.log("Component rendered")
  })

  return <h1>Hello</h1>
}
```

---

# What happens?

```text id="ue5"
Component renders
      ↓
useEffect runs
```

---

# 6. Important behavior

Without dependency array:

```jsx id="ue6"
useEffect(() => {
  console.log("Runs every render")
})
```

👉 Runs after EVERY render.

---

# 7. Dependency Array (VERY IMPORTANT)

Syntax:

```jsx id="ue7"
useEffect(() => {
  // code
}, [])
```

The second argument controls:

```text id="ue8"
WHEN effect should run
```

---

# 8. Three main dependency patterns

---

# CASE 1 — No dependency array

```jsx id="ue9"
useEffect(() => {
  console.log("Runs every render")
})
```

---

## Runs:

✔ initial render
✔ every re-render

---

# CASE 2 — Empty dependency array

```jsx id="ue10"
useEffect(() => {
  console.log("Runs once")
}, [])
```

---

## Runs:

✔ only once after first render

Equivalent to:

```text id="ue11"
componentDidMount
```

---

# CASE 3 — Specific dependency

```jsx id="ue12"
useEffect(() => {
  console.log("Count changed")
}, [count])
```

---

## Runs:

✔ first render
✔ whenever `count` changes

---

# 9. API Calls with useEffect (MOST COMMON USE)

```jsx id="ue13"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )

      const data = await res.json()

      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

---

# Why [] here?

Because:

```text id="ue14"
We want API call only once on mount
```

---

# 10. Cleanup Function (VERY IMPORTANT)

Some effects need cleanup.

Example:

* timers
* subscriptions
* event listeners

---

## Example

```jsx id="ue15"
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...")
  }, 1000)

  return () => {
    clearInterval(interval)
  }
}, [])
```

---

# How cleanup works

```text id="ue16"
Component unmounts
      ↓
Cleanup function runs
```

---

# 11. useEffect Lifecycle Mapping

| Lifecycle            | useEffect               |
| -------------------- | ----------------------- |
| componentDidMount    | `useEffect(..., [])`    |
| componentDidUpdate   | `useEffect(..., [dep])` |
| componentWillUnmount | cleanup function        |

---

# 12. Infinite Loop Problem (VERY IMPORTANT)

---

## Bad example

```jsx id="ue17"
useEffect(() => {
  setCount(count + 1)
}, [count])
```

---

# What happens?

```text id="ue18"
count changes
    ↓
effect runs
    ↓
setCount updates count
    ↓
effect runs again
    ↓
infinite loop
```

---

# 13. Dependency Array Rules

Every external value used inside effect should usually be included.

Example:

```jsx id="ue19"
useEffect(() => {
  console.log(count)
}, [count])
```

---

# 14. Real-world uses of useEffect

---

## API calls

```text id="ue20"
fetch data
```

---

## Timers

```text id="ue21"
setInterval
```

---

## Event listeners

```text id="ue22"
window resize
```

---

## Local storage

```text id="ue23"
save theme settings
```

---

# 15. Mental model (VERY IMPORTANT)

Think of `useEffect` like this:

```text id="ue24"
After React updates UI
       ↓
Run side-effect code
```

---

# 16. Render vs Effect

```text id="ue25"
Render = calculate UI
Effect = perform side operations
```

---

# 17. Common mistakes

---

## Mistake 1: Missing dependency array

Can cause unnecessary re-renders.

---

## Mistake 2: Infinite loops

Updating dependent state inside effect.

---

## Mistake 3: Forgetting cleanup

Causes memory leaks.

---

# 18. useEffect execution order

```text id="ue26"
Render UI
    ↓
DOM updates
    ↓
useEffect runs
```

---

# 19. Interview Questions (VERY IMPORTANT)

You should know:

* What is useEffect?
* Why useEffect exists?
* Difference between:

  * no dependency
  * []
  * [count]
* What is cleanup function?
* Why infinite loops happen?
* Why API calls use useEffect?

---

# 20. One-line summary

> `useEffect` is a React Hook used to perform side effects like API calls, timers, and subscriptions after rendering, with dependency arrays controlling when the effect runs.

----------------------------------------------------------------------------------------

# useRef in React

In React, `useRef` is a Hook used to:

> 1. Access DOM elements directly
> 2. Store values that persist between renders (without causing re-render)

It is different from `useState` in a very important way.

---

# 1. Why useRef exists

React normally:

```text id="ur1"
state change → re-render → UI update
```

But sometimes you need:

* access an input field directly
* store a value without re-rendering
* keep a mutable variable

That’s where `useRef` is used.

---

# 2. Basic Syntax

```jsx id="ur2"
const ref = useRef(initialValue)
```

---

# 3. Two main uses of useRef

## 1. DOM access (MOST COMMON)

## 2. Persist value without re-render

---

# 4. DOM Access Example (VERY IMPORTANT)

```jsx id="ur3"
import { useRef } from "react"

function App() {
  const inputRef = useRef()

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus Input
      </button>
    </div>
  )
}
```

---

# What is happening?

```text id="ur4"
ref → points to DOM element
     ↓
inputRef.current → actual input element
     ↓
focus() → DOM method runs
```

---

# 5. Key idea

```text id="ur5"
useRef gives direct access to DOM nodes
```

---

# 6. useRef vs useState (VERY IMPORTANT)

| Feature          | useRef | useState |
| ---------------- | ------ | -------- |
| Causes re-render | ❌ No   | ✔ Yes    |
| Stores value     | ✔ Yes  | ✔ Yes    |
| DOM access       | ✔ Yes  | ❌ No     |
| UI update        | ❌ No   | ✔ Yes    |

---

# 7. useRef for storing values

Example: counter without re-render

```jsx id="ur6"
import { useRef, useState } from "react"

function App() {
  const countRef = useRef(0)
  const [render, setRender] = useState(0)

  function increase() {
    countRef.current += 1
    console.log(countRef.current)
  }

  return (
    <div>
      <h1>Ref value: {countRef.current}</h1>

      <button onClick={increase}>
        Increase Ref
      </button>

      <button onClick={() => setRender(render + 1)}>
        Re-render UI
      </button>
    </div>
  )
}
```

---

# What happens?

```text id="ur7"
useRef updates → NO re-render
useState updates → re-render happens
```

---

# 8. Why useRef is powerful

It allows:

* storing data silently
* avoiding unnecessary re-renders
* interacting with DOM

---

# 9. Common real-world use cases

## 1. Input focus

```text id="ur8"
focus input on button click
```

---

## 2. Storing previous value

```jsx id="ur9"
const prevValue = useRef()
```

---

## 3. Timer IDs

```jsx id="ur10"
const timerRef = useRef()
```

Used with:

* setInterval
* setTimeout

---

## 4. Tracking renders

```jsx id="ur11"
const renderCount = useRef(0)
```

---

# 10. useRef lifecycle behavior

```text id="ur12"
Component renders
     ↓
useRef keeps same object
     ↓
value persists across renders
```

---

# 11. Important rule

```text id="ur13"
Changing ref DOES NOT trigger re-render
```

---

# 12. Example: Timer with cleanup

```jsx id="ur14"
import { useRef, useEffect } from "react"

function Timer() {
  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log("Running...")
    }, 1000)

    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return <h1>Timer running</h1>
}
```

---

# 13. useRef vs variables

## Normal variable:

```text id="ur15"
resets every render
```

## useRef:

```text id="ur16"
persists across renders
```

---

# 14. Mental model

Think of `useRef` as:

```text id="ur17"
A box that survives re-renders without triggering UI updates
```

---

# 15. Common mistakes

---

## Mistake 1: Expecting UI update

❌

```jsx id="ur18"
ref.current = 10
```

No UI change happens.

---

## Mistake 2: Using ref instead of state

Use:

* state → for UI changes
* ref → for hidden values

---

# 16. When to use useRef

Use it when:

* you need DOM access
* you don’t want re-render
* you need persistent variable

---

# 17. Interview questions (VERY IMPORTANT)

Be ready for:

* What is useRef?
* Difference between useRef and useState?
* Does useRef cause re-render?
* Use cases of useRef?
* How do you access DOM in React?

---

# 18. One-line summary

> `useRef` is a React Hook used to access DOM elements and store persistent values without causing re-renders.

----------------------------------------------------------------------------------------

# Context API in React

In React, **Context API** is a way to share data between components **without passing props manually at every level**.

It solves a common problem called:

```text id="ctx1"
Prop Drilling
```

---

# 1. What problem does Context solve?

## Without Context (prop drilling):

```text id="ctx2"
App → Parent → Child → GrandChild
```

You pass props through every level even if only GrandChild needs it.

---

## Example problem:

```jsx id="ctx3"
<App user={user} />
```

→ Parent passes
→ Child passes
→ GrandChild uses it

Even intermediate components don’t need it.

---

# 2. What is Context?

> Context is a global state-sharing system inside React that allows data to be accessed anywhere in the component tree.

---

# 3. Core parts of Context

You need 3 things:

1. Create Context
2. Provide Context
3. Consume Context

---

# 4. Step 1: Create Context

```jsx id="ctx4"
import { createContext } from "react"

export const UserContext = createContext()
```

---

# 5. Step 2: Provide Context

You wrap components using Provider:

```jsx id="ctx5"
import { UserContext } from "./UserContext"

function App() {
  const user = { name: "John" }

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}
```

---

# 6. Step 3: Consume Context

```jsx id="ctx6"
import { useContext } from "react"
import { UserContext } from "./UserContext"

function Child() {
  const user = useContext(UserContext)

  return <h1>{user.name}</h1>
}
```

---

# 7. How Context flows

```text id="ctx7"
Provider (App)
     ↓
Any child component
     ↓
useContext() gets value directly
```

No prop passing needed.

---

# 8. Why Context is useful

✔ avoids prop drilling
✔ cleaner code
✔ global data sharing

---

# 9. Common use cases

## 1. Authentication

```text id="ctx8"
User login state (logged in / out)
```

---

## 2. Theme (dark/light mode)

```text id="ctx9"
theme = dark or light
```

---

## 3. Language settings

```text id="ctx10"
English / Hindi / etc
```

---

## 4. Global user data

```text id="ctx11"
user profile info
```

---

# 10. Full example (Auth Context)

---

## Create context

```jsx id="ctx12"
import { createContext } from "react"

export const AuthContext = createContext()
```

---

## Provider

```jsx id="ctx13"
import { AuthContext } from "./AuthContext"

function App() {
  const user = { name: "Alex", loggedIn: true }

  return (
    <AuthContext.Provider value={user}>
      <Dashboard />
    </AuthContext.Provider>
  )
}
```

---

## Consume

```jsx id="ctx14"
import { useContext } from "react"
import { AuthContext } from "./AuthContext"

function Dashboard() {
  const user = useContext(AuthContext)

  return <h1>Welcome {user.name}</h1>
}
```

---

# 11. Context vs Props

| Feature      | Props               | Context      |
| ------------ | ------------------- | ------------ |
| Passing data | Manual              | Automatic    |
| Scalability  | Poor for deep trees | Good         |
| Use case     | Small data flow     | Global state |

---

# 12. Important rule

❌ Don’t overuse Context

Use it only for:

* global data
* app-wide state

Not for everything.

---

# 13. Context + State together

You can manage state inside Context:

```jsx id="ctx15"
const [user, setUser] = useState(null)
```

Then pass both value + setter:

```jsx id="ctx16"
<AuthContext.Provider value={{ user, setUser }}>
```

---

# 14. Common mistakes

---

## Mistake 1: Using Context everywhere

Makes app slow and messy.

---

## Mistake 2: Not splitting contexts

Better to create:

* AuthContext
* ThemeContext

---

## Mistake 3: Forgetting Provider

Context will be undefined.

---

# 15. Mental model

```text id="ctx17"
Context = shared global box of data
```

Any component inside can access it.

---

# 16. Interview questions (VERY IMPORTANT)

Be ready for:

* What is Context API?
* Why do we need it?
* What is prop drilling?
* Difference between Context and props?
* When should you NOT use Context?

---

# 17. One-line summary

> Context API in React is a built-in system that allows sharing global data across components without prop drilling using Provider and useContext.

----------------------------------------------------------------------------------------

# useReducer in React

In React, `useReducer` is a Hook used for **managing complex state logic** in a more structured way than `useState`.

It is especially useful when:

* state has multiple values
* updates depend on previous state
* logic becomes messy with `useState`

---

# 1. Why useReducer exists

With `useState`:

```text id="ur1"
simple state → easy
complex logic → messy
```

Example problem:

* multiple state updates
* many conditions
* repeated logic

So React provides:

```text id="ur2"
useReducer = structured state management
```

---

# 2. What is useReducer?

> `useReducer` is a Hook that manages state using a reducer function and actions.

It works like a “state machine”.

---

# 3. Basic Syntax

```jsx id="ur3"
const [state, dispatch] = useReducer(reducer, initialState)
```

---

# 4. Key parts

## 1. state

Current state value

## 2. dispatch

Function used to send actions

## 3. reducer

Function that decides how state changes

---

# 5. Basic Example (Counter)

```jsx id="ur4"
import { useReducer } from "react"

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }

    case "decrement":
      return { count: state.count - 1 }

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </div>
  )
}
```

---

# 6. How it works

```text id="ur5"
Button clicked
     ↓
dispatch(action)
     ↓
reducer runs
     ↓
returns new state
     ↓
UI re-renders
```

---

# 7. useState vs useReducer

| Feature        | useState  | useReducer       |
| -------------- | --------- | ---------------- |
| Simple state   | Best      | Overkill         |
| Complex state  | Hard      | Best             |
| Logic location | Component | Reducer function |
| Scalability    | Low       | High             |

---

# 8. When to use useReducer

Use it when:

* multiple state transitions
* complex logic
* related state values
* large forms
* todo apps

---

# 9. Real-world example (Todo App)

```jsx id="ur6"
const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload]

    case "delete":
      return state.filter((todo) => todo.id !== action.payload)

    default:
      return state
  }
}
```

---

# 10. Dispatch examples

```jsx id="ur7"
dispatch({ type: "add", payload: newTodo })

dispatch({ type: "delete", payload: id })
```

---

# 11. Mental model

```text id="ur8"
State + Action → Reducer → New State
```

Like a formula:

```text
newState = reducer(oldState, action)
```

---

# 12. Why it is powerful

✔ separates logic from UI
✔ predictable state updates
✔ scalable for large apps

---

# 13. useReducer vs Context (IMPORTANT)

They are often used together:

```text id="ur9"
Context = data sharing
useReducer = state logic
```

---

## Example combo:

```jsx id="ur10"
<AuthContext.Provider value={{ state, dispatch }}>
```

---

# 14. Common mistakes

---

## Mistake 1: Mutating state

❌ Wrong:

```js id="ur11"
state.push(item)
```

✔ Correct:

```js id="ur12"
return [...state, item]
```

---

## Mistake 2: Not returning state

Reducer must ALWAYS return something.

---

## Mistake 3: Overusing useReducer

Don’t use it for simple counters.

---

# 15. Real-world usage

* Todo apps
* Shopping cart
* Authentication state
* Form handling
* Complex UI logic

---

# 16. Interview questions (VERY IMPORTANT)

Be ready for:

* What is useReducer?
* Difference between useState and useReducer?
* What is reducer function?
* What is dispatch?
* When should you use useReducer?
* Why is it useful in complex state?

---

# 17. Mental image

```text id="ur13"
UI → dispatch(action) → reducer → updated state → UI
```

---

# 18. One-line summary

> useReducer is a React Hook used to manage complex state logic by using a reducer function and dispatching actions to update state in a predictable way.

----------------------------------------------------------------------------------------

# useMemo in React

In React, `useMemo` is a Hook used to **optimize performance by caching (memoizing) expensive calculations** so they don’t run again on every render.

---

# 1. Why useMemo exists

In React, every re-render:

```text id="um1"
Component runs again → all JS code runs again
```

Problem:

* some calculations are expensive
* running them again and again wastes performance

So React gives:

```text id="um2"
useMemo = remember previous result
```

---

# 2. What is useMemo?

> `useMemo` returns a **cached value** and only recalculates it when dependencies change.

---

# 3. Basic Syntax

```jsx id="um3"
const memoizedValue = useMemo(() => {
  return expensiveCalculation()
}, [dependencies])
```

---

# 4. Simple Example

```jsx id="um4"
import { useMemo, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const expensiveValue = useMemo(() => {
    console.log("Calculating...")

    let sum = 0
    for (let i = 0; i < 1000000000; i++) {
      sum += i
    }
    return sum
  }, [])

  return (
    <div>
      <h1>{expensiveValue}</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}
```

---

# 5. What is happening?

```text id="um5"
First render → calculation runs (slow)
Next renders → cached value used (fast)
```

---

# 6. Dependency Array (VERY IMPORTANT)

```jsx id="um6"
useMemo(() => compute(), [count])
```

Means:

```text id="um7"
Recalculate ONLY when count changes
```

---

# 7. When useMemo runs

| Condition           | Runs calculation? |
| ------------------- | ----------------- |
| First render        | Yes               |
| Dependency changes  | Yes               |
| Unrelated re-render | No                |

---

# 8. useMemo vs normal calculation

## Without useMemo

```jsx id="um8"
const result = expensiveCalculation()
```

Runs EVERY render ❌

---

## With useMemo

```jsx id="um9"
const result = useMemo(() => expensiveCalculation(), [])
```

Runs only when needed ✔

---

# 9. What useMemo is NOT

❌ Not for:

* storing state
* replacing useState
* avoiding all re-renders

✔ Only for:

* optimizing expensive computations

---

# 10. Real-world use cases

## 1. Filtering large lists

```jsx id="um10"
const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.name.includes(search)
  )
}, [users, search])
```

---

## 2. Sorting large data

```jsx id="um11"
const sortedData = useMemo(() => {
  return data.sort()
}, [data])
```

---

## 3. Heavy calculations

* charts
* analytics
* computations

---

# 11. Why useMemo improves performance

Without it:

```text id="um12"
Every render → recompute heavy logic
```

With it:

```text id="um13"
Only recompute when needed
```

---

# 12. useMemo vs useEffect (IMPORTANT DIFFERENCE)

| useMemo       | useEffect         |
| ------------- | ----------------- |
| returns value | runs side effects |
| during render | after render      |
| optimization  | API calls, timers |

---

# 13. Mental model

```text id="um14"
Input changes → check dependencies → reuse cached value OR recompute
```

---

# 14. Common mistakes

---

## Mistake 1: Using everywhere

❌ Over-optimization

---

## Mistake 2: Wrong dependency array

Can give stale values.

---

## Mistake 3: Using for side effects

Wrong tool → useEffect instead.

---

# 15. Interview questions (VERY IMPORTANT)

Be ready for:

* What is useMemo?
* Why do we use it?
* Difference between useMemo and useEffect?
* When should you NOT use useMemo?
* What are dependencies in useMemo?

---

# 16. One-line summary

> useMemo is a React Hook that memoizes expensive calculations and only recomputes them when dependencies change, improving performance in re-renders.

----------------------------------------------------------------------------------------

# useCallback in React

In React, `useCallback` is a Hook used to **memoize functions** so they are not recreated on every re-render.

It is mainly used for:

* performance optimization
* preventing unnecessary child re-renders

---

# 1. Why useCallback exists

In React:

```text id="uc1"
Component re-renders
      ↓
Functions inside component are recreated
```

Example:

```jsx id="uc2"
function App() {
  function handleClick() {
    console.log("clicked")
  }
}
```

Every render:

```text id="uc3"
new function object created
```

Usually okay, but can become a problem when:

* passing functions to child components
* using React.memo
* expensive child renders

---

# 2. What is useCallback?

> `useCallback` returns a memoized version of a function and recreates it only when dependencies change.

---

# 3. Basic Syntax

```jsx id="uc4"
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies])
```

---

# 4. Simple Example

```jsx id="uc5"
import { useState, useCallback } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log("Button clicked")
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child onClick={handleClick} />
    </div>
  )
}

function Child({ onClick }) {
  console.log("Child rendered")

  return <button onClick={onClick}>Child Button</button>
}
```

---

# 5. What problem does this solve?

Without `useCallback`:

```text id="uc6"
Parent re-renders
      ↓
New function created
      ↓
Child thinks prop changed
      ↓
Child re-renders unnecessarily
```

---

# 6. With useCallback

```text id="uc7"
Same function reused
      ↓
Child prop unchanged
      ↓
Unnecessary render avoided
```

---

# 7. Dependency Array (VERY IMPORTANT)

```jsx id="uc8"
useCallback(() => {
  console.log(count)
}, [count])
```

Means:

```text id="uc9"
Recreate function only when count changes
```

---

# 8. useCallback + React.memo (common combo)

`useCallback` is most useful with:

```jsx id="uc10"
React.memo()
```

Because:

* React.memo prevents child re-render
* useCallback keeps same function reference

Together:
✔ optimize rendering

---

# 9. useCallback vs normal function

## Normal function

```jsx id="uc11"
const fn = () => {}
```

New function every render ❌

---

## useCallback

```jsx id="uc12"
const fn = useCallback(() => {}, [])
```

Same function reused ✔

---

# 10. useCallback vs useMemo (VERY IMPORTANT)

| useCallback       | useMemo                |
| ----------------- | ---------------------- |
| Memoizes function | Memoizes value         |
| Returns function  | Returns computed value |

---

## Example

### useMemo

```jsx id="uc13"
const result = useMemo(() => compute(), [])
```

Returns:

```text id="uc14"
value
```

---

### useCallback

```jsx id="uc15"
const fn = useCallback(() => {}, [])
```

Returns:

```text id="uc16"
function
```

---

# 11. Real-world use cases

## 1. Passing callbacks to child components

```jsx id="uc17"
<Child onClick={handleClick} />
```

---

## 2. Optimized forms

---

## 3. Expensive component trees

---

# 12. Important warning

❌ Don’t overuse `useCallback`

It also has overhead.

Use it only when:

* performance matters
* child re-render problem exists

---

# 13. Mental model

```text id="uc18"
Without useCallback:
render → new function

With useCallback:
render → reuse old function
```

---

# 14. Common mistakes

---

## Mistake 1: Using everywhere

Not needed for simple apps.

---

## Mistake 2: Wrong dependency array

Can cause stale values.

---

## Mistake 3: Thinking it prevents all re-renders

It only stabilizes function reference.

---

# 15. Interview questions (VERY IMPORTANT)

Be ready for:

* What is useCallback?
* Why useCallback exists?
* Difference between useMemo and useCallback?
* When should you use useCallback?
* Why functions recreate on re-render?

---

# 16. useCallback execution flow

```text id="uc19"
Render
   ↓
Check dependencies
   ↓
If changed → create new function
Else → reuse old function
```

---

# 17. One-line summary

> useCallback is a React Hook that memoizes functions and recreates them only when dependencies change, helping prevent unnecessary re-renders and improve performance.

----------------------------------------------------------------------------------------

`React.memo()` is a higher-order component in React that **memoizes** a functional component to prevent unnecessary re-renders.

### Basic Idea

Normally, when a parent component re-renders, all its child components re-render too.

`React.memo()` tells React:

> “Only re-render this component if its props actually changed.”

---

## Syntax

```jsx
const MemoizedComponent = React.memo(Component)
```

Example:

```jsx
import React from "react";

const Greeting = React.memo(({ name }) => {
  console.log("Rendering Greeting");
  return <h1>Hello, {name}</h1>;
});

export default Greeting;
```

---

## Example

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Greeting name="Alice" />
    </>
  );
}
```

Without `React.memo()`:

* `Greeting` re-renders every time `count` changes.

With `React.memo()`:

* `Greeting` only re-renders if `name` changes.

---

## How It Works

By default, `React.memo()` performs a **shallow comparison** of props.

So:

```js
oldProps.name === newProps.name
```

If all props are equal, React skips rendering.

---

## Important Caveat

Objects, arrays, and functions are compared by **reference**, not value.

Example:

```jsx
<MyComp data={{ id: 1 }} />
```

This creates a new object every render, so memoization fails.

Use `useMemo` or `useCallback` to stabilize references:

```jsx
const data = useMemo(() => ({ id: 1 }), []);
```

---

## Custom Comparison Function

You can provide your own comparison logic:

```jsx
const MyComponent = React.memo(
  Component,
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);
```

Return:

* `true` → skip re-render
* `false` → re-render

---

## When to Use `React.memo()`

Good for:

* Expensive components
* Large lists
* Components that render frequently
* Pure UI components with stable props

Avoid overusing it:

* Memoization itself has a cost
* Small/simple components usually don’t benefit

---

## Difference Between `React.memo` and `useMemo`

| Feature  | `React.memo`           | `useMemo`              |
| -------- | ---------------------- | ---------------------- |
| Memoizes | Component rendering    | Computed values        |
| Used for | Functional components  | Expensive calculations |
| Prevents | Unnecessary re-renders | Recalculations         |

Example of `useMemo`:

```jsx
const sorted = useMemo(() => sortItems(items), [items]);
```

---

## Quick Mental Model

* `React.memo` → “Remember this component output”
* `useMemo` → “Remember this calculated value”
* `useCallback` → “Remember this function instance”

----------------------------------------------------------------------------------------