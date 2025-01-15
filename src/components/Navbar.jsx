import { bagImg, chubbyImg, searchImg } from "../utils";
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={chubbyImg} alt="Chubby" width={56} height={72} className="cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out" />

        <div className="flex flex-1 justify-center max-sm:hidden h-16 p-4">
          {navLists.map((nav) => (
            <div key={nav} className="px-7 text-m cursor-pointer text-grey hover:text-black hover:scale-105 transition-all ease-in-out">
              {nav}
            </div>
            ))}
        </div>

        <div className="flex items-baseline gap-7 max:smjustify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar