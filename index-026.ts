// We can use function types in order to define what kind of functions can be used.


// Math Operations
function add(a, b){return a+b }
function subtract(a, b){return a-b }
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:
type OperatorFunction = (value1 : number, value2 : number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback : OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
mathTutor(multiply);
// mathTutor(wrongAdd);
