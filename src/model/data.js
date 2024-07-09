import mongoose, { Schema } from "mongoose";
const createSchema = new Schema(

    {
        product: String,
       quantity:String,
    }
);
const Create = mongoose.models.creates||mongoose.model("creates", createSchema);

export default Create;