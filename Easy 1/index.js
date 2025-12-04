const fs = require("fs");
const path = require("path");

function writeDataFile() {
  const filePath = path.join(__dirname, "file.txt");
  const text = "We will not miss the exam next time";
  
  fs.writeFileSync(filePath, text, "utf8")
}
