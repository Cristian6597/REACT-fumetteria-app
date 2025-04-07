import { Heart, Linkedin, Menu, MoveLeft } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { CarrelloLaterale } from "./CarrelloLaterale";
import { UserMenu } from "./UserMenu";

function TopNav({ cart, removeFromCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="flex flex-col items-center justify-between px-4 py-4 bg-blue-900 shadow-lg md:flex-row">
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-4">
            <Link to="/">
              <h1 className="text-3xl font-bold text-orange-300">Fumettiamo</h1>
            </Link>
            <a
              href="https://www.linkedin.com/in/cristian-ercolani/"
              target="_blank"
              className="p-2 ml-2 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700"
            >
              <Linkedin className="w-5 h-5 text-white fill-amber-50" />
            </a>
            <MoveLeft className="hidden text-white md:flex " />
            <h1 className="hidden text-white md:flex">
              Visita il mio profilo!
            </h1>
          </div>

          {/* Hamburger menu */}
          <button
            className="md:hidden text-amber-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Right-side menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:justify-end md:w-auto`}
        >
          <div className="flex flex-col items-start gap-4 mt-4 md:flex-row md:items-center text-amber-100 md:mt-0">
            {/* Su mobile il carrello è altrove */}
            <div className="flex-row items-center hidden gap-2 md:flex">
              <CarrelloLaterale cart={cart} removeFromCart={removeFromCart} />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-2">
              {/* Lista dei desideri a sinistra */}
              <div>
                <Link
                  to="/lista-dei-desideri"
                  className="flex items-center gap-1"
                >
                  Lista dei desideri <Heart className="hover:fill-orange-500" />
                </Link>
              </div>

              {/* Accedi a destra */}
              <div className="flex items-center gap-2">
                <Link to="/login">Accedi</Link>
                <UserMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carrello FIXED in basso a destra su MOBILE */}
      <div className="fixed z-50 bottom-4 right-4 md:hidden">
        <CarrelloLaterale cart={cart} removeFromCart={removeFromCart} />
      </div>

      {/* Secondary nav */}
      <div className="flex-row justify-center hidden gap-10 px-4 py-4 text-xl font-bold text-black bg-white shadow-lg md:flex">
        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/novita">Novità</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile nav links */}
      {menuOpen && (
        <div className="px-4 py-2 text-lg font-semibold text-black bg-white shadow md:hidden">
          <nav>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/novita">Novità</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <Outlet />
    </>
  );
}

export default TopNav;
