//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full">
      <Image
        src={"/avatar.png?v=1.2"}
        width={737}
        height={678}
        alt=""
        priority={true}
        unoptimized={true}
        className="translate-z-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
