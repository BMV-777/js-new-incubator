let cards = [
  { id: 1, balance: 5000, currency: "USD" },
  { id: 2, balance: 4000, currency: "EVR" },
  { id: 3, balance: 2000, currency: "UA" },
];

function handelClick() {
  cards.forEach((card) => {
    console.log(
      `Card Id: ${card.id}, Balance ${card.balance}, Currency: ${card.currency}`
    );
  });
}

document.querySelector("button").addEventListener("click", handelClick);
