import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function MangaList() {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/mangaList")
      .then((res) => res.json())
      .then((data) => setMangaList(data.mangaList))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {mangaList.map((manga) => (
        <Card key={manga.id} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg font-bold">{manga.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <img
              src={manga.image}
              alt={manga.title}
              className="object-cover w-full h-48 rounded-md"
            />
            <CardDescription className="mt-2 text-sm text-gray-600">
              Capitolo: {manga.chapter}
            </CardDescription>
            <CardDescription className="text-sm text-gray-600">
              Visualizzazioni: {manga.view}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default MangaList;
