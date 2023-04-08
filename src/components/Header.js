import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link className="ml-6 sm:ml-0" href="/">
          Home
        </Link>
        <div className="flex">
          <Link href="/item/create" className="mr-6">
            アイテム作成
          </Link>
          <Link className="mr-6 sm:mr-0" href="/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
