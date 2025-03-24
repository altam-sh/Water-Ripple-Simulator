const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ripples = [];

function createRipple() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ripples.push({ x, y, radius: 0, opacity: 0.5 });
}

function animateRipples() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ripple.radius += 0.5;
        ripple.opacity -= 0.005;
        if (ripple.opacity <= 0) ripples.splice(i, 1);
    }
    requestAnimationFrame(animateRipples);
}

setInterval(createRipple, 1000);
animateRipples();

const rippleCanvas = document.getElementById('ripple-canvas');
const rippleCtx = rippleCanvas.getContext('2d');

const rainCanvas = document.getElementById('rain-canvas');
const rainCtx = rainCanvas.getContext('2d');

rippleCanvas.width = window.innerWidth;
rippleCanvas.height = window.innerHeight;
rainCanvas.width = window.innerWidth;
rainCanvas.height = window.innerHeight;

const raindrops = [];

function createRaindrop() {
    return {
        x: Math.random() * rainCanvas.width,
        y: Math.random() * rainCanvas.height * -1, // Start above screen
        speed: Math.random() * 10 + 10, // Faster drops (was 2-4, now 10-20)
        length: Math.random() * 10 + 10 // Line length (10 to 20 px)
    };
}

function updateRain() {
    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    rainCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; 
    rainCtx.lineWidth = 1.5;

    for (let drop of raindrops) {
        drop.y += drop.speed;

        // Draw the raindrop as a line
        rainCtx.beginPath();
        rainCtx.moveTo(drop.x, drop.y);
        rainCtx.lineTo(drop.x, drop.y + drop.length);
        rainCtx.stroke();

        // If raindrop reaches the bottom, reset it
        if (drop.y > rainCanvas.height) {
            drop.y = -10;
            drop.x = Math.random() * rainCanvas.width;
        }
    }

    requestAnimationFrame(updateRain);
}

// Create a bunch of raindrops
for (let i = 0; i < 100; i++) {
    raindrops.push(createRaindrop());
}

updateRain();
