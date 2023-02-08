for (let i = 0, y = 10, z = 0; i < 10; i++ && z > 10, z++, y--) {
  console.log(i, y, z);
}

// break and continue

// const myFunction = (options) => {
//   switch (options) {
//     case "promise":
//       console.log("This is a promise");
//       break;
//     case "new":
//       console.log("This is new");
//       break;
//     default:
//       console.log("This is something");
//   }
// };

// myFunction("new");

function myFunction() {
  for (let i = 20; i > 2; i -= 2) {
    console.log(`THis is my I ${i}`);
  }
}
// myFunction();

function myFunction2() {
  for (let i = 6000; i >= 2; i /= 2) {
    if (i % 3 == 0) {
      console.log(`I am searching my I ${i}`);
      continue;
    }
    console.log(`This is my I ${i}`);
  }
}

// myFunction2();

function myFunction3() {
  // 2, 4
  for (let i = 1; i <= 1000; i *= 2) {
    if (i % 4 == 0) {
      console.log(`I lost my I ${i}`);
      break;
    }
    console.log(`This is my I ${i}`);
  }
}
myFunction3();
