import { Link, useLoaderData } from "react-router-dom";

const UserDeatails = () => {
  const deatails = useLoaderData();
  console.log(deatails);
  return (
    <div className="p-4 m-5 rounded-md border-2 border-sky-500">
      <h1>This is uer details</h1>
      <h1>{deatails?.name}</h1>

      <div className="text-center text-2xl text-blue-600 pt-4">
        <Link to={`/users`}>Show All</Link>
      </div>
    </div>
  );
};

export default UserDeatails;
