//1
const counter = () => {
  let value = 0;
  return () => (value += 1);
};

let count = counter();

console.log(count());
console.log(count());

//2
const sum = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

const b = sum(11)(22);
console.log(b);
