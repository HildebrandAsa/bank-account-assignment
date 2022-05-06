// BANK ACCOUNT

//Object with all the properties:
const account = {
  accountName: "Åsa",
  balance: 100,
  getBalance: function () {
    return alert(`Your account balance is: ${this.balance} kr`);
  },
  deposit: function () {
    const depositValue = parseFloat(prompt("How much would you like to deposit?"));
    if (depositValue <= 0 || isNaN(depositValue)) {
      alert("Deposit not possible");
      atm();
    } else {
      this.balance += depositValue;
      alert(`Deposit successful! Now your account balance is: ${this.balance} kr`);
      atm();
    }
  },
  withdrawal: function () {
    const withdrawalValue = parseFloat(prompt("How much would you like to withdrawal?"));
    if (withdrawalValue <= 0 || withdrawalValue === "" || isNaN(withdrawalValue)) {
      alert("Withdrawal not possible");
      atm();
    } else if (withdrawalValue > this.balance) {
      alert("You don't have enough money");
      atm();
    } else {
      this.balance -= withdrawalValue;
      alert(`Withdrawal successful! Now your account balance is: ${this.balance} kr`);
      atm();
    }
  },
  getAccountName: function() {
    return alert(`Your account name: ${this.accountName}`);
  },
  //I think that I have handled the errors inside the other functions and can not see that I need any error handling here.
  // accountError: function() {
  // },
  exitAccount: function () {
    Window.close();
  }
}

//Function to handle the menu
function atm() {
  
  const choiceMenu = prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit");

  if (choiceMenu === "1") {
    account.getBalance();
    atm();
  } else if (choiceMenu === "2") {
    account.deposit();
  } else if (choiceMenu === "3") {
    account.withdrawal();
  } else if (choiceMenu === "4") {
    account.getAccountName();
    atm();
  } else if (choiceMenu === "5") {
    account.exitAccount();
  } else {
    alert("Choose between 1-5");
    atm()
  }
}
atm();

//QUESTIONS:
// you need to answer the question why we are using parseFloat() method here
//ANSWER: JavaScript converts an empty string to 0, with parseFloat() it will not convert it, an empty string is still an empty string.

// either use a if/else statement or a switch. Write a comment and motivate your choice
//ANSWER: I chose if/else statement because there is not so many different items in my code so it doesn't get messy,
// if it had been many items I think that switch would have been a better choice. In my code I do a lot of "boolean checks" for example 
// I check if choiceMenu = 2 is true, and if it is, then the following code will execute and that works fine in if/else statements.



  // REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// - balance, should be the data type number
// - getBalance, should be a function
// - deposit, also a function
// - withdrawal, also a function
// - getAccountName, function as well
// - accountError, same as above function!
// EXTRA: exitAccount, should be a function
// EXTRA = optional

// The object properties should work as following:
// - accountName: the account holders name
// - balance: total amount of the account should be initiated with 100 from start
// - getBalance: a function that should display the total balance of the account
// - deposit: a function that will deposit a certain amount into the account
// - withdrawal: a function that will withdraw the desired amount of money from the account
// - getAccountName: a function to display the account holders name
// - accountError: trick question! you need to think about this and how to use it
// but keep in mind that we do not want to repeat our code. So what could you use this function for?
// EXTRA (OPTIONAL): exitaccount - a function that should close the whole window. You need to do some research yourself and
// see if you can figure this one out.

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// You also need to create a function called atm()
// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// In this assignment you will practice:
// Objects
// Functions
// This keyword
// Statements and operators

// && operator
// || operator

// A user should NOT be able to deposit och withdraw negative number!
// A user should NOT be able to deposit or withdraw an empty string, leaving the input empty
// A user should NOT be able to withdraw a larger total sum that the actual balance of the account
// A user should NOT be able to put anything that is NOT a number in the input

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method:
// const variableName = 10;
// isNaN(variableName);
