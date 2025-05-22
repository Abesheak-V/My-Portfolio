// ...existing code...
const names = [
    { text: "I am Abesheak", class: "lang-en" }, // English
    { text: "நான் அபேஷேக்", class: "lang-ta" },   // Tamil
    { text: "मैं अभेषेक हूँ", class: "lang-hi" }, // Hindi
    { text: "أنا أبيشيك", class: "lang-ar" }      // Arabic
];

let idx = 0;
const nameDisplay = document.getElementById('name-display');

function changeName() {
    nameDisplay.textContent = names[idx].text;
    nameDisplay.className = names[idx].class;
    idx = (idx + 1) % names.length;
}
changeName();
setInterval(changeName, 1000);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// ...existing code...