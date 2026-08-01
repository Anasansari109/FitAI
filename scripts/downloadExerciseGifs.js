const fs = require("fs");
const path = require("path");

const DATASET_PATH =
  "C:/Users/mrjmi/Downloads/exercises-dataset-main/exercises-dataset-main/data/exercises.json";

const VIDEOS_PATH =
  "C:/Users/mrjmi/Downloads/exercises-dataset-main/exercises-dataset-main/videos";

const OUTPUT_PATH = path.join(
  __dirname,
  "../frontend/public/media/exercises"
);

const LIBRARY_PATH = path.join(
  __dirname,
  "../backend/shared/exerciseLibrary.js"
);

const dataset = JSON.parse(fs.readFileSync(DATASET_PATH, "utf8"));
const exerciseLibrary = require(LIBRARY_PATH);
const mapping = require("./mapping");

function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[-()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

if (!fs.existsSync(OUTPUT_PATH)) {
  fs.mkdirSync(OUTPUT_PATH, { recursive: true });
}

let copied = 0;
let missingMapping = [];
let missingGif = [];
let missingDataset = [];

console.log("\n========== COPYING GIFS ==========\n");

for (const exercise of exerciseLibrary) {

  const datasetName = mapping[exercise.id];

  // Mapping missing
  if (!datasetName) {
    missingMapping.push(exercise.id);
    continue;
  }

  // Dataset search
  const match = dataset.find(
    e => normalize(e.name) === normalize(datasetName)
  );

  if (!match) {
    missingDataset.push(exercise.id);
    continue;
  }

  const source = path.join(
    VIDEOS_PATH,
    path.basename(match.gif_url)
  );

  if (!fs.existsSync(source)) {
    missingGif.push(match.gif_url);
    continue;
  }

  const destination = path.join(
    OUTPUT_PATH,
    path.basename(exercise.gifUrl)
  );

  fs.copyFileSync(source, destination);

  console.log(`✅ ${exercise.name}`);

  copied++;
}

console.log("\n==============================");
console.log("Copied :", copied);
console.log("==============================");

console.log("\nMissing Mapping :", missingMapping.length);
missingMapping.forEach(e => console.log("❌", e));

console.log("\nMissing Dataset :", missingDataset.length);
missingDataset.forEach(e => console.log("❌", e));

console.log("\nMissing GIF :", missingGif.length);
missingGif.forEach(e => console.log("❌", e));

console.log("\n=========== DONE ===========");