import { getCategories } from "@/services";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-[#f7f7f7] text-[#1d1e20]"
          : "bg-[#1d1e20] text-[#f7f7f7]"
      } rounded-lg p-5 py-6`}
    >
      <h2 className="mb-8 pb-3 text-lg font-semibold border-b border-[#d4d4d4]">
        Categories
      </h2>
      <div>
        <ul className="flex flex-col gap-5">
          {categories.map((category) => (
            <Link href={category.slug} key={category.slug}>
              <li className="border-b border-[#d4d4d4] pb-2 text-sm hover:text-indigo-500">
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
