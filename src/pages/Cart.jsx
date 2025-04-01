import Footer from "@/components/Footer";
import MainCart from "@/components/MainCart";
import TopNav from "@/components/TopNav";
import React from "react";

function Cart() {
  return (
    <>
      <div>
        <TopNav />
      </div>
      <MainCart />
      <Footer />
    </>
  );
}

export default Cart;
