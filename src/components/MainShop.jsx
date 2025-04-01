import CardFumetterie from "./CardFumetterie";
import CardFumetti from "./CardFumetti";
import Novita from "./Novita";
import SelezioneFumetterie from "./SelezioneFumetterie";

function MainShop() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-amber-100">
        <h1 className="px-4 py-4 text-3xl font-bold text-blue-900">
          Seleziona la Fumetteria
        </h1>
        <div className="h-full border-2 border-blue-900 border-solid ">
          <SelezioneFumetterie />
        </div>
      </div>
    </>
  );
}

export default MainShop;
