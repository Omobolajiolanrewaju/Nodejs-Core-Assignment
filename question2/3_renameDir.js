const path = require("path");
const fs = require("fs");

const namesPath = path.join(__dirname, "Names");
const fullPath = path.join(path.resolve(), "Students");

fs.rename(fullPath, namesPath, (err) => {
  if (err) {
    console.log(`There was an error updating the directory: ${err}`);
    return;
  }
  console.log("Directory changed!");
}); 