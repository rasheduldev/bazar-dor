import logo from "@/assets/logo-icon.png";
import Image from "next/image";
import CurrentDate from "./CurrentDate";
import UserInfo from "./UserInfo";
import Link from "next/link";

const Navbar = async () => {
  return (
    <div className="bg-base-100 shadow-sm py-2">
      <div className="navbar flex justify-between items-center container mx-auto">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
          <Image
            src={logo}
            alt="Navbar Logo"
            className="w-10 h-10 bg-[#05893E] p-2 rounded-md"
          ></Image>
          </Link>
          <div>
            <p className="font-bold text-2xl">বাজার দর</p>
            <p className="text-xs text-gray-500">
              <CurrentDate />
            </p>
          </div>
        </div>
        <UserInfo></UserInfo>
      </div>
      
    </div>
  );
};

export default Navbar;
