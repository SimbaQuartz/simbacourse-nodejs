const { writeFileSync } = require("fs");

for (let i = 0; i < 1000000; i++)
  writeFileSync(
    "./content/students.txt",
    `Hey this is the student id : ${i} \n`,
    {
      flag: "a",
    }
  );
