import { Link } from "react-router-dom";
import BestSeller from "./BestSeller";
import CardFumetterie from "./CardFumetterie";
import CardFumetti from "./CardFumetti";
import Novita from "./Novita";

function Main() {
  return (
    <div className="flex items-center justify-center w-full px-2 py-4">
      <div className="flex flex-col w-full h-full gap-6 p-2 md:w-2/3">
        {/* BestSeller */}
        <div className="flex items-center justify-center w-full">
          <BestSeller />
        </div>

        {/* Fumetterie vicino a te */}
        <div>
          <Link
            to="/Shop"
            className="px-4 py-2 text-2xl font-bold text-blue-900 md:text-3xl"
          >
            Top fumetterie vicino a te
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 px-2 md:flex-row">
          <CardFumetterie />
        </div>

        {/* Novità */}
        <div className="flex flex-col h-full gap-6 p-4 bg-blue-900 rounded-2xl">
          <Novita />
        </div>

        {/* Tendenza */}
        <div>
          <Link
            to="/manga"
            className="px-4 py-2 text-2xl font-bold text-blue-900 md:text-3xl"
          >
            Tendenza
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 px-2 md:flex-row">
          <CardFumetti />
        </div>
      </div>
    </div>
  );
}

export default Main;
