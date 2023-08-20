var userModel=require('./userModel');
module.exports.getDataFromDBService=()=>{
    return new Promise( function checkURL(resolve,reject)
    {
        userModel.find({},(error,result)=>
        {
          if(error)
            reject(false)
            else
            resolve(result);
        })
        
    });
}
module.exports.createUserDBService=(userDetails)=>{
    return new Promise(function myFn(resolve,reject)
    {
        var userModelData=new userModel();
        userModelData.name=userDetails.name;
        userModelData.address=userDetails.address;
        userModelData.phone=userDetails.phone;
        userModelData.save(function resultHandle(error,result)
        {
            if(error)
             reject(false)
            else
            resolve(result)
        });
    });
  
}
module.exports.updateUserDBService=(id,Details)=>
{
return new Promise(function myFn(resolve,reject)
{
    userModel.findByIdAndUpdate(id,Details,function returnData(error,result)
    {
        if(error)
         reject(false);
         else
         resolve(result);
    })
    
});
}
module.exports.removeUserDBService=(id)=>
{
    return new Promise(function myFn(resolve,reject)
   {
    userModel.findByIdAndRemove(id,(error,result)=>
    {
        if(error)
         reject(false);
         else
         resolve(resolve);
    })
    
   } )
}