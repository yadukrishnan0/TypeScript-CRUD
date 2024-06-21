import { Response, Request } from "express";
import { productModel } from "../models/productSchema";
export default {
  addProduct: async (req: Request, res: Response) => {
    try {
      const { productName, Price, Discount, color, size } = req.body;
      const newproduct = new productModel({
        productName,
        Price,
        Discount,
        color,
        size,
      });
      await newproduct.save();
      res.status(201).send("product add success");
    } catch (err) {
      return res.status(500).send("internal server error");
    }
  },
};
