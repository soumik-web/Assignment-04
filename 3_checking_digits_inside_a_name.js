function checkDigitsInName(name) {
    if(typeof name !== "string") return  "Invalid Input";
    for(let i = 0; i <= 9; i++){
        if(name.includes(i)) return true;
    }
    return false;
}
console.log(checkDigitsInName("soumik"));