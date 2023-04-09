import Link from "next/link";

const ReadSingleItem = (props) => {
  console.log(props);
  return (
    <div>
      <h1>個別アイテムページ</h1>
      <div>
        <img className="m-auto mb-6" src={props.singleItem.image} />
        <h1 className="mb-6">{props.singleItem.title}</h1>
        <p className="mb-6">{props.singleItem.description}</p>
        <p className="mb-2">{props.singleItem.finished ? "完了" : "未読"}</p>
        <div className="text-right">
          <Link href={`/item/update/${props.singleItem._id}`}>
            <button className="mr-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              アイテム編集
            </button>
          </Link>
          <Link href={`/item/delete/${props.singleItem._id}`}>
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              アイテム削除
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:3000/api/item/${context.query.id}`
  );
  const singleItem = await response.json();

  return {
    props: singleItem,
  };
};
