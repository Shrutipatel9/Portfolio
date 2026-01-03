import Link from "next/link";
import { RiLinkedinFill, RiMailFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.linkedin.com/in/shrutikamani/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={"mailto:shrutikamani024@gmail.com"} className="hover:text-accent transition-all duration-300">
        <RiMailFill />
      </Link>
    </div>
  );
};

export default Socials;
