# DOM Topics in JavaScript

## 1. Introduction to DOM

* What is DOM?                     
// Document Object Model
// It is a programming interface provided by the browser that allows JavaScript to: 
access HTML elements
change content
change styles
add/remove elements
respond to user actions

* DOM Tree Structure               
// DOM is organized like a tree , Every HTML tag becomes a node in the tree.

* Nodes and Elements               
// Everything inside the DOM is called a node , An element is an HTML tag

* `document` object                
// main entry point to the DOM

* Difference between HTML and DOM
// HTML = Blueprint of a house
// DOM = Actual house built from blueprint
// JavaScript = Person modifying the house

---

## 2. Selecting Elements

* `getElementById()`          // single element
* `getElementsByClassName()`  // HTMLCollection
* `getElementsByTagName()`    // HTMLCollection
* `querySelector()`           // single element 
* `querySelectorAll()`        // NodeList - forEach()

Example:

```js
const title = document.getElementById("heading");
const btn = document.querySelector(".btn");
```

---

## 3. Changing Content

* `innerHTML`      // Changes HTML inside an element
* `innerText`      // Changes only visible text
* `textContent`    // Changes all text content (including hidden text)

Example:

```js
element.innerHTML = "<h1>Hello</h1>";
```

---

## 4. Changing Styles

* Inline styles

* `style` property    
// element.style.property = "value";
title.style.color = "red";
title.style.fontSize = "40px";
title.style.backgroundColor = "yellow";

* CSS classes
// .active {
  color: white;
  background-color: black;
  font-size: 40px;
}

* `classList`
// title.classList.add("active");
// title.classList.remove("active");
// title.classList.toggle("active");
// console.log(title.classList.contains("active"));  -  true / false

Methods:

* `add()`
* `remove()`
* `toggle()`
* `contains()`

Example:

```js
box.classList.add("active");
```

---

## 5. Attributes Manipulation

* `getAttribute()`           // read the value of an attribute
* `setAttribute()`           // add or change an attribute value
* `removeAttribute()`        // remove an attribute completely
* `hasAttribute()`           // Checks if an element has a specific attribute

Example:

```js
img.setAttribute("src", "image.jpg");
```

---

## 6. Creating and Removing Elements

* `createElement()`    
// Create new element
const li = document.createElement("li");

* `appendChild()`
// Adds element at the end of parent
// Adds only one node
// Returns the appended node
list.appendChild(li);

* `append()`
// Works like appendChild() but more flexible
// can also add multiple items , text nodes , strings
// Does not return a value
list.append(li1, li2);

* `prepend()`
// Adds element at the start of parent
list.prepend(li);

* `remove()`
// to delete an element directly
li.remove();

* `removeChild()`
// Older method (still used sometimes)
parent.removeChild(child);

Example:

```js
const li = document.createElement("li");
list.appendChild(li);
```

---

## 7. DOM Traversal    // navigating between elements in the DOM tree

### Parent

* `parentElement`              // Get parent
* `parentNode`                 // Similar to parentElement

### Children

* `children`                   // Returns all child elements - HTMLCollection
* `childNodes`
// Returns ALL child nodes including: - elements, text, comments , spaces/newlines

* `firstElementChild`          // Returns first child element
* `lastElementChild`           // Returns last child element

### Siblings

* `nextElementSibling`         // Returns next sibling element
* `previousElementSibling`     // Returns previous sibling element

---

## 8. Event Handling
// An event is an action that happens in the browser.
// JavaScript can listen to these events and run code when they happen.

* `onclick`
// Events written directly in HTML.
<button onclick="showMessage()">
  Click
</button>

function showMessage() {
  alert("Button Clicked");
}

* `addEventListener()`
// Best and most common way to handle events.
// element.addEventListener("event", function);

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Clicked!");
});

* Event types:

  * click
  btn.addEventListener("click", () => {
    title.style.color = "red";
  });

  * mouseover ( mouseover, mouseout )
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "yellow";
  });

  * keydown ( keydown , keyup )
  input.addEventListener("keydown", () => {
    console.log("Key Pressed");
  });

  * submit
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();      // prevents page refresh.
    alert("Form Submitted");
  });

  * change    // Triggered when input loses focus after value changes
  input.addEventListener("change", () => {
    console.log("Changed");
  });

Example:

```js
button.addEventListener("click", () => {
  alert("Clicked");
});
```

---

## 9. Event Object
// When an event occurs, JavaScript automatically creates an Event Object.

<button id="btn">Click Me</button>
const btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
  console.log(event);
});

* `event.target`
// Returns the element that triggered the event.

* `event.type`
// Returns event type.

* `event.key`
// Used with keyboard events. Returns pressed key.

* `Mouse Position Properties`
// clientX and clientY - Get mouse position.

* `preventDefault()`
// Stops browser’s default behavior.

* `stopPropagation()`
// Stops event bubbling. (Important in nested elements)

<div id="parent">
  <button id="child">Click</button>
</div>

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button Clicked");
});

* Button Clicked

* Without stopPropagation():

Button Clicked
Parent Clicked

---

## 10. Event Bubbling & Capturing
// When an event happens on an element, the event moves through the DOM in phases.
// This process is called Event Propagation.

There are 3 phases:

1. Capturing Phase
2. Target Phase
3. Bubbling Phase

* `Bubbling`
// By default, events bubble upward.
- event starts from target element
- then moves upward to parent elements

<div id="parent">
  <button id="child">Click</button>
</div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", () => {
  console.log("Button Clicked");
});

Output:
Button Clicked
Parent Clicked

* `stopPropagation()`     // Stops bubbling

child.addEventListener("click", (event) => {

  event.stopPropagation();

  console.log("Button Clicked");
});

// Output
Button Clicked

* `Capturing`
// Capturing is opposite of bubbling.
Event travels: from top → down to target

// Pass true as third parameter.
element.addEventListener(
  "click",
  function,
  true
);

parent.addEventListener("click", () => {
  console.log("Parent");
}, true);

child.addEventListener("click", () => {
  console.log("Child");
}, true);

// Output
Parent
Child

* `Event Delegation`
// Event delegation is a technique where a parent handles events of its child elements using event bubbling and event.target

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  console.log("Clicked:", event.target);
});


---

## 11. Forms and Input Handling

* `Form events`
* `Input values`
* `Validation`

<form id="form">
  <input type="text" id="name">
  <button type="submit">
    Submit
  </button>
</form>

// `Accessing Input Values` - Use .value property
// .value works for: input, textarea, select

const input = document.getElementById("name");
console.log(input.value);

// `Handling Form Submit` - Forms automatically refresh page when submitted.
// event.preventDefault(); to stop refresh.

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form Submitted");

});

// `Reading Input Value on Submit`

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username =
    document.getElementById("username").value;
  console.log(username);

});

// `Clearing Input Field`

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
  input.value = "";
});

// `Input Events`

// input Event - Runs whenever user types.
// change Event - Runs after: value changes , AND input loses focus

input.addEventListener("input", () => {
  console.log(input.value);
});

input.addEventListener("change", () => {
  console.log("Changed");
});

// `Checkbox Handling`

<input type="checkbox" id="agree">
const checkbox =
  document.getElementById("agree");
console.log(checkbox.checked);

Output
true / false

// `Radio Button Handling`

<input type="radio" name="gender" value="Male">
<input type="radio" name="gender" value="Female">

const gender =
  document.querySelector(
    'input[name="gender"]:checked'
  );
console.log(gender.value);

// `Select Dropdown Handling`

<select id="city">
  <option>Delhi</option>
  <option>Mumbai</option>
</select>

const city =
  document.getElementById("city");
console.log(city.value);

Example:

```js
const value = input.value;
```

---

## 12. Timing Functions
// Timing functions allow JavaScript to run code:
- after some delay
- repeatedly after intervals

* `setTimeout()`         // Run once after delay
* `setInterval()`        // Run repeatedly
* `clearTimeout()`       // Stop timeout
* `clearInterval()`      // Stop interval

---

## 13. DOM Collections

// When selecting multiple elements in the DOM, JavaScript returns collections.
The two most common DOM collections are:
1. HTMLCollection
2. NodeList

* `HTMLCollection`
// getElementsByClassName() ,getElementsByTagName()
// HTMLCollection is LIVE. - it updates automatically when DOM changes

* `NodeList`
// querySelectorAll()
// NodeList is usually STATIC. - it does NOT update automatically

* `Difference between them`
| HTMLCollection            | NodeList                     |
| ------------------------- | ---------------------------- |
| Live collection           | Static collection            |
| Returned by older methods | Returned by modern selectors |
| Less flexible             | More flexible                |
| No `forEach()`            | Supports `forEach()`         |


* `childNodes vs children`
| children      | childNodes               |
| ------------- | ------------------------ |
| Elements only | All nodes                |
| More useful   | Includes spaces/comments |

// [li, li]                     - children
// [text, li, text, li, text]   - childNodes


---

## 14. Browser Object Model (BOM)
// The Browser Object Model (BOM) allows JavaScript to interact with the browser itself.

window
 ├── document
 ├── location
 ├── history
 ├── navigator
 ├── screen
 └── localStorage

* `window`       
// The window object is the top-level object in the browser.
console.log(window);

* `location`
// Contains current URL information.
console.log(location);
| Property            | Meaning     |
| ------------------- | ----------- |
| `location.href`     | Full URL    |
| `location.hostname` | Domain name |
| `location.pathname` | Page path   |


* `history`
// Controls browser history.
history.back();
| Method      | Purpose             |
| ----------- | ------------------- |
| `back()`    | Previous page       |
| `forward()` | Next page           |
| `go()`      | Move specific steps |

* `navigator`
// Contains browser and device information.
console.log(navigator);
| Property              | Meaning          |
| --------------------- | ---------------- |
| `navigator.userAgent` | Browser details  |
| `navigator.language`  | Browser language |
| `navigator.onLine`    | Internet status  |


* `alert()`
// Displays message popup.
alert("Welcome!");

* `confirm()`
// Displays confirmation box.
// Returns: true / false

* `prompt()`
// Takes input from user.
const name = prompt("Enter your name");
console.log(name);

* `screen Object`
// Provides screen information.
console.log(screen.width);
console.log(screen.height);
| Property        | Meaning       |
| --------------- | ------------- |
| `screen.width`  | Screen width  |
| `screen.height` | Screen height |

* `window.innerWidth & innerHeight`
// Browser window size.
console.log(window.innerWidth);
console.log(window.innerHeight);
| screen             | window              |
| ------------------ | ------------------- |
| Full device screen | Browser window size |

* `open() Method`
// Opens new browser window/tab.
window.open("https://google.com");

* `close() Method`
// Closes current window.
window.close();

---

## 15. Local Storage & Session Storage
// Web Storage allows JavaScript to store data inside the browser.
| Storage Type     | Lifetime                         |
| ---------------- | -------------------------------- |
| `localStorage`   | Permanent until manually removed |
| `sessionStorage` | Removed when browser tab closes  |

// Storage is Key-Value Based
key : value

name : John
theme : dark

* `localStorage`
// Data remains even after: refresh ,browser restart until manually deleted.

Store Data → setItem()  -> localStorage.setItem("key", "value");
Get Data → getItem()    -> localStorage.getItem("key");
Remove Specific Item    -> localStorage.removeItem("key");
Clear All Storage       -> localStorage.clear();

* `sessionStorage`
// Works same as localStorage.
// Difference: data removed when tab closes

| localStorage       | sessionStorage      |
| ------------------ | ------------------- |
| Permanent          | Temporary           |
| Shared across tabs | Tab-specific        |
| Survives restart   | Removed after close |

* `Note`

- Storage only stores:
localStorage.setItem("age", 25); = "25"

- Storing Objects - JSON.stringify()
const user = {
  name: "John",
  age: 22
};
localStorage.setItem("user", JSON.stringify(user));

- Reading Object - JSON.parse()
const data = localStorage.getItem("user");
const user = JSON.parse(data);
console.log(user.name);

- Storage Limit
5MB per domain

Example:

```js
localStorage.setItem("name", "John");
```

---

## 16. Advanced DOM Topics

* `Mutation Observer`
// A Mutation Observer watches for DOM changes.
Useful when:
- elements are added/removed
- attributes change
- content updates dynamically

* `Debouncing`
// Debouncing limits how often a function runs.
Useful for:
- search bars
- API requests
- resize events

* `Throttling`
// Throttling limits function execution rate.
Useful for:
- scrolling
- mouse movement
- game controls

| Debounce        | Throttle                  |
| --------------- | ------------------------- |
| Waits for pause | Runs at intervals         |
| Final action    | Continuous limited action |


* `Virtual DOM (concept)`
// Virtual DOM creates a lightweight copy of real DOM.
// Directly updating the real DOM is relatively slow because every change can trigger: layout recalculation ,repainting ,reflow in the browser
// To make updates faster, frameworks use a Virtual DOM as an intermediate layer.

// 1. Initial Render
When a component is rendered:
- React creates a Virtual DOM tree
- It also creates the corresponding Real DOM

// 2. State Changes
When data/state changes:
- React creates a new Virtual DOM
- It compares it with the previous Virtual DOM

- This comparison process is called: `Diffing Algorithm`
// React checks: what changed ,what stayed same ,what needs updating

`Note`
- The Virtual DOM itself is not magically fast.
- The real advantage comes from:
    * smart diffing
    * batching updates
    * minimizing expensive real DOM operations

Real DOM
   ↓
Virtual DOM Copy
   ↓
Compare Changes
   ↓
Update Only Changed Parts

* `Shadow DOM`       // Shadow DOM creates isolated DOM trees.
* `Custom Events`

---

# Recommended Learning Order

1. DOM Basics
2. Selecting Elements
3. Changing Content & Styles
4. Events
5. Creating/Removing Elements
6. Traversal
7. Forms
8. Advanced Topics

---

# Mini Practice Projects

* Counter App
* To-Do List
* Image Slider
* Calculator
* Modal Popup
* Form Validation
* Weather App
* Quiz App

---

# Most Important DOM Methods Cheat Sheet

```js
document.getElementById()
document.querySelector()
element.innerHTML
element.style.color
element.classList.add()
element.setAttribute()
document.createElement()
parent.appendChild()
element.remove()
addEventListener()
```


----------------------------------------------------------------------------------------


<!DOCTYPE html>
<html>
    <head>
        <style>
            .active {
                color: white;
                background-color: black;
                font-size: 40px;
            }
        </style>
    </head>
<body>

<h1 id="title">Welcome</h1>

<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>

<span class="span">span</span>

<button>Click Me</button>

<img id="image" src="https://picsum.photos/200/300" alt="Image">

<a id="link" href="https://example.com">Click here</a>

<div class="div-add"></div>

<div id="parent">

    <h1>Heading</h1>
  
    <p>Paragraph 1</p>
  
    <p class="para2">Paragraph 2</p>
  
  </div>

 <form action="" id="form">
    <input type="text" name="" id="name">
    <button type="submit">Submit</button>
 </form>


 <div class="parent2">
    <button class="child2">Click</button>
 </div>

 <ul id="list2">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <hr>

  <input type="text" id="debounce">

<script>
    let h1 = document.getElementById('title');
    console.log(h1)

    let p = document.getElementsByClassName('text');
    console.log(p, p[0],p[1])

    let span = document.getElementsByClassName('span');
    console.log(span)

    let btn = document.getElementsByTagName('button');
    console.log(btn)

    console.log('--------------------------------');

    let a1 = document.querySelector('#title');
    console.log(a1);

    let a2 = document.querySelector('.text');
    console.log(a2);

    let a3 = document.querySelectorAll('.text');
    console.log(a3, a3[0], a3[1]);

    a3.forEach(item => console.log(item))

    let a4 = document.querySelector('button');
    console.log(a4)

    console.log('--------------------------------');

    h1.innerHTML = '<em>Hello</em>'

    p[0].innerText = '<em>Hello</em>'
    p[1].innerText = 'world'

    span[0].textContent = 'contact us'

    console.log('--------------------------------');

    h1.style.color = 'red';
    h1.style.backgroundColor = 'yellow';
    h1.style.fontSize = '22px'

    p[0].classList.add('active')
    p[0].classList.remove('active')
    p[0].classList.toggle('active')
    console.log(p[0].classList.contains('active'))
    console.log(p[1].classList.contains('active'))

     console.log('--------------------------------');

     let img = document.querySelector('#image');
     console.log(img.getAttribute('src'));
     img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAleGjDdZpfePKGYcc9dlF7oTqASnn1Qk8A&s')
     img.removeAttribute('src')
     console.log(img.hasAttribute('src'))

     console.log('--------------------------------');

     let divAdd = document.querySelector('.div-add');
     let li = document.createElement('li');
     li.innerText = 'New List';
     let li2 = document.createElement('li');
     li2.innerText = 'New List2';
     divAdd.appendChild(li);
     divAdd.prepend(li2);
     li.remove();

     console.log('--------------------------------');

     const b1 = document.querySelector('#parent h1');
     console.log(b1.parentElement);
     console.log(b1.parentNode);

     const parent = document.querySelector('#parent');
     console.log(parent.children)
     console.log(parent.firstElementChild)
     console.log(parent.lastElementChild)
     console.log(parent.childNodes)
     console.log(b1.nextElementSibling)
     console.log(document.querySelector('.para2').previousElementSibling)

     console.log('--------------------------------');

    //  function showMessage(){
    //     alert('button clicked')
    //  }

     btn[0].addEventListener('click', ()=>{
        // alert('hello')
        console.log(event)
     })

     a1.addEventListener('mouseover', ()=>{ a1.style.backgroundColor = 'pink'})
     a1.addEventListener('mouseout', ()=>{ a1.style.backgroundColor = 'black'})

     let name = document.querySelector('#name');
     name.addEventListener('keydown', () => console.log('key pressed'))
     name.addEventListener('keyup', () => console.log(name.value))

     name.addEventListener('change', () => console.log('value changed'))

     let form = document.querySelector('#form');
     form.addEventListener('submit', e => {
        e.preventDefault();
        alert('form submitted')
     } )

     btn[0].removeEventListener('click', ()=> alert('event removed'))

     console.log('--------------------------------');

     let parent2 = document.querySelector('.parent2');
     let child2 = document.querySelector('.child2');

     parent2.addEventListener('click', ()=> console.log('parent2 clicked'), true);
     child2.addEventListener('click', (e)=> {
        // e.stopPropagation();
        console.log('child2 clicked', e.target)
    }, true);

    let list2 = document.querySelector('#list2');
    list2.addEventListener('click', e =>{
        console.log('child clicked', e.target)
    })

    console.log('--------------------------------');

    let inputForm = document.querySelector('#name');
    console.log(inputForm.value)

    let forms = document.querySelector('#form');
    forms.addEventListener('submit', e =>{
        e.preventDefault();
        console.log(inputForm.value);
        inputForm.value = '';
    })

    console.log('--------------------------------');

    // setTimeout(()=>{console.log('hello')}, 3000);
    let count =0;
    let id = setInterval(()=>{
        count++;
        if(count === 5) clearInterval(id)
        console.log('hello after 1 sec')}
        , 1000)

    console.log('--------------------------------');

    console.log(window)

    console.log('--------------------------------');

    let inputD = document.querySelector('#debounce');
    let timer;
    inputD.addEventListener('input', (e)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            console.log('debounce', e.target.value)
        },3000)
    })

    console.log('--------------------------------');

    let shouldRun = true;
    inputD.addEventListener('input', e =>{
        if(!shouldRun) return;

        console.log('throttle' ,e.target.value);
        shouldRun = false;

        setTimeout(()=>{
            shouldRun = true;
        }, 2000)
    })

    console.log('--------------------------------');



</script>

</body>
</html>