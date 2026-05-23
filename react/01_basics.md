## 1. `What is React?`

**React** is a JavaScript library used to build user interfaces (UI), especially for web applications. It was created by Meta (Facebook) and is widely used for building modern, fast, and interactive websites.

In simple terms:

> React helps you build web pages by breaking them into small, reusable pieces instead of writing everything in one big HTML file.

It is part of the ecosystem of React.

---

## Why React exists (the problem it solves)

Before React, websites were mostly built using:

* HTML (structure)
* CSS (style)
* JavaScript (behavior)

But as apps became bigger (like Instagram, Facebook), problems appeared:

### 1. Hard to manage complex UIs

Updating one small part of the page often required manually changing the DOM (Document Object Model), which becomes messy and error-prone.

### 2. Slow updates

Direct DOM manipulation is expensive. Frequent updates made apps slower.

### 3. Code becomes unorganized

Everything (UI + logic) mixed together → hard to maintain.

---

## How React solves these problems

React introduces a better way:

### 1. Component-based architecture

You break UI into small reusable pieces called **components**.

Example:

* Navbar component
* Sidebar component
* Button component
* Card component

Instead of one big page, you build many small parts.

---

### 2. Virtual DOM (important idea)

React creates a **lightweight copy of the real DOM** called the Virtual DOM.

When something changes:

1. React updates the Virtual DOM first
2. Compares it with the previous version (diffing)
3. Updates only the changed parts in the real DOM

👉 This makes updates fast and efficient.

---

### 3. Declarative UI (you describe, React handles the rest)

Instead of telling step-by-step how to update the UI, you just describe **what the UI should look like**.

Example idea:

* “If user is logged in, show dashboard”
* React automatically updates the screen when state changes

---

## Simple analogy

Think of building a house:

### Without React:

You manually change every brick when something changes → slow and messy.

### With React:

You build with **pre-made blocks (components)**.
If you need changes, you just replace or update a block.

---

## Key features of React

* Component-based
* Fast updates using Virtual DOM
* Reusable UI pieces
* Declarative programming style
* Huge ecosystem and community

---

## Where React is used

React is used in:

* Social media apps (Facebook, Instagram)
* E-commerce sites (Amazon-like interfaces)
* Dashboards (admin panels)
* SaaS products (like Notion, Slack-style tools)

---

## One-line summary

> React is a JavaScript library that lets you build fast, scalable web UIs by composing reusable components and efficiently updating only what changes.

## `Virtual DOM (In Depth)`

React uses something called the **Virtual DOM** to make UI updates fast and efficient.

To understand it properly, we need to start with the real problem it solves.

---

# 1. The Problem: Direct DOM is slow

In a normal web page, the browser maintains a **Real DOM (Document Object Model)**.

Whenever something changes:

* The browser must update the DOM
* Then re-calculate layout
* Then repaint the screen

This is expensive when done frequently.

### Example problem

Imagine a todo app with 100 items:

If you update just one item:

* Traditional JS might re-render or touch large parts of the DOM
* This can slow things down

---

# 2. What is the Virtual DOM?

The **Virtual DOM (VDOM)** is:

> A lightweight JavaScript copy of the Real DOM stored in memory.

It is NOT the actual screen.

Think of it as a **blueprint or simulation** of the UI.

---

## Simple Diagram

```
        UI Change
            ↓
     Virtual DOM (new)
            ↓
   Compare with old VDOM
            ↓
     Find differences
            ↓
   Update only changed parts
            ↓
        Real DOM
```

---

# 3. How React uses Virtual DOM (Step-by-step)

Let’s break it down clearly:

---

## Step 1: Initial Render

When your app loads:

```
React Component → Virtual DOM → Real DOM (screen)
```

React creates a virtual representation of the UI and draws it on the screen.

---

## Step 2: State Change happens

Example: You click a button

```
Button clicked → state updates
```

Now React creates a **new Virtual DOM tree**

---

## Step 3: Diffing (Comparison)

React compares:

```
Old Virtual DOM
        vs
New Virtual DOM
```

It finds exactly what changed.

This process is called **reconciliation**.

---

## Step 4: Minimal updates to Real DOM

Instead of updating everything:

* React updates ONLY the changed part

```
Old UI: 100 items
Change: 1 item
Update: only that 1 item in Real DOM
```

---

# 4. Visual Example

Imagine a simple UI:

### Before change:

```
UI:
[Counter: 0]
```

### After click:

```
UI:
[Counter: 1]
```

### What React does:

```
Old VDOM: Counter = 0
New VDOM: Counter = 1

Difference → only text changed
```

So React updates ONLY that text node in the real DOM.

---

# 5. Why Virtual DOM is faster

### Without Virtual DOM:

* Direct DOM manipulation every time
* Browser re-renders too much

### With Virtual DOM:

* Changes happen in memory first
* Only minimal real DOM updates
* Batch updates for efficiency

---

# 6. Key Concept: React does NOT avoid DOM updates

A common misunderstanding:

❌ React does NOT avoid DOM updates
✔ It minimizes and optimizes them

It still updates the Real DOM — just smarter.

---

# 7. Real-world analogy

Think of editing a Word document:

### Without Virtual DOM:

You print the document every time you change one word.

### With Virtual DOM:

* You edit a draft copy first
* Then print only the final changed version

---

# 8. Important terms to remember

### Virtual DOM

In-memory representation of UI

### Reconciliation

Process of comparing old vs new Virtual DOM

### Diffing algorithm

Algorithm that finds what changed

### Real DOM

Actual browser-rendered UI

---

# 9. Mini mental model

If React UI was a system:

```
State Change
    ↓
New Virtual UI created
    ↓
Compare with previous version
    ↓
Find smallest difference
    ↓
Apply only necessary DOM updates
```

---

# 10. One-line summary

> Virtual DOM is a lightweight in-memory copy of the UI that React uses to efficiently update only the parts of the real DOM that actually changed.

## `SPA (Single Page Application)`

A **Single Page Application (SPA)** is a web app that loads a single HTML page once and then dynamically updates content without reloading the entire page.

React is commonly used to build SPAs because it efficiently updates only parts of the UI instead of reloading everything.

---

# 1. Traditional websites vs SPA

## Traditional Multi-Page App (MPA)

Every action loads a new page from the server:

```text
Click link → Request server → New HTML page → Full reload
```

Example:

* Home page → reload
* About page → reload
* Profile page → reload

### Problem:

* Slow navigation (full page reload every time)
* Repeated loading of CSS, JS, layout
* Less smooth user experience

---

## SPA (Single Page Application)

In SPA:

```text
First load → entire app loads once
After that → only content changes
No full page reload
```

---

# 2. How SPA works

### Step-by-step flow:

## Step 1: Initial load

```text
Browser → downloads HTML + JS bundle once
```

You see the app UI.

---

## Step 2: Navigation inside app

When you click a link (like “Profile”):

```text
Instead of asking server for a new page:
→ JavaScript intercepts the click
→ updates the UI dynamically
```

Only the required component changes.

---

## Step 3: Data fetching (if needed)

SPA may still request data:

```text
UI change → API call → get JSON → update screen
```

But NOT full page reload.

---

# 3. Visual comparison

## Traditional Website

```text
Home → reload page → About → reload page → Contact → reload page
```

## SPA

```text
Home → (no reload) → About → (no reload) → Contact
```

Only content area changes.

---

# 4. Real example

Think of apps like:

* Gmail
* Instagram web
* Google Drive

When you:

* Open an email
* Switch tabs
* Open a file

👉 The page does NOT reload
👉 Only the content changes

---

# 5. Why SPAs feel fast

### 1. No full page reload

Only small updates happen.

### 2. Less server work

Server sends data (JSON), not full HTML pages.

### 3. Smooth transitions

Navigation feels like a desktop app.

---

# 6. Role of React in SPA

React helps SPA by:

* Updating only changed components
* Managing UI state efficiently
* Rendering views based on state changes

So instead of:

> “load a new page”

React does:

> “replace this part of the UI”

---

# 7. Routing in SPA

SPAs use **client-side routing**:

Instead of:

```text
server handles /about → returns new page
```

SPA does:

```text
React Router handles /about → shows About component
```

(Usually using tools like React Router)

---

# 8. Challenges of SPA

SPAs are powerful but have some downsides:

### 1. Initial load can be heavy

Large JavaScript bundle on first load

### 2. SEO complexity

Needs extra setup for search engines

### 3. JavaScript dependency

App may not work well if JS is disabled

---

# 9. Simple mental model

Think of SPA like a desktop app in the browser:

```text
One window
Same frame stays
Only inner content changes
```

---

# 10. One-line summary

> A Single Page Application (SPA) loads once and dynamically updates content without refreshing the page, creating a fast and smooth user experience.

----------------------------------------------------------------------------------------

##  `Setting Up a React Project` :

Setting up a project in React means creating a working environment where you can write components, run a development server, and build a web application.

Today, the most common (and recommended) way is using **Vite**.

---

# 1. Why setup is needed

A React project is not just HTML + JS files. It needs:

* A build tool (to bundle code)
* A dev server (to preview changes instantly)
* A module system (to organize files)
* Fast refresh (auto update in browser)

So setup tools handle all this for you.

---

# 2. Recommended way: Vite (Modern approach)

## Step 1: Install Node.js

Before anything, install:

* Node.js (includes npm)

Check if installed:

```bash
node -v
npm -v
```

---

## Step 2: Create React project using Vite

Run:

```bash
npm create vite@latest
```

Then it will ask:

* Project name → e.g. `my-app`
* Framework → choose `React`
* Variant → choose `JavaScript` or `TypeScript`

---

## Step 3: Go into project folder

```bash
cd my-app
```

---

## Step 4: Install dependencies

```bash
npm install
```

---

## Step 5: Start development server

```bash
npm run dev
```

You will see something like:

```text
Local: http://localhost:5173/
```

Open it in browser → your React app is running 🎉

---

# 3. Project structure (very important)

Inside your project:

```text
my-app/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
│
├── index.html
├── package.json
└── vite.config.js
```

---

## Key files explained

### 1. index.html

* Only one HTML file in SPA
* React mounts everything inside this

---

### 2. main.jsx

This is the entry point:

```js
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)
```

👉 This tells React:
“Render App component inside the root div”

---

### 3. App.jsx

Main component of your app:

```js
function App() {
  return <h1>Hello React</h1>
}

export default App
```

---

### 4. public folder

* Static files (images, icons)
* Not processed by React build system

---

### 5. src folder

* Main working area
* All components go here

---

# 4. Alternative: Create React App (CRA) (older method)

Older way:

```bash
npx create-react-app my-app
```

Then:

```bash
cd my-app
npm start
```

### But:

* Slower than Vite
* Heavier build system

👉 Today, Vite is preferred.

---

# 5. What happens when project runs?

When you run:

```bash
npm run dev
```

This happens:

```text
Vite dev server starts
→ Bundles React code in memory
→ Serves it to browser
→ Enables Hot Module Replacement (HMR)
```

So when you change code:

* Browser updates instantly
* No full reload needed

---

# 6. Hot Module Replacement (HMR)

This is very important:

👉 When you edit a file:

* Only that component refreshes
* State is often preserved

Example:

* You change text in `App.jsx`
* Browser updates instantly without refresh

---

# 7. How React app actually loads

Flow:

```text
Browser opens index.html
        ↓
main.jsx runs
        ↓
App component loads
        ↓
UI appears on screen
```

---

# 8. Common beginner mistakes

### ❌ Editing index.html directly

👉 React UI is controlled by components, not HTML file

---

### ❌ Forgetting npm install

👉 App will not run without dependencies

---

### ❌ Confusing main.jsx and App.jsx

* main.jsx → startup file
* App.jsx → UI logic

---

# 9. Mental model

Think of setup like this:

```text
Vite = Engine
React = Car body
Components = Parts of the car
Browser = Road where it runs
```

---

# 10. One-line summary

> Setting up a React project involves using a tool like Vite to create a development environment where React components can run, update instantly, and be bundled efficiently for the browser.

----------------------------------------------------------------------------------------

## 3. JSX (JavaScript XML)

JSX is one of the most important parts of React. It lets you write UI code in a syntax that looks like HTML, but works inside JavaScript.

In simple terms:

> JSX = JavaScript + HTML-like syntax

---

# 1. What is JSX?

JSX stands for **JavaScript XML**.

It allows you to write:

```jsx id="jsx1"
const element = <h1>Hello World</h1>
```

Instead of writing:

```js id="jsx2"
const element = React.createElement("h1", null, "Hello World")
```

So JSX makes code:

* Easier to read
* Easier to write
* More visual (like HTML)

---

# 2. Why JSX exists

Without JSX, React code becomes messy:

### Without JSX:

```js id="jsx3"
React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello")
)
```

### With JSX:

```jsx id="jsx4"
<div>
  <h1>Hello</h1>
</div>
```

👉 JSX makes UI development much more intuitive.

---

# 3. JSX is NOT HTML

Even though it looks like HTML, JSX is actually JavaScript.

### Example:

```jsx id="jsx5"
const name = "John"

const element = <h1>Hello {name}</h1>
```

Here:

* `{name}` is JavaScript inside JSX
* This is NOT valid HTML

---

# 4. Embedding JavaScript in JSX

You can use JavaScript inside JSX using `{}`.

### Example:

```jsx id="jsx6"
const a = 5
const b = 10

function App() {
  return <h1>Sum is {a + b}</h1>
}
```

### You can use:

* Variables
* Functions
* Expressions

### But NOT:

* `if` statements directly
* loops directly

---

# 5. JSX rules (important)

## Rule 1: Must return a single parent element

❌ Wrong:

```jsx id="jsx7"
return (
  <h1>Hello</h1>
  <p>World</p>
)
```

✅ Correct:

```jsx id="jsx8"
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)
```

Or use fragment:

```jsx id="jsx9"
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
)
```

---

## Rule 2: Use className instead of class

❌ HTML:

```html id="jsx10"
<div class="box"></div>
```

✅ JSX:

```jsx id="jsx11"
<div className="box"></div>
```

Because `class` is a reserved keyword in JavaScript.

---

## Rule 3: Self-closing tags must close properly

❌ Wrong:

```jsx id="jsx12"
<img src="image.jpg">
```

✅ Correct:

```jsx id="jsx13"
<img src="image.jpg" />
```

---

# 6. JSX with conditions

You can’t use `if` directly inside JSX, but you can use:

## Ternary operator

```jsx id="jsx14"
function App() {
  const isLoggedIn = true

  return (
    <h1>
      {isLoggedIn ? "Welcome Back" : "Please Login"}
    </h1>
  )
}
```

---

# 7. JSX with lists

```jsx id="jsx15"
const fruits = ["Apple", "Banana", "Mango"]

function App() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  )
}
```

👉 This is very common in real apps.

---

# 8. How JSX works internally

JSX is NOT understood by browsers directly.

It is converted into JavaScript using a tool like Babel.

### JSX:

```jsx id="jsx16"
<h1>Hello</h1>
```

### Becomes:

```js id="jsx17"
React.createElement("h1", null, "Hello")
```

So browser only sees JavaScript.

---

# 9. JSX mental model

Think of JSX like this:

```text id="jsx18"
JSX = Fancy way of writing JavaScript that describes UI
```

Instead of telling browser:

> “Create element step by step”

You say:

> “This is what UI should look like”

---

# 10. Real-world analogy

JSX is like a **blueprint**:

* You don’t build a house brick by brick manually
* You draw a blueprint (JSX)
* React builds it for you

---

# 11. One-line summary

> JSX is a syntax extension that allows you to write HTML-like code inside JavaScript, making React UI development easier and more readable.

----------------------------------------------------------------------------------------

# 4. Components in React

Components are the **core building blocks** of React.

Everything you see in a React app is usually made from components.

Examples:

* Navbar
* Sidebar
* Login form
* Product card
* Footer
* Button

Instead of building one huge webpage, React applications are built by combining many small reusable pieces called **components**.

---

# 1. What is a Component?

A component is:

> A reusable piece of UI written as a JavaScript function that returns JSX.

Simple idea:

```text id="comp1"
Component = UI + Logic
```

---

## Real-world analogy

Think of LEGO blocks.

* Small blocks combine to make large structures
* Each block has its own role

React components work the same way.

Example:

```text id="comp2"
Webpage
 ├── Header
 ├── Sidebar
 ├── Content
 └── Footer
```

Each part is a separate component.

---

# 2. Why Components exist

Without components:

* Huge HTML files
* Repeated code
* Hard maintenance
* Difficult debugging

Components solve this by:

* Splitting UI into manageable parts
* Making code reusable
* Organizing logic better

---

# 3. Functional Components (Modern React)

Today, React mainly uses **functional components**.

A functional component is simply a JavaScript function.

---

## Basic component example

```jsx id="comp3"
function Welcome() {
  return <h1>Hello React</h1>
}
```

---

## Using the component

```jsx id="comp4"
function App() {
  return (
    <div>
      <Welcome />
    </div>
  )
}
```

---

## What happens internally

```text id="comp5"
<Welcome />
      ↓
React calls Welcome()
      ↓
Returns JSX
      ↓
UI appears on screen
```

---

# 4. Component Naming Rules

Component names MUST start with a capital letter.

✅ Correct:

```jsx id="comp6"
function Navbar() {}
```

❌ Wrong:

```jsx id="comp7"
function navbar() {}
```

---

## Why?

React uses capitalization to distinguish:

* HTML tags
* React components

Example:

```jsx id="comp8"
<div />      → HTML element
<Navbar />   → React component
```

---

# 5. Returning JSX from Components

Components return JSX.

Example:

```jsx id="comp9"
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  )
}
```

---

# 6. Single Parent Rule

JSX must return one parent element.

❌ Wrong:

```jsx id="comp10"
return (
  <h1>Hello</h1>
  <p>World</p>
)
```

---

✅ Correct:

```jsx id="comp11"
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)
```

---

## Using React Fragments

Instead of unnecessary `<div>`:

```jsx id="comp12"
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
)
```

Fragments group elements without adding extra DOM nodes.

---

# 7. Reusable Components

This is one of React’s biggest advantages.

Instead of repeating code:

❌ Bad:

```jsx id="comp13"
<button>Login</button>
<button>Signup</button>
<button>Logout</button>
```

---

✅ Better:

```jsx id="comp14"
function Button() {
  return <button>Click</button>
}
```

Use many times:

```jsx id="comp15"
<Button />
<Button />
<Button />
```

---

# 8. Dynamic Components with Props

Reusable components become powerful with **props**.

Props allow components to receive data.

---

## Example

```jsx id="comp16"
function Button(props) {
  return <button>{props.text}</button>
}
```

Use:

```jsx id="comp17"
<Button text="Login" />
<Button text="Signup" />
```

Output:

```text id="comp18"
Login button
Signup button
```

---

# 9. Component Composition

Large UIs are built by combining smaller components.

Example:

```text id="comp19"
App
 ├── Navbar
 ├── Sidebar
 ├── Content
 └── Footer
```

---

## Example code

### Navbar.jsx

```jsx id="comp20"
function Navbar() {
  return <h1>Navbar</h1>
}

export default Navbar
```

---

### App.jsx

```jsx id="comp21"
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
```

---

# 10. Importing and Exporting Components

To use components across files:

---

## Export component

```jsx id="comp22"
export default Header
```

---

## Import component

```jsx id="comp23"
import Header from "./Header"
```

---

# 11. Component Tree

React applications form a hierarchy called a component tree.

Example:

```text id="comp24"
App
 ├── Header
 ├── Main
 │    ├── Card
 │    ├── Card
 │    └── Card
 └── Footer
```

---

## Why this matters

Data and UI flow through this structure.

---

# 12. Parent and Child Components

Example:

```text id="comp25"
App → Parent
Button → Child
```

```jsx id="comp26"
function Button() {
  return <button>Click</button>
}

function App() {
  return <Button />
}
```

---

# 13. Static vs Dynamic Components

---

## Static component

Always same output:

```jsx id="comp27"
function Welcome() {
  return <h1>Hello</h1>
}
```

---

## Dynamic component

Changes using data:

```jsx id="comp28"
function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}
```

---

# 14. Benefits of Components

## 1. Reusability

Write once → use many times

---

## 2. Maintainability

Easy to fix/update isolated parts

---

## 3. Scalability

Large applications become manageable

---

## 4. Cleaner code

Better organization

---

## 5. Team collaboration

Different developers can work on separate components

---

# 15. Common Beginner Mistakes

---

## Mistake 1: Forgetting return

❌ Wrong:

```jsx id="comp29"
function App() {
  <h1>Hello</h1>
}
```

---

✅ Correct:

```jsx id="comp30"
function App() {
  return <h1>Hello</h1>
}
```

---

## Mistake 2: Lowercase component names

❌

```jsx id="comp31"
<navbar />
```

✅

```jsx id="comp32"
<Navbar />
```

---

## Mistake 3: Multiple root elements

Must wrap with parent element or fragment.

---

## Mistake 4: Forgetting export/import

Components must be exported before use in another file.

---

# 16. Mental model

Think of React components like:

```text id="comp33"
Functions that return UI
```

Input:

```text id="comp34"
Props + State
```

Output:

```text id="comp35"
JSX (UI)
```

---

# 17. Mini Example (Complete)

```jsx id="comp36"
function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Card
        title="React"
        description="UI Library"
      />

      <Card
        title="Vite"
        description="Build Tool"
      />
    </div>
  )
}
```

---

# 18. One-line summary

> Components are reusable, independent building blocks in React that return JSX and help organize applications into manageable UI pieces.


# Class Components vs Functional Components in React

In React, there are two main ways to create components:

1. **Functional Components**
2. **Class Components**

Today, functional components are the modern standard, but understanding both is important because:

* Older React projects still use class components
* Interview questions often compare them
* It helps understand React evolution

---

# 1. Functional Components

A functional component is simply a JavaScript function that returns JSX.

---

## Basic Example

```jsx id="func1"
function Welcome() {
  return <h1>Hello React</h1>
}
```

Or using arrow function:

```jsx id="func2"
const Welcome = () => {
  return <h1>Hello React</h1>
}
```

---

# How it works

```text id="func3"
React calls the function
        ↓
Function returns JSX
        ↓
React renders UI
```

---

# Features of Functional Components

Modern functional components can use:

* Props
* State
* Lifecycle features
* Hooks (`useState`, `useEffect`, etc.)

---

# Example with Props

```jsx id="func4"
function User(props) {
  return <h1>Hello {props.name}</h1>
}
```

Usage:

```jsx id="func5"
<User name="John" />
```

---

# Example with State

```jsx id="func6"
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

# Advantages of Functional Components

## 1. Simpler syntax

Less code

---

## 2. Easier to read

Cleaner structure

---

## 3. Better performance optimization

React is optimized heavily for them

---

## 4. Hooks support

Modern React features use hooks

---

## 5. Preferred by React team

Modern React development uses functional components almost everywhere

---

# 2. Class Components

Before hooks existed, React used class components for:

* State
* Lifecycle methods

A class component is an ES6 JavaScript class that extends `React.Component`.

---

# Basic Example

```jsx id="class1"
import React, { Component } from "react"

class Welcome extends Component {
  render() {
    return <h1>Hello React</h1>
  }
}

export default Welcome
```

---

# How it works

```text id="class2"
React creates class instance
        ↓
Calls render()
        ↓
Returns JSX
        ↓
UI rendered
```

---

# Using Props in Class Components

```jsx id="class3"
class User extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}
```

Usage:

```jsx id="class4"
<User name="John" />
```

---

# Using State in Class Components

```jsx id="class5"
class Counter extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <button
        onClick={() =>
          this.setState({
            count: this.state.count + 1
          })
        }
      >
        {this.state.count}
      </button>
    )
  }
}
```

---

# Important Concepts in Class Components

---

## 1. `this`

Class components use `this` frequently.

Example:

```jsx id="class6"
this.props
this.state
this.setState()
```

This often confuses beginners.

---

## 2. render() method

Every class component must have:

```jsx id="class7"
render() {
  return (...)
}
```

---

## 3. State object

State is stored inside:

```jsx id="class8"
this.state
```

Updated using:

```jsx id="class9"
this.setState()
```

---

# Lifecycle Methods (Class Components)

Class components introduced lifecycle methods like:

```jsx id="class10"
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

These handled:

* API calls
* Timers
* Side effects

Today, hooks replace these in functional components.

---

# Functional vs Class Components (Comparison)

| Feature           | Functional | Class            |
| ----------------- | ---------- | ---------------- |
| Syntax            | Simple     | More verbose     |
| Uses functions    | Yes        | No               |
| Uses classes      | No         | Yes              |
| State support     | Hooks      | `this.state`     |
| Lifecycle methods | Hooks      | Built-in methods |
| Uses `this`       | No         | Yes              |
| Easier to learn   | Yes        | Harder           |
| Modern standard   | Yes        | Mostly legacy    |

---

# Same Example Comparison

---

## Functional Component

```jsx id="compare1"
function Welcome() {
  return <h1>Hello</h1>
}
```

---

## Class Component

```jsx id="compare2"
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}
```

---

# Why Functional Components became dominant

Before React Hooks (2019):

* Functional components were “stateless”
* Class components handled complex logic

After Hooks:

* Functional components gained state + lifecycle features
* Cleaner than classes
* Less boilerplate

So React community shifted heavily toward functional components.

---

# Modern React Recommendation

Today:
✅ Use functional components for almost all new projects

Learn class components mainly for:

* Understanding older codebases
* Interviews
* React history

---

# Mental model

---

## Functional component

```text id="mental1"
Input → Function → JSX Output
```

---

## Class component

```text id="mental2"
Class instance
    ↓
Stores state + methods
    ↓
render() returns JSX
```

---

# One-line summary

> Functional components are modern JavaScript functions that return JSX and use hooks, while class components are older ES6 classes that manage state and lifecycle using `this` and lifecycle methods.

----------------------------------------------------------------------------------------

# Props in React

In React, **props** are used to pass data from one component to another.

The word **props** stands for:

```text
properties
```

Props make components:

* Dynamic
* Reusable
* Configurable

---

# 1. What are Props?

Props are:

> Inputs given to a component by its parent component.

Think of props like **arguments passed to a function**.

---

## Simple analogy

Imagine a coffee machine.

The machine is the component.

You give inputs:

* Coffee type
* Sugar level
* Milk amount

Those inputs are like props.

---

# 2. Why Props exist

Without props:

```jsx id="props1"
function Button() {
  return <button>Login</button>
}
```

This button is fixed/static.

---

With props:

```jsx id="props2"
function Button(props) {
  return <button>{props.text}</button>
}
```

Now reusable:

```jsx id="props3"
<Button text="Login" />
<Button text="Signup" />
<Button text="Logout" />
```

---

# 3. Basic Props Flow

```text id="props4"
Parent Component
       ↓
Passes props
       ↓
Child Component
       ↓
Uses props data
```

---

# 4. Creating and Using Props

---

## Step 1: Parent passes props

```jsx id="props5"
<User name="John" age={25} />
```

---

## Step 2: Child receives props

```jsx id="props6"
function User(props) {
  return (
    <h1>
      {props.name} - {props.age}
    </h1>
  )
}
```

---

## Output

```text id="props7"
John - 25
```

---

# 5. Props are Read-Only

Very important rule:

❌ Never modify props directly.

Props are immutable.

---

## Wrong

```jsx id="props8"
props.name = "Mike"
```

---

## Correct

Use props only for reading data.

```jsx id="props9"
<h1>{props.name}</h1>
```

---

# Why?

Because:

* Parent owns the data
* Child only receives it

This creates predictable data flow.

---

# 6. Parent → Child Communication

Props mainly allow:

> Data flow from parent to child

Example:

---

## Parent Component

```jsx id="props10"
function App() {
  return <User name="Alice" />
}
```

---

## Child Component

```jsx id="props11"
function User(props) {
  return <h1>{props.name}</h1>
}
```

---

# 7. Passing Different Types of Props

---

## String

```jsx id="props12"
<User name="John" />
```

---

## Number

```jsx id="props13"
<User age={25} />
```

---

## Boolean

```jsx id="props14"
<User isAdmin={true} />
```

---

## Array

```jsx id="props15"
<User hobbies={["Coding", "Music"]} />
```

---

## Object

```jsx id="props16"
<User person={{ name: "John", age: 25 }} />
```

---

## Function

```jsx id="props17"
<Button handleClick={clickFunction} />
```

---

# 8. Destructuring Props (Very Common)

Instead of:

```jsx id="props18"
function User(props) {
  return <h1>{props.name}</h1>
}
```

Use destructuring:

```jsx id="props19"
function User({ name }) {
  return <h1>{name}</h1>
}
```

---

## Multiple props

```jsx id="props20"
function User({ name, age }) {
  return (
    <h1>
      {name} - {age}
    </h1>
  )
}
```

This is cleaner and modern.

---

# 9. Dynamic Components with Props

Props make components reusable.

---

## Example

```jsx id="props21"
function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
```

Usage:

```jsx id="props22"
<Card
  title="React"
  description="UI Library"
/>

<Card
  title="Vite"
  description="Build Tool"
/>
```

---

# 10. Props vs Hardcoded UI

---

## Hardcoded

```jsx id="props23"
function Product() {
  return <h1>Laptop</h1>
}
```

Only one product possible.

---

## Using Props

```jsx id="props24"
function Product({ name }) {
  return <h1>{name}</h1>
}
```

Now reusable:

```jsx id="props25"
<Product name="Laptop" />
<Product name="Phone" />
<Product name="Tablet" />
```

---

# 11. Passing Functions as Props

Very important concept.

Parents can pass functions to children.

---

## Example

```jsx id="props26"
function Button({ handleClick }) {
  return (
    <button onClick={handleClick}>
      Click
    </button>
  )
}
```

Parent:

```jsx id="props27"
function App() {
  function showMessage() {
    alert("Button clicked")
  }

  return (
    <Button handleClick={showMessage} />
  )
}
```

---

# Why this matters

This enables:

* Child-to-parent interaction
* Event handling
* Component communication

---

# 12. children Prop

React automatically provides a special prop called `children`.

---

## Example

```jsx id="props28"
function Box({ children }) {
  return <div>{children}</div>
}
```

Usage:

```jsx id="props29"
<Box>
  <h1>Hello</h1>
</Box>
```

---

## Output

```text id="props30"
Hello
```

---

# 13. Default Props

You can provide fallback values.

---

## Example

```jsx id="props31"
function User({ name = "Guest" }) {
  return <h1>{name}</h1>
}
```

If no prop passed:

```jsx id="props32"
<User />
```

Output:

```text id="props33"
Guest
```

---

# 14. Props Flow Diagram

```text id="props34"
Parent Component
     ↓ passes props
Child Component
     ↓ uses props
UI rendered
```

---

# 15. Common Beginner Mistakes

---

## Mistake 1: Forgetting `{}` for JS values

❌ Wrong:

```jsx id="props35"
<User age="25 + 5" />
```

---

✅ Correct:

```jsx id="props36"
<User age={25 + 5} />
```

---

## Mistake 2: Modifying props

❌

```jsx id="props37"
props.name = "Mike"
```

Props are read-only.

---

## Mistake 3: Wrong prop name

❌

```jsx id="props38"
<User username="John" />
```

```jsx id="props39"
props.name
```

Will be undefined.

---

# 16. Props vs State

| Props                    | State                       |
| ------------------------ | --------------------------- |
| Passed from parent       | Managed inside component    |
| Read-only                | Can change                  |
| External data            | Internal data               |
| Makes component reusable | Makes component interactive |

---

# 17. Mental model

Think of props like:

```text id="props40"
Function parameters for components
```

Example:

```js id="props41"
function greet(name) {
  return "Hello " + name
}
```

React version:

```jsx id="props42"
function User({ name }) {
  return <h1>Hello {name}</h1>
}
```

---

# 18. One-line summary

> Props are read-only inputs passed from parent to child components that make React components reusable, dynamic, and configurable.


----------------------------------------------------------------------------------------

# State in React

In React, **state** is used to store data that can change over time inside a component.

State makes components:

* Interactive
* Dynamic
* Responsive to user actions

Without state, React components would only display static UI.

---

# 1. What is State?

State is:

> A special React feature used to store and manage changing data inside a component.

Examples of state:

* Counter value
* Input field text
* Dark/light mode
* Todo list items
* Logged-in status

---

# 2. Why State exists

Imagine a counter app.

Without state:

```jsx id="state1"
function Counter() {
  let count = 0

  return (
    <button>
      {count}
    </button>
  )
}
```

Even if `count` changes:
❌ UI will NOT update automatically.

---

React needs a system that:

* Stores changing data
* Detects changes
* Re-renders UI automatically

That system is **state**.

---

# 3. State makes UI reactive

This is the core idea of React.

```text id="state2"
State changes
      ↓
React detects change
      ↓
Component re-renders
      ↓
UI updates automatically
```

---

# 4. useState Hook (Modern React)

In functional components, state is managed using the `useState` hook.

---

## Import useState

```jsx id="state3"
import { useState } from "react"
```

---

## Basic syntax

```jsx id="state4"
const [state, setState] = useState(initialValue)
```

---

# 5. Understanding the syntax

Example:

```jsx id="state5"
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

# 6. First State Example (Counter)

```jsx id="state6"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}
```

---

# 7. What happens internally

When button clicked:

```text id="state7"
setCount(count + 1)
        ↓
State updates
        ↓
React re-renders component
        ↓
Updated value appears on screen
```

---

# 8. Important Rule: Never update state directly

❌ Wrong:

```jsx id="state8"
count = count + 1
```

This does NOT trigger re-render.

---

✅ Correct:

```jsx id="state9"
setCount(count + 1)
```

Always use the setter function.

---

# 9. State and Re-rendering

Whenever state changes:

* React re-renders the component
* JSX executes again
* UI updates

---

## Example

Initial render:

```text id="state10"
count = 0
```

After click:

```text id="state11"
count = 1
```

React automatically updates UI.

---

# 10. Multiple State Variables

You can have multiple states.

---

## Example

```jsx id="state12"
function User() {
  const [name, setName] = useState("John")
  const [age, setAge] = useState(25)

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}
```

---

# 11. State with Input Fields

Very common in forms.

---

## Example

```jsx id="state13"
function App() {
  const [text, setText] = useState("")

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

      <h1>{text}</h1>
    </div>
  )
}
```

---

# What happens

```text id="state14"
User types
      ↓
onChange fires
      ↓
State updates
      ↓
UI updates instantly
```

---

# 12. State can store different data types

---

## String

```jsx id="state15"
const [name, setName] = useState("")
```

---

## Number

```jsx id="state16"
const [count, setCount] = useState(0)
```

---

## Boolean

```jsx id="state17"
const [isLoggedIn, setIsLoggedIn] = useState(false)
```

---

## Array

```jsx id="state18"
const [todos, setTodos] = useState([])
```

---

## Object

```jsx id="state19"
const [user, setUser] = useState({
  name: "John",
  age: 25
})
```

---

# 13. Updating Object State

Important concept.

---

## Wrong

```jsx id="state20"
user.name = "Mike"
```

---

## Correct

```jsx id="state21"
setUser({
  ...user,
  name: "Mike"
})
```

---

# Why spread operator?

Because React state should be treated as immutable.

---

# 14. Updating Array State

---

## Add item

```jsx id="state22"
setTodos([...todos, "New Todo"])
```

---

## Remove item

```jsx id="state23"
setTodos(
  todos.filter((todo) => todo !== "Old")
)
```

---

# 15. Functional State Update

Sometimes safer to use previous value.

---

## Example

```jsx id="state24"
setCount((prev) => prev + 1)
```

---

# Why useful?

Because state updates can be asynchronous.

This avoids stale values.

---

# 16. Props vs State

| Props                    | State                       |
| ------------------------ | --------------------------- |
| Passed from parent       | Managed inside component    |
| Read-only                | Can change                  |
| External data            | Internal data               |
| Makes component reusable | Makes component interactive |

---

# 17. State Flow Mental Model

```text id="state25"
User Action
     ↓
State updates
     ↓
React re-renders
     ↓
UI changes
```

---

# 18. Common Beginner Mistakes

---

## Mistake 1: Updating state directly

❌

```jsx id="state26"
count++
```

---

✅

```jsx id="state27"
setCount(count + 1)
```

---

## Mistake 2: Expecting immediate update

❌

```jsx id="state28"
setCount(count + 1)
console.log(count)
```

May still log old value.

---

## Mistake 3: Mutating arrays/objects

❌

```jsx id="state29"
todos.push("Task")
```

Use immutable updates.

---

# 19. Real-world examples of state

---

## Dark mode

```text id="state30"
isDark = true/false
```

---

## Shopping cart

```text id="state31"
cartItems = [...]
```

---

## Authentication

```text id="state32"
isLoggedIn = true
```

---

## Search input

```text id="state33"
searchText = "React"
```

---

# 20. State in Class Components (Older React)

Before hooks:

```jsx id="state34"
class Counter extends React.Component {
  state = {
    count: 0
  }

  render() {
    return <h1>{this.state.count}</h1>
  }
}
```

Modern React mostly uses functional components + hooks.

---

# 21. One-line summary

> State is React’s built-in mechanism for storing changing data inside components and automatically updating the UI when that data changes.

----------------------------------------------------------------------------------------

# Lifting State Up in React

In React, **lifting state up** means:

> Moving shared state from child components to their closest common parent component.

This is one of the most important React concepts because it helps multiple components share and synchronize data.

---

# 1. Why Lifting State Up is Needed

Imagine you have two components:

```text id="lift1"
CounterDisplay
CounterButton
```

Both need access to the same counter value.

---

## Problem

If each component has its own state:

```text id="lift2"
CounterDisplay → count = 0
CounterButton → count = 0
```

They are independent.

Updating one will NOT update the other.

---

# 2. The Solution

Move the shared state to the parent component.

This is called:

```text id="lift3"
Lifting State Up
```

---

# 3. Core Idea

Instead of:

```text id="lift4"
Child manages state
```

Do this:

```text id="lift5"
Parent manages state
       ↓
Passes data + functions to children
```

---

# 4. Visual Diagram

Before lifting state:

```text id="lift6"
App
 ├── CounterDisplay (own state)
 └── CounterButton (own state)
```

No synchronization.

---

After lifting state:

```text id="lift7"
App (shared state)
 ├── CounterDisplay
 └── CounterButton
```

Now both use same data.

---

# 5. First Example (Without Lifting State)

---

## CounterDisplay.jsx

```jsx id="lift8"
function CounterDisplay() {
  const [count] = useState(0)

  return <h1>{count}</h1>
}
```

---

## CounterButton.jsx

```jsx id="lift9"
function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      Increment
    </button>
  )
}
```

---

## Problem

Both components have separate state.

Changing one does not affect the other.

---

# 6. Correct Approach (Lift State Up)

Move state to parent.

---

## App.jsx

```jsx id="lift10"
import { useState } from "react"
import CounterDisplay from "./CounterDisplay"
import CounterButton from "./CounterButton"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterDisplay count={count} />

      <CounterButton
        count={count}
        setCount={setCount}
      />
    </div>
  )
}

export default App
```

---

## CounterDisplay.jsx

```jsx id="lift11"
function CounterDisplay({ count }) {
  return <h1>{count}</h1>
}

export default CounterDisplay
```

---

## CounterButton.jsx

```jsx id="lift12"
function CounterButton({ count, setCount }) {
  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      Increment
    </button>
  )
}

export default CounterButton
```

---

# 7. What happens now

```text id="lift13"
Button clicked
      ↓
Parent state updates
      ↓
Props passed again
      ↓
All child components re-render
      ↓
UI stays synchronized
```

---

# 8. Important Principle

In React:

```text id="lift14"
Shared state should live
in the closest common parent
```

This is a very important React design principle.

---

# 9. Data Flow in React

React uses:

```text id="lift15"
One-way data flow
```

Meaning:

```text id="lift16"
Parent → Child
```

Props flow downward only.

---

# 10. Child Updating Parent State

Children cannot directly modify parent state.

Instead:

* Parent passes setter function
* Child calls that function

Example:

```jsx id="lift17"
setCount(count + 1)
```

This updates parent state.

---

# 11. Real-world Analogy

Think of a family thermostat.

---

## Wrong approach

Each room has separate temperature system.

Result:

* Inconsistent temperatures

---

## Correct approach

One central thermostat controls all rooms.

That central thermostat is like:

```text id="lift18"
Parent component state
```

---

# 12. Common Real-world Use Cases

---

## Shopping Cart

```text id="lift19"
Cart state stored in parent
```

Shared by:

* Product list
* Cart icon
* Checkout page

---

## Authentication

```text id="lift20"
User state stored globally/parent
```

Shared by:

* Navbar
* Dashboard
* Profile page

---

## Form Inputs

```text id="lift21"
Parent stores form values
```

Shared by multiple input components.

---

# 13. Benefits of Lifting State Up

---

## 1. Shared data stays synchronized

All components see same value.

---

## 2. Better control

Parent becomes source of truth.

---

## 3. Predictable data flow

Easier debugging.

---

## 4. Easier state management

Centralized shared state.

---

# 14. Source of Truth Concept

React encourages:

```text id="lift22"
Single Source of Truth
```

Meaning:

* One place owns the data
* Other components receive it via props

---

# 15. Common Beginner Mistakes

---

## Mistake 1: Duplicating state

❌ Bad:

```text id="lift23"
Two components storing same state
```

Can become inconsistent.

---

## Mistake 2: Passing too many props

Sometimes called:

```text id="lift24"
Prop drilling
```

When state must pass through many levels.

Solution later:

* Context API
* Redux
* Zustand

---

## Mistake 3: Lifting state too high

Not all state should be global.

Keep state:

```text id="lift25"
As close as possible
to where it's needed
```

---

# 16. Mental Model

```text id="lift26"
If multiple components need same data:
        ↓
Move state upward
to nearest common parent
```

---

# 17. One-line summary

> Lifting state up is the process of moving shared state to the nearest common parent component so multiple child components can access and stay synchronized with the same data.

----------------------------------------------------------------------------------------

# Events in React

In React, **events** are used to handle user interactions.

Examples:

* Clicking a button
* Typing in an input field
* Submitting a form
* Hovering over elements
* Pressing keys

Events allow React applications to become interactive.

---

# 1. What are Events?

An event is:

> An action performed by the user or browser that React can respond to.

Examples:

* Mouse click
* Keyboard press
* Form submission
* Input change

---

# 2. Why Events are Important

Without events:

* Buttons cannot respond
* Forms cannot work
* UI cannot react to users

Events connect:

```text id="event1"
User Actions
       ↓
React Logic
       ↓
UI Updates
```

---

# 3. Event Handling in React

React handles events using **event handlers**.

---

## Basic Example

```jsx id="event2"
function App() {
  function handleClick() {
    alert("Button clicked")
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  )
}
```

---

# 4. Understanding the Syntax

```jsx id="event3"
onClick={handleClick}
```

---

## Breakdown

### `onClick`

React event

---

### `handleClick`

Function executed when event occurs

---

# 5. React Events vs HTML Events

---

## HTML

```html id="event4"
<button onclick="showMessage()">
```

---

## React

```jsx id="event5"
<button onClick={showMessage}>
```

---

# Differences

| HTML            | React                 |
| --------------- | --------------------- |
| lowercase       | camelCase             |
| string function | JS function reference |

---

# 6. Common React Events

| Event         | Description       |
| ------------- | ----------------- |
| `onClick`     | Mouse click       |
| `onChange`    | Input changes     |
| `onSubmit`    | Form submit       |
| `onMouseOver` | Mouse hover       |
| `onKeyDown`   | Key press         |
| `onFocus`     | Input focused     |
| `onBlur`      | Input loses focus |

---

# 7. onClick Event

Most common event.

---

## Example

```jsx id="event6"
function App() {
  function sayHello() {
    alert("Hello")
  }

  return (
    <button onClick={sayHello}>
      Say Hello
    </button>
  )
}
```

---

# 8. Inline Event Handlers

You can write logic directly.

---

## Example

```jsx id="event7"
<button onClick={() => alert("Clicked")}>
  Click
</button>
```

---

# But usually better:

```jsx id="event8"
<button onClick={handleClick}>
```

Cleaner and reusable.

---

# 9. Event Handling with State

Very common pattern.

---

## Counter Example

```jsx id="event9"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>
        Increment
      </button>
    </div>
  )
}
```

---

# Flow

```text id="event10"
Button click
      ↓
Event handler runs
      ↓
State updates
      ↓
React re-renders
      ↓
UI updates
```

---

# 10. onChange Event (Forms & Inputs)

Used for input fields.

---

## Example

```jsx id="event11"
import { useState } from "react"

function App() {
  const [text, setText] = useState("")

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
      />

      <h1>{text}</h1>
    </div>
  )
}
```

---

# What happens

```text id="event12"
User types
      ↓
onChange fires
      ↓
Input value captured
      ↓
State updates
      ↓
UI updates
```

---

# 11. Event Object

React automatically provides an event object.

---

## Example

```jsx id="event13"
function handleClick(event) {
  console.log(event)
}
```

---

# Common Event Object Properties

| Property             | Purpose                      |
| -------------------- | ---------------------------- |
| `event.target`       | Element that triggered event |
| `event.target.value` | Input value                  |
| `event.type`         | Event type                   |

---

# Example

```jsx id="event14"
function handleChange(event) {
  console.log(event.target.value)
}
```

---

# 12. Passing Arguments to Event Handlers

---

## Example

```jsx id="event15"
function greet(name) {
  alert(name)
}

<button onClick={() => greet("John")}>
  Click
</button>
```

---

# Why arrow function?

Without it:

❌ Wrong:

```jsx id="event16"
onClick={greet("John")}
```

This executes immediately during render.

---

# 13. Form Submission

---

## Example

```jsx id="event17"
function App() {
  function handleSubmit(event) {
    event.preventDefault()

    alert("Form Submitted")
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}
```

---

# Why preventDefault()?

Normally forms reload page.

```jsx id="event18"
event.preventDefault()
```

prevents page refresh.

---

# 14. Synthetic Events in React

React uses something called:

```text id="event19"
Synthetic Events
```

These are wrapper objects around native browser events.

Benefits:

* Cross-browser compatibility
* Consistent behavior

You usually use them same as normal events.

---

# 15. Event Bubbling in React

Events bubble upward through components.

Example:

```text id="event20"
Button clicked
      ↓
Parent div can also receive event
```

---

# Example

```jsx id="event21"
<div onClick={() => console.log("Div")}>
  <button onClick={() => console.log("Button")}>
    Click
  </button>
</div>
```

Clicking button logs:

```text id="event22"
Button
Div
```

---

# Stop Bubbling

```jsx id="event23"
event.stopPropagation()
```

---

# 16. Common Beginner Mistakes

---

## Mistake 1: Calling function immediately

❌ Wrong:

```jsx id="event24"
<button onClick={handleClick()}>
```

---

✅ Correct:

```jsx id="event25"
<button onClick={handleClick}>
```

---

## Mistake 2: Forgetting preventDefault()

Forms reload page unexpectedly.

---

## Mistake 3: Direct state mutation

❌

```jsx id="event26"
count++
```

Use setter functions.

---

# 17. Real-world Event Examples

---

## Login Form

```text id="event27"
onChange → update input state
onSubmit → send login request
```

---

## Shopping Cart

```text id="event28"
onClick → add item
```

---

## Search Box

```text id="event29"
onChange → filter results
```

---

# 18. Mental Model

```text id="event30"
User interacts
       ↓
React event fires
       ↓
Event handler runs
       ↓
State changes
       ↓
UI updates
```

---

# 19. One-line summary

> Events in React are user or browser interactions handled through event handlers that allow components to respond dynamically and update the UI.

----------------------------------------------------------------------------------------

# Conditional Rendering in React

In React, **conditional rendering** means:

> Showing different UI based on a condition (true/false, state, or data).

It’s how React apps decide *what to display* at any moment.

---

# 1. Why Conditional Rendering is needed

Real apps are not static. UI changes based on:

* User login status
* Loading state
* Errors
* Button clicks
* Data availability

Example:

* Logged in → show Dashboard
* Not logged in → show Login page

---

# 2. Basic Idea

```text id="cond1"
Condition → decides → What UI to show
```

---

# 3. Using if condition (outside JSX)

```jsx id="cond2"
function App() {
  const isLoggedIn = true

  if (isLoggedIn) {
    return <h1>Welcome Back</h1>
  }

  return <h1>Please Login</h1>
}
```

✔ Simple and clean
✔ Good for early returns

---

# 4. Using ternary operator (most common)

```jsx id="cond3"
function App() {
  const isLoggedIn = true

  return (
    <h1>
      {isLoggedIn ? "Welcome Back" : "Please Login"}
    </h1>
  )
}
```

---

# Breakdown

```text id="cond4"
condition ? true UI : false UI
```

---

# 5. Using logical AND (&&)

Used when you want to show something only if condition is true.

---

## Example

```jsx id="cond5"
function App() {
  const isLoggedIn = true

  return (
    <div>
      {isLoggedIn && <h1>Welcome User</h1>}
    </div>
  )
}
```

---

## How it works

```text id="cond6"
true && UI  → shows UI
false && UI → shows nothing
```

---

# 6. Multiple conditions

You can chain conditions using ternary.

---

## Example

```jsx id="cond7"
function App() {
  const role = "admin"

  return (
    <h1>
      {role === "admin"
        ? "Admin Panel"
        : role === "user"
        ? "User Dashboard"
        : "Guest Page"}
    </h1>
  )
}
```

---

# 7. Conditional rendering with state

Very common in real apps.

---

## Example: Toggle message

```jsx id="cond8"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show ? <h1>Hello World</h1> : null}
    </div>
  )
}
```

---

# 8. Showing/Hiding components

Instead of text, you can render full components.

---

## Example

```jsx id="cond9"
function Login() {
  return <h1>Login Page</h1>
}

function Dashboard() {
  return <h1>Dashboard</h1>
}

function App() {
  const isLoggedIn = true

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  )
}
```

---

# 9. Conditional rendering with loading state

Very important in real apps.

---

## Example

```jsx id="cond10"
function App() {
  const isLoading = true

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Data Loaded</h1>
      )}
    </div>
  )
}
```

---

# 10. Real-world API example

```jsx id="cond11"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData("User Data Loaded")
    }, 2000)
  }, [])

  return (
    <div>
      {data ? (
        <h1>{data}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}
```

---

# 11. Returning null

If you don’t want to show anything:

```jsx id="cond12"
function App() {
  const showMessage = false

  if (!showMessage) {
    return null
  }

  return <h1>Hello</h1>
}
```

---

# 12. Conditional classes (UI styling)

```jsx id="cond13"
function App() {
  const isActive = true

  return (
    <div className={isActive ? "active" : "inactive"}>
      Status
    </div>
  )
}
```

---

# 13. Common patterns summary

| Method         | Use case           |
| -------------- | ------------------ |
| `if` statement | Early return logic |
| ternary `? :`  | UI switching       |
| `&&`           | Show only if true  |
| `null`         | Show nothing       |

---

# 14. Mental model

```text id="cond14"
State/Condition
      ↓
React checks condition
      ↓
Chooses UI branch
      ↓
Renders result
```

---

# 15. Common mistakes

---

## Mistake 1: Using if inside JSX

❌ Wrong:

```jsx id="cond15"
return (
  <div>
    if (isLoggedIn) { ... }
  </div>
)
```

---

## Mistake 2: Forgetting return in ternary

---

## Mistake 3: Rendering undefined values

Can break UI if not handled properly.

---

# 16. One-line summary

> Conditional rendering in React means showing different UI elements based on conditions like state, props, or logic using if statements, ternary operators, or logical operators.

----------------------------------------------------------------------------------------

# Lists and Keys in React

In React, **lists and keys** are used when you want to display multiple items dynamically (like arrays of data).

Most real-world apps use lists:

* Todo items
* Product lists
* User lists
* Comments
* Notifications

---

# 1. What is a List in React?

A list means:

> Rendering multiple elements from an array.

Instead of writing UI repeatedly, React allows you to generate UI using `.map()`.

---

## Example (Simple array)

```jsx id="list1"
const fruits = ["Apple", "Banana", "Mango"]
```

---

## Rendering list in React

```jsx id="list2"
function App() {
  const fruits = ["Apple", "Banana", "Mango"]

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  )
}
```

---

# 2. Why we use map()

Because React does NOT allow loops directly inside JSX.

❌ Wrong:

```jsx id="list3"
for (let i = 0; i < 3; i++) {
  return <li>Item</li>
}
```

✔ Correct approach:

```jsx id="list4"
array.map()
```

---

# 3. Lists of Objects (Real-world use case)

Most real apps use objects.

---

## Example data

```jsx id="list5"
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Mike" }
]
```

---

## Rendering list

```jsx id="list6"
function App() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Mike" }
  ]

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  )
}
```

---

# 4. What are Keys?

A **key** is a special attribute used to uniquely identify each item in a list.

---

## Why keys are needed

React uses keys to:

* Track items
* Optimize rendering
* Know what changed

---

## Without keys (problem)

React gets confused when updating list items.

---

## With keys (solution)

```jsx id="list7"
{users.map((user) => (
  <li key={user.id}>{user.name}</li>
))}
```

---

# 5. Key Rule

> Keys must be unique among siblings.

---

## Good keys:

```text id="list8"
id, uuid, unique identifier
```

---

## Bad keys:

```text id="list9"
index (sometimes OK, but not recommended)
```

---

# 6. Why NOT to use index as key

Example:

```jsx id="list10"
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

### Problem:

If list order changes:

* React may update wrong items
* UI bugs can happen

---

# 7. Correct way (best practice)

```jsx id="list11"
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

---

# 8. Lists with Components

You can render components inside lists.

---

## Example

```jsx id="list12"
function User({ name }) {
  return <li>{name}</li>
}

function App() {
  const users = ["John", "Sara", "Mike"]

  return (
    <ul>
      {users.map((user, index) => (
        <User key={index} name={user} />
      ))}
    </ul>
  )
}
```

---

# 9. Real-world Example (Todo List)

```jsx id="list13"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Project" }
  ])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
```

---

# 10. Updating lists (concept preview)

Later you can:

* Add items
* Remove items
* Update items

React uses keys to handle these efficiently.

---

# 11. Lists + Conditional Rendering

You can combine both:

```jsx id="list14"
{users.length > 0 ? (
  users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))
) : (
  <p>No users found</p>
)}
```

---

# 12. Mental model

```text id="list15"
Array of data
      ↓
map() transforms data
      ↓
JSX elements created
      ↓
React renders list
      ↓
Keys help track items
```

---

# 13. Common mistakes

---

## Mistake 1: Missing key

❌

```jsx id="list16"
<li>{item}</li>
```

---

## Mistake 2: Using index blindly

Can cause UI bugs when list changes.

---

## Mistake 3: Not returning JSX in map

❌

```jsx id="list17"
items.map(item => {
  <li>{item}</li>
})
```

✔ Correct:

```jsx id="list18"
items.map(item => (
  <li>{item}</li>
))
```

---

# 14. One-line summary

> Lists in React are rendered using the map function, and keys are unique identifiers that help React efficiently track and update each item in the list.

----------------------------------------------------------------------------------------

# Forms in React

In React, **forms** are used to collect user input like:

* Login details
* Signup information
* Search input
* Feedback forms
* Checkout details

Forms are one of the most important parts of real-world web apps.

---

# 1. Why Forms are special in React

In normal HTML:

* Browser automatically manages form inputs

In React:

> We manually control form data using state

This is called:

```text
Controlled Components
```

---

# 2. Two types of form handling

## 1. Uncontrolled (less used)

* DOM handles input values
* React does not control input

## 2. Controlled (recommended)

* React controls input using state
* Real-time sync between UI and data

👉 We mainly use controlled components.

---

# 3. Controlled Input Basics

```jsx id="form1"
import { useState } from "react"

function App() {
  const [name, setName] = useState("")

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}
```

---

# 4. How it works

```text id="form2"
User types
     ↓
onChange triggers
     ↓
State updates
     ↓
Input value updates
     ↓
UI stays in sync
```

---

# 5. Key parts of a controlled input

## value

```jsx id="form3"
value={name}
```

👉 Input is controlled by React state

---

## onChange

```jsx id="form4"
onChange={(e) => setName(e.target.value)}
```

👉 Updates state when user types

---

# 6. Full Form Example

```jsx id="form5"
import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
}
```

---

# 7. Form submission

## Important event:

```jsx id="form6"
onSubmit
```

---

## Prevent page reload

```jsx id="form7"
e.preventDefault()
```

Without this:

* Page refreshes
* React state resets

---

# 8. Multiple Inputs (Best Practice)

Instead of many states, use one object:

---

## Example

```jsx id="form8"
import { useState } from "react"

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  )
}
```

---

# 9. Why this pattern is powerful

* Scalable for large forms
* Easier to manage validation
* Cleaner state structure

---

# 10. Checkbox handling

```jsx id="form9"
const [isChecked, setIsChecked] = useState(false)

<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

---

# 11. Radio buttons

```jsx id="form10"
const [gender, setGender] = useState("")

<input
  type="radio"
  value="male"
  checked={gender === "male"}
  onChange={(e) => setGender(e.target.value)}
/>
```

---

# 12. Select dropdown

```jsx id="form11"
const [city, setCity] = useState("")

<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="blr">Bangalore</option>
  <option value="delhi">Delhi</option>
</select>
```

---

# 13. Form validation (basic idea)

```jsx id="form12"
if (!name) {
  alert("Name is required")
}
```

You can validate:

* Empty fields
* Email format
* Password strength

---

# 14. Common mistakes

---

## Mistake 1: Missing value

❌

```jsx id="form13"
<input onChange={...} />
```

---

## Mistake 2: Not using state

❌

```jsx id="form14"
let name = ""
```

React will not track changes.

---

## Mistake 3: Forgetting preventDefault

Page reloads unexpectedly.

---

# 15. Controlled vs Uncontrolled

| Controlled           | Uncontrolled           |
| -------------------- | ---------------------- |
| Uses state           | Uses DOM               |
| React controls input | Browser controls input |
| Recommended          | Rare use               |

---

# 16. Mental model

```text id="form15"
User types
     ↓
React state updates
     ↓
UI re-renders
     ↓
Input stays in sync
```

---

# 17. Real-world use cases

* Login page
* Signup form
* Payment checkout
* Contact forms
* Search bars

---

# 18. One-line summary

> Forms in React are usually controlled components where input values are managed by state and updated through event handlers to keep UI and data in sync.

----------------------------------------------------------------------------------------

# Controlled vs Uncontrolled Components in React

In React, form inputs can be handled in two ways:

1. **Controlled Components**
2. **Uncontrolled Components**

Both deal with how input data is managed, but the key difference is:

> Who controls the form data — React or the DOM?

---

# 1. Controlled Components

## Definition:

> A controlled component is where React controls the form input value using state.

---

## Example:

```jsx id="ctrl1"
import { useState } from "react"

function App() {
  const [name, setName] = useState("")

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}
```

---

## How it works:

```text id="ctrl2"
User types
     ↓
onChange triggers
     ↓
React state updates
     ↓
value updates from state
```

---

## Key idea:

👉 React is the **single source of truth**

---

## Features:

* Input value is stored in state
* UI always reflects state
* Easy to validate
* Easy to control

---

## Advantages:

* Full control over form data
* Real-time validation possible
* Easier debugging
* Predictable behavior

---

## Disadvantages:

* More code (state + handlers)
* Slightly more setup

---

# 2. Uncontrolled Components

## Definition:

> An uncontrolled component is where the DOM itself manages the form data.

React does NOT track every change.

---

## Example:

```jsx id="unctrl1"
import { useRef } from "react"

function App() {
  const nameRef = useRef()

  function handleSubmit() {
    alert(nameRef.current.value)
  }

  return (
    <div>
      <input ref={nameRef} />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
```

---

## How it works:

```text id="unctrl2"
User types
     ↓
DOM stores value internally
     ↓
React only reads value when needed
```

---

## Key idea:

👉 DOM is the **single source of truth**

---

## Features:

* No state needed
* Uses `ref` instead of state
* Values accessed when needed

---

## Advantages:

* Less code
* Simple for small forms
* Better performance for large uncontrolled inputs

---

## Disadvantages:

* Hard to validate in real-time
* Less control
* Not ideal for complex forms

---

# 3. Side-by-side comparison

| Feature          | Controlled    | Uncontrolled     |
| ---------------- | ------------- | ---------------- |
| Who manages data | React (state) | DOM              |
| Data access      | Every change  | Only when needed |
| Validation       | Easy          | Hard             |
| Code complexity  | More          | Less             |
| Recommended      | Yes           | Rare use         |

---

# 4. Real-world analogy

## Controlled Component

Like a **remote-controlled car**:

* React controls everything
* Every movement is tracked

---

## Uncontrolled Component

Like a **manual car**:

* DOM controls input
* React only checks when needed

---

# 5. When to use Controlled Components

Use controlled when:

* Forms are complex
* Validation is needed
* Real-time updates required
* Multi-step forms exist

Examples:

* Login form
* Signup form
* Checkout form

---

# 6. When to use Uncontrolled Components

Use uncontrolled when:

* Simple forms
* File uploads
* Quick input reading
* Performance-sensitive cases

---

# 7. Accessing value in Uncontrolled

Using `ref`:

```jsx id="unctrl3"
const inputRef = useRef()

console.log(inputRef.current.value)
```

---

# 8. Common mistake

❌ Mixing both without reason:

```jsx id="bad1"
<input value="hello" ref={ref} />
```

This can cause conflicts.

---

# 9. Mental model

## Controlled:

```text id="model1"
Input → State → UI
```

## Uncontrolled:

```text id="model2"
Input → DOM → React reads later
```

---

# 10. Summary

> Controlled components are managed by React state, while uncontrolled components are managed by the DOM using refs; controlled is preferred for most applications due to better control and predictability.

----------------------------------------------------------------------------------------

# Component Lifecycle in React

In React, **component lifecycle** refers to the different stages a component goes through from the moment it appears on the screen until it is removed.

Think of it as:

> Birth → Update → Death of a component

---

# 1. Why lifecycle matters

Lifecycle helps you handle real-world tasks like:

* Fetching data from APIs
* Setting up timers
* Updating UI when data changes
* Cleaning up resources

---

# 2. Three main lifecycle phases

Every component goes through 3 phases:

```text id="life1"
1. Mounting   → Component is created & added to UI
2. Updating   → Component changes (props/state change)
3. Unmounting → Component is removed from UI
```

---

# 3. Mounting (Component loads first time)

This is when the component appears on screen.

## Example flow:

```text id="life2"
Component created → JSX rendered → UI shown
```

---

## Functional component equivalent

Using `useEffect`:

```jsx id="life3"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    console.log("Component mounted")
  }, [])

  return <h1>Hello</h1>
}
```

---

## Important point:

```text id="life4"
[] dependency = runs only once (mounting)
```

---

# 4. Updating (Re-render phase)

Occurs when:

* State changes
* Props change

---

## Example:

```jsx id="life5"
import { useState, useEffect } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component updated")
  })

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}
```

---

## Key idea:

```text id="life6"
Every re-render = update phase
```

---

# 5. Updating with dependency array

```jsx id="life7"
useEffect(() => {
  console.log("Count changed")
}, [count])
```

---

## Meaning:

```text id="life8"
Runs only when 'count' changes
```

---

# 6. Unmounting (Component removed)

This happens when:

* You switch pages
* Component is hidden or removed

---

## Example:

```jsx id="life9"
import { useEffect } from "react"

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...")
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log("Component unmounted")
    }
  }, [])

  return <h1>Timer Running</h1>
}
```

---

## Key concept:

```text id="life10"
Cleanup function = runs on unmount
```

---

# 7. Full lifecycle summary

```text id="life11"
Mounting   → useEffect(() => {}, [])
Updating   → useEffect(() => {})
Specific   → useEffect(() => {}, [state])
Unmounting → return cleanup function
```

---

# 8. Class Component Lifecycle (old way)

Before hooks, lifecycle methods were used:

```jsx id="life12"
class App extends React.Component {
  componentDidMount() {
    console.log("Mounted")
  }

  componentDidUpdate() {
    console.log("Updated")
  }

  componentWillUnmount() {
    console.log("Unmounted")
  }

  render() {
    return <h1>Hello</h1>
  }
}
```

---

# 9. Mapping class lifecycle to hooks

| Class                | Functional (Hooks)          |
| -------------------- | --------------------------- |
| componentDidMount    | useEffect(() => {}, [])     |
| componentDidUpdate   | useEffect(() => {})         |
| componentWillUnmount | return cleanup in useEffect |

---

# 10. Real-world examples

## Mounting:

* Fetch user data
* Load page content

## Updating:

* Search filtering
* Counter updates

## Unmounting:

* Stop timers
* Cancel API requests

---

# 11. Mental model

```text id="life13"
Mount → Show UI
Update → Change UI
Unmount → Remove UI
```

---

# 12. Common mistakes

---

## Mistake 1: Missing dependency array

```jsx id="life14"
useEffect(() => {
  console.log("Runs every render")
})
```

---

## Mistake 2: Infinite loop

```jsx id="life15"
useEffect(() => {
  setCount(count + 1)
}, [count])
```

---

## Mistake 3: Not cleaning up

Timers or subscriptions can leak memory.

---

# 13. One-line summary

> Component lifecycle in React refers to the mounting, updating, and unmounting phases of a component, which are handled in functional components using the `useEffect` hook.

----------------------------------------------------------------------------------------

# Re-rendering & React Behavior

In React, **re-rendering** means:

> React runs a component function again to update the UI when data changes.

This is one of the most important concepts for interviews and real-world debugging.

---

# 1. What is Rendering?

When a component runs for the first time:

```text id="rr1"
Component → JSX → UI on screen
```

This is called **initial render**.

---

# 2. What is Re-rendering?

A **re-render** happens when React runs the component again.

```text id="rr2"
State/Props change → Component runs again → UI updates
```

---

# 3. What triggers re-render?

There are 3 main triggers:

## 1. State change

```jsx id="rr3"
setCount(count + 1)
```

---

## 2. Props change

Parent sends new data:

```jsx id="rr4"
<User name="John" />
```

If `name` changes → re-render happens.

---

## 3. Parent re-render

If parent re-renders, child also re-renders (by default).

---

# 4. Simple example

```jsx id="rr5"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  console.log("Component rendered")

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

---

## What happens?

```text id="rr6"
Click button
   ↓
setCount updates state
   ↓
React re-renders component
   ↓
console.log runs again
   ↓
UI updates
```

---

# 5. Important idea

> React function components are NOT called only once.

They run again and again when needed.

---

# 6. Why re-render happens

React follows this rule:

```text id="rr7"
UI = f(state)
```

So when state changes:
👉 React recalculates UI

---

# 7. Does re-render mean full page reload?

❌ NO

React does NOT reload page
✔ It only re-runs component logic
✔ Then updates only changed parts of DOM

---

# 8. Virtual DOM role in re-render

```text id="rr8"
State change
   ↓
New Virtual DOM created
   ↓
Compare with old (diffing)
   ↓
Update only changed parts in real DOM
```

---

# 9. Parent → Child re-render behavior

## Example:

```jsx id="rr9"
function Child() {
  console.log("Child rendered")
  return <h1>Child</h1>
}

function Parent() {
  const [count, setCount] = useState(0)

  console.log("Parent rendered")

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
      <Child />
    </>
  )
}
```

---

## What happens?

When button is clicked:

```text id="rr10"
Parent re-renders
   ↓
Child ALSO re-renders
```

Even if Child has no props.

---

# 10. Important interview concept

> In React, re-rendering does NOT mean DOM update every time.

React decides:
✔ what actually changed
✔ what to update in DOM

---

# 11. Unnecessary re-renders (problem)

Sometimes components re-render even when not needed.

Example:

* Child re-renders but UI doesn’t change

This can affect performance in large apps.

---

# 12. How to reduce re-renders (basic idea)

You don’t need deep optimization now, just know:

## 1. React.memo

Prevents unnecessary child re-render

## 2. useMemo

Memoizes values

## 3. useCallback

Memoizes functions

---

# 13. React rendering lifecycle (mental model)

```text id="rr11"
1. Render (JSX execution)
2. Re-render (state/props change)
3. Reconciliation (compare changes)
4. Commit (update real DOM)
```

---

# 14. Key insight (VERY IMPORTANT)

React is NOT event-driven UI like jQuery.

Instead:

```text id="rr12"
UI = function(state)
```

So:

* change state → UI recalculates
* React decides updates automatically

---

# 15. Common mistakes

---

## Mistake 1: Thinking setState is instant

❌ Wrong expectation:

```text id="rr13"
setCount → immediate UI update
```

✔ Actually:

* React batches updates
* then re-renders

---

## Mistake 2: Thinking component runs only once

❌ Wrong

Components run MANY times.

---

## Mistake 3: Confusing re-render with DOM update

Re-render ≠ DOM change always

---

# 16. Real-world analogy

Think of a calculator:

```text id="rr14"
Input changes → recalculates result → shows updated output
```

React does same:

* state change → recalculates UI → updates screen

---

# 17. One-line summary

> Re-rendering in React means a component function runs again when state or props change, allowing React to recalculate UI and update only the necessary parts of the DOM efficiently.

----------------------------------------------------------------------------------------

# Component Patterns in React

In React, **component patterns** are common ways of designing and structuring components so that your code becomes:

* reusable
* scalable
* easier to maintain
* interview-friendly

Instead of just writing components randomly, React apps follow patterns.

---

# 1. Why Component Patterns matter

Without patterns:

* components become messy
* logic is repeated
* props get confusing (prop drilling)

With patterns:

* clean architecture
* reusable UI blocks
* easier debugging

---

# 2. Main Component Patterns you MUST know

We’ll cover the important ones:

1. Container vs Presentational Components
2. Reusable Components
3. Composition (VERY IMPORTANT)
4. Props Drilling Pattern
5. Compound Components (basic idea)
6. Higher Order Components (HOC - basic idea)

---

# 3. Container vs Presentational Components

## Idea:

Split:

* logic (container)
* UI (presentational)

---

## Presentational Component (UI only)

```jsx id="cp1"
function UserCard({ name }) {
  return <h1>{name}</h1>
}
```

👉 Only displays data
👉 No logic

---

## Container Component (logic)

```jsx id="cp2"
import { useState } from "react"
import UserCard from "./UserCard"

function UserContainer() {
  const [name] = useState("John")

  return <UserCard name={name} />
}
```

---

## Why this is useful

```text id="cp3"
Logic separated from UI → reusable + clean
```

---

# 4. Reusable Components Pattern

This is the MOST common pattern.

## Example:

```jsx id="cp4"
function Button({ text }) {
  return <button>{text}</button>
}
```

Usage:

```jsx id="cp5"
<Button text="Login" />
<Button text="Signup" />
<Button text="Logout" />
```

---

## Key idea:

```text id="cp6"
One component → multiple uses
```

---

# 5. Composition Pattern (VERY IMPORTANT ⭐)

Instead of passing many props, you pass **children**.

---

## Example:

```jsx id="cp7"
function Card({ children }) {
  return <div className="card">{children}</div>
}
```

Usage:

```jsx id="cp8"
<Card>
  <h1>Title</h1>
  <p>Description</p>
</Card>
```

---

## Why composition is powerful

✔ avoids prop drilling
✔ highly flexible
✔ used in real-world UI libraries

---

# 6. Props Drilling Pattern (problem pattern)

This is NOT a good pattern, but important to understand.

---

## Example:

```text id="cp9"
App → Parent → Child → GrandChild
```

Data passed through many levels:

```jsx id="cp10"
<App user={user} />
```

→ Parent passes → Child passes → GrandChild uses it

---

## Problem:

* too many props
* hard to maintain
* messy code

---

## Solution (preview):

Later fixed using:

* Context API
* state management tools

---

# 7. Compound Components (basic idea)

Used when components work together.

---

## Example: Tabs system

```jsx id="cp11"
<Tabs>
  <Tab>Home</Tab>
  <Tab>Profile</Tab>
</Tabs>
```

---

## Idea:

```text id="cp12"
Parent controls logic
Children control UI pieces
```

---

This pattern is used in:

* UI libraries (like MUI, Chakra UI)

---

# 8. Higher Order Components (HOC)

## Definition:

> A function that takes a component and returns a new enhanced component.

---

## Example:

```jsx id="cp13"
function withLogging(Component) {
  return function WrappedComponent(props) {
    console.log("Rendered")
    return <Component {...props} />
  }
}
```

---

## Usage:

```jsx id="cp14"
const EnhancedUser = withLogging(User)
```

---

## Idea:

```text id="cp15"
Component → HOC → Enhanced Component
```

---

# 9. Modern alternative to HOC

Today, HOCs are mostly replaced by:

* hooks
* composition

But still asked in interviews.

---

# 10. Real-world pattern usage

| Pattern                  | Where used        |
| ------------------------ | ----------------- |
| Composition              | UI layouts        |
| Reusable components      | Buttons, inputs   |
| Container/presentational | data separation   |
| HOC                      | auth, logging     |
| Props drilling           | (problem pattern) |

---

# 11. Mental model

```text id="cp16"
Break UI into:
   ↓
Small reusable pieces
   ↓
Compose them together
   ↓
Add logic separately if needed
```

---

# 12. Common mistakes

---

## Mistake 1: Too many props

❌ messy components

---

## Mistake 2: Not using composition

❌ hardcoded layouts

---

## Mistake 3: Mixing logic + UI everywhere

❌ not scalable

---

# 13. Interview insight (VERY IMPORTANT)

Interviewers often check:

* Can you reuse components?
* Do you understand composition?
* Do you know prop drilling problem?
* Can you separate logic from UI?

---

# 14. One-line summary

> Component patterns in React are reusable design strategies like composition, reusable components, and container-presentational separation that help build scalable and maintainable applications.

----------------------------------------------------------------------------------------

# Basic React Architecture

In React, **architecture** means:

> How you organize your files, components, and logic in a structured way so your app is scalable and easy to maintain.

This becomes very important when your app grows beyond small examples.

---

# 1. Why architecture matters

Without structure:

* components get messy
* logic is duplicated
* debugging becomes hard
* scaling becomes painful

With good architecture:

* clean codebase
* reusable components
* easy collaboration
* interview-ready projects

---

# 2. Basic idea of React architecture

```text id="arch1"
App
 ├── Pages (screens)
 ├── Components (reusable UI)
 ├── Hooks (logic)
 ├── Utils (helper functions)
 ├── Services (API calls)
 └── Assets (images, styles)
```

---

# 3. Common folder structure

## Simple beginner structure

```text id="arch2"
src/
 ├── components/
 ├── App.jsx
 ├── main.jsx
```

Good for small apps.

---

## Standard interview-ready structure

```text id="arch3"
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── services/
 ├── utils/
 ├── context/
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

---

# 4. What goes where?

---

## 1. Components

Reusable UI parts

Examples:

* Button
* Navbar
* Card
* Input

```text id="arch4"
components/Button.jsx
```

---

## 2. Pages

Full screens / routes

Examples:

* Home page
* Login page
* Dashboard

```text id="arch5"
pages/Home.jsx
pages/Login.jsx
```

---

## 3. Hooks

Reusable logic

Examples:

* useFetch
* useAuth
* useCounter

```text id="arch6"
hooks/useFetch.js
```

---

## 4. Services

API calls (backend communication)

Example:

```text id="arch7"
services/api.js
```

---

## 5. Utils

Helper functions

Examples:

* formatDate
* validateEmail

```text id="arch8"
utils/formatDate.js
```

---

## 6. Context

Global state management

Examples:

* Auth context
* Theme context

```text id="arch9"
context/AuthContext.jsx
```

---

## 7. Assets

Static files

* images
* icons
* CSS

```text id="arch10"
assets/logo.png
```

---

# 5. Real React flow (important)

```text id="arch11"
User opens app
   ↓
App.jsx loads
   ↓
Routes load pages
   ↓
Pages use components
   ↓
Components use hooks/services
   ↓
UI rendered
```

---

# 6. Example real project structure

For a job-ready project:

```text id="arch12"
src/
 ├── components/
 │    ├── Button.jsx
 │    ├── Navbar.jsx
 │    └── Card.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Login.jsx
 │    └── Dashboard.jsx
 │
 ├── hooks/
 │    └── useFetch.js
 │
 ├── services/
 │    └── api.js
 │
 ├── context/
 │    └── AuthContext.jsx
 │
 ├── utils/
 │    └── helpers.js
 │
 ├── App.jsx
 └── main.jsx
```

---

# 7. Key architectural principles

---

## 1. Separation of concerns

```text id="arch13"
UI ≠ Logic ≠ API
```

---

## 2. Reusability

Components should be reusable.

---

## 3. Single responsibility

One file = one job.

---

## 4. Scalability

Structure should work even if app grows big.

---

# 8. Beginner vs Pro mindset

| Beginner               | Pro                 |
| ---------------------- | ------------------- |
| Everything in one file | Organized folders   |
| Repeated code          | Reusable components |
| Mixed logic            | Separated logic     |
| Hard to scale          | Easy to scale       |

---

# 9. Common mistakes

---

## Mistake 1: Everything in App.jsx

❌ unmaintainable code

---

## Mistake 2: No folder structure

❌ messy project

---

## Mistake 3: Over-engineering early

Don’t create too many folders for small apps.

---

# 10. Interview insight

Interviewers look for:

* Do you organize components properly?
* Do you separate API logic?
* Do you use reusable components?
* Do you understand scalability?

---

# 11. Mental model

```text id="arch14"
Think like this:

Small parts (components)
   ↓
Organized folders
   ↓
Clear responsibilities
   ↓
Scalable application
```

---

# 12. One-line summary

> Basic React architecture is the organized structure of components, pages, hooks, services, and utilities that helps build scalable and maintainable applications.

----------------------------------------------------------------------------------------

# 4. API Handling in React (REAL-WORLD CORE)

In React, **API handling** means:

> Connecting your frontend React app to a backend server to fetch or send data.

This is what makes React apps “real-world apps” (not just UI demos).

---

# 1. What is an API?

API = Application Programming Interface

In web apps, it usually means:

> A URL that returns data (mostly JSON)

Example:

```text id="api1"
https://api.example.com/users
```

It returns:

```json id="api2"
[
  { "id": 1, "name": "John" },
  { "id": 2, "name": "Sara" }
]
```

---

# 2. Why API handling is important

Without APIs:

* your app has fixed data
* no real users
* no dynamic content

With APIs:

* live data
* real applications
* backend communication

---

# 3. Basic API flow in React

```text id="api3"
React loads component
      ↓
Call API
      ↓
Get data from server
      ↓
Store in state
      ↓
Show in UI
```

---

# 4. Fetching data using fetch()

## Basic example:

```jsx id="api4"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
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

# 5. Why use useEffect?

Because:

> API call should run when component loads

```text id="api5"
[] dependency = run once (on mount)
```

---

# 6. Using async/await (cleaner way)

```jsx id="api6"
useEffect(() => {
  async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setUsers(data)
  }

  fetchUsers()
}, [])
```

---

# 7. API States (VERY IMPORTANT)

Every real app has 3 states:

---

## 1. Loading state

```jsx id="api7"
const [loading, setLoading] = useState(true)
```

---

## 2. Success state

Data loaded successfully

---

## 3. Error state

If API fails

---

## Full example:

```jsx id="api8"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!res.ok) {
          throw new Error("Failed to fetch")
        }

        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

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

# 8. API with axios (popular alternative)

Install:

```text id="api9"
npm install axios
```

---

## Example:

```jsx id="api10"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
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

# 9. POST request (sending data)

```jsx id="api11"
async function createUser() {
  await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "John"
    })
  })
}
```

---

# 10. Real-world pattern (IMPORTANT)

Most apps follow this structure:

```text id="api12"
Component
   ↓
useEffect
   ↓
Service/API file
   ↓
Backend API
```

---

## Example structure:

```text id="api13"
services/api.js
```

```jsx id="api14"
import axios from "axios"

export const getUsers = () => {
  return axios.get("https://api.example.com/users")
}
```

---

Then in component:

```jsx id="api15"
useEffect(() => {
  getUsers().then((res) => setUsers(res.data))
}, [])
```

---

# 11. Common mistakes

---

## Mistake 1: Calling API directly in render

❌ Wrong:

```jsx id="api16"
fetch(...) inside component body
```

---

## Mistake 2: Missing dependency array

Leads to infinite requests.

---

## Mistake 3: Not handling errors

Breaks UI in production apps.

---

# 12. Performance tip (basic)

* Avoid multiple API calls unnecessarily
* Cache data if needed (later advanced topic)

---

# 13. Mental model

```text id="api17"
Component mounts
     ↓
API request sent
     ↓
Waiting (loading)
     ↓
Data received
     ↓
State updated
     ↓
UI re-renders
```

---

# 14. Where API handling is used

* Login/signup systems
* Product listings
* Dashboards
* Social media feeds
* Search results

---

# 15. Interview important points

Be ready to explain:

* What is API in React?
* Why use useEffect for API calls?
* How do you handle loading/error states?
* fetch vs axios difference
* What happens during API lifecycle?

---

# 16. One-line summary

> API handling in React is the process of fetching or sending data using useEffect and storing it in state while managing loading, success, and error states to build real-world dynamic applications.

----------------------------------------------------------------------------------------


