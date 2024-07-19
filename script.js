document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const ul = document.querySelector('nav ul');
    const title = document.querySelector('span');

    window.addEventListener('scroll', function () {

        if (this.window.innerWidth <= 786) {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = '#f748cb';
                nav.style.color = 'White';
                ul.style.color = 'White';
                ul.style.backgroundColor = "#f748cb"
                title.style.color = "White";
                navLinks.forEach(link => {
                    link.style.color = 'White';
                });
            } else {
                nav.style.backgroundColor = '#fff';
                nav.style.color = '#f748cb';
                ul.style.color = '#f748cb';
                title.style.color = "#f748cb";
                ul.style.backgroundColor = "White"
                navLinks.forEach(link => {
                    link.style.color = '#f748cb';
                });
            }
        }
        else {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = '#f748cb';
                nav.style.color = 'White';
                ul.style.color = 'White';
                ul.style.backgroundColor = "#f748cb"
                title.style.color = "White";
                navLinks.forEach(link => {
                    link.style.color = 'White';
                });
            } else {
                nav.style.backgroundColor = '#fff';
                nav.style.color = '#f748cb';
                ul.style.color = '#f748cb';
                title.style.color = "#f748cb";
                ul.style.backgroundColor = "White"
                navLinks.forEach(link => {
                    link.style.color = '#f748cb';
                });
            }
        }



    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            if (window.scrollY > 50) {
                link.style.backgroundColor = '#ffa400';
                link.style.borderRadius = '10px';
            } else {
                link.style.color = 'White';
                link.style.backgroundColor = '#f748cb';
                link.style.borderRadius = '10px';
            }
        });
        link.addEventListener('mouseout', function () {
            if (window.scrollY > 50) {
                link.style.color = 'White';
                link.style.backgroundColor = 'transparent';
            } else {
                link.style.color = '#f748cb';
                link.style.backgroundColor = 'transparent';
            }
        });
    });

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('nav ul');

    menu.onclick = () => {
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
    };

    // Dark Mode
    let darkmode = document.querySelector('#darkmode');

    darkmode.onclick = () => {
        if (darkmode.classList.contains('bx-moon')) {
            darkmode.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('active');
        } else {
            darkmode.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('active');
        }
    };

    // Scroll Reveal
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 2000,
        reset: true
    });

    sr.reveal(`.home-text, .home-img,
                .about-img, .about-text,
                .box, .s-box,
                .btn, .connect-text,
                .contact-box`, {
        interval: 200
    });
});
