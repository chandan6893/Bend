const dbConnect=require('./mongodb');

const deleteData= async ()=>{
    let data=await dbConnect();
    let result=data.deleteMany({name:"m 40"});
    console.log(result);
    if(result.acknowledged){
        console.log("record deleted")
    }
}
deleteData()