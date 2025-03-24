document.addEventListener('DOMContentLoaded', function() {
    const textAbove = document.getElementById('textAbove');
    const textBelow = document.getElementById('textBelow');
    const button = document.getElementById('tossButton');

    // Fade in textAbove and textBelow sequentially
    setTimeout(() => {
        textAbove1.style.opacity = '1';
    }, 200);

    setTimeout(() => {
        textAbove2.style.opacity = '1';
    }, 600);

    setTimeout(() => {
        textBelow1.style.opacity = '1';
    }, 1000);

    setTimeout(() => {
        textBelow2.style.opacity = '1';
    }, 1200);
    setTimeout(() => {
        button.style.opacity = '1';
    }, 1700);
});

document.getElementById('tossButton').addEventListener('click', function() {
    const button = document.getElementById('tossButton');
    const coin = document.getElementById('coin');
    const picture = document.getElementById('picture');
    const textAbove1 = document.getElementById('textAbove1');
    const textAbove2 = document.getElementById('textAbove2');
    const textBelow1 = document.getElementById('textBelow1');
    const textBelow2 = document.getElementById('textBelow2');

    // Fade out the button
    button.style.opacity = '0';
    textAbove1.style.opacity = '0';
    textBelow2.style.opacity = '0';
    textBelow1.style.opacity = '0';
    textAbove2.style.opacity = '0';
    
    // Reset coin position and styles
    coin.style.bottom = '-100px';
    coin.style.left = '50%';
    coin.style.transform = 'translateX(-50%) rotateX(0deg) scale(1)';
    coin.style.opacity = '1';

    // Enlarge the picture
    picture.style.transform = 'scale(1.2)';

    // Trigger reflow to restart animation
    void coin.offsetWidth;

    // Animate coin toss
    setTimeout(() => {
        coin.style.bottom = 'calc(50% + 50px)'; // Coin rises up
        coin.style.left = '50%'; // Center horizontally
        coin.style.transform = 'translateX(-50%) rotateX(1080deg) scale(0.4)'; // Spin and scale down
    }, 0);

    // Coin falls into the "well" and disappears
    setTimeout(() => {
        coin.style.bottom = 'calc(50% - 95px)'; // Coin drops to middle
        coin.style.transform = 'translateX(-50%) rotateX(1440deg) scale(0.2)'; // Continue spinning and scaling down
        coin.style.opacity = '0'; // Disappear
    }, 900);

    // **Fade out the picture before navigating**
    setTimeout(() => {
        picture.style.opacity = '0'; // Picture fades out
        picture.style.transition = 'opacity 0.2s ease-in-out'; // Smooth fade-out
    }, 1500);

    // Navigate to another page after the animation is complete
    setTimeout(() => {
        
        window.location.href = 'new-page.html'; // Change to your desired URL
    }, 1700); // Adjusted to match the total animation duration
});
