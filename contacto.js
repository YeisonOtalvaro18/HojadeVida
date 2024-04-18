document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const namee = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    function sendEmail() {
        const bodyMessage = `Nombre: ${namee.value} <br/>
        Email: ${email.value} <br/>
        Telefono: ${phone.value} <br/>
        Asunto: ${subject.value} <br/>
        Mensaje: ${message.value}`;
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "yotalvaroocampo@gmail.com",
            Password: "F4D3D3D3-",
            To: "yotalvaroocampo@gmail.com",
            From: "yotalvaroocampo@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Enhorabuena!",
                        text: "Tu email ha sido enviado!",
                        icon: "success"
                    });
                }
            }
        );
    }

    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value =="") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            if (items[1].value != "") {
                checkEmail();
            }

            items[1].addEventListener("keyup", () => {
                checkEmail();
            });

            item.addEventListener("keyup", () => {
                if (item.value !== "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                } else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            });
        }
    }

    function checkEmail() {
        const emailRegex = /^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const errorTxtEmail =document.querySelector('.error-txt.email');

        if(!email.value.match(emailRegex)) {
            email.classList.add('error');
            email.parentElement.classList.add('error');

            if (email.value != "") {
                errorTxtEmail.innerText = "Introduzca una direccion de correo válida";
            } else {
                errorTxtEmail.innerText = "El campo correo no puede estar vacio";
            }
        } else {
            email.classList.remove('error');
            email.parentElement.classList.remove('error');
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();

        if(!namee.classList.contains('error')
        && !email.classList.contains('error')
    && !phone.classList.contains('error')
    && !subject.classList.contains('error')
    && !message.classList.contains('error')) {
            console.log(namee.value);
            console.log(email.value);
            console.log(phone.value);
            console.log(subject.value);
            console.log(message.value);

            sendEmail();

            form.reset();
            return false;
        }
    });
});
