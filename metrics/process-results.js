const fs = require("fs");
const path = require("path");

function readableHRTimeMs(diff) {
  return (diff[0] * 1e9 + diff[1]) / 1000000;
}

const results = fs.readdirSync(__dirname).filter((x) => x.endsWith(".txt"));

const resultObj = {};

for (const r of results) {
  const data = fs.readFileSync(path.join(__dirname, r), { encoding: "utf-8" });
  const lines = data.split("\n").filter(Boolean);
  const temp = {
    startup: 0,
    listen: 0,
  };
  lines.forEach((x) => {
    const [startup, listen] = x.split("|");
    temp.startup += readableHRTimeMs(startup.split(",").map(x=>parseInt(x)));
    temp.listen += readableHRTimeMs(listen.split(",").map(x=>parseInt(x)));
  });
  resultObj[r.replace(".txt", "")] = {
    startup: temp.startup / lines.length,
    listen: temp.listen / lines.length,
  };
}
console.log(resultObj);
