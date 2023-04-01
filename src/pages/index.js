import Link from "next/link";

const ReadAllItems = (props) => {
  return (
    <div>
      <h1>こんにちは</h1>
      {props.allItems.map((item) => (
        <Link href={`/item/${item._id}`} key={item._id}>
          <img src={item.image} />
          <h2>{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.finished ? "true" : "false"}</p>
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
