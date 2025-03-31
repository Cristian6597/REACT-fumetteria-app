import CardFumetterie from "./CardFumetterie";
import CardFumetti from "./CardFumetti";
import Novita from "./Novita";

function Main() {
  return (
    <>
      <div className="bg-amber-100 h-full rounded-2xl flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-bold text-blue-900 py-4 px-4 top-10">
            Vicino a te
          </h1>
        </div>
        <div className="flex flex-row gap-4 items-center h-1/2 ">
          <CardFumetterie />
        </div>
        <div className="bg-blue-900 h-full rounded-2xl flex flex-col gap-10">
          <Novita />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-900 py-4 px-4 top-10">
            Tendenza
          </h1>
        </div>
        <div className="flex flex-row gap-4 items-center h-1/2 ">
          <CardFumetti />
        </div>
      </div>
    </>
  );
}

export default Main;
