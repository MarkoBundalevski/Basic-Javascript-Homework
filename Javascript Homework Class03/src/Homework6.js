let myAccount = 5000;
function ATM(){
    let withdrawal = parseInt(prompt("Enter the amount you want to withdraw:"));
    let stateAfterWithdrawal = myAccount;
    if(withdrawal > stateAfterWithdrawal){
        console.log("Not enough money!");
    }
    else{
        stateAfterWithdrawal -= withdrawal;
        console.log(`You have withdrawn ${withdrawal} from your account. Current state: ${stateAfterWithdrawal}`);
    }
    myAccount = stateAfterWithdrawal;
}