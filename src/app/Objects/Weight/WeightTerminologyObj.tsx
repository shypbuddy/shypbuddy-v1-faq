const WeightTerminologyObj = [
  {
    question:"ENTERED WEIGHT",
    answer:[
      {
        subquestion:"description : ",
        subanswer:"This is the weight the seller inputs when processing an order in the panel.",
      },
      {
        subquestion:"note : ",
        subanswer:"Note: The system considers 0.5 Kg as the minimum default weight for the shipment.",
      }

    ]
  },
  {
    question:"VOLUMETRIC WEIGHT",
    answer:[
      {
        subquestion:"description : ",
        subanswer:"It's the weight calculated based on the size (length, breadth, height) of the order.",
      },
      {
        subquestion:"formula : ",
        subanswer:"(LxBxH)/5000 (for most couriers)",
      },
      {
        subquestion:"note : ",
        subanswer:"Note: The calculation method may vary with different courier partners.",
      }

    ]
  },
  {
    question:"APPLIED WEIGHT",
    answer:[
      {
        subquestion:"description : ",
        subanswer:"It's the higher of two weights - what you entered and the volumetric weight. Shipping charges are calculated based on this weight.",
      }
    ]
  },
  {
    question:"PARTNER WEIGHT",
    answer:[
      {
        subquestion:"description : ",
        subanswer:"It's the weight for which the courier company charges you.",
      }
    ]
  }
]

export default WeightTerminologyObj;
