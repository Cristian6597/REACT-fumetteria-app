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
import { useAxios } from "@/context/AxiosProvider";

/// Custom hook to use axios instance
function CaroselloFumetti() {
  const axios = useAxios();
  const [fumetti, setFumetti] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Fetch fumetti data from the API
  useEffect(() => {
    axios
      .get("/fumetti")
      .then((res) => setFumetti(res.data.slice(0, 5)))
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

    // Add event listener for resize
    handleResize(); // Init check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(fumetti.length / itemsPerSlide)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [fumetti, itemsPerSlide]);

  /// Function to go to a specific slide
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
                .map((fumetti) => (
                  <Card
                    key={fumetti.id}
                    className="flex flex-col justify-between w-full h-full max-w-xs bg-indigo-200 md:max-w-sm"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-blue-900">
                        {fumetti.title}
                      </CardTitle>
                      <CardDescription className="font-bold text-l text-amber-600">
                        {fumetti.volume}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center bg-blue-900">
                      <img
                        src={fumetti.image}
                        alt={fumetti.title}
                        className="object-cover w-full h-auto rounded-lg max-h-64"
                      />
                    </CardContent>

                    <CardFooter className="flex flex-col justify-between flex-grow h-full gap-10 p-4 bg-indigo-200">
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
