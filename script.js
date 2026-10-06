// Plan cards: click panna sub jobs open / close aagum
const cards = document.querySelectorAll('.plan-card');

cards.forEach(card => {
    const head = card.querySelector('.plan-head');
    const body = card.querySelector('.plan-body');

    head.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        // matha cards ah close pannu
        cards.forEach(c => {
            c.classList.remove('open');
            c.querySelector('.plan-body').style.maxHeight = null;
        });

        // click panna card ah open pannu
        if (!isOpen) {
            card.classList.add('open');
            body.style.maxHeight = body.scrollHeight + 'px';
        }
    });
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('show')));