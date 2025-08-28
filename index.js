const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const allLinks = document.querySelectorAll('nav a, .off-screen-menu a');

// Hamburger toggle
hamMenu?.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu?.classList.toggle('active');
});

// Highlight current section link
function highlight() {
    const scrollY = window.scrollY + 10;
    allLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
            link.style.color = 'rgba(120, 70, 233, 1)';
        } else {
            link.style.color = '';
        }
    });
}

window.addEventListener('scroll', highlight);
window.addEventListener('load', highlight);

// Smooth scroll + close menu when a link is clicked
allLinks.forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault(); // prevent default jump
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // smooth animation
                    block: 'start'
                });
            }
            // Close off-screen menu if open
            offScreenMenu?.classList.remove('active');
            hamMenu?.classList.remove('active');
        }
    });
});
