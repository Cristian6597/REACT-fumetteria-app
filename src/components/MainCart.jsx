import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pen, Star, X } from "lucide-react";
import "../../src/index.css";

function MainCart() {
  return (
    // da cambiare la scrollbar in tabs
    <div className="h-screen p-4 overflow-y-auto bg-amber-100">
      <div className="flex flex-col items-center gap-4">
        <Card className="flex flex-row w-11/12 h-40 overflow-hidden ">
          <img
            src="https://sandermechanical.com/wp-content/uploads/2016/02/shop-placeholder.png"
            alt=""
            className="object-cover w-1/3 h-full rounded-l-lg"
          />
          <div className="flex flex-row justify-between flex-1 p-4 text-white bg-blue-900">
            <div>
              <div className="flex flex-col">
                <CardTitle className="text-xl font-bold">Oggetto</CardTitle>
                <CardDescription className="font-bold text-l text-amber-600">
                  Fumetteria provenienza
                </CardDescription>
                <p className="mt-2 text-sm">Descrizione</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/12 h-full gap-2">
            <div className="flex items-center justify-center w-full h-10 transition-transform transform bg-orange-500 rounded-r-lg cursor-pointer hover:scale-105">
              <Pen />
            </div>
            <div className="flex items-center justify-center w-full h-10 transition-transform transform bg-orange-500 rounded-r-lg cursor-pointer hover:scale-105">
              <X />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default MainCart;
