const fs = require("fs");
const path = require("path");

const generated = require("./mapping.generated");

const output = {};

for (const key of Object.keys(generated)) {

    const suggestions = generated[key];

    if (!suggestions.length) continue;

    output[key] = suggestions[0].name;

}

fs.writeFileSync(
    path.join(__dirname, "mapping.js"),
    "module.exports = " + JSON.stringify(output, null, 2)
);

console.log("✅ mapping.js created.");