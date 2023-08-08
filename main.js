// let cards = [
//   { id: 1, balance: 5000, currency: "USD" },
//   { id: 2, balance: 4000, currency: "EVR" },
//   { id: 3, balance: 2000, currency: "UA" },
// ];

// function handelClick() {
//   cards.forEach((card) => {
//     console.log(
//       `Card Id: ${card.id}, Balance ${card.balance}, Currency: ${card.currency}`
//     );
//   });
// }

// document.querySelector("button").addEventListener("click", handelClick);

const word0 = {
  original: "Good",
  translation: "Отлично",
};

// const word0 = "Good";
// const word0translate = "Отлично";

// const word1 = "Boy";
// const word1translate = "Парень";

const word1 = {
  original: "Boy",
  translation: "Парень",
};

// const word2 = "Pragrammist";
// const word2translate = "Праграммист";

const word2 = {
  original: "Pragrammist",
  translation: "Праграммист",
};

const wordLeng = 3;

const resultMessages = {
  finishGood: "Молодец. Good test",
  finishFalse: "Молодец. папробуй еще все получится!",
};

// const finishGoodMessage = "Молодец. Good test";
// const finishFalseMessage = "Молодец. папробуй еще все получится!";

// let counter = 0;

const settings = {
  procentTest: 50,
};

const result = {
  counter: 0,
};

// const procentTest = 50;

const userAnswer0 = window.prompt(word0.original);
document.write(userAnswer0);
if (userAnswer0 === word0.translate) {
  result.counter = result.counter += 1;
}

const userAnswer1 = window.prompt(word1.original);
document.write(userAnswer1 === word1.translate);
if (userAnswer1 === word1.translate) {
  result.counter = result.counter += 1;
}

const userAnswer2 = window.prompt(word2.original);
document.write(userAnswer2 === word2.translate);
if (userAnswer2 === word2.translate) {
  result.counter = result.counter += 1;
}

const countWordleng = (result.counter / wordLeng) * 100;

if (countWordleng > settings.procentTest) {
  alert(resultMessages.finishGood);
} else {
  alert(resultMessages.finishFalse);
}

// document.write("Start", "<br>");

// if (true) {
//   document.write("Product push");
// } else {
//   document.write("Not product");
// }

// document.write("<br>", "END");

// let balance = 110;

// // if (balance >= productPrice) {
// //   console.log("Вы приобрели этот товар");
// // } else {
// //   console.log("Не достаточно средств на счету!!!");
// // }
// const productPriceString1 = prompt("How are you product");

// const productPrice1 = Number(productPriceString1);

// // if (productPrice1 < balance) {
// //   console.log("Не достаточно средств на счету!!!");
// // }

// if (productPrice1 === productPrice1) {
//   if (balance < productPriceString1) {
//     console.log("Не достаточно средств на счету!!!");
//   } else {
//     console.log("Вы приобрели этот товар");
//     balance -= productPrice1;
//     console.log("Осталося на счету: ", balance);
//   }
// } else {
//   console.log("Is not coercion input");
// }
// // console.log(balance);

// const productPriceString2 = prompt("How are you product");
// const productPrice2 = Number(productPriceString2);

// if (productPrice2 === productPrice2) {
//   if (balance < productPriceString2) {
//     console.log("Не достаточно средств на счету!!!");
//   } else {
//     console.log("Вы приобрели этот товар");
//     balance -= productPrice2;
//     console.log("Осталося на счету: ", balance);
//   }
// } else {
//   console.log("Is not coercion input");
// }

// const productPriceString3 = prompt("How are you product");
// const productPrice3 = Number(productPriceString2);

// if (productPrice3 === productPrice3) {
//   if (balance < productPriceString3) {
//     console.log("Не достаточно средств на счету!!!");
//   } else {
//     console.log("Вы приобрели этот товар");
//     balance -= productPrice3;
//     console.log("Осталося на счету: ", balance);
//   }
// } else {
//   console.log("Is not coercion input");
// }

// const product1 = 100;
// const product2 = 200;

// console.log(product1 < product2);
