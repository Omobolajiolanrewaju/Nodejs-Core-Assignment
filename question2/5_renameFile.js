const path = require("path");
const fs = require("fs");

// The file gets renamed in the file system to "omobolaji_olanrewaju"
const omobolajiPath = path.join(__dirname, "Names", "omobolaji_olanrewaju.js");
const userPath = path.join(__dirname, "Names", "user.js");

const renameFile = fs.rename(userPath, omobolajiPath, (err) => {
  if (err) {
    if (err.code === "EPERM") {
      return;
    }
    console.log(`An error occurred while renaming the file: ${err}`);
    return;
  }
  console.log("Successfully renamed the file!");
});
