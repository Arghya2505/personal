// Ensure audio plays even if autoplay is blocked
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5; // Set initial volume

    // Attempt to play audio
    audio.play().catch(error => {
        console.log("Autoplay blocked. Click anywhere to start the music.");
        document.addEventListener("click", () => audio.play(), { once: true });
    });
});

// Trigger Pigeon Animation
function releasePigeon() {
    let pigeon = document.getElementById("pigeon");
    pigeon.style.display = "block";

    setTimeout(() => {
        document.getElementById("sorry-note").style.display = "block";
    }, 3000);
}

// Show Hidden Message
function revealMessage() {
    document.getElementById("hidden-message").style.display = "block";
}

// Floating hearts effect
setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);
