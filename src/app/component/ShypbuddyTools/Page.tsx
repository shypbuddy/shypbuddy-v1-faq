import MapComponents from "@/app/elements/MapComponent";

import BlockPinCodesObj from "../../Objects/Tools/BlockPinCodesObj";
import MultipleWarehouseManagementObj from "../../Objects/Tools/MultipleWarehouseManagementObj";
import ShipmentChargesExplanationObj from "../../Objects/Tools/ShipmentForwardChargesObj";
import ShippingRateCalculationObj from "../../Objects/Tools/ShippingRateCalculationObj";
import ShippingZonesExplanationObj from "../../Objects/Tools/ShippingZonesExplanationObj";
import ViewAllRatesExplanationObj from "../../Objects/Tools/ViewAllRatesExplanationObj";
export default function Tools() {
  return (
    <>
      <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO ShypBUDDY Tools</h1>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Block Pincodes
        </h1>
        <MapComponents data={BlockPinCodesObj} />
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Multiple Warehouse Management
        </h1>
        <MapComponents data={MultipleWarehouseManagementObj} />
      </div>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          {" "}
          Shipment Charges Explanation
        </h1>
        <MapComponents data={ShipmentChargesExplanationObj} />
      </div>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Shipping Rate Calculation
        </h1>
        <MapComponents data={ShippingRateCalculationObj} />
      </div>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Shipping Zones Explanation
        </h1>
        <MapComponents data={ShippingZonesExplanationObj} />
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          View All Rates Explanation
        </h1>
        <MapComponents data={ViewAllRatesExplanationObj} />
      </div>
    </>
  );
}