const { readFile } = require("fs/promises");
const path = require("path");

const DATA_FILE_PATH =
  "/Users/tomer/Desktop/Lecturers/INT/March 22/React/spa-intro/backend/app/data/dev";

const readJsonFileByName = async (fileName) => {
  const filePath = path.join(DATA_FILE_PATH, `${fileName}.json`);
  const jsonData = await readFile(filePath, "utf-8");
  const parseData = JSON.parse(jsonData);
  return parseData;
};

module.exports = { readJsonFileByName };
