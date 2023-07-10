import { useTheme } from "next-themes";
import React, { useRef, useState } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [setshowSuccessMsg, setSetshowSuccessMsg] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const { theme, setTheme } = useTheme();

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-[#f7f7f7] text-[#1d1e20]"
          : "bg-[#1d1e20] text-[#f7f7f7]"
      } rounded-lg px-5 py-10`}
    >
      <form className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
        <div className="w-full">
          <textarea
            name=""
            placeholder="Comment"
            rows={3}
            className={`${
              theme === "light"
                ? "bg-[#dedede] text-[#1d1e20]"
                : "bg-[#232528] text-[#f7f7f7]"
            } resize-y w-full border-0 outline-none rounded-lg py-3 px-4`}
          ></textarea>
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <input
            type="text"
            name="comment"
            placeholder="Your name"
            className={`${
              theme === "light"
                ? "bg-[#dedede] text-[#1d1e20]"
                : "bg-[#232528] text-[#f7f7f7]"
            } resize-y w-full border-0 outline-none rounded-lg p-4`}
          />
          <input
            type="text"
            name="comment"
            placeholder="Your email"
            className={`${
              theme === "light"
                ? "bg-[#dedede] text-[#1d1e20]"
                : "bg-[#232528] text-[#f7f7f7]"
            } resize-y w-full border-0 outline-none rounded-lg p-4`}
          />
        </div>

        <div className="mt-5">
          <button type="submit">
            <span
              className={`${
                theme === "light"
                  ? "bg-[#232528] hover:bg-[#0d0e0f]"
                  : "bg-[#11b7ff] hover:bg-[#44c7ff]"
              } p-3 rounded-md text-[#f7f7f7]`}
            >
              Post Comment
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
