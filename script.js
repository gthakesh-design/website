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
// Auto ah ella content kum reveal class add pannum
const targets = document.querySelectorAll(
  "section, section h1, section h2, section h3, section p, " +
  "section form, section img, .plan-card, .fb-card, footer"
);

targets.forEach((el, i) => {
  el.classList.add("reveal");
  // Same row la irukkura cards ku stagger delay
  el.style.setProperty("--delay", `${(i % 4) * 0.12}s`);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // oru thadava mattum animate
    }
  });
}, { threshold: 0.15 });

targets.forEach((el) => observer.observe(el));

// Feedback cards dynamic ah load aagum, so adhukkum animation
const fbList = document.getElementById("feedbackList");
if (fbList) {
  new MutationObserver(() => {
    fbList.querySelectorAll(".fb-card:not(.reveal)").forEach((card, i) => {
      card.classList.add("reveal");
      card.style.setProperty("--delay", `${i * 0.12}s`);
      observer.observe(card);
    });
  }).observe(fbList, { childList: true });
}const growthNum = document.getElementById("growthNum");
if (growthNum) {
  const target = 248;
  const duration = 3000;
  setTimeout(() => {
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      growthNum.textContent = Math.floor(p * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, 500);
}