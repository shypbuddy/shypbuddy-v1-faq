import MapComponents from "@/app/elements/MapComponent";

import BuddyShieldContactInfoObj from "../../Objects/BuddyShield/BuddyShieldContactInfoObj";
import CompetetiveAdvantageObj from "../../Objects/BuddyShield/CompetetiveAdvantageObj";
import ImpactsOnDeliveryObj from "../../Objects/BuddyShield/ImpactsOnDeliveryObj";
import ProblemServiceBasedObj from "../../Objects/BuddyShield/ProblemServiceBasedObj";

export default function BuddyShield() {
  return (
    <>
      <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO BUDDYSHIELD</h1>
    
      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          General FAQs
        </h1>
        <MapComponents data={BuddyShieldContactInfoObj} />
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Competetive Advantage
        </h1>
        <MapComponents data={CompetetiveAdvantageObj} />
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Impacts On Delivery{" "}
        </h1>
        <MapComponents data={ImpactsOnDeliveryObj} />
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Problem Service Based
        </h1>
        <MapComponents data={ProblemServiceBasedObj} />
      </div>
    </>
  );
}
