import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const details = useLoaderData();
  return (
    <div className="p-4 m-5 rounded-md border-2 border-sky-500">
      <h1>This is post details!</h1>
      <div>
        <p>{details.title}</p>
        <p>{details.body}</p>
        <div className="text-center text-2xl text-blue-600 pt-4">
          <Link to={"/post"}>All Post</Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
