"use client";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react";
import Fuse from "fuse.js";

// Import types
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

// imports from ../Objects/Billing/*
import CreditSummaryObj from "../Objects/Billing/CreditSummaryObj";
import DelayedWalletUpdateObj from "../Objects/Billing/DelayedWalletUpdateObj";
import DownloadCODReportObj from "../Objects/Billing/DownloadCODReportObj";
import EarlyCODObj from "../Objects/Billing/EarlyCODObj";
import PaymentFrequencyObj from "../Objects/Billing/PaymentFrequencyObj";
import PendingObj from "../Objects/Billing/PendingObj";
import RechargeObj from "../Objects/Billing/RechargeObj";

// imports from ../Objects/KnowledgeBase/*
import GlossaryObj from "../Objects/KnowledgeBase/GlossaryObj";
import ContactInfoObj from "../Objects/KnowledgeBase/ContactObj";
import ShypBuddyTermObj from "../Objects/KnowledgeBase/ShypBuddyTermsObj";

// imports from ../Objects/Orders/*
import CreateOrderObj from "../Objects/Orders/CreateOrderObj";
import DeliveryDisputeObj from "../Objects/Orders/DeliveryDisputeObj";
import NdrObj from "../Objects/Orders/NdrObj";
import NpsObj from "../Objects/Orders/NpsObj";
import OrderProcessObj from "../Objects/Orders/OrderProcessObj";
import PickupsObj from "../Objects/Orders/PickupsObj";
import RtoOrdersObj from "../Objects/Orders/RtoOrdersObj";

// imports from ../Objects/Others/*
import ProhibitedProductsObj from "../Objects/Others/ProhibitedProductsObj";

// imports from ../Objects/PlanAndDetails/*
// import RechargeProcessObj from "../Objects/PlanAndDetails/RechargeProcessObj";

// imports from ../Objects/SetUpManage/*
import CreateWarehouseObj from "../Objects/SetUpManage/CreateWarehouseObj";
import CustomerDetailsObj from "../Objects/SetUpManage/CustomerDetailsObj";
import IntegrationProcessObj from "../Objects/SetUpManage/IntegrationProcessObj";
import KycDocumentsObj from "../Objects/SetUpManage/KycDocumentsObj";
import ShippingRequirementsObj from "../Objects/SetUpManage/ShippingRequirementsObj";

// imports from ../Objects/Tools/*
import BlockPinCodesObj from "../Objects/Tools/BlockPinCodesObj";
import MultipleWarehouseManagementObj from "../Objects/Tools/MultipleWarehouseManagementObj";
import ShipmentForwardChargesObj from "../Objects/Tools/ShipmentForwardChargesObj";
import ShippingPartnerPreferenceObj from "../Objects/Tools/ShippingPartnerPreferenceObj";
import ShippingRateCalculationObj from "../Objects/Tools/ShippingRateCalculationObj";
import ShippingZonesExplanationObj from "../Objects/Tools/ShippingZonesExplanationObj";
import ViewAllRatesExplanationObj from "../Objects/Tools/ViewAllRatesExplanationObj";

// imports from ../Objects/WebsiteFAQ/*
import GeneralFAQsObj from "../Objects/SetUpManage/GeneralFAQsObj";

// imports from ../Objects/Weight
import AmountOnHoldObj from "../Objects/Weight/AmountOnHoldObj";
import PackagingTipsObj from "../Objects/Weight/PackagingTipsObj";
import VolumetricWeightCalculationObj from "../Objects/Weight/VolumetricWeightCalculationObj";
import WeightDiscrepancyObj from "../Objects/Weight/WeightDiscrepancyObj";
import WeightDiscrepancyReportObj from "../Objects/Weight/WeightDiscrepancyReportObj";
import WeightTerminologyObj from "../Objects/Weight/WeightTerminologyObj";

// Buddy Shield
import CompetitiveAdvantageObj from "../Objects/BuddyShield/CompetetiveAdvantageObj";
import BuddyShieldContactInfoObj from "../Objects/BuddyShield/BuddyShieldContactInfoObj";
import ImpactsOnDeliveryObj from "../Objects/BuddyShield/ImpactsOnDeliveryObj";
import ProblemServiceBasedObj from "../Objects/BuddyShield/ProblemServiceBasedObj";


export default function Search({
  setSearchResults,
  searchClearOrNot,
  setClearSearchBar,
  setActiveComponent,
} : {setSearchResults : any,
  searchClearOrNot : any,
  setClearSearchBar : any,
  setActiveComponent : any}) {

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState<
    (
      | FAQ
      | SubAnswer
      | CreditSummaryItem
      | DelayedWalletUpdateItem
      | DownloadCODReportItem
      | EarlyCODItem
      | ContactInfoObjItem
      | GlossaryObjItem
      | ShypBuddyTermsObjItem
      | CreateOrderItem
      | DeliverytDisputeItem
      | NdrItem
      | NpsItem
      | OrderProcessItem
      | PickupsItem
      | RtoOrdersItem
      | ProhibitedProductsItem
      | RechargeProcessItem
      | CreateWarehouseItem
      | CustomerDetailsItem
      | IntegrationProcessItem
      | KycDocumentsItem
      | ShippingRequirementsItem
      | BlockPinCodesItem
      | MultipleWarehouseManagementItem
      | ShipmentForwardChangesItem
      | ShippingPartnerPreferenceItem
      | ShippingRateCalculationItem
      | ShippingZonesExplanationItem
      | ViewAllRatesItem
      | GeneralFAQsItem
      | AmountOnHoldItem
      | PackagingTipsItem
      | VoumetricWeightCalculationItem
      | WeightDicrepancyItem
      | WeightDiscrepancyReportItem
      | WeightTerminologyItem
      | CompetitiveAdvantageItem
      | BuddyShieldContactInfoItem
      | ImpactsOnDeliveryItem
      // | ProblemServiceBasedItem
    )[]
  >([]);

  const handleSearch = () => {
    // let results: (
    //   | FAQ
    //   | SubAnswer
    //   | CreditSummaryItem
    //   | DelayedWalletUpdateItem
    //   | DownloadCODReportItem
    //   | EarlyCODItem
    //   | ContactInfoObjItem
    //   | GlossaryObjItem
    //   | ShypBuddyTermsObjItem
    //   | CreateOrderItem
    //   | DeliverytDisputeItem
    //   | NdrItem
    //   | NpsItem
    //   | OrderProcessItem
    //   | PickupsItem
    //   | RtoOrdersItem
    //   | ProhibitedProductsItem
    //   | RechargeProcessItem
    //   | CreateWarehouseItem
    //   | CustomerDetailsItem
    //   | IntegrationProcessItem
    //   | KycDocumentsItem
    //   | ShippingRequirementsItem
    //   | BlockPinCodesItem
    //   | MultipleWarehouseManagementItem
    //   | ShipmentForwardChangesItem
    //   | ShippingPartnerPreferenceItem
    //   | ShippingRateCalculationItem
    //   | ShippingZonesExplanationItem
    //   | ViewAllRatesItem
    //   | GeneralFAQsItem
    //   | AmountOnHoldItem
    //   | PackagingTipsItem
    //   | VoumetricWeightCalculationItem
    //   | WeightDicrepancyItem
    //   | WeightDiscrepancyReportItem
    //   | WeightTerminologyItem
    //   | CompetitiveAdvantageItem
    //   | BuddyShieldContactInfoItem
    //   | ImpactsOnDeliveryItem
    //   // | ProblemServiceBasedItem
    // ) [] = [];

    let results: any[] = []; // Initialize results array

    if (!searchTerm) {
      return; // Prevent empty search triggering Fuse
    }

    const fuseOptions = {
      keys: ["question", "answer", "answer.subquestion", "answer.subanswer"],
      threshold: 0.4,
    };

    // Initialize Fuse instance
    const fuse = new Fuse(
      [
        ...CreditSummaryObj,
        ...DelayedWalletUpdateObj,
        ...DownloadCODReportObj,
        ...EarlyCODObj,
        ...PaymentFrequencyObj,
        ...PendingObj,
        ...RechargeObj,
        ...GlossaryObj,
        ...ContactInfoObj,
        ...ShypBuddyTermObj,
        ...CreateOrderObj,
        ...DeliveryDisputeObj,
        ...NdrObj,
        ...NpsObj,
        ...OrderProcessObj,
        ...PickupsObj,
        ...RtoOrdersObj,
        ...ProhibitedProductsObj,
        // ...RechargeProcessObj,
        ...CreateWarehouseObj,
        ...CustomerDetailsObj,
        ...IntegrationProcessObj,
        ...KycDocumentsObj,
        ...ShippingRequirementsObj,
        ...BlockPinCodesObj,
        ...MultipleWarehouseManagementObj,
        ...ShipmentForwardChargesObj,
        ...ShippingPartnerPreferenceObj,
        ...ShippingRateCalculationObj,
        ...ShippingZonesExplanationObj,
        ...ViewAllRatesExplanationObj,
        ...GeneralFAQsObj,
        ...AmountOnHoldObj,
        ...PackagingTipsObj,
        ...VolumetricWeightCalculationObj,
        ...WeightDiscrepancyObj,
        ...WeightDiscrepancyReportObj,
        ...WeightTerminologyObj,
        ...CompetitiveAdvantageObj,
        ...BuddyShieldContactInfoObj,
        ...ImpactsOnDeliveryObj,
        // ...ProblemServiceBasedObj,
      ],
      fuseOptions
    );
    // console.log("Fuse Date: ", fuse);

    const searchResult = fuse.search(searchTerm);
     results = searchResult.map((item) => item.item);
    setSearchResults(results);
  };
  // }

  useEffect(() => {
    // console.log("line 294", searchClearOrNot);
    if (searchClearOrNot) {
      setSearchTerm("");
      setSearchResults([]);
      // console.log("setSearchTerm + ", setSearchTerm);
      // console.log("setSearchResults + ", setSearchResults);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }, [searchClearOrNot]);

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
    setClearSearchBar(false);
  };

  const handleSearchButtonClick = (e: any) => {
    handleSearch();
    setActiveComponent(null);
    e.preventDefault();
  };

  return (
    <>
      <form className="max-w-xl mx-auto p-2 md:w-4/5 w-[87%]   mt-5 justify-center text-center">
        {/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label> */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="search"
            autoComplete="off"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900   rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="What are you looking for?"
            required
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearchButtonClick}
            className="absolute right-0 top-0 mt-1.5 mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
