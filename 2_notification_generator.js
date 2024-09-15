function sendNotification(email) {
    if(!email.includes("@")) return "Invalid Email";
    const notification = email.split("@");
    return notification.join(" sent you an email from ");
}