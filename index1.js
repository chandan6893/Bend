const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,"crud");
const filePath=`${dirPath}/apple.txt`;
// create apple.txt filein crud folder
fs.writeFileSync(filePath,"this is a simple apple.txt file in crud folder");

// read the content in  apple.txt file

// fs.readFile(filePath,(err,item)=>{
//     console.log(item)
// })

fs.readFile(filePath, "utf-8", (err, item) => {
  console.log(item);
});

// update the conent in apple.txt file

fs.appendFile(filePath," and filename is apple.txt",(err)=>{
   if(!err) console.log("file content updted")
});

// rename the apple.txt file to mango.txt

fs.rename(filePath,`${dirPath}/mango.txt`,(err)=>{
    if(!err) console.log("file name is updated from apple.txt to mango.txt")
})