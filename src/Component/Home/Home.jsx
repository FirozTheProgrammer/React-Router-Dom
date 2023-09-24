import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="p-6">
      <Header></Header>
      <h2>This is my home page</h2>
      <Outlet></Outlet>
      <h3>My footer</h3>
    </div>
  );
};

export default Home;
