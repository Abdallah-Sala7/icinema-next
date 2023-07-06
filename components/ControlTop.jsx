import { profileImg } from "../assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ControlTop(props) {
  const cuurantPath = usePathname();
  const movies_about = (
    <div className="flex rounded-tl-xl rounded-br-xl border border-primary overflow-hidden">
      <Link
        href={props.leftLink}
        className={`px-5 py-1.5 font-light sm:px-10 sm:py-2 md:px-20 ${
          cuurantPath === props.leftLink
            ? "bg-primary text-dark"
            : "text-primary"
        }`}
      >
        {props.left}
      </Link>

      <Link
        href={props.righLinkt}
        className={`px-5 py-1.5 font-light sm:px-10 sm:py-2 md:px-20 ${
          cuurantPath === props.righLinkt
            ? "bg-primary text-dark"
            : "text-primary"
        }`}
      >
        {props.right}
      </Link>
    </div>
  );

  return (
    <div className="flex items-center gap-5 justify-between flex-wrap rounded-xl p-2 bg-white shadow-md dark:shadow-darkShadow dark:bg-dark mb-5 sm:p-3">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
          <Image
            src={profileImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden text-dark dark:text-white sm:block">
          <h1 className="font-light">Galxay cinema</h1>
          <h2 className="font-light">galaxycinema@gmail.com</h2>
        </div>
      </div>
      {props.entry === "movies_about" ? movies_about : null}
    </div>
  );
}

export default ControlTop;
