const dbConnect=require('./mongodb');

const insert=async ()=>{
    const db=await dbConnect();

    // insert single data
    // const result = await db.insertOne(
      
    //     { name: "note 5", brand: "vivo", price: "Rs32000", category: "mobile" }
    // );


//    insert multiple data
      const result=await db.insertMany(
      [
        { name: "max 1", brand: "micromax", price: "Rs32000", category: "mobile" },
        { name: "max 2", brand: "micromax", price: "Rs42000", category: "mobile" },
        { name: "max 3", brand: "micromax", price: "Rs52000", category: "mobile" },
      ]
      )

    if(result.acknowledged){
      console.log("data inserted");
    }
    
}

insert();