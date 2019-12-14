const users = require("../models/models")


module.exports.readAllusers = (req, res) => {
    res.status(200).send(users);
}

module.exports.createUser = (req, res) => {
    const user = req.body;
    if(user.text){
        let createdDate = Date.now().toString();
        users.push({
            ...user,
            id: `${users.length + 1}`,
            createdAt: createdDate,
            updatedAt: createdDate
        })
        res.status(200).json({message: "successful"})
    }else{
        res.status(401).json({message: "invalid user"})
    }

}
module.exports.readOneUser = (req, res) => {
let userId = users.map(function(eachUser) {
 return  eachUser.id  } == req.params.id)
if (userId){
   return res.status(200).send(user)
}
res.status(404).json({message: "user not found"})
}

module.exports.updateUser = (req, res) => {
    let user = users.find((eachUser) => eachUser.id == req.params.id)
    if (user){
        user.text = req.body.text;
        return res.status(200).send({message: "update successful", data: user})
     }
     res.status(404).json({message: "user not found"})
}

module.exports.deleteUser = (req, res) => {
    let user = users.find((eachUser) => eachUser.id == req.params.id)
    if (user){
        users.splice(users.indexOf(user), 1)
        return res.status(200).send({message: "delete successful"})
     }
     res.status(404).json({message: "user not found"})
} 

