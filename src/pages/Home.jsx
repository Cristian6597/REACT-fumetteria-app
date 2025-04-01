import React from "react";
import { Button } from "../components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import TopNav from "../components/TopNav";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <div className="">
        <TopNav />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default Home;
