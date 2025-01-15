import { bagImg, chubbyImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-5 sm:px-10 bg-slate-100 shadow-md">
      <nav className="flex w-full max-w-screen-xl mx-auto items-center justify-between">
        {/* Logo Section */}
        <a href="/" aria-label="Homepage">
          <img
            src={chubbyImg}
            alt="Chubby Logo"
            width={56}
            height={72}
            className="cursor-pointer hover:scale-150 transition-transform duration-300"
          />
        </a>

        {/* Navigation Links */}
        <ul className="hidden sm:flex flex-1 justify-center space-x-6">
          {navLists.map((nav) => (
            <li
              key={nav}
              className="text-gray-600 text-md font-medium cursor-pointer hover:text-gray-900 hover:scale-105 transition-transform duration-300"
            >
              {nav}
            </li>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="p-2 hover:bg-gray-100 rounded-full transition-all"
          >
            <img src={searchImg} alt="Search Icon" width={18} height={18} />
          </button>
          <button
            aria-label="Cart"
            className="p-2 hover:bg-gray-100 rounded-full transition-all"
          >
            <img src={bagImg} alt="Shopping Bag Icon" width={18} height={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <ul className="flex sm:hidden justify-between mt-4 space-x-4">
        {navLists.map((nav) => (
          <li
            key={nav}
            className="text-gray-600 text-sm font-medium cursor-pointer hover:text-gray-900 hover:scale-105 transition-transform"
          >
            {nav}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;