

const postroute = async(req,res)=>{
  try{
    const user= await User.create(req.body);
    console.log(user);
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).json({message:err})
  }
  
}

const getroute = async(req,res)=>{
  try{
    const users= await User.find();
    res.status(200).json(users);
  }
  catch(err){
    res.status(500).json({message:err})
  }
}

const dynamicroute = async(req,res)=>{
  try{
    const user= await User.findById(req.params.id);
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).json({message:err})
  }
}

const updateroute = async(req,res)=>{
  try{
    const user= await User.findByIdAndUpdate(req.params.id,req.body);
    
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
     const updatedUser= await User.findById(req.params.id);
      res.status(200).json(updatedUser);

  }
  catch(err){
    res.status(500).json({message:err})
  }
    
};

const deleteroute = async(req,res)=>{
  try{
    const user= await User.findByIdAndDelete(req.params.id);
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User deleted successfully"});
  }
  catch(err){
    res.status(500).json({message:err})
  }
} 

module.exports = {postroute,getroute,dynamicroute,updateroute,deleteroute};