import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="p-4 tablet:p-5 h-20 sticky top-0 left-0 right-0 z-10 w-full select-none flex gap-2 justify-evenly align-center backdrop-blur">
      <Link href="/" className="flex align-center">
        <Image src="/liblab.svg" alt="logo" width={160} height={44} />
      </Link>

      <Button>
        <Link href="/" className="flex align-center">
          Back to the Shire
        </Link>
      </Button>

      <Link href="/" className="flex align-center">
        <Image src="/lotrGold.svg" alt="logo" width={160} height={44} />
      </Link>
    </header>
  );
};

export default Header;
