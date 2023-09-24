import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email } = user || {};
  console.log(user);
  return (
    <div className="p-4 m-5 rounded-md border-2 border-sky-500">
      <h2 className="text-2xl">Name: {name}</h2>
      <p>User Name: {username}</p>
      <p>Email: {email} </p>
      <div className="text-center text-2xl text-blue-600 pt-4">
        <Link to={`/users/${id}`}>Show Details</Link>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
