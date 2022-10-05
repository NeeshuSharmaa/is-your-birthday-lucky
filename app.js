const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box");

function compareValue(sum,luckyNumber) {

    if (sum%luckyNumber===0){
        outputBoxBox.value="Your birthday is not lucky" 

    } 
    else {
        outputBoxBox.value="Your birthday isn't lucky"
    }
}

function checkBirthDateIsLucky () {
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    if(sum&&dob) {
        compareValues(sum, luckyNumber.value)
    }
    
    else {
        outputBox="Please enter both the fields"
    };
}
function calculateSum(date) {
    dob=date.replaceAll("-","");
    let sum=0;
    for (let index=0; index<dob.length;index++){
        sum=sum+Number(dob.charAt(index));

    }
    return sum;
};

checkButton.addEventListener('click', function getValue(){
    console.log(dateOfBirth.value, luckyNumber.value);

})
