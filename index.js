// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
}

function letsPlay(){
  rollDice();
  whoWon();
    let times = parseInt(prompt("How many times do you want to roll the dice?"), 10);
    if (isNaN(times) || times <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    let balance = 0;
    let summary = "";

    for (let i = 1; i <= times; i++) {
      let randomNumber1 = Math.floor(Math.random() * 6) + 1;
      let randomNumber2 = Math.floor(Math.random() * 6) + 1;
      let sum = randomNumber1 + randomNumber2;

      // Only update dice images on the final roll
      if (i === times) {
        document.querySelector(".img1").setAttribute("src", "dicegame/dice" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "dicegame/dice" + randomNumber2 + ".png");
      }

      if (sum > 9) {
        balance += 5;
        summary += `Round ${i}: You rolled ${sum}. You win $5!<br>`;
      } else if (sum <= 5) {
        balance -= 5;
        summary += `Round ${i}: You rolled ${sum}. You lose $5!<br>`;
      } else {
        summary += `Round ${i}: You rolled ${sum}. No money exchanged.<br>`;
      }
    }

    summary += `<br><strong>Total Balance: $${balance}</strong>`;
    document.querySelector("h3").innerHTML = summary;
}
