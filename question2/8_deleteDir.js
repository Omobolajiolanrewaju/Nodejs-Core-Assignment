const path = require("path");
const fs = require("fs");

const namesPath = path.join(__dirname, "Names");

// Deleting the renamed directory
fs.rmdir(namesPath, (err) => {
  if (err) {
    console.log(`Error deleting directory: ${err}`);
  } else {
    console.log(`Directory deleted successfully!`);
  }
});
