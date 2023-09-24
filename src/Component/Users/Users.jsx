import { useLoaderData } from "react-router-dom";
import User from "./User";
const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>Users</h1>
      <h3>Our Awesome Users</h3>

      <h3>User Data {users.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
