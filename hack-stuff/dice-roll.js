const D4 = ["1", "2", "3", "4"];
const D6 = ["1", "2", "3", "4", "5", "6"];
const D8 = ["1", "2", "3", "4", "5", "6", "7", "8"];
const D10 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const D12 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const D20 = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"
];
const D10per = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function rollDie() {
  console.log("Casting the Die");
  console.log("The values are...");
  const value1 = D4[Math.floor(Math.random() * D4.length)];
  const value2 = D6[Math.floor(Math.random() * D6.length)];
  const value3 = D8[Math.floor(Math.random() * D8.length)];
  const value4 = D10[Math.floor(Math.random() * D10.length)];
  const value5 = D20[Math.floor(Math.random() * D20.length)];
  const value6 = D10per[Math.floor(Math.random() * D10per.length)];

  console.log(value1, value2, value3, value4, value5, value6);

  const roll_again = prompt("Press 'y' or 'yes' to roll the die again.");
  console.log("May the odds be in your favor...");

  if (roll_again === "yes" || roll_again === "y") {
    rollDie();
  }
}

rollDie();
