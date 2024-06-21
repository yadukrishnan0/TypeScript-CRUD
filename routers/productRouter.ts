import productController from "../controllers/productController";

import { Router } from "express";
const ProductRouter = Router()
ProductRouter.post('/addproduct',productController.addProduct);
ProductRouter.post('/editproduct',productController.editProduct);
ProductRouter.delete('/deleteproduct',productController.deleteProduct)
export default ProductRouter;

