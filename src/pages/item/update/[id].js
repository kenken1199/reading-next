import { useState } from "react";
import { useRouter } from "next/router";

const UpdateItem = (props) => {
  const [title, setTitle] = useState(props.singleItem.title);
  const [image, setImage] = useState(props.singleItem.image);
  const [description, setDescription] = useState(props.singleItem.description);
  const [finished, setFinished] = useState(props.singleItem.finished);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/item/update/${props.singleItem._id}`,
        {
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
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (error) {
      console.log(error);
      alert("アイテム編集失敗");
    }
    router.push("/");
  };
  return (
    <div>
      <h1>アイテム編集</h1>
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
        <button>編集</button>
      </form>
    </div>
  );
};
export default UpdateItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:3000/api/item/${context.query.id}`
  );
  const singleItem = await response.json();

  return {
    props: singleItem,
    // redirect: {
    //   permanent: false,
    //   destination: "/",
    // },
  };
};
