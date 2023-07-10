import moment from "moment";
import { useTheme } from "next-themes";
import Image from "next/image";

const Author = ({ author }) => {
  const { theme, setTheme } = useTheme();
  return (
    <section className="mt-5">
      <div
        className={`${
          theme === "light"
            ? "bg-[#f7f7f7] text-[#1d1e20]"
            : "bg-[#1d1e20] text-[#f7f7f7]"
        } relative rounded-lg p-5 py-6 pt-[4.5rem] md:pt-16 lg:pt-[4.5rem] text-center flex items-center gap-2`}
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <Image
            src={author.photo.url}
            width={100}
            height={100}
            alt={author.name}
            className="cursor-pointer object-cover object-top rounded-full"
          />
        </div>

        <div className="flex flex-col gap-1 md:gap-0 lg:gap-3 mx-auto">
          <h2 className="text-xl sm:text-3xl md:text-xl lg:text-3xl font-bold font-serif">
            {author.name}
          </h2>
          <p className="text-sm md:text-base capitalize">{author.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default Author;
