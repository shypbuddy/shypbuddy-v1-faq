
import MapComponents from "@/app/elements/MapComponent";

import AmountOnHoldObj from "../../Objects/Weight/AmountOnHoldObj";
import WeightDiscrepancyObj from "../../Objects/Weight/WeightDiscrepancyObj";
import WeightDiscrepancyReportObj from "../../Objects/Weight/WeightDiscrepancyReportObj";
import WeightTerminologyObj from "../../Objects/Weight/WeightTerminologyObj";
import VolumetricWeightCalculationObj from "../../Objects/Weight/VolumetricWeightCalculationObj";
import PackagingTipsObj from "../../Objects/Weight/PackagingTipsObj";

export default function WeightManagement() {


  return (
    <>
  
    <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Weight Management</h1>


   <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Amount on hold.
      </h1>
      <MapComponents data={AmountOnHoldObj}/>

    </div>
   

    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Weight Discrepancy
        </h1>
        <MapComponents data={WeightDiscrepancyObj}/>
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          WEIGHT DISCREPANCY REPORT
        </h1>
        <MapComponents data={WeightDiscrepancyReportObj}/>
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Weight Terminology Report
      </h1>
      <MapComponents data={WeightTerminologyObj}/>
    </div>

    <div className="flex-1 bg-white overflow-auto rounded-md   py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Voumetric Weight Calculation
      </h1>
      <MapComponents data={VolumetricWeightCalculationObj}/>
    </div>

    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Packaging Tips
      </h1>
      <MapComponents data={PackagingTipsObj}/>
    </div>
    </>
  );
}