const fs = require("fs");
const path = require("path");
const similarity = require("string-similarity");

const DATASET_PATH =
"C:/Users/mrjmi/Downloads/exercises-dataset-main/exercises-dataset-main/data/exercises.json";

const LIBRARY_PATH =
path.join(__dirname,"../backend/shared/exerciseLibrary.js");

const OUTPUT =
path.join(__dirname,"mapping.generated.js");

const dataset =
JSON.parse(fs.readFileSync(DATASET_PATH,"utf8"));

const library=require(LIBRARY_PATH);

function clean(str){
    return str
    .toLowerCase()
    .replace(/[_-]/g," ")
    .replace(/[()]/g,"")
    .replace(/\s+/g," ")
    .trim();
}

const result={};

for(const ex of library){

    const ratings=dataset.map(d=>{

        return{

            name:d.name,

            gif:d.gif_url,

            score:similarity.compareTwoStrings(
                clean(ex.name),
                clean(d.name)
            )

        }

    });

    ratings.sort((a,b)=>b.score-a.score);

    result[ex.id]=ratings.slice(0,5);

}

fs.writeFileSync(
OUTPUT,
"module.exports="+JSON.stringify(result,null,2)
);

console.log("Done.");