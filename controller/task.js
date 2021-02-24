const userTask = require('../models/index')

//Task Functions
const task = async(req,res,next)=>{
    
    req.body.userId=req.decoded._id 
    const newTask = await userTask.User(req.body)
    const data = await newTask.save();
    console.log(data);
} 
const updateTask = async(req,res,next)=>{
    try {
        console.log(req.decoded)
        console.log(req.params.id);
        const compdate=date.format(now,'YYYY/MM/DD HH:mm:ss')
        const newTask = await userTask.User.findByIdAndUpdate({_id:req.params.id},{completed:true, completed_on:compdate},{new:true})
        console.log(newTask)
        res.send({status:200,message:"updated"})
        
    } catch (error) {
        console.log(error,"errorrrrrrr");
        res.status(400)
    }
    }
 

const getTask = async(req,res)=>{
    const alltask = await userTask.User.find({userId:req.decoded._id}).sort({"completed":-1})
    res.send(alltask)
    console.log(alltask)

}
module.exports = {
    task,updateTask,getTask
}