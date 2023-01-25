# Intro to React & Hooks

## Lesson Objectives

https://media.git.generalassemb.ly/user/1611/files/73bbec1a-6c04-449b-806e-def16e1cbb60

- Define what React(and hooks) is
- Describe how react differs from most other front-end frameworks
- Define JSX and use it
- Define and create components
- Change the state of a component

## Define what React Is

https://media.git.generalassemb.ly/user/1611/files/25bea4de-4cf9-44b6-8104-b44fcbb50f22

React is a front-end framework which is designed to make building a Single Page JavaScript Application easier

## Describe how react differs from most other front-end frameworks

https://media.git.generalassemb.ly/user/1611/files/260a2951-7000-4c9d-ad52-f1121eaf9ab9

- Most other front-end frameworks attempt to separate data from presentation in some kind of an MVC structure
  - For example
    - One set files for HTML (View)
    - One set of files for your Controllers
    - One set of files for your Models (data)
  - Great for teams where developers specialize on one technology (CSS or JavaScript)
- React puts all the Views, Controllers, and Models for one small section of the application together into one file
  - Great for teams where one developer handles just a small section of the application and that's it

## React Components

https://media.git.generalassemb.ly/user/1611/files/beed4f6f-e797-4bef-b062-fa902d849b4e

- Components in React allow us to separate out different parts of our UI.
- This allows us to re-use these components if need be, as well as create a more modular structure to allow our funcitonalities to remain as separate as possible.
- The way that React uses components is that there is one component that is rendered by the browser, this "main" component will house other components that we create. The way we render multiple components is by exporting the component in its own file and then importing it into the file we want to render it. For example if we exported a component called `Person` would import that component and render it like so `<Person/>`.

## React State

https://media.git.generalassemb.ly/user/1611/files/12a81de6-ce6b-4110-b368-3aa53ebcfd99

- In React we are almost always going to be interacting with something called state.
- State is a built in object that we can use in a component to hold information or data pertaining to said component.
- A React components state can change over time, when this happens the component will re-render to reflect the changes in state.
- These changes can effect not only the way the application/component looks but also how it functions.

## What are React Hooks?

https://media.git.generalassemb.ly/user/1611/files/b089cde1-8636-4c95-aef9-176d451b398e

- With the release of React 16.8 you can now have state in a functional component by using Hooks.
- We will learn the two most prevelant hooks and use them within the next two units, useState and useEffect.
- useState is going to be our hook to let us actually use state within our functional components.
- useEffect will allow us to have something happen after everything has rendered (this is typically something like grabbing some data and setting our state).

## Define JSX

https://media.git.generalassemb.ly/user/1611/files/66d46b8f-203a-4e06-bffc-d916e9f0b210

- JSX is short for Javascript XML and is just a syntax extension for Javascript that will allow us to write both Javascript and HTML in our React applications.
- Using JSX we are able to do something like:

```js
const person = 'Brendan'
const jsxElement = <h1>Hello, {person}</h1>
```

## Lets Build!

### Setup

https://media.git.generalassemb.ly/user/1611/files/dbaaeefb-2fc1-472a-83b7-cf873837b3be

- Inside of student_examples run `npx create-react-app my-first-react-app`
- Once done, cd into the new directory that was created and open it up in Atom.
- You'll see that CRA has created a nice basic React app for us!
- We will be working mostly inside of the src directory, particularly inside of App.js so lets open that file.
- You'll notice that it created a basic component for us that is already a functional component, but for our purposes lets delete everything out of this file and start from scratch.

### Building Our First Component

https://media.git.generalassemb.ly/user/1611/files/700a5a7b-24b0-4c67-ad14-63ea63028d0c

- First lets create a basic component that we can just render with an h1 inside.
- Lets import react at the top of the component, create the actual component itself using our arrow function syntax and what we want to return and display in the browser will go inside of the component in a return statement
- NOTE: All of our JSX needs to be wrapped in some sort of enclosing tag like a div, section, etc... or something called a [React Fragment](https://reactjs.org/docs/fragments.html)
  ![](https://i.imgur.com/1RdOYDK.png)

https://media.git.generalassemb.ly/user/1611/files/e58a3fd8-3f7d-4953-be6a-f0e9237cca72

- We can also nest components inside of eachother like so:
  ![](https://i.imgur.com/dmna6Sg.png)

### Handle User Events

https://media.git.generalassemb.ly/user/1611/files/11be5595-4ddd-4c69-98dd-89290f948516

- Lets create a function sayHello inside of our App component and have it run on click of a button! -![](https://i.imgur.com/CyqhZCZ.png)

### State And Interacting With State

https://media.git.generalassemb.ly/user/1611/files/04417e05-0d82-4136-9eba-38763d214ccb

- State in React is an object that contains properties that control how the component behaves and or looks. The state of any given component can change over the lifetime of the component and therefore can change how the application as a whole functions/looks.
- Lets install [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- First we need to import our useState hook at the top of the file:

![](https://i.imgur.com/5emaRY0.png)

- Next lets add state to our App component using our useState hook (our initial state for JUST name goes in the parenthesis of useState:

-![](https://i.imgur.com/MEBUNFW.png)

https://media.git.generalassemb.ly/user/1611/files/8ffe2d89-2a26-415c-9e99-5cdb9c05ff38

- Lets check our newly installed React Dev Tools, inside of the Component section we should be able to click App and see the state of our component:

![](https://i.imgur.com/LwaGg5m.png)

- Now lets get our piece of state (name) to appear on the page:

![](https://i.imgur.com/PkI7ihB.png)

https://media.git.generalassemb.ly/user/1611/files/878fbf50-b166-4b16-8f60-db717619fb2b

- We can also change state by using our setter function that we defined when we defined name (setName):

![](https://i.imgur.com/xScOv0n.png)
![](https://i.imgur.com/ORhI0EL.png)

- What we're doing here is taking our piece of state (name) and using our setter function (setName) to change the value of our piece of state (name) from Brendan to Matt.

https://media.git.generalassemb.ly/user/1611/files/3e3365a7-52cd-47bb-8ca2-3268ead3475c

- Lastly lets add the ability to dynamically change the the name piece of state using an input:
  ![](https://i.imgur.com/jt4pqhJ.png)
  ![](https://i.imgur.com/ygkJa12.png)

- What we did here is passed in our event parameter and using event.target.value in the invocation of setName to grab the text we type into the input and change our name piece of state to whatever we type in the input.
