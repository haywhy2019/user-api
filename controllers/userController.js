 const users = require("../models/models");
 
  users.forEach((obj, i) => {
    let userAll = Object.values(obj)  ;
  



module.exports.readAllusers = (req, res) => {
    res.status(200).send(userAll);
}

module.exports.createUser = (req, res) => {
    const user = req.body;
    if(user.name && user.password && user.profession){
     
        users.push({
            user:{
                name: user.name,
                password: user.password,
                profession: user.profession,
                id: `${users.length}`,
            },
           
            
        })
        res.status(200).json({message: "successful"})
    }else{
        res.status(401).json({message: "invalid user"})
    }

}
module.exports.readOneUser = (req, res) => {
let user = userAll.find((user) => user.id == req.params.id)
if (user){
   return res.status(200).send(user)
}
res.status(404).json({message: "user not found"})
}

module.exports.updateUser = (req, res) => {
    let user = users.find((eachUser) => eachUser.id == req.params.id)
    if (user){
        user.id = req.body.id;
        return res.status(200).send({message: "update successful", data: user})
     }
     res.status(404).json({message: "user not found"})
}

module.exports.deleteUser = (req, res) => {
    let user = userAll.find((eachUser) => eachUser.id == req.params.id)
    if (user){
        users.splice(users.indexOf(user), 1)
        return res.status(200).send({message: "delete successful"})
     }
     res.status(404).json({message: "user not found"})
} 


})