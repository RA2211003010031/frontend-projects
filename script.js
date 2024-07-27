const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

yesBtn.addEventListener('click', () => {
    message.classList.remove('hidden');
    gsap.to("#message", { duration: 1, opacity: 1, scale: 1.2, ease: "elastic" });
});

noBtn.addEventListener('mouseover', () => {
    moveButton(noBtn);
});

function moveButton(button) {
    const maxX = 400;
    const maxY = 400;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    gsap.to(button, { duration: 0.5, x: x, y: y, ease: "power2.inOut" });
}
