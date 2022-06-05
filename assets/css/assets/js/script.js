function sendEmail(){
    sendEmail.send({
        Host : "smtp.gmail.com",
        Username : "@gmail.com",
        // Password : "password",
        To: "ronoh.ivy@gmail.com",
        From: document.getElementById("email").value,
        Subject : "Inquiry",
        Body : "Name:" + getElementById("name").value 
        + "<br> Email:" + getElementById("email").value
        + "<br> Phone Number:" + getElementById("phone").value
        + "<br> Feedback:" + getElementById("feedback").value


    }).then(
        message.alert("Message Sent Successfully")
    );
}