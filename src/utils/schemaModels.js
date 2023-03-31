import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  image: String,
  description: String,
  finished: { type: Boolean, default: false },
});

export const ItemModel =
  mongoose.models.Item || mongoose.model("Item", ItemSchema);
