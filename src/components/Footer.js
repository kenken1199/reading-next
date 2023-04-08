import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-24">
        <Link className="ml-6 sm:m-0" href="/">
          © kenken1199
        </Link>
        <div className="flex">
          <Link className="pr-6" href="https://twitter.com/kenken_1199">
            <TwitterIcon fontSize="large" />
          </Link>
          <Link className="pr-6 sm:p-0" href="https://github.com/kenken1199">
            <GitHubIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
