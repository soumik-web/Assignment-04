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