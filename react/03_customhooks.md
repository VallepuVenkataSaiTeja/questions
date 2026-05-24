In React, **custom hooks** are a way to extract and reuse logic across components. They let you package stateful behavior (using built-in hooks like `useState`, `useEffect`, etc.) into a reusable function.

---

## 🔹 What is a Custom Hook?

A custom hook is simply a **JavaScript function whose name starts with `use`** and that can call other hooks.

```jsx
function useSomething() {
  // hook logic here
}
```

---

## 🔹 Why Use Custom Hooks?

* Reuse logic across components
* Keep components clean and readable
* Avoid duplication
* Improve maintainability

---

## 🔹 Basic Example

### Without Custom Hook

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### With Custom Hook

```jsx
import { useState, useEffect } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return { count, setCount };
}
```

Use it in a component:

```jsx
function Example() {
  const { count, setCount } = useCounter();

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 🔹 Real-World Example: Fetch Data Hook

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, [url]);

  return { data, loading };
}
```

Usage:

```jsx
function App() {
  const { data, loading } = useFetch("https://api.example.com");

  if (loading) return <p>Loading...</p>;

  return <div>{JSON.stringify(data)}</div>;
}
```

---

## 🔹 Rules for Custom Hooks

Same rules as React hooks:

* Only call hooks at the **top level**
* Only call hooks from:

  * React components
  * Other custom hooks
* Always start the name with `use`

---

## 🔹 Common Custom Hooks Ideas

* `useLocalStorage`
* `useWindowSize`
* `useDebounce`
* `useAuth`
* `useForm`

---

## 🔹 Key Insight

Custom hooks don’t share state between components — they share **logic**, not data. Each component using the hook gets its own state instance.

----------------------------------------------------------------------------------------

## Custom Hooks in React (Complete Explanation)

In React, **custom hooks** let you extract reusable logic from components into a separate function.

They are one of the most powerful features of React.

---

# 1. What is a Custom Hook?

A **custom hook** is:

> A JavaScript function that starts with `use` and uses built-in React hooks inside it.

Example:

```js
function useSomething() {
  // logic using hooks
}
```

---

# 2. Why do we need custom hooks?

Without custom hooks:

* Logic gets repeated in multiple components
* Components become messy
* Hard to maintain

With custom hooks:

* Logic is reusable
* Components become clean
* Easier to manage complex behavior

---

# 3. Simple Example (Counter Logic)

### Without custom hook:

Every component repeats logic.

---

### With custom hook:

```jsx
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

export default useCounter;
```

---

### Using it in components:

```jsx
import useCounter from "./useCounter";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

---

# 4. Rules of Custom Hooks

Custom hooks follow React Hook rules:

## ✔ Must start with `use`

```js
function useFetchData() {}
```

## ✔ Can use other hooks inside

```js
useState()
useEffect()
useContext()
```

## ❌ Cannot be used conditionally inside hooks

Wrong:

```js
if (true) {
  useState();
}
```

---

# 5. Real-world Example: Fetch API Hook

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useFetch;
```

---

### Using it:

```jsx
import useFetch from "./useFetch";

function Users() {
  const { data, loading } = useFetch("https://api.example.com/users");

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

# 6. Custom Hook vs Normal Function

| Feature           | Custom Hook | Normal Function   |
| ----------------- | ----------- | ----------------- |
| Uses React hooks  | Yes         | No                |
| Has state         | Yes         | No                |
| Reusable logic    | Yes         | Yes (but limited) |
| Lifecycle support | Yes         | No                |

---

# 7. Common Use Cases

Custom hooks are used for:

### 1. API calls

* `useFetch`
* `useAxios`

### 2. Forms

* `useFormLogic`

### 3. Authentication

* `useAuth`

### 4. Local storage

```js
useLocalStorage()
```

### 5. Debouncing

```js
useDebounce()
```

---

# 8. Example: Local Storage Hook

```jsx
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
```

---

### Usage:

```jsx
const [name, setName] = useLocalStorage("name", "");
```

---

# 9. Mental Model

Think of custom hooks like:

> “Reusable logic modules for React components”

Not UI — only logic.

---

# 10. Important Points

* Custom hooks do NOT render UI
* They only handle logic/state
* They can use other hooks
* They make components cleaner and scalable

---

# 11. When to create a custom hook?

Create one when:

* logic is repeated in 2+ components
* component is getting too large
* you want separation of concerns
* you want reusable behavior

----------------------------------------------------------------------------------------