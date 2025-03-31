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
    <div className="w-full h-max overflow-x-auto custom-scrollbar">
      <div className="flex gap-4 px-4 py-2 min-w-max">
        {fumetterie.map((fumetteria) => (
          <Card key={fumetteria.id} className="w-80 flex-shrink-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">
                {fumetteria.nome}
              </CardTitle>
              <CardDescription className="text-l font-bold text-amber-600">
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
            <CardFooter className="flex flex-col items-center bg-amber-100 p-4">
              <div>
                <a
                  href={fumetteria.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block mt-2"
                >
                  Visita il sito
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="flex items-center">
                  <p className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm">
                    Tags:{" "}
                  </p>
                </div>
                {fumetteria.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardFumetterie;
