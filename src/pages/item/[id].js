import Link from "next/link";

const ReadSingleItem = (props) => {
  console.log(props);
  return (
    <div>
      <h1>個別アイテムページ</h1>
      <div>
        <img src={props.singleItem.image} />
        <h1>{props.singleItem.title}</h1>
        <p>{props.singleItem.price}</p>
        <p>{props.singleItem.finished ? "true" : "false"}</p>
        <div>
          <Link href={`/item/update/${props.singleItem._id}`}>
            アイテム編集
          </Link>
          <Link href={`/item/delete/${props.singleItem._id}`}>
            アイテム削除
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
