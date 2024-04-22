import MapComponents from "@/app/elements/MapComponent";

import ShippingObj from "../../Objects/Shipment/ShippingObj";
import ShippingRelatedObj from "../../Objects/Shipment/ShippingRelatedObj";

export default function Shipment() {
  return (
    <>
      <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Shipment FAQ</h1>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Shipping
        </h1>
        <MapComponents data={ShippingObj} />
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Shipment Related
        </h1>
        <MapComponents data={ShippingRelatedObj} />
      </div>
    </>
  );
}