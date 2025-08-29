import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-yellow-500 shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-5">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <span className="text-3xl font-bold text-black">BookFinder</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/favorites" className="text-black font-medium text-xl hover:underline">
          ⭐ Favorites
        </Link>
        <Link to="/profile" className="text-black text-xl font-medium hover:underline">
          👤 Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
