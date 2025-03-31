import React from "react";
import { ShoppingBagIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserMenu } from "./UserMenu";
function TopNav() {
  return (
    <>
      <div className="flex flex-row  bg-blue-900 h-1/12 rounded-2xl shadow-lg py-4 px-4 justify-between">
        <h1 className="text-3xl font-bold text-orange-300">Fumettiamo</h1>
        <div className="flex flex-row ml-auto gap-4 h-1/2 items-center text-amber-100 cursor-pointer">
          <h1>News</h1>
          <h1>Shop</h1>
          <h1>About us</h1>
          <div className="flex flex-row gap-2 h-1/2 items-center bg-orange-500 rounded-lg p-2">
            <button className="cursor-pointer">Carrello</button>
            <ShoppingBagIcon />
          </div>
          <UserMenu />
        </div>
      </div>
    </>
  );
}

export default TopNav;
