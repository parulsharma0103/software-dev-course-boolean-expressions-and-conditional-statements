/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You wake up in a dark forest. There are two paths ahead of you:");
console.log("You see two paths: one leads to the mountains, the other to the village.");
console.log("You also notice a narrow trail leading to a cave.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");


if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains, enjoying the beautiful scenery.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed, and you stumble. You decide to turn back.");
} else if (choice === "village" && hasMap) {
  console.log("With the map, you easily find your way to the village.");
} else if (choice === "village" && !hasMap) {
  console.log("Without a map, you get lost but eventually stumble into the village by chance.");
} else if (choice === "cave" && hasTorch) {
  console.log("With the torch, you explore the cave. Inside, you find a hidden treasure!");
} else if (choice === "cave" && !hasTorch) {
  console.log("It's too dark to enter the cave, and you decide to wait for daylight.");
} else if (choice === "cave" && hasTorch && hasSword) {
  console.log("With your sword and torch, you venture deeper into the cave. You fight off a monster and claim a treasure!");
} else {
  console.log("You stand indecisively, unsure of where to go. The forest is quiet, and you wonder what adventure lies ahead.");
}

const secondChoice = readline.question("Do you want to 'continue' or 'rest'? ");

if (secondChoice === "continue" && hasCompass) {
  console.log("With the compass, you head toward your next adventure confidently.");
} else if (secondChoice === "continue" && !hasCompass) {
  console.log("Without a compass, you find yourself going in circles and lose track of time.");
} else if (secondChoice === "rest" && hasTorch) {
  console.log("You rest by the campfire, using your torch for warmth.");
} else if (secondChoice === "rest" && !hasTorch) {
  console.log("You decide to rest, but without a torch, the night feels colder and more eerie.");
} else {
  console.log("You sit quietly, thinking about your next move.");
}