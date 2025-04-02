import { Heart, ShoppingCartIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

import { CarrelloLaterale } from "./CarrelloLaterale";
import { UserMenu } from "./UserMenu";

function TopNav({ cart, removeFromCart }) {
  return (
    <>
      <div className="flex flex-row gap-6 px-4 py-4 bg-blue-900 shadow-lg h-1/12">
        <div className="flex items-center justify-center w-2/4">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <h1 className="text-3xl font-bold text-orange-300">
                    Fumettiamo
                  </h1>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-end justify-end w-1/4">
          <div className="flex flex-row items-center gap-2 cursor-pointer text-amber-100">
            <div className="flex flex-row items-center gap-2 p-2 rounded-lg">
              <nav>
                <ul className="flex flex-row items-center gap-2">
                  <li>
                    <CarrelloLaterale
                      cart={cart}
                      removeFromCart={removeFromCart}
                    />
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-row items-center gap-2 p-2 rounded-lg">
              <nav>
                <ul className="flex flex-row items-center gap-4">
                  <li className="flex flex-row gap-2 ">
                    <Link to="/lista-dei-desideri">Lista dei desideri</Link>
                    <Heart />
                  </li>
                  <li>
                    <Link to="/login">Accedi</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 px-4 py-4 text-xl font-bold text-black shadow-lg h-1/12">
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
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default TopNav;
