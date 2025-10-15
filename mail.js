function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("Subject").value, // Capital S to match HTML
        message: document.getElementById("textarea").value,
    };

    emailjs.send("service_kcvkjz2", "template_4ogrq6w", parms)
    .then(function(response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
    });
}