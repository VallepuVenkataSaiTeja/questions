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
