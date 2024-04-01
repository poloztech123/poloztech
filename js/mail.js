
function sendEmail(){
let email = document.getElementById('email').value;
let first_name = document.getElementById('first_name').value;
let last_name = document.getElementById('last_name').value;
let phone = document.getElementById('phone').value;
let select_service = document.getElementById('select_service').value;
let comments = document.getElementById('comments').value;
let form = document.getElementById('contactform');

emailjs.send("service_nzulu27","template_cr8e6bm",{
    email,
    first_name,
    last_name,
    phone,
    select_service,
    comments,
    message
})
form.reset();
};


