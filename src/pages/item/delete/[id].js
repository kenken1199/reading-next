import { useRouter } from "next/router";

const UpdateItem = (props) => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/item/delete/${props.singleItem._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (error) {
      console.log(error);
      alert("アイテム削除失敗");
    }
    router.push("/");
  };
  return (
    <div>
      <h1>アイテム削除</h1>
      <form onSubmit={handleSubmit}>
        <h2>{props.singleItem.title}</h2>
        <img src={props.singleItem.image} />
        <p>{props.singleItem.description}</p>
        <p>{props.singleItem.finished ? "完了" : "未読"}</p>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          削除
        </button>
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
  };
};
