const productRouter = require("express").Router();
const productController = require("../controllers/product.controller");

productRouter.post("/create",productController.addProduct);
productRouter.get("/read",productController.getAllProducts);
productRouter.get("/read/users/:id",productController.getProductUsers);
productRouter.get("/read/:id",productController.getOneProduct);
productRouter.put("/update/:id",productController.updateProduct);
productRouter.delete("/delete/:id",productController.deleteProduct);

module.exports = productRouter;