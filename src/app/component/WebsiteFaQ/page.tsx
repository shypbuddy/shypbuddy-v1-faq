import MapComponents from "@/app/elements/MapComponent";


import GeneralFAQsObj from "../../Objects/SetUpManage/GeneralFAQsObj";
import CreateWarehouseObj from "../../Objects/SetUpManage/CreateWarehouseObj";
import CustomerDetailsObj from "../../Objects/SetUpManage/CustomerDetailsObj";
import IntegrationProcessObj from "../../Objects/SetUpManage/IntegrationProcessObj";
import KycDocumentsObj from "../../Objects/SetUpManage/KycDocumentsObj";


export default function Website() {
    return (
        <>
            <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO FAQ Page</h1>


            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    General FAQs
                </h1>
                <MapComponents data={GeneralFAQsObj} />

            </div>

            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    Create Warehouse
                </h1>
                <MapComponents data={CreateWarehouseObj} />
            </div>

            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    Customer Details
                </h1>
                <MapComponents data={CustomerDetailsObj} />
            </div>


            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    Integration Process
                </h1>
                <MapComponents data={IntegrationProcessObj} />
            </div>

            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    Kyc Documents
                </h1>
                <MapComponents data={KycDocumentsObj} />
            </div>
        </>
    );
}