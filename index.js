import inquirer from "inquirer";
const inputString = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter sentence for words counts: "
    }
]);
const words = inputString.sentence.trim().split(" ");
//console.log(words)
console.log(`Total Words: ${words.length}`);
