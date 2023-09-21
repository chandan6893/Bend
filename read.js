const dbConnect=require('./mongodb');

const main=async()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
}
main();


// OR,

// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })