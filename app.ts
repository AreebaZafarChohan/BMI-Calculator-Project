import inquirer from "inquirer";
import chalk from "chalk";
import { BMIAnimation } from "./animation.js";
import { retry } from "rxjs";
import chalkAnimation from "chalk-animation";

// Define a type for the users's input data 
interface UserData {
    height: number;
    weight: number;
}

// Function to claculate BMI 
function calculateBMI(height: number, weight: number): number {
    // Formula: BMI = weight(kg) / (height (m) * height (m))
    return weight / ((height / 100) * (height / 100));
}

// Function to determine BMI category 
function getBMICategory(bmi: number): string {
    if (bmi < 18.5) {
        return "UnderWeight";
    } else if (bmi < 25) {
        return "Normal Weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Main function to interact with the user
async function runBMIProgram() {

    console.log(chalk.magenta.bold.underline("\n  \tWelcome to the BMI Calculator!  \n"));

    // Takes user input through inquirer
    const userData : UserData = await inquirer.prompt([
        {
            type: "number",
            name: "height",
            message: "Enter your height in cm:",
        },
        {
            type: "number",
            name: "weight",
            message: "Enter your weight in kg:",
        },
    ]);

    // Calculate BMi 
    const bmi: number = calculateBMI(userData.height, userData.weight);
    const bmiCategory: string = getBMICategory(bmi);

    // Display the result 

    console.log(chalk.bold.yellow("Your BMI is: "), chalk.blue.bold(bmi.toFixed(2)));
    console.log(chalk.bold.yellow("BMI Category: "), chalk.green.bold(bmiCategory));

    // Display an animation (if available)
    const animation = new BMIAnimation();
    animation.showBodyFigureAdvice(bmiCategory);
} 

// Run the program
runBMIProgram();