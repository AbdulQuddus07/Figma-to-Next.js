import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";

export default function Header() {
  return (
    <>
    <header>
      <div className="flex flex-col sm:flex-row space-around items-center bg-white w-full p-4">
        <div className="flex justify-center w-2/6 space-x-4">
          <span className="font-bold mt-1 text-lg">Cyber</span>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded w-8/12 h-10 text-sm bg-input"
          />
        </div>
        
        <ul className="flex justify-center space-x-6 mt-4 w-2/6 sm:mt-0">
          <li className="text-lg  font-medium flex hover:bg-slate-50 p-2 rounded">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg  flex hover:bg-slate-50 p-2 rounded">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg  flex hover:bg-slate-50 p-2 rounded">
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className="text-lg  flex hover:bg-slate-50 p-2 rounded">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>

        <div className="flex justify-end gap-5 space-x-4 mt-4 w-2/6 sm:mt-0">
          <FaRegHeart size={25} />
          <IoCartOutline size={25} />
          <TbUser size={25} />
        </div>
      </div>
    </header>
    
    </>
  );
}
