import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-8 bg-gray-100 text-gray-800 px-8 py-4">
      <Link to="/" className="px-3 py-1 rounded-full bg-cyan-500 text-white">
        Home
      </Link>
      <Link to="/shop" className="px-3 py-1 rounded-full bg-cyan-500 text-white">
        Shop
      </Link>
      <Link to="/admin" className="px-3 py-1 rounded-full bg-cyan-500 text-white">
        Admin Portal
      </Link>
    </nav>
  );
}

export default Navbar;