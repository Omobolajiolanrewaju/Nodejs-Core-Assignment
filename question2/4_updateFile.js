const path = require("path");
const fs = require("fs");

// Updating the file
const newContent =
  '\nlet UserInfo = {\n   "age": 21, \n   "sex": "male",\n   "nationality": "nigerian",\n   "favoriteColor": "blue",\n}';
const filePath = path.join(__dirname, "Names", "user.js");

fs.appendFile(filePath, newContent, (err) => {
  if (err) {
    console.log(`An error occurred while trying to update the file: ${err}`);
    return;
  }
  console.log(`Added to file successfully!`);
}); 
