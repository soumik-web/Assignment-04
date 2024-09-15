function calculateTax(income, expenses) {
    if(income < expenses || income < 0 || expenses < 0) return "Invalid Input";
    else return (income - expenses) * .2;
}