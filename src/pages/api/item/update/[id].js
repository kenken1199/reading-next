import connectDB from "@/utils/database";
import { ItemModel } from "@/utils/schemaModels";

const updateItem = async (req, res) => {
  try {
    await connectDB();
    console.log(req.query.id);
    const singleItem = await ItemModel.updateOne(
      { _id: req.query.id },
      req.body
    );
    return res.status(200).json({
      message: "アイテム編集成功",
      singleItem: singleItem,
    });
  } catch (error) {
    return res.status(400).json({ message: "アイテム編集失敗" });
  }
};

export default updateItem;
