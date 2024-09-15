function calculateFinalScore(obj) {
    if(typeof obj !== "object" || Array.isArray(obj) || obj === null) return "Invalid Input";
    let score = obj["testScore"] + obj["schoolGrade"];
    score += obj["isFFamily"] ? 20 : 0;
    return score >= 80;
}