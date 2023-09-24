import { useLoaderData } from "react-router-dom";
import PostItem from "./PostItem";

const Post = () => {
  const post = useLoaderData();
  return (
    <div>
      <h2>My All Post</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {post.map((item) => (
          <PostItem key={item.id} item={item}></PostItem>
        ))}
      </div>
    </div>
  );
};

export default Post;
