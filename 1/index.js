const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");

for (let i = 0; i < 5; i++) {
  const filePath = path.join(dirPath, `file${i}.txt`);
  fs.writeFileSync(filePath, "Assignment 1");
}

fs.readdir(dirPath, (err, files) => {
  files.forEach((file) => {
    console.log("File name is", file);
  });
});
