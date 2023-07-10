import Author from "@/components/Author";
import Categories from "@/components/Categories";
import Comments from "@/components/Comments";
import CommentsForm from "@/components/CommentsForm";
import PostDetails from "@/components/PostDetails";
import PostWidget from "@/components/PostWidget";
import { getPostDetails, getPosts } from "@/services";

const Post = ({ post }) => {
  return (
    <div className="relative">
      <div className="flex md:flex-row flex-col gap-5 relative">
        {/* blog post (Left Side) */}
        <div className="flex flex-col flex-1 gap-8">
          <PostDetails post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>

        {/* line between (post) & (postWidget,Categories) */}
        <div className="w-1 hidden md:block border-r border-neutral-200"></div>

        {/* postWidgets and Categories (Right Side) */}
        <div className="relative md:sticky top-2 left-0 right-0 md:w-72 lg:w-80 h-fit flex flex-col gap-10">
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
