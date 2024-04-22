const CreateOrderObj = [
  // {
  //   question: "HOW TO CREATE AN ORDER ON ShypBUDDY?",
  //   answer: [
  //     {
  //       subquestion: "Step 1",
  //       subanswer:
  //         "Visit our official website at https://shypbuddy.in or https://dashboard.shypbuddy.in",
  //     },
  //     {
  //       subquestion: "Step 2",
  //       subanswer:
  //         "Click on the Login button located at the right top corner of the homepage.",
  //     },
  //     {
  //       subquestion: "Step 3",
  //       subanswer:
  //         " Enter your registered email address and password in the designated fields.",
  //     },
  //     {
  //       subquestion: "Step 4",
  //       subanswer:
  //         "Once logged in, you will be directed to your ShypBUDDY dashboard, where you can manage all your shipping and logistics operations efficiently.",
  //     },
  //     {
  //       subquestion: "Step 5",
  //       subanswer:
  //         "Navigate to your left menu and select on Create New Warehouse under setting",
  //     },
  //     {
  //       subquestion: "Step 6",
  //       subanswer:
  //         "Enter all the details such as CODE(eg-01), Warehouse name, Contact, Address, PIN code, State, Status",
  //     },
  //     {
  //       subquestion: "Step 7",
  //       subanswer: "Save the necessary information.",
  //     },
  //     {
  //       subquestion: "Step 8",
  //       subanswer: "Click on the Orders tab from the left menu",
  //     },
  //   ],
  // },
  {
    question: "HOW TO ADD A SINGLE ORDER?",
    answer: [
      {
        subquestion: "A) Create an order : ",
        subanswer:
          "Step 1 - Navigate to Orders and click on create an order on your top left corner or click on +Order sign on your dashboard top right. -> Step 2 - Begin by entering your buyer information (can pick the same from pick option for repeated or saved details), this includes Name, Contact, Email ID, Flat No & Building Name, Road, Locality, Landmark (optional), PIN Code, City and State. -> Step 3 - Invoice Value- Input your invoice value.",
      },
   
      {
        subquestion: "B) Order Details : ",
        subanswer:
          "Add your product details such as Product Name, Product price per unit, Quantity, SKU No, Product category. You can add multiple products here.",
      },
      {
        subquestion: "C) Package Details : ",
        subanswer:
          "Step 1 - In this section, please enter the weight and dimensions of your final package that is Length (in cm), Width (in cm), and Height (in cm). -> Step 2 - Next, select your payment option. If you have already received payment from your buyer, select 'Prepaid.' Choose 'COD' if the payment is pending.",
      },
    
      {
        subquestion: "D) Select Pickup Address : ",
        subanswer:
          "Step 1 - The Pickup Address is the location where the shipment will be picked up. This can be your office, warehouse, or shop, etc. -> Step 2 - RTO Details- In case the order is not delivered, it will be returned to this address.",
      },
     
      {
        subquestion: "E) Create Shipment : ",
        subanswer: "Step 1 - Select Courier Partner. -> Step 2 - Click on save and your order is created successfully.",
      },
    ],
  },
  {
    question: "WHAT IS BULK ORDER AND HOW TO ADD BULK ORDERS?",
    answer: [
      {
        subquestion: "Description : ",
        subanswer:
          "Think of bulk upload as a time-saver. It lets you add a bunch of orders to ShypBUDDY in one go, making things quick and easy",
      },
      {
        subquestion: "Step 1 : ",
        subanswer: " Navigate to Orders and click on Bulk order",
      },
      {
        subquestion: "Step 2 : ",
        subanswer:
          "Simply download the sample file from right top corner button and replace the data in it with the data from your order.",
      },
      {
        subquestion: "Step 3 : ",
        subanswer: "Choose your file and upload it.",
      },
    ],
  },
];

export default CreateOrderObj;
