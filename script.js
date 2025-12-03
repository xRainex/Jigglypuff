const jiggly = document.getElementById("jiggly");

// Two pixel sprite frames
const frame1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png";       // arms down
const frame2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png"; // arms up (approx)

let toggle = true;

setInterval(() => {
    jiggly.src = toggle ? frame2 : frame1;
    toggle = !toggle;

    // slight bounce effect
    jiggly.style.transform = toggle ? "translateY(-5px)" : "translateY(0px)";
}, 300);

function bubbles() {
    const container = document.getElementById("bubble-container");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 30 + 20; // 20–50px
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Random Y position
    bubble.style.top = Math.random() * 90 + "vh";

    // Random duration
    const speed = Math.random() * 3 + 4;
    bubble.style.animationDuration = speed + "s";

    const fromLeft = Math.random() < 0.5;

    if (fromLeft) {
        bubble.style.left = "-15vw";
        bubble.style.animationName = "Right";
    } else {
        bubble.style.right = "-15vw";
        bubble.style.animationName = "Left";
    }

    container.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => bubble.remove(), speed * 1000 + 500);
}

// Spawn bubble every 250–600ms
setInterval(bubbles, Math.random() * 350 + 250);



