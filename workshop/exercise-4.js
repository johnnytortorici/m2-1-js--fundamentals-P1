// Q4
// Fix this program
// It should output the squares of all numbers between 0 and 12

// eg:
// 0, 1, 4, 9, 16, ...

let square = 0;

for (let number = 0; number <= 12; number++) {
  square = number * number;
  console.log('the square of ', number, ' is ', square);
}
