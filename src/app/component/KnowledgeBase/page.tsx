import MapComponents from "@/app/elements/MapComponent";

// import objects from "../../Object/KnowledgeBase
import ContactInfoObj from "../../Objects/KnowledgeBase/ContactObj";
import GlossaryObject from "../../Objects/KnowledgeBase/GlossaryObj";
import ShypBuddyTermObject from "../../Objects/KnowledgeBase/ShypBuddyTermsObj";

export default function KnowledgeBase() {
    return (
        <>
            <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Knowledge Base</h1>
          

            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    Support Team
                </h1>
                <MapComponents data={ContactInfoObj} />
            </div>

            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    Knowledge Base
                </h1>
                <MapComponents data={ShypBuddyTermObject} />
            </div>

            <div className="flex-1 bg-white overflow-auto rounded-md py-5">
                <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
                    Glossary
                </h1>
                <MapComponents data={GlossaryObject} />
            </div>




        </>
    );
}