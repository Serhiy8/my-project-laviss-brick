const num = -999999;
let a = 0;
const sum = (num1) => {
  if (num1 < 0) {
    num1 = num1 * -1;
  }

  return String(num1)
    .split("")
    .reduce((b, c) => (a = b + c), 0);
};

sum(num);
console.log(a);
