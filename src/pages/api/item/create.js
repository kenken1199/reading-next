import connectDB from "@/utils/database";
import { ItemModel } from "@/utils/schemaModels";

const createItem = async (req, res) => {
  try {
    await connectDB();
    // console.log(req.body);
    ItemModel.create(req.body);
    return res.status(200).json({ message: "アイテム作成" });
  } catch (error) {
    return res.status(400).json({ message: "アイテム作成失敗" });
  }
};

export default createItem;
