import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>Nav</h3>
      <nav className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to={"/post"}>Post</Link>
      </nav>
    </div>
  );
};

export default Header;
