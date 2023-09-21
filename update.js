const dbConnect=require('./mongodb');

const updateData=async ()=>{
    let data=await dbConnect();

    // update single recors
    
    // let result=await data.updateOne(
    //     {name:"note 5"},{
    //         $set:{name:"max pro 5",price:"Rs10000"}
    //     }
    // );

    
    // update  multiple records

     let result = await data.updateMany(
       { name: "note 5" },
       {
         $set: { name: "max pro 5", price: "Rs10000" },
       }
     );

    console.log(result);
}
updateData();