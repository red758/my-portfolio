const box = document.querySelector(".img-box");
const overlay = document.querySelector(".overlay");

box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const radius = 120;

    overlay.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, white 100%, transparent 100%)`;
    overlay.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, white 100%, transparent 100%)`;
});
