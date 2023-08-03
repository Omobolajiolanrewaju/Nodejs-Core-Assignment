const path = require("path");
const fs = require("fs");

// Reading the file asynchronously
const omobolajiPath = path.join(__dirname, "Names", "omobolaji_olanrewaju.js");

const readContent = fs.readFile(omobolajiPath, "utf8", (err, myData) => {
  if (err) {
    console.log(`An error occurred reading from this file: ${err}`);
    return;
  }
  console.log(myData);
  console.log(`File read successfully!`);
});
