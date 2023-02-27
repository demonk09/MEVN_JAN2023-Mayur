const fs = require("fs").promises;

async function readeven(){
    const file = await fs.readFile("./ten.txt");
    const line =file.toString().split("\n");

    for(let i = 0; i < 5; i++ ){
        console.log(line[i]);
    }
}
readeven();