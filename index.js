let readlineSync = require("readline-sync");

let title = "\nWelcome to CoronaTime!\n";
let description =
  "You have been awarded a $1200 stimilus check.\nThe city is on lock down and \
you must stock up\non resources to SURVIVE QUARANTINE!!!!\n";
let rules =
  "Every transaction you make will affect your balance.\n\n$$ Spend Wisely! $$\n";
let supermarkets = ["Whole Foods", " Trader Joes", " Publix: "];
let takeout = ["Uber eats", " Grubhub", " Postmates: "];
let singleBalance = 1200;
let singleCurrentBalance = 1200;
let marriedBalance = 2400;
let familyBalance = 3000;
let flowerShops = ["Dandelion Division", " Kabloom", " Flowerworks: "];
let makotoMeals = ["Premium", " Anniversary", " Standard: "];
let familyBills = ["Light Bill", " Car Insurance", " Child Support: "];
let prices = {
  wholeFoods: 155.75,
  traderJoes: 125.75,
  publix: 135.75,
  uberEats: 55.75,
  grubHub: 45.75,
  postmates: 55.75,
  dandelionDivision: 195.75,
  kabloom: 145.75,
  flowerWorks: 155.75,
  premium: 295.75,
  anniversary: 255.75,
  standard: 195,
  fpl: 105.75,
  geico: 200,
  childSupport: 1000
};
const gameOver = () => {
  console.log("Uh Oh you have ran out of $$ MONEY $$\n\nGAME OVER !!!!");
};

console.log(title.toUpperCase());
// Add dynamic date
console.log(description.toUpperCase());
console.log(rules.toUpperCase());

let household = readlineSync
  .question("\nChoose Your Household: Single, Married, Family: ", {
    limit: ["Single", "Married", "Family"],
    limitMessage: "\nChoose one of three!",
  })
  .toLowerCase();

switch (household) {
  case "single":
    console.log(
      "\nSINGLE: You're single and oh boy does your fridge look EMPTY!\n\nHere are your options: "
    );
    break;
  case "married":
    console.log(
      "\nMarried: Congratulations it's your 1 year anniversary,\nSurprise your partner with one of his/her favorites: "
    );
    break;
  case "family":
    console.log("\nFamily: You have a significant other and a new born.");
    break;
  default:
    console.log(
      "\nSINGLE: You're single and oh boy does your fridge look EMPTY!"
    );
}

// Single Section
if (household === "single") {
  choices = ["Check Balance", "Grocery Shopping", "Order Takeout"];
  index = readlineSync.keyInSelect(choices, "Make Your Choice?", {
    cancel: false,
  });
  if (choices[index] === "Check Balance") {
    console.log(
      `\nYour current balance is: $${singleBalance}\nYour're on your own, kid...`
    );
    choices.splice(0, 1);
    index = readlineSync.keyInSelect(choices, "Make Your Choice?", {
      cancel: false,
    });
  }
  //groceries_______

  if (choices[index] === "Grocery Shopping") {
    let storeChoice = readlineSync
      .question(`\nChoose a grocery store: ${supermarkets}`, {
        limit: ["Whole Foods", "Trader Joes", "Publix"],
        limitMessage: "\nChoose one of the three options!",
      })
      .toLowerCase();
    console.log(`\nYou chose: ${storeChoice}\n`);
    switch (storeChoice) {
      case "whole foods":
        console.log("OMG expensive\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Whole Foods ~\n\
      * Milk\n\
      * Steak\n\
      * Wine
      * Chicken Breast
      * Fruits
      * Eggs
      * Rice
      * Potatoes
      * Asparagus
      * Total With Tax: $${prices.wholeFoods}
      * Remaining Balance: $${singleBalance -= prices.wholeFoods}\n`
        );
        break;
      case "trader joes":
        console.log("Nice and Cheap\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Trader Joe's ~\n\
      * Milk\n\
      * Steak\n\
      * Wine
      * Chicken Breast
      * Fruits
      * Eggs
      * Rice
      * Potatoes
      * Asparagus
      * Total With Tax: $${prices.traderJoes}
      * Remaining Balance: $${singleBalance -= prices.traderJoes}\n`
        );
        break;
      case "publix":
        console.log("Miami Staple\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Publix ~\n\
      * Milk\n\
      * Steak\n\
      * Wine
      * Chicken Breast
      * Fruits
      * Eggs
      * Rice
      * Potatoes
      * Asparagus
      * Total With Tax: $${prices.publix}
      * Remaining Balance: $${singleBalance -= prices.publix}\n`
        );
    }
  }

  //takeout __________

  if (choices[index] === "Order Takeout") {
    let foodService = readlineSync
      .question(`\nChoose a delivery service: ${takeout}`, {
        limit: ["Uber Eats", "Grubhub", "Postmates"],
        limitMessage: "\nChoose one of the three options!",
      })
      .toLowerCase();
    console.log(`\nYou chose: ${foodService}\n`);
    switch (foodService) {
      case "uber eats":
        console.log("OMG Expensive\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Luna Pasta ~\n\
      * Spaghetti Bolonese\n\
      * Caprese\n\
      * Total With Tax & Delivery Fee: $${prices.uberEats}
      * Remaining Balance: $${singleBalance -= prices.uberEats}\n`
        );
        break;
      case "grubhub":
        console.log("Nice and cheap\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Five Guys ~\n\
      * Double Patty Bacon Burger\n\
      * Large Fries\n\
      * Oreo Milk Shake
      * Total With Tax & Delivery Fee: $${prices.grubHub}
      * Remaining Balance: $${singleBalance -= prices.grubHub}\n`
        );
        break;
      case "postmates":
        console.log("Fast and Convenient\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Sushi House ~\n\
      * California Roll\n\
      * 5 Tuna Nigiri\n\
      * Beef Fried Rice
      * Total With Tax & Delivery Fee: $${prices.postmates}
      * Remaining Balance: $${singleBalance -= prices.postmates}\n`
        );
    }
  }
  console.log(
    `Great, your fridge is stocked up. RING!!! RING!!! Uh Oh it's your landord`
  );
  console.log(
    `\nTime to pay up!\n\nCurrent Balance: $${singleBalance}\n`
  );
  console.log(`Rent: $${singleBalance} - Current Balance: $${singleBalance} = $0\n`)
  gameOver();
}

// Married Section
if (household === "married") {
  choicesMarried = [
    "Check Balance",
    "Bouquet Of Flowers",
    "Makoto Dinner & Champagne",
  ];
  indexMarried = readlineSync.keyInSelect(
    choicesMarried,
    "Make Your Choice:  ",
    {
      cancel: false,
    }
  );
  if (choicesMarried[indexMarried] === "Check Balance") {
    console.log(`\nYour current balance: $${marriedBalance}\n`);
    choicesMarried.splice(0, 1);
    indexMarried = readlineSync.keyInSelect(
      choicesMarried,
      "Make Your Choice: ",
      {
        cancel: false,
      }
    );
  }

  if (choicesMarried[indexMarried] === "Bouquet Of Flowers") {
    storeChoice = readlineSync
      .question(`\nChoose A Florist: ${flowerShops}`, {
        limit: ["Dandelion Division", "Kabloom", "Flowerworks"],
        limitMessage: "\nChoose one of three!",
      })
      .toLowerCase();
    console.log(`\nYou chose: ${storeChoice}\n`);
    switch (storeChoice) {
      case "dandelion division":
        console.log("OMG Expensive\n");
        console.log(
          `Your Order Recipt:\n\
      ~ Dandelion Division ~\n\
      * Dozen Roses\n\
      * Dozen Dandelion's\n\
      * Dozen Orchid's
      * Total With Tax & Delivery Fee: $${prices.dandelionDivision}
      * Remaining Balance: $${marriedBalance -= prices.dandelionDivision}\n`
        );
        break;
      case "kabloom":
        console.log("Nice and cheap\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Kabloom ~\n\
      * Dozen Roses\n\
      * Dozen Dandelion's\n\
      * Dozen Orchid's
      * Total With Tax & Delivery Fee: $${prices.kabloom}
      * Remaining Balance: $${marriedBalance -= prices.kabloom}\n`
        );
        break;
      case "flowerworks":
        console.log("Fast and Convenient\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Flowerworks ~\n\
      * Dozen Roses\n\
      * Dozen Dandelion's\n\
      * Dozen Orchid's
      * Total With Tax & Delivery Fee: $${prices.flowerWorks}
      * Remaining Balance: $${marriedBalance -= prices.flowerWorks}\n`
        );
    }
  } else if (choicesMarried[indexMarried] === "Makoto Dinner & Champagne") {
    mealChoice = readlineSync
      .question(`\nChoose a Meal: ${makotoMeals}`, {
        limit: ["Premium", "Anniversary", "Standard"],
        limitMessage: "\nChoose one of three!",
      })
      .toLowerCase();
    console.log(`\nYou chose: ${mealChoice}\n`);
    switch (mealChoice) {
      case "premium":
        console.log("Baller\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Makoto Premium ~\n\
      * Champagne\n\
      * Sushi Boat\n\
      * Wagyu Short Rib
      * Whole Roasted Branzino
      * Total With Tax & Delivery Fee: $${prices.premium}
      * Remaining Balance: $${marriedBalance -= prices.premium}\n`
        );
        break;
      case "anniversary":
        console.log("Impressive\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Makoto Anniversary ~\n\
      * Champagne\n\
      * Sushi Boat\n\
      * Wagyu Hot Stone
      * Miso Sea Bass
      * Ginger Lamb Chop
      * Total With Tax & Delivery Fee: $${prices.anniversary}
      * Remaining Balance: $${marriedBalance -= prices.anniversary}\n`
        );
        break;
      case "standard":
        console.log("Yummy and Convenient\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Makoto Standard ~\n\
      * Sake\n\
      * Bento Box\n\
      * Miso Soup
      * Wagyu Hot Stone
      * Miso Sea Bass
      * Total With Tax & Delivery Fee: $${prices.standard}
      * Remaining Balance: $${marriedBalance -= prices.standard}\n`
        );
    }
  }
  console.log(
    `What a great Spouse you are. RING!!! RING!!! Uh Oh it's your landord`
  );
  console.log(`\nTime to pay up!\n\nCurrent Balance: $${marriedBalance}\n`);
  console.log(`Rent: $${marriedBalance} - Current Balance: $${marriedBalance} = $0\n`)
  gameOver();
}

// Family Section
if (household === "family") {
  choicesFamily = ["Check Balance", "Grocery Shopping", "Pay Bill's"];
  indexFamily = readlineSync.keyInSelect(choicesFamily, "Make Your Choice:  ", {
    cancel: false,
  });
  if (choicesFamily[indexFamily] === "Check Balance") {
    console.log(`\nYour current balance: $${familyBalance}\n`);
    choicesFamily.splice(0, 1);
    indexFamily = readlineSync.keyInSelect(
      choicesFamily,
      "Make Your Choice: ",
      {
        cancel: false,
      }
    );
  }

  if (choicesFamily[indexFamily] === "Grocery Shopping") {
    storeChoice = readlineSync
      .question(`\nChoose a grocery store: ${supermarkets}`, {
        limit: ["Whole Foods", "Trader Joes", "Publix"],
        limitMessage: "\nChoose one of three!",
      })
      .toLowerCase();
    console.log(`\nYou chose: ${storeChoice}\n`);
    switch (storeChoice) {
      case "whole foods":
        console.log("OMG Expensive\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Whole Foods ~\n\
      * Milk\n\
      * Steak\n\
      * Wine
      * Chicken Breast
      * Fruits
      * Eggs
      * Rice
      * Potatoes
      * Asparagus
      * Total With Tax: $${prices.wholeFoods}
      * Remaining Balance: $${familyBalance -= prices.wholeFoods}\n`
        );
        break;
      case "trader joes":
        console.log("Nice and Cheap\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Trader Joe's ~\n\
      * Milk\n\
      * Steak\n\
      * Wine
      * Chicken Breast
      * Fruits
      * Eggs
      * Rice
      * Potatoes
      * Asparagus
      * Total With Tax: $${prices.traderJoes}
      * Remaining Balance: $${familyBalance -= prices.traderJoes}\n`
        );
        break;
      case "publix":
        console.log("Miami Staple\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Publix ~\n\
      * Milk\n\
      * Steak\n\
      * Wine
      * Chicken Breast
      * Fruits
      * Eggs
      * Rice
      * Potatoes
      * Asparagus
      * Total With Tax: $${prices.publix}
      * Remaining Balance: $${familyBalance -= prices.publix}\n`
        );
    }
  } else if (choicesFamily[indexFamily] === "Pay Bill's") {
    billChoice = readlineSync
      .question(`\nChoose A Bill To Pay: ${familyBills}`, {
        limit: ["Light Bill", "Car Insurance", "Child Support"],
        limitMessage: "\nChoose one of three!",
      })
      .toLowerCase();
    console.log(`\nYou chose: ${billChoice}\n`);
    switch (billChoice) {
      case "light bill":
        console.log("That time of the month again!\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ FPL ~\n\
      * Light Bill
      * 06/01/2020 - 07/01/2020
      * Total With Tax: $${prices.fpl}
      * Remaining Balance: $${familyBalance -= prices.fpl}\n`
        );
        break;
      case "car insurance":
        console.log("That time of the month again!\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Geico ~\n\
      * Car Insurance
      * 06/01/2020 - 07/01/2020
      * Total With Tax: $${prices.geico}
      * Remaining Balance: $${familyBalance -= prices.geico}\n`
        );
        break;
      case "child support":
        console.log("It's for your CHILD!!!\n");
        console.log(
          `\tYour Order Recipt:\n\
      ~ Child Support ~\n\
      * 1 Child
      * Total With Tax: $${prices.childSupport}
      * Remaining Balance: $${familyBalance -= prices.childSupport}\n`
        );
    }
  }
  console.log(
    `What a great Spouse you are. RING!!! RING!!! Uh Oh it's your landord`
  );
  console.log(`\nTime to pay up!\n\nCurrent Balance: $${familyBalance}\n`);
  console.log(`Rent: $${familyBalance} - Current Balance: $${familyBalance} = $0\n`)

  gameOver();
}
