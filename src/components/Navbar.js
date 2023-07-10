import Link from "next/link";
import { useTheme } from "next-themes";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiMoonLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import { useState } from "react";

const iconStyle = "text-2xl cursor-pointer";

const Navbar = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="py-4 md:py-6 flex items-center justify-between mb-10 border-b border-neutral-200">
      <div>
        <Link href={"/"}>
          <h2 className="text-2xl md:text-3xl">
            <span className="text-rose-600">N</span>aseem.
          </h2>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ul
          className={`${isOpen === false ? "h-0" : "h-[89%]"} ${
            theme === "light" ? "bg-white" : "bg-[#121212]"
          } transition-all duration-700 flex gap-5 capitalize md:relative absolute top-[4.1rem] md:top-0 left-0 w-full md:w-fit md:bg-transparent md:h-auto flex-col md:flex-row px-10 sm:px-16 md:p-0 overflow-hidden z-50`}
        >
          {categories.map((category) => (
            <li
              key={category.slug}
              className="first:mt-5 md:first:mt-0 border-b md:border-0 border-neutral-200 py-2 md:p-0"
            >
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>

        {theme === "light" ? (
          <span className={iconStyle} onClick={() => setTheme("dark")}>
            <RiMoonLine />
          </span>
        ) : (
          <span className={iconStyle} onClick={() => setTheme("light")}>
            <BiSun />
          </span>
        )}
        <HiBars3BottomRight
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${iconStyle}`}
        />
      </div>
    </div>
  );
};

export default Navbar;
