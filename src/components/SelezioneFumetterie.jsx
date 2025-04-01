import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import "../../src/index.css";
import { Link } from "react-router-dom";

function CardFumetterie() {
  const [fumetterie, setFumetterie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fumetterie")
      .then((res) => res.json())
      .then((data) => setFumetterie(data.slice(0, 5)))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  return (
    // da cambiare la scrollbar in tabs
    <div className="p-4 overflow-y-auto h-11/12">
      <div className="flex flex-col items-center gap-4">
        {fumetterie.map((fumetteria) => (
          <Card
            key={fumetteria.id}
            className="flex flex-row w-11/12 h-40 overflow-hidden "
          >
            <img
              src={fumetteria.image}
              alt={fumetteria.nome}
              className="object-cover w-1/3 h-full rounded-l-lg"
            />
            <div className="flex flex-row justify-between flex-1 p-4 text-white bg-blue-900">
              <div>
                <div className="flex flex-col">
                  <CardTitle className="text-xl font-bold">
                    {fumetteria.nome}
                  </CardTitle>
                  <CardDescription className="font-bold text-l text-amber-600">
                    {fumetteria.location}
                  </CardDescription>
                  <p className="mt-2 text-sm">{fumetteria.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 ">
                  {fumetteria.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs text-gray-800 bg-white rounded-lg shadow-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 p-4 bg-orange-500 rounded-r-lg max-h-1/4">
                <div className="flex flex-row items-center justify-center h-full">
                  {Array.from({ length: fumetteria.rating }, (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500"
                      fill="currentColor"
                      size={16}
                    />
                  ))}
                </div>

                <div className="flex flex-row items-center gap-2 p-2 transition-transform transform border-2 border-solid rounded-lg cursor-pointer hover:scale-105 text-amber-100">
                  <nav>
                    <ul className="flex flex-row gap-10">
                      <li>
                        <Link to="/manga">Visita lo Shop</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardFumetterie;
