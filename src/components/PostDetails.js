import moment from "moment";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";

const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (
          <b key={index} className="text-sm md:text-base">
            {text}
          </b>
        );
      }

      if (obj.italic) {
        modifiedText = (
          <em key={index} className="text-sm md:text-base">
            {text}
          </em>
        );
      }

      if (obj.underline) {
        modifiedText = (
          <u key={index} className="text-sm md:text-base">
            {text}
          </u>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 md:text-base text-sm">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="w-full h-auto object-cover object-top"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <section>
      <div className="mb-5 md:mb-10">
        <Image
          src={post.featuredImage.url}
          width={500}
          height={500}
          alt={post.title}
          className="w-full h-full rounded object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-3 md:gap-5">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={post.author.photo.url}
              width={50}
              height={50}
              alt={post.author.name}
              className="cursor-pointer object-cover object-top rounded-full"
            />
          </div>
          <div className="">
            <p className="cursor-pointer text-lg font-semibold">
              {post.author.name}
            </p>
            <div className="flex items-center gap-1">
              <FaRegCalendar className="text-indigo-500 text-sm" />
              <p className="text-[#7c7c7c]">
                {moment(post.createdAt).format("MMM DD YYYY")}
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold">{post.title}</h1>

        <div className="flex flex-col gap-5">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
