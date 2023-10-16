//adding two numbers
const addTwo = (a, b) => {
    const result = a + b;
    console.log(result);


}
addTwo(15, 35);

// Sum of an array
let numbers = [15, 15, 25, 35];
const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

let result = sumOfArray(numbers);
console.log(result);

        
    
