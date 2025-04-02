import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCartIcon } from "lucide-react";

function CaroselloFumetti() {
  const [fumetti, setFumetti] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/fumetti")
      .then((res) => res.json())
      .then((data) => setFumetti(data.slice(0, 5)))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(fumetti.length / 3)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [fumetti]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(fumetti.length / 3) }).map(
            (_, groupIndex) => (
              <div
                key={groupIndex}
                className="flex justify-center flex-shrink-0 w-full gap-4"
              >
                {fumetti
                  .slice(groupIndex * 3, groupIndex * 3 + 3)
                  .map((fumetto) => (
                    <Card key={fumetto.id} className="bg-indigo-200 w-80">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-blue-900">
                          {fumetto.nome}
                        </CardTitle>
                        <CardDescription className="font-bold text-l text-amber-600">
                          {fumetto.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center bg-blue-900">
                        <img
                          src={fumetto.image}
                          alt={fumetto.nome}
                          className="rounded-lg"
                        />
                      </CardContent>
                      <CardFooter className="flex flex-col items-center p-4 bg-indigo-200 h-1/4">
                        <div className="flex flex-wrap gap-2 mt-2">
                          <p className="px-3 py-1 text-sm text-gray-800 bg-white rounded-lg shadow-md">
                            Tags:
                          </p>
                          {fumetto.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm text-gray-800 bg-white rounded-lg shadow-md"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </CardFooter>
                      <div className="flex flex-row items-center justify-end gap-2 px-2 rounded-lg ">
                        <div className="flex flex-row items-center gap-2 p-2 bg-blue-900 rounded-lg cursor-pointer text-amber-100">
                          <p>Aggiungi al carrello</p>
                          <ShoppingCartIcon />
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        {Array.from({ length: Math.ceil(fumetti.length / 3) }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-900" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          )
        )}
      </div>
    </div>
  );
}

export default CaroselloFumetti;
