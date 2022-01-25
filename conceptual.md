### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
promises and async await

- What is a Promise?

promise will return an object which will gurenteed to fill in the future

- What are the differences between an async function and a regular function?

ayync function do not run linear order but normal function run line by line

- What is the difference between Node.js and Express.js?

node.js is javascript code to run on server , but express.js is a web framework which use node.js

- What is the error-first callback pattern?

the error will be passed as first argument to the function

- What is middleware?

middlewarer is a function or set of codes which runs in the middle of request response life cycle

- What does the `next` function do?

next function will continue the execution to the next line of code in the request response life cycle

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
it will issue 3 seperate network call and wait to get it finished so will take some time to complete