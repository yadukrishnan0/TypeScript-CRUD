import { Schema,model } from "mongoose";

export interface Product{
    productName:string,
    Price:Number,
    Discount:Number,
    Category:string,
    color:string,
    size?:string,
}

const productSchema = new Schema<Product>({
      productName:{type:String,required:true},
      Price:{type:Number,required:true},
      Discount:{type:Number,required:true},
      color:{type:String,required:true},
      size:{type:String}
})

export default model<Product>('products',productSchema);