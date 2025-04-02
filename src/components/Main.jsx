import BestSeller from "./BestSeller";
import CardFumetterie from "./CardFumetterie";
import CardFumetti from "./CardFumetti";
import Novita from "./Novita";

function Main() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full ">
        <div className="flex flex-col w-2/3 h-full gap-1 p-4 ">
          <div className="flex items-center justify-center w-full h-1/2 ">
            <BestSeller />
          </div>
          <div>
            <h1 className="px-4 py-4 text-3xl font-bold text-blue-900 top-10">
              Top fumetterie vicino a te
            </h1>
          </div>
          <div className="flex flex-row items-center gap-4">
            <CardFumetterie />
          </div>
          <div className="flex flex-col h-full gap-10 bg-blue-900 rounded-2xl">
            <Novita />
          </div>
          <div>
            <h1 className="px-4 py-4 text-3xl font-bold text-blue-900 top-10">
              Tendenza
            </h1>
          </div>
          <div className="flex flex-row items-center gap-4 h-1/2 ">
            <CardFumetti />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
