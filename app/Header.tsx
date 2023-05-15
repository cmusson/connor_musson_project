import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 h-20 sticky top-0 left-0 right-0 z-10 w-full select-none">
      <Link href="/" className="bg-white text-blue-500 p-2 rounded-lg">
        Home
      </Link>
    </header>
  );
};

export default Header;
