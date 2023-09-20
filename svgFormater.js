const fs = require("fs");

const fileName = process.argv[2];

if (!fileName) {
  throw new Error("-- Please provide a valid file name --");
}

const inputFileName = fileName.split(".")[0];
const inputFileType = fileName.split(".")[1];
const outputFileName = inputFileName + "-updated." + inputFileType;

function camelCaseSVGAttributes(svgText) {
  return svgText.replace(/-(\w)/g, (match, char) => {
    if (char >= "a" && char <= "z") {
      return char.toUpperCase();
    } else {
      return match;
    }
  });
}

try {
  const svg = fs.readFileSync(fileName, "utf8");

  const svgFormated = camelCaseSVGAttributes(svg);

  fs.writeFileSync(outputFileName, svgFormated);

  console.log("The file: ", fileName, " was formated");
  console.log("output: ", outputFileName);
} catch (err) {
  throw new Error(err);
}
