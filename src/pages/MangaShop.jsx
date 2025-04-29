import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer";
import MangaList from "@/components/MangaList";
import TopNav from "@/components/TopNav";

function MangaShop() {
  // Stato per il carrello e per il caricamento dei fumetti
  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [fumetti, setFumetti] = useState([]); // Stato per i fumetti

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
    // Rimuove solo una copia dell'oggetto cliccato (usiamo l'index)
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1); // Rimuove solo l'oggetto cliccato
        return newCart;
      }
      return prevCart;
    });
  };

  // Effetto per caricare i fumetti da backend usando Axios
  useEffect(() => {
    axios
      .get("/fumetti") // Modifica l'URL a seconda della tua API
      .then((response) => {
        setFumetti(response.data); // Imposta i dati ricevuti come stati
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei fumetti:", error);
      });
  }, []); // Questo effetto si esegue una sola volta al caricamento

  return (
    <>
      <div>
        {/* Passa il carrello e la funzione removeFromCart a TopNav */}
        <TopNav cart={cart} removeFromCart={removeFromCart} />
      </div>

      {/* Mostra il messaggio di conferma */}
      {showConfirmation && (
        <div className="fixed flex items-center justify-center p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-lg top-1/2 left-1/2 opacity-80">
          Oggetto aggiunto al carrello!
        </div>
      )}

      {/* Passa i fumetti e la funzione addToCart a MangaList */}
      <MangaList fumetti={fumetti} addToCart={addToCart} />

      <Footer />
    </>
  );
}

export default MangaShop;
