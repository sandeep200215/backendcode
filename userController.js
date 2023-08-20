var userService=require('./userService');
var getDataControllerfn=async(req,res)=>
{
    var employee=await userService.getDataFromDBService();
    res.send({"status":true,"data":employee })
} 
var createUserControllerFn=async (req,res)=>
{
    
    var status=await userService.createUserDBService(req.body);
    console.log(status);
    if(status)
     res.send({"status":true,"message":"User created successfully"});
     else
     res.send({"status":true,"message":"Error creating user"});

}
var updateUserController=async ( req,res)=>
{
var result=await userService.updateUserDBService(req.params.id,req.body);
 if(result )
 res.send({"status": true,"message":"Updated is successfully"});
 else
  res.send({"status":false,"message":"user updated failed"});

}
var removeUserController=async (req,res)=>
{
   var result=await userService.removeUserDBService(req.params.id);
   if(result)
    res.send({"status":true,"message":"remove is successfully"});
    else
    res.send({"status":false,"message":"removing failing"});
}

module.exports={getDataControllerfn,createUserControllerFn,updateUserController,removeUserController}