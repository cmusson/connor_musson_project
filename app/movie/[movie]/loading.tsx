import Image from "next/image";

const Loading = () => {
  return (
    <main className="w-screen h-screen flex justify-center align-center">
      <div className="flex justify-center align-center flex-col">
        <Image
          className="animate-pulse"
          src="/lotrGold.svg"
          alt="logo"
          width={450}
          height={135}
        />
        <h1 className="text-center animate-pulse">
          Loading movie information...
        </h1>
      </div>
    </main>
  );
};

export default Loading;
