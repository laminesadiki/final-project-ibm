const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");

userRouter.post("/create",userController.addUser);
userRouter.get("/read",userController.getAllUsers);
userRouter.get("/read/count",userController.getTotalUsers);
userRouter.get("/read/:id",userController.getOneUser);
userRouter.put("/update/:id",userController.updateUser);
userRouter.delete("/delete/:id",userController.deleteUser);

module.exports = userRouter;