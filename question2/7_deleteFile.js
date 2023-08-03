const path = require("path");
const fs = require("fs");

const omobolajiPath = path.join(__dirname, "Names", "omobolaji_olanrewaju.js");

// Deleting the renamed file
fs.rm(omobolajiPath, (err) => {
  if (err) {
    console.log(`Error deleting file: ${err}`);
  } else {
    console.log(`File deleted successfully!`);
  }
});
