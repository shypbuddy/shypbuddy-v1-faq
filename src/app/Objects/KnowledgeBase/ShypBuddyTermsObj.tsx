const ShypBuddyTermObj = [
  {
    question: "FORWARD ORDER",
    answer: [
      {
        subquestion: "Pickup Scheduled : ",
        subanswer:
          "When a seller raises a pickup request for his/her shipment.",
      },
      {
        subquestion: "Pickup Fail : ",
        subanswer:
          "A shipment goes into pickup exception if it couldn't be picked due to any reason.",
      },
      {
        subquestion: "Pickup Rescheduled : ",
        subanswer:
          "In case of a failed pickup attempt, pickup will be rescheduled for the next business day.",
      },
      {
        subquestion: "Out for Pickup : ",
        subanswer: "This means the FE is out to pick your shipment.",
      },
      {
        subquestion: "Picked Up : ",
        subanswer: "FE has successfully picked up your shipment.",
      },
      {
        subquestion: "In-Transit : ",
        subanswer:
          "We show this status when a shipment is moving from one courier hub to another.",
      },
      {
        subquestion: "Reached-at-Destination Hub : ",
        subanswer:
          "We show this status when a shipment reaches the final destination hub.",
      },
      {
        subquestion: "Out for Delivery : ",
        subanswer:
          "This means that the delivery executive is out to deliver the shipment.",
      },
      {
        subquestion: "Delivered : ",
        subanswer: "When a shipment gets successfully delivered to the buyer.",
      },
      {
        subquestion: "Delayed : ",
        subanswer:
          "This status means it is taking more time in delivering a shipment than the initial estimated delivery time.",
      },
      {
        subquestion: "LOST : ",
        subanswer:
          '"LOST" typically refers to a situation where a shipment or package cannot be located or is missing. You can claim the liability amount or invoice value, whichever is lower. Note: This varies from case to case.',
      },
      {
        subquestion: "Destroyed : ",
        subanswer:
          "When a seller does not claim an undelivered or RTO shipment, it moves to the 'Destroyed' status.",
      },
      {
        subquestion: "Undelivered : ",
        subanswer:
          "When the shipment couldn't be delivered due to any circumstances, it is considered as 'Undelivered'. After the initial delivery failure, the shipping partner makes the next 2 attempts. Note: Depends on the reason for failed delivery.",
      },
    ],
  },
  {
    question: "RTO",
    answer: [
      {
        subquestion: "RTO Initiated : ",
        subanswer:
          "After three failed delivery attempts, the shipping partner initiates a return-to-the-origin process for the undelivered shipment. Note: Different couriers have different reattempt policies.",
      },
      {
        subquestion: "RTO-OFD : ",
        subanswer: "When an RTO shipment is out for delivery.",
      },
      {
        subquestion: "RTO Delivered : ",
        subanswer: "When an RTO shipment gets successfully delivered.",
      },
      {
        subquestion: "RTO Rejected : ",
        subanswer: "When RTO delivery is refused to accept by you.",
      },
      {
        subquestion: "Disposed Off : ",
        subanswer:
          "When an RTO shipment is refused to accept after three attempts, it is considered as 'Disposed Off'.",
      },
    ],
  },
  {
    question: "WEIGHT",
    answer: [
      {
        subquestion: "Weight Discrepancy : ",
        subanswer:
          "Weight discrepancy generates when there's a difference between your shipment's applied and actual weight.",
      },
      {
        subquestion: "Dispute Raised : ",
        subanswer:
          "For every new weight discrepancy, a seller has the option to either reject or accept the courier claim. We raise a dispute on your behalf when you reject the applied weight discrepancy.",
      },
    ],
  },
  {
    question: "REPORTS",
    answer: [
      {
        subquestion: "Orders Report : ",
        subanswer:
          "An order report is a summary that provides detailed information about all the orders processed within a specific time period. It typically includes details such as order number, customer name, order date, product detail, quantity, weight, order status, etc.",
      },
      {
        subquestion: "COD Report : ",
        subanswer:
          "This report would typically include details such as customer information, order numbers, AWBs, payment amounts, and shipment status for COD orders.",
      },
      {
        subquestion: "RTO Report : ",
        subanswer:
          "RTO report is a summary that provides detailed information on your RTO orders.",
      },
      {
        subquestion: "Order Status Report : ",
        subanswer:
          "An order status report will have all details regarding Ready to Pick, In Transit, Delivered, RTO In Transit, RTO Delivered, Canceled, Lost/Damaged, Total Orders.",
      },
      {
        subquestion: "Recharge and Pay : ",
        subanswer:
          "The Recharge and Pay report will have a summary of all transactions related to recharging and payments made within a specific period.",
      },
    ],
  },
  {
    question: "WEIGHT TERMINOLOGY",
    answer: [
      {
        subquestion: "Entered Weight : ",
        subanswer:
          "This is the weight the seller inputs when processing an order in the panel. Note: The system considers 0.5 Kg as the minimum default weight for the shipment.",
      },
      {
        subquestion: "Volumetric Weight : ",
        subanswer:
          "It's the weight calculated based on the size (length, breadth, height) of the order. The formula considers (LxBxH)/5000 (for most couriers), reflecting the space it occupies. Note: The calculation method may vary with different courier partners.",
      },
      {
        subquestion: "Applied Weight : ",
        subanswer:
          "It's the higher of two weights - what you entered and the volumetric weight. Shipping charges are calculated based on this weight.",
      },
      {
        subquestion: "Partner Weight : ",
        subanswer: "It's the weight for which the courier company charges you.",
      },
    ],
  },
];

export default ShypBuddyTermObj;
