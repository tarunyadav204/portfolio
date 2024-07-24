
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});

const msgSpan = document.getElementById('msg');
const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var message = document.getElementById('message');
    const formData = {
        access_key: 'b796069c-f740-4b04-a24f-8c6fa400284b',
        email: email.value,
        name: name.value,
        message: message.value
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        const message = data.message;
        msgSpan.innerText = data.message;

        setTimeout(() => {
            msgSpan.innerText = '';
        }, 4000);
        form.reset();

    }
    catch (err) {
        console.error("ERROR:", err);
    }
});

window.addEventListener('scroll', function () {
    const sectionHome = document.getElementById('header');
    const sectionAbout = document.getElementById('about');
    const sectionSkill = document.getElementById('skills');
    const sectionProject = document.getElementById('projects');
    const sectionContact = document.getElementById('contact');

    const sections = [sectionHome, sectionAbout, sectionSkill, sectionProject, sectionContact];

    var navLinks = document.querySelectorAll('#navbarNav a.nav-link');
    var scrollPos = window.scrollY + window.innerHeight / 2; // Adjust scroll position to account for window height

    sections.forEach(function (section, index) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        if (scrollPos >= top && scrollPos <= top + height) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
});


