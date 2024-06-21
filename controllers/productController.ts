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
  
  editProduct: async (req: Request, res: Response) => {
    try {
      const id = req.query.id as string;
      const { productName, Price, Discount, color, size } = req.body;
      await productModel.updateOne({ _id: id }, {
        $set: {
          productName,
          Price,
          Discount,
          color,
          size
        }
      });
      res.status(200).send("product edit success");
    } catch (err) {
      res.status(500).send("internal server error");
    }
  }
};
