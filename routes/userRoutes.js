module.exports = (app) => {
    const userResource = require("../controllers/userController")

    app.route("/users")
    .get(userResource.readAllusers)
    .post(userResource.createUser);


    app.route("/user/:id")
    .get(userResource.readOneUser)
    .put(userResource.updateUser)
    .delete(userResource.deleteUser);
  


}


