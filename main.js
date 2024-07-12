import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    // console.log("Welcome to the next procedure");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select operation",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "Fast cash") {
        let fastAmountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select amount for Fast cash",
                type: "list",
                choices: ["200", "500", "1000"]
            }
        ]);
        let fastAmount = parseInt(fastAmountAns.amount.replace("$", ""));
        if (fastAmount <= myBalance) {
            myBalance -= fastAmount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
