import productController from "../controllers/productController";

import { Router } from "express";
const ProductRouter = Router()
ProductRouter.post('/addproduct',productController.addProduct);
ProductRouter.post('/editproduct',productController.editProduct)
export default ProductRouter;

