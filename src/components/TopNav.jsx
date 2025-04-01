import { ShoppingCartIcon } from "lucide-react";
import { Outlet, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import { UserMenu } from "./UserMenu";
function TopNav() {
  return (
    <>
      <div className="flex flex-row justify-between px-4 py-4 bg-blue-900 shadow-lg h-1/12">
        <h1 className="text-3xl font-bold text-orange-300">Fumettiamo</h1>
        <div className="flex flex-row items-center gap-4 ml-auto cursor-pointer h-1/2 text-amber-100">
          <div className="flex flex-row items-center gap-2 p-2 bg-orange-500 rounded-lg h-1/2">
            <nav>
              <ul className="flex flex-row ">
                <li>
                  <Link to="/cart">Carrello</Link>
                </li>
                <ShoppingCartIcon />
              </ul>
            </nav>
          </div>
          <UserMenu />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 px-4 py-4 text-xl font-bold text-blue-900 bg-orange-500 shadow-lg h-1/12">
        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
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
      <Outlet />
    </>
  );
}

export default TopNav;
