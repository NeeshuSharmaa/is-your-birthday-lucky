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



function compareValue(a,b) {
    

    if (a%b===0){
        outputBox.innerText="Your birthday is the lucky one, hehee! ╰(*°▽°*)╯" 

    } 
    else {
        outputBox.innerText="Oops! Your birthday isn't lucky. (●__●)"
    }
}

function checkBirthDateIsLucky () {
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    const luckyNum = luckyNumber.value;
    if(luckyNum   &&    dob) {
        compareValue(sum, luckyNum)
    }
    
    else {
        outputBox.innerText="Please enter both the fields!!"
    };
}


checkButton.addEventListener('click', checkBirthDateIsLucky)
