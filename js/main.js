let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click', function () {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
})
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
}

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

// Email JS
function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if(name.value == '' || email.value == '' || msg.value == '') {
            emptyerror()
        } else {
            sendEmail(name.value, email.value, msg.value)
            success()
        }
    })
}

validate()

function sendEmail(name, email, msg) {
    emailjs.send("service_yp7guh9","template_9is8i8m",{
        from_name: email,
        to_name: name,
        message: msg
    });
}

function emptyerror() {
    Swal.fire({
        icon: 'error',
        title: 'Los campos no pueden estar vacíos',
        text: 'Revisar los campos nuevamente',
      })
}

function success() {
    Swal.fire(
        'Correo enviado correctamente!',
        'Te responderé en las próximas 24 horas',
        'success'
    )
}

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0)
})

let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY > 0)
})