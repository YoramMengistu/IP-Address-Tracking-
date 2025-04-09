import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">IP Tracker</h2>
      <nav>
        <ul>
          <li className="mb-3">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
