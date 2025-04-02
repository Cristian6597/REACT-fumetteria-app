import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function BestSeller() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div>
          <h1 className="items-center justify-center w-full px-4 py-4 text-3xl font-bold text-blue-900 top-10">
            Best Seller
          </h1>
        </div>
        <div>
          <img
            className="border rounded-2xl"
            src="https://hb.imgix.net/87ea66acc47bda3f5de8e66903fad65669623d4d.jpg?auto=compress,format&h=512&w=1024&s=8781da799a517cd3cc13c9911ed60d9b"
            alt="foto"
          ></img>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
