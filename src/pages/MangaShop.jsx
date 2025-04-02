import Footer from "@/components/Footer";
import MangaList from "@/components/MangaList";
import TopNav from "@/components/TopNav";
import { useState } from "react";

function MangaShop() {
  // Stato per il carrello
  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Funzione per aggiungere un fumetto al carrello
  const addToCart = (fumetto) => {
    setCart((prevCart) => [...prevCart, fumetto]); // Aggiungi al carrello
    setShowConfirmation(true); // Mostra il messaggio di conferma

    // Nascondi il messaggio dopo 3 secondi
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  // Funzione per rimuovere un fumetto dal carrello
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        {/* Passa il carrello e la funzione addToCart a TopNav */}
        <TopNav cart={cart} removeFromCart={removeFromCart} />
      </div>

      {/* Mostra il messaggio di conferma */}
      {showConfirmation && (
        <div className="fixed flex items-center justify-center p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-lg top-1/2 left-1/2 opacity-80">
          Oggetto aggiunto al carrello!
        </div>
      )}

      {/* Passa la funzione addToCart a MangaList */}
      <MangaList addToCart={addToCart} />

      <Footer />
    </>
  );
}

export default MangaShop;
