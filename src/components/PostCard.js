import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className={`flex flex-col gap-3 sm:gap-5 rounded cursor-pointer`}>
        <div className="mb-3">
          <Image
            src={post.featuredImage.url}
            width={500}
            height={500}
            alt={post.title}
            className="object-contain sm:object-cover object-top w-full sm:h-72 md:h-60 rounded"
          />
        </div>

        <div>
          <p className="text-sm font-[500] text-[#7c7c7c]">
            {post.categories[0].name}
          </p>
          <h2 className="sm:text-xl font-semibold">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={post.author.photo.url}
            width={40}
            height={40}
            alt={post.title}
            className="cursor-pointer object-cover object-top rounded-full"
          />
          <div>
            <p className="cursor-pointer text-sm font-[500]">
              {post.author.name}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <FaRegCalendar className="text-indigo-500" />
              <p className="text-[#7c7c7c] text-sm">
                {moment(post.createdAt).format("MMM DD YYYY")}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm sm:text-base">{post.excerpt}</p>
        </div>
        <Link
          href={`/post/${post.slug}`}
          className="block w-fit capitalize rounded-full font-[500] text-indigo-500 hover:text-indigo-600"
        >
          <span className="flex items-center gap-1 text-sm sm:text-base hover:gap-2 transition-all">
            read more
            <BsArrowRightShort className="text-xl mt-[2px] sm:text-2xl" />
          </span>
        </Link>
      </div>
    </Link>
  );
};

export default PostCard;
