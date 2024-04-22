// import Credit from "./Credit";
// import DelayedWalletUpdate from "./DelayedWalletUpdate";
// import DownloadCOD from "./DownloadCOD";
// import EarlyCOD from "./EarlyCOD";
// import PaymentFrequency from "./Payment";
// import Pending from "./Pending";
// import Recharge from "./Recharge";
// import RechargeProcess from "./RechargeProcess";

import MapComponents from "@/app/elements/MapComponent";


import CreditSummaryObj from "../../Objects/Billing/CreditSummaryObj";
import DelayedWalletUpdateObj from "../../Objects/Billing/DelayedWalletUpdateObj";
import DownloadCODReportObj from "../../Objects/Billing/DownloadCODReportObj";
import EarlyCODObj from "../../Objects/Billing/EarlyCODObj";
import PaymentFrequencyObj from "../../Objects/Billing/PaymentFrequencyObj";
import PendingObj from "../../Objects/Billing/PendingObj";
import RechargeObj from "../../Objects/Billing/RechargeObj";


export default function BillingPlans(){
    return (
        <>
        <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Billing And Recharge</h1>
        {/* <RechargeProcess/> */}
        {/* <Credit/>
        <DelayedWalletUpdate/>
        <DownloadCOD/>
        <EarlyCOD/>
        <PaymentFrequency/>
        <Pending/>
        <Recharge/> */}


<div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Credit
        </h1>
        <MapComponents data={CreditSummaryObj}/>
      </div>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Delayed Wallet Update
        </h1>
        <MapComponents data={DelayedWalletUpdateObj}/>
      </div>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Download COD
        </h1>
        <MapComponents data={DownloadCODReportObj}/>
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Early COD
        </h1>
        <MapComponents data={EarlyCODObj}/>
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Payment Frequency
        </h1>
        <MapComponents data={PaymentFrequencyObj}/>
      </div>


      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Pending
        </h1>
        <MapComponents data={PendingObj}/>
      </div>

      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Recharge
        </h1>
        <MapComponents data={RechargeObj}/>
      </div>
        </>
    );
}