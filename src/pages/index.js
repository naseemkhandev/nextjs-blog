import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";
import { getPosts } from "@/services/index";

export default function Home({ posts }) {
  return (
    <main className="mb-10 relative">
      <div className="flex md:flex-row flex-col gap-5 relative">
        {/* blog posts (Left Side) */}
        <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-y-12 lg:gap-6">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        {/* line between (posts) & (postWidget,Categories) */}
        <div className="w-1 hidden md:block border-r border-neutral-200"></div>

        {/* postWidgets and Categories (Right Side) */}
        <div className="relative md:sticky top-2 left-0 right-0 flex-2 md:w-72 lg:w-80 h-fit flex flex-col gap-10">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </main>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
