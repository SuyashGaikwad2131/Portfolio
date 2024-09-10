document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("service_kafe2lp");

    const getInTouchBtn = document.querySelector("#getInTouchBtn");
    const contactForm = document.querySelector("#contactForm");
    const sendBtn = document.querySelector("#sendBtn");

    getInTouchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        contactForm.style.display = "block";
        window.scrollTo({ top: document.querySelector("#contact").offsetTop, behavior: 'smooth' });
    });

    contactForm.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (!name || !email || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        emailjs.sendForm('service_kafe2lp', 'template_zrnfqny', this)
            .then(function(response) {
                alert("Your message has been sent!");
                contactForm.style.display = "none";
                document.querySelector("#name").value = '';
                document.querySelector("#email").value = '';
                document.querySelector("#message").value = '';
            }, function(error) {
                alert("Failed to send the message.");
            });
    });
});
