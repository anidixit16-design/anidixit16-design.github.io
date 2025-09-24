document.addEventListener("DOMContentLoaded", function() {
    // This message will "type" on the screen.
    const textToType = "Happy Birthday, My Nidhi! September 20, 2025";
    // ----------------------

    const typingElement = document.getElementById('typewriter-text');
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100); // 100 milliseconds speed
        }
    }

    typeEffect();
});