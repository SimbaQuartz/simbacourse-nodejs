// itsMagical alternate version
// const itsMagical = () => {
//     return console.log("Am I so magical?")
//       ? console.log("NO Magic here")
//       : "Yes it is magic!";
//   };

const itsMagical = () => {
  return console.log("Am I so magical?") || "Yes it is magic!";
};

itsMagical();

module.exports = itsMagical;

/**
 * 1. wrapper will execute the default executables
 * 2. line number 40, under that magic will be executed the console.log under the 2 line condition will print the values
 * 3. the value returned from the 40 line number magic call will be a string literal and the console at 40 will be executed and print the value returned;
 * 4. 42 conditional console will be printed and the return value is not used anywhere in the code further.
 */
