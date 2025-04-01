import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardFumetterie() {
  const [fumetterie, setFumetterie] = useState([]);
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/fumetterie")
      .then((res) => res.json())
      .then((data) => setFumetterie(data.slice(0, 5)))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  return (
    <div className="w-full overflow-x-auto h-max custom-scrollbar">
      <div className="flex gap-4 px-4 py-2 min-w-max">
        {fumetterie.map((fumetteria) => (
          <Card
            key={fumetteria.id}
            className="flex-shrink-0 bg-indigo-200 w-80"
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">
                {fumetteria.nome}
              </CardTitle>
              <CardDescription className="font-bold text-l text-amber-600 ">
                {fumetteria.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center bg-blue-900">
              <img
                src={fumetteria.image}
                alt={fumetteria.nome}
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center p-4 bg-indigo-200 h-1/4 ">
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="flex items-center ">
                  <p className="px-3 py-1 text-sm text-gray-800 bg-white rounded-lg shadow-md">
                    Tags:{" "}
                  </p>
                </div>
                {fumetteria.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-gray-800 bg-white rounded-lg shadow-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </CardFooter>
            <div className="flex flex-row items-center justify-end gap-2 px-2 rounded-lg">
              <div className="flex flex-row items-center gap-2 p-2 bg-blue-900 rounded-lg cursor-pointer text-amber-100">
                <p>Visita lo Shop</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardFumetterie;
