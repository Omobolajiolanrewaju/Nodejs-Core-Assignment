const path = require("path");
const fs = require("fs");

// Create directory/folder named students

const studentsPath = path.join(__dirname, "Students");

fs.mkdir(studentsPath, (err) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.log(`The directory already exist.`);
      return;
    }
    console.log(`There was an error when creating the directory: ${err}`);
    return;
  }
  console.log(`Directory created successfully!`);
}); 
