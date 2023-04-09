import Link from "next/link";

const ReadAllItems = (props) => {
  return (
    <div>
      <h1 className="text-center">全書籍</h1>
      {props.allItems.map((item) => (
        <Link href={`/item/${item._id}`} key={item._id}>
          <div className="border-4 mt-6 text-center">
            <h3>{item.title}</h3>
            <img className="m-auto" src={item.image} />
            <p>{item.finished ? "完了" : "未読"}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReadAllItems;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall");
  const allitems = await response.json();

  return {
    props: allitems,
  };
};
