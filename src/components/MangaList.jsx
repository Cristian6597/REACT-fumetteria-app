import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "./ui/button";

// Componente MangaList
function MangaList({ addToCart }) {
  const [fumettiList, setFumettiList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fumetti")
      .then((res) => res.json())
      .then((data) => setFumettiList(data))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  const handleAddToCart = (fumetto) => {
    // Aggiungi il fumetto al carrello (chiamando la funzione passata come prop)
    addToCart(fumetto);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
      <div className="grid items-center justify-center w-3/4 grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {fumettiList.map((fumetto) => (
          <Card key={fumetto.id} className="grid h-full grid-row-4">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                {fumetto.nome}
                {fumetto.location}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <img
                src={fumetto.image}
                alt={fumetto.nome}
                className="object-cover w-full h-full rounded-md"
              />
              <CardDescription className="px-2 py-2 mt-2 text-sm text-gray-600 border-solid border-1 rounded-2xl">
                Tag: {fumetto.tags.join(", ")}
              </CardDescription>
              <CardDescription className="text-sm text-black">
                <span className="font-bold">{fumetto.prezzo}€</span>
              </CardDescription>
              <CardDescription className="text-sm">
                <Button
                  onClick={() => handleAddToCart(fumetto)} // Aggiungi al carrello
                  className="font-bold text-white bg-orange-500 border-solid cursor-pointer rounded-2xl hover:bg-orange-600"
                >
                  Aggiungi al Carrello
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MangaList;
