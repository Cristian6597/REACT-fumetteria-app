import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardFumetti() {
  const [fumetti, setfumetti] = useState([]);
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/fumetti")
      .then((res) => res.json())
      .then((data) => setfumetti(data.slice(0, 5)))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar">
      <div className="flex gap-4 px-4 py-2 min-w-max">
        {fumetti.map((fumetti) => (
          <Card key={fumetti.id} className="w-80 flex-shrink-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-900">
                {fumetti.nome}
              </CardTitle>
              <CardDescription className="text-l font-bold text-amber-600">
                {fumetti.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center bg-blue-900">
              <img
                src={fumetti.image}
                alt={fumetti.nome}
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center bg-amber-100">
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="flex items-center">
                  <p className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm">
                    Tags:{" "}
                  </p>
                </div>
                {fumetti.tags.map((tag, index) => (
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

export default CardFumetti;
