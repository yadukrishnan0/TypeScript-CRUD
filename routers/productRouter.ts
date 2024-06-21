import productController from "../controllers/productController";

import { Router } from "express";
const ProductRouter = Router()
ProductRouter.post('/addproduct',productController.addProduct);

export default ProductRouter;

