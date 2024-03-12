import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex h-full min-w-[150px] items-center">
      <Image src="/next.svg" alt="Logo Football" height="80" width="80" />
    </div>
  );
};

export default Logo;
