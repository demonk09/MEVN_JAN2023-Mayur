// how to write a callback function 
// and how to pass parameter to a fuction

const fs =require("fs");

// trhe folloing block is a call back function
// and it minimise the exception handling 

function readUTF8File(filepath) {
    fs.readFile(filepath,"utf-8",(data,error)=>{
        if (error) {
            console.log(error); 
            return;           
        }
        console.log(data);
    });
}
//non existing file
readUTF8File("./abcd.txt");
//existng file
readUTF8File("./demofile.txt");
//existng file
// readUTF8File("./functions.html");

