const fs =require("fs");

function readFirstEverCallback(error, fileData){

    if(error) {
        console.log(error);
        return;
    }

    const Lines = fileData.toString().split("\n");

    Lines.slice(0,5).forEach((line) => {
        console.log(line);
    });
}
fs.readFile("./math2.js",readFirstEverCallback);