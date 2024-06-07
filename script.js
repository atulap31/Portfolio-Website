const form = document.querySelector("form");

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kodegaming01@gmail.com",
        Password : "9462923F8650D9D58D48887A340BFDEE78EA",
        To : 'kodegaming01@gmail.com',
        From : "kodegaming01@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});
