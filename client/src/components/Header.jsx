import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-700">
      <div className="flex justify-between text-white items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">LearnAuth</h1>
        </Link>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="hover:text-gray-300 cursor-pointer ">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-gray-300 cursor-pointer ">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profilepic"
                className="h-8 w-8 rounded-full object-cover "
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
