import { Button } from "@/components/ui/button";

import { Label } from "./ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";
import { ShoppingCartIcon } from "lucide-react";
import CardCarrello from "./CardCarrello";
import ButtonShop from "./ui/buttonShop";

export function CarrelloLaterale({ cart, removeFromCart }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-row items-center justify-center px-4 bg-orange-500 outline rounded-2xl">
          <Button className="cursor-pointer">Carrello</Button>
          <ShoppingCartIcon />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader className="bg-blue-900 border-solid border-1">
          <SheetTitle className="bg-blue-900">
            <h1 className="text-3xl font-bold text-orange-300">Carrello</h1>
          </SheetTitle>
          <SheetDescription className="bg-blue-900">
            {" "}
            <h1 className="text-xl font-bold text-orange-300">
              Riepilogo acquisti
            </h1>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* Verifica se il carrello non è vuoto prima di fare map */}
          {Array.isArray(cart) && cart.length > 0 ? (
            cart.map((item, index) => (
              <CardCarrello
                key={index}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <p className="text-lg font-bold text-center text-gray-500">
              Il carrello è vuoto.
            </p>
          )}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <ButtonShop />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
