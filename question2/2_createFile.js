const path = require("path");
const fs = require("fs");

// In the student directory, create a file named user.js

const userPath = path.join(__dirname, "Students", "user.js");
let content = 'let userName = {\n   "name": "omobolaji",\n} \n';

fs.writeFile(userPath, content, (err) => {
  if (err) {
    console.log(`There was an error creating the file: ${err}`);
    return;
  }
  console.log("File created successfully!");
}); 
