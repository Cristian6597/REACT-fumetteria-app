import CardFumetterie from "./CardFumetterie";
import CardFumetti from "./CardFumetti";
import Novita from "./Novita";

function Main() {
  return (
    <>
      <div className="flex flex-col h-full gap-10 p-4 border-4 border-orange-500 border-solid bg-amber-100 ">
        <div>
          <h1 className="px-4 py-4 text-3xl font-bold text-blue-900 top-10">
            Top 5 vicino a te
          </h1>
        </div>
        <div className="flex flex-row items-center gap-4 h-1/2 ">
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
    </>
  );
}

export default Main;
