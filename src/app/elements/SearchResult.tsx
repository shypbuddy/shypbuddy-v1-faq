import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";
import Accordion from "./Accordion";
import {
  FAQ,
  SubAnswer,
  CreditSummaryItem,
  DelayedWalletUpdateItem,
  DownloadCODReportItem,
  EarlyCODItem,
  ContactInfoObjItem,
  GlossaryObjItem,
  ShypBuddyTermsObjItem,
  CreateOrderItem,
  DeliverytDisputeItem,
  NdrItem,
  NpsItem,
  OrderProcessItem,
  PickupsItem,
  RtoOrdersItem,
  ProhibitedProductsItem,
  RechargeProcessItem,
  CreateWarehouseItem,
  CustomerDetailsItem,
  IntegrationProcessItem,
  KycDocumentsItem,
  ShippingRequirementsItem,
  BlockPinCodesItem,
  MultipleWarehouseManagementItem,
  ShipmentForwardChangesItem,
  ShippingPartnerPreferenceItem,
  ShippingRateCalculationItem,
  ShippingZonesExplanationItem,
  ViewAllRatesItem,
  GeneralFAQsItem,
  AmountOnHoldItem,
  PackagingTipsItem,
  VoumetricWeightCalculationItem,
  WeightDicrepancyItem,
  WeightDiscrepancyReportItem,
  WeightTerminologyItem,
  CompetitiveAdvantageItem,
  BuddyShieldContactInfoItem,
  ImpactsOnDeliveryItem,
  // ProblemServiceBasedItem,
} from "./types";

export default function SearchResult({ results }: { results: any }) {
  console.log(results);

  return (
    <>
      <div className="w-full bg-slate-50 rounded-lg ">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600 mx-auto text-center">
          Search Results
        </h1>
        {results.length > 0 ? (
          <>
         
            {/* {results.map((item: FAQ | ContactInfoObjItem | ShypBuddyTermsObjItem | GlossaryObjItem | SubAnswer, index: number) => ( */}
            {results.map(
              (
                item:any,
                  // | FAQ
                  // | SubAnswer
                  // | CreditSummaryItem
                  // | DelayedWalletUpdateItem
                  // | DownloadCODReportItem
                  // | EarlyCODItem
                  // | ContactInfoObjItem
                  // | GlossaryObjItem
                  // | ShypBuddyTermsObjItem
                  // | CreateOrderItem
                  // | DeliverytDisputeItem
                  // | NdrItem
                  // | NpsItem
                  // | OrderProcessItem
                  // | PickupsItem
                  // | RtoOrdersItem
                  // | ProhibitedProductsItem
                  // | RechargeProcessItem
                  // | CreateWarehouseItem
                  // | CustomerDetailsItem
                  // | IntegrationProcessItem
                  // | KycDocumentsItem
                  // | ShippingRequirementsItem
                  // | BlockPinCodesItem
                  // | MultipleWarehouseManagementItem
                  // | ShipmentForwardChangesItem
                  // | ShippingPartnerPreferenceItem
                  // | ShippingRateCalculationItem
                  // | ShippingZonesExplanationItem
                  // | ViewAllRatesItem
                  // | GeneralFAQsItem
                  // | AmountOnHoldItem
                  // | PackagingTipsItem
                  // | VoumetricWeightCalculationItem
                  // | WeightDicrepancyItem
                  // | WeightDiscrepancyReportItem
                  // | WeightTerminologyItem
                  // | CompetitiveAdvantageItem
                  // | BuddyShieldContactInfoItem
                  // | ImpactsOnDeliveryItem,
                index: number
              ) => (

                <div key={index} className="hover:bg-gray-100">
                  <div className="m-4">
                    <Accordion
                      key={index}
                      question={item.question ?? item.subquestion}
                      id={`faqs-${index}`}
                    >
                      {/* Check if item.answer exists and is an object */}
                      {item.answer &&
                        typeof item.answer === "object" &&
                        // If it's an object, map over each subAnswer
                        item.answer.map((subAnswer: { subquestion: any ; subanswer: any }, subIndex : any) => (
                          <p key={subIndex}>
                            <li>
                              <b>{subAnswer.subquestion?.toUpperCase()} </b>
                              {subAnswer.subanswer}
                            </li>
                          </p>
                        ))}
                      {/* If item.answer is not an object, display it directly */}
                      {typeof item.answer !== "object" && <p>{item.answer}</p>}
                    </Accordion>
                  </div>
                </div>
              )
            )}
          </>
        ) : (
          <div>
            <p className="text-center mt-4 font-bold text-xl">
              No search results were found.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
