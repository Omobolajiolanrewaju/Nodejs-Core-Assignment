const path = require('path');
const os = require('os');
const process = require('process');





// Current working directory
const CurrentWorkingDir = path.resolve();
console.log(`The working directory is => ${CurrentWorkingDir}`);

// The default separator
const separator = path.sep;
console.log(`The default separator is ${separator}`);

// The extension name of a file path
const extName = path.extname('CurrentWorkingDir\index.js'); 
console.log(`The file extension name is: ${extName}`);

// Get the process id of the current running process
const currentProcess = process.pid;
console.log(`The id of the currently running process => ${currentProcess}`);

// Get the user information of the os
const user = os.userInfo();
console.log(`User info => ${JSON.stringify(user)}`);

// Get the current platform of an os
const platform = os.platform();
console.log(`Your os platform is: ${platform}`);