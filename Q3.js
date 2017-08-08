// Question 3

// Create a new variable called bar and assign to it the function definition of foo.

// Then call console.log and pass it the return value of passing 3 to bar.

function foo(num) {
  return num + 2;
}


const bar = foo
console.log('This is whit the variable bar')
console.log(bar(3));

console.log();

console.log('This is whith the variable foo');
console.log(foo(3));
