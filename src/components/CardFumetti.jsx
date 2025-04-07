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
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    fetch("http://localhost:3000/fumetti")
      .then((res) => res.json())
      .then((data) => setFumetti(data.slice(0, 5)))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  // Responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize(); // Init check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(fumetti.length / itemsPerSlide)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [fumetti, itemsPerSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({
            length: Math.ceil(fumetti.length / itemsPerSlide),
          }).map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-col items-center justify-center flex-shrink-0 w-full gap-4 p-4 md:flex-row"
            >
              {fumetti
                .slice(
                  groupIndex * itemsPerSlide,
                  groupIndex * itemsPerSlide + itemsPerSlide
                )
                .map((fumetto) => (
                  <Card
                    key={fumetto.id}
                    className="flex flex-col justify-between w-full h-full max-w-xs bg-indigo-200 md:max-w-sm"
                  >
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
                        className="object-cover w-full h-auto rounded-lg max-h-64"
                      />
                    </CardContent>

                    <CardFooter className="flex flex-col justify-between flex-grow h-full gap-10 p-4 bg-indigo-200">
                      <div className="flex flex-wrap gap-2">
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

                      {/* Pulsante in fondo */}
                      <div className="w-full mt-auto">
                        <div className="flex items-center justify-center w-full gap-2 p-2 bg-blue-900 rounded-lg cursor-pointer text-amber-100">
                          <p className="text-center">Aggiungi al carrello</p>
                          <ShoppingCartIcon />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        {Array.from({ length: Math.ceil(fumetti.length / itemsPerSlide) }).map(
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
