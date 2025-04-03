import CardFumetterie from "./CardFumetterie";
import CardFumetti from "./CardFumetti";
import Novita from "./Novita";
import SelezioneFumetterie from "./SelezioneFumetterie";

function MainShop() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-2/3 h-full">
          <h1 className="flex items-center justify-center px-4 py-4 text-3xl font-bold text-blue-900">
            Seleziona la Fumetteria
          </h1>
          <div className="h-full ">
            <SelezioneFumetterie />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainShop;
