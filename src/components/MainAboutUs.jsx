import CardFumetterie from "./CardFumetterie";
import CardFumetti from "./CardFumetti";
import Novita from "./Novita";

function MainAboutUs() {
  return (
    <div className="flex flex-col h-full gap-10 p-4 bg-white border-4 border-orange-500 border-solid">
      <div>
        <h1 className="px-4 py-4 text-3xl font-bold text-orange-500">
          Chi siamo
        </h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
      </div>

      {/* Sezione Sede */}
      <div className="flex flex-col items-center gap-4 px-4 py-4 md:flex-row">
        <img
          className="w-full h-auto rounded-lg md:w-1/3"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/PERSPECTIVA-edificio.jpg"
          alt="HQ"
        />
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-blue-900">La Sede</h1>
          <p className="text-lg">
            La nostra passione per i fumetti e il desiderio di supportare le
            fumetterie locali ci hanno spinti a creare un'app dedicata.
          </p>
        </div>
      </div>

      {/* Sezione Team */}
      <div className="flex flex-col items-center gap-6 p-6 bg-blue-900 md:flex-row text-amber-100 rounded-2xl">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-orange-500">Il Team</h1>
          <p className="text-lg">
            Il nostro team è composto da appassionati di fumetti, sviluppatori e
            designer uniti da un'unica missione.
          </p>
        </div>
        <img
          className="w-full h-auto rounded-lg md:w-1/2"
          src="https://media.gqitalia.it/photos/6294c6e45d7350f007d5c775/16:9/w_2560%2Cc_limit/IPA_IPA3083688.jpeg"
          alt="Team"
        />
      </div>
    </div>
  );
}

export default MainAboutUs;
