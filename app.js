const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box");

function calculateSum(dob) {
    dob=dob.replaceAll("-","");
    let sum=0;
    for (let i=0; i<dob.length; i++){
        sum=sum+Number(dob.charAt(i));

    }
    return sum;
};

function checkBirthDateIsLucky () {
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    if(sum   &&    dob) {
        compareValue(sum, luckyNumber.value)
    }
    
    else {
        outputBox.innerText="Please enter both the fields!!"
    };
}

function compareValue(sum,luckyNumber) {

    if (sum%luckyNumber===0){
        outputBox.innerText="Your birthday is the lucky one, hehee! ╰(*°▽°*)╯" 

    } 
    else {
        outputBox.innerText="Oops! Your birthday isn't lucky. (●__●)"
    }
}


checkButton.addEventListener('click', checkBirthDateIsLucky)
