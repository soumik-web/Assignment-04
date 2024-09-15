function calculateTax(income, expenses) {
    if(income < expenses || income < 0 || expenses < 0) return "Invalid Input";
    else return (income - expenses) * .2;
}

// console.log(calculateTax(10000, 3000));

function sendNotification(email) {
    if(!email.includes("@")) return "Invalid Email";
    const notification = email.split("@");
    return notification.join(" sent you an email from ");
}


function checkDigitsInName(name) {
    if(typeof name !== "string") return  "Invalid Input";
    for(let i = 0; i <= 9; i++){
        if(name.includes(i)) return true;
    }
    return false;
}


function calculateFinalScore(obj) {
    if(typeof obj !== "object" || Array.isArray(obj) || obj === null) return "Invalid Input";
    let score = obj["testScore"] + obj["schoolGrade"];
    score += obj["isFFamily"] ? 20 : 0;
    return score >= 80;
}


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number") return "Invalid Input";
    let sum = 0;
    for(let time of waitingTimes){
        sum += time;
    }
    let avarageTime = Math.round(sum/waitingTimes.length);
    let infront = serialNumber - 1 - waitingTimes.length;
    return avarageTime * infront;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
