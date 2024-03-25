#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number
//user input for guessing game
//compare user input with computer generated random number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
//floor = makes decimal number into round figure
//random = gives decimal values b/w 0-1
//() = call 
const answer = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "Dear user, guess the number between 1-6",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("CONGRATULATION! you guessed the Right Number");
}
else {
    console.log("SORRY! you guessed the wrong number");
}
