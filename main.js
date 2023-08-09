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

const worldMessages = {
  words: {
    word0: {
      original: "Good",
      translation: "Отлично",
    },
    word1: {
      original: "Boy",
      translation: "Парень",
    },
    word2: {
      original: "Pragrammist",
      translation: "Праграммист",
    },
  },
  counter: 0,
};

// const word0 = {
//   original: "Good",
//   translation: "Отлично",
// };

// const word1 = {
//   original: "Boy",
//   translation: "Парень",
// };

// const word2 = {
//   original: "Pragrammist",
//   translation: "Праграммист",
// };

const wordLeng = 3;

const resultMessages = {
  start: {
    result: "hello men Cood like",
  },
  finishGood: "Молодец. Good test",
  finishFalse: "Молодец. папробуй еще все получится!",
};

alert(resultMessages.start.result);

const settings = {
  procentTest: 50,
};

// const result = {
//   counter: 0,
// };

// const procentTest = 50;

const userAnswer0 = window.prompt(worldMessages.words.word0.original);
alert(userAnswer0 === worldMessages.words.word0.translation);
if (userAnswer0 === worldMessages.words.word0.translation) {
  worldMessages.counter = worldMessages.counter += 1;
}

const userAnswer1 = window.prompt(worldMessages.words.word1.original);
alert(userAnswer1 === worldMessages.words.word1.translation);
if (userAnswer1 === worldMessages.words.word1.translation) {
  worldMessages.counter = worldMessages.counter += 1;
}

const userAnswer2 = window.prompt(worldMessages.words.word2.original);
alert(userAnswer2 === worldMessages.words.word2.translation);
if (userAnswer2 === worldMessages.words.word2.translation) {
  worldMessages.counter = worldMessages.counter += 1;
}

const countWordleng = (worldMessages.counter / wordLeng) * 100;

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
