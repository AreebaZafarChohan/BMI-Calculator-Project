// This file is for animation purpose in BMI calculator

import chalk from "chalk";
// animation.ts

export class BMIAnimation {
    constructor() {}

    showBodyFigureAdvice(bodyFigure: string): void {
        let advice: string;

        switch(bodyFigure) {
            case 'Underweight':
                advice = chalk.yellow.bold('You are underweight. Consider consulting a doctor or a nutritionist for advice on healthy weight gain. 💪');
                break;
            case 'Normal Weight':
                advice = chalk.green.bold('Your body figure looks normal. Keep up the good work! 👍');
                break;
            case 'Overweight':
                advice = chalk.red.bold('Your body figure indicates that you might need to consider exercise and diet modifications. 🏋‍♂🥗');
                break;
            case 'Obese':
                advice = chalk.red.bold('Your body figure suggests consulting a doctor for proper guidance on weight management. 🩺');
                break;
            default:
                advice = chalk.blue.bold('Your body figure is undefined.');
        }

        console.log(advice);
    }
}