import { useState } from "react";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [finished, setFinished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/item/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          image: image,
          description: description,
          finished: finished,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (error) {
      console.log(error);
      alert("アイテム作成失敗");
    }
  };
  return (
    <div>
      <h1>アイテム作成</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="書籍名"
          required
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="画像"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          rows={15}
          placeholder="書籍説明"
          required
        ></textarea>
        完了:
        <input
          onChange={() => setFinished((prevState) => !prevState)}
          checked={finished}
          type="checkbox"
          name="finished"
        />
        <button>作成</button>
      </form>
    </div>
  );
};

export default CreateItem;
