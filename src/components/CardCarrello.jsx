import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import "../../src/index.css";

function CardCarrello({ item, removeFromCart }) {
  return (
    <Card className="flex flex-row w-auto py-4 overflow-hidden bg-indigo-200">
      <img
        src={item.image} // Mostra l'immagine dinamica del fumetto
        alt={item.nome}
        className="object-cover w-1/6 h-full max-h-full ml-4 rounded-l-lg max-w-1/6"
      />
      <div className="flex flex-row justify-between flex-1 p-4 text-blue-900 ">
        <div>
          <div className="flex flex-col">
            <CardTitle className="text-xl font-bold">{item.nome}</CardTitle> {/* Nome del fumetto */}
            <CardDescription className="font-bold text-l text-amber-600">
              {item.location} {/* Se hai un campo per la provenienza, usalo */}
            </CardDescription>
            <p className="mt-2 text-sm">Volume: {item.volume}</p> {/* Dimensione o volume, personalizza come preferisci */}
            <p className="mt-2 text-sm">Prezzo: {item.prezzo}€</p> {/* Prezzo del fumetto */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/12 h-full gap-2">
        <div
          className="flex items-center justify-center w-full h-full transition-transform transform bg-orange-500 rounded-r-lg cursor-pointer hover:scale-105"
          onClick={() => removeFromCart(item.id)} // Funzione di rimozione
        >
          <X />
        </div>
      </div>
    </Card>
  );
}

export default CardCarrello;
