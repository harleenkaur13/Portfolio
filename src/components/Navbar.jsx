import { useState } from "react";
import { CircleUser, X, Menu } from "lucide-react";
import { Link } from "react-scroll";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black/70 backdrop-blur-md">
      <div className='max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-16'>

        {/* LOGO */}
        <div className='flex items-center gap-1 text-xl text-yellow-600'>
          <div><CircleUser size={26} /></div>
          <span className="">Harleen</span>
        </div>

        {/* MENU TRAY */}
        <ul className="hidden md:flex gap-8 text-sm text-zinc-400">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-yellow-600 cursor-pointer transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-zinc-400">
          {isOpen ? (
            <X size={24} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={24} onClick={() => setIsOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-black text-zinc-300 py-4 md:hidden">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="py-2">
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-yellow-600 cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar