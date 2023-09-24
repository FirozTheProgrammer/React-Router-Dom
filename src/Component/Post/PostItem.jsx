import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostItem = ({ item }) => {
  const { id, title } = item;
  return (
    <div className="p-4 m-5 rounded-md border-2 border-sky-500">
      <h1>{title}</h1>
      <div className="text-center text-2xl text-blue-600 pt-4">
        <Link to={`/post/${id}`}>Show Details</Link>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  item: PropTypes.object.isRequired, //this is the object that we want to pass in this component and it should have a property called 'title
};

export default PostItem;
