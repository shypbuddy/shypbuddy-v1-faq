import MapComponents from "@/app/elements/MapComponent";


import CreateOrderObj from "../../Objects/Orders/CreateOrderObj";
import OrderProcessObj from "../../Objects/Orders/OrderProcessObj";
import PickupsObj from "../../Objects/Orders/PickupsObj";
import NdrObj from "../../Objects/Orders/NdrObj";
import RtoObj from "../../Objects/Orders/RtoOrdersObj";
import DeliveryDisputeObj from "../../Objects/Orders/DeliveryDisputeObj";
import NpsObj from "../../Objects/Orders/NpsObj";


export default function Orders() {
  return (
    <>
       <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Orders FAQ</h1>
    

<div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Create Order{" "}
      </h1>
      <MapComponents data={CreateOrderObj}/>
    </div>


    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Order Process
      </h1>
      <MapComponents data={OrderProcessObj}/>
    </div>

    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Pickup{" "}
        </h1>
        <MapComponents data={PickupsObj}/>
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Non-Delivery Report (NDR)
      </h1>
      <MapComponents data={NdrObj}/>
    </div>


    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Return to Origin (RTO)
      </h1>
      <MapComponents data={RtoObj}/>
    </div>

    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Delivery Dispute{" "}
        </h1>
        <MapComponents data={DeliveryDisputeObj}/>
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Net Promoter Score (NPS)
        </h1>
        <MapComponents data={NpsObj}/>
      </div>
    </>
  );
}
