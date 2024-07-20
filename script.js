document.getElementById('play-button').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = 'Kim Yến Ngu';
    message.style.display = 'block';

    const emojiContainer = document.getElementById('emoji-container');
    const emojiCount = 30; // Number of emojis to generate
    for (let i = 0; i < emojiCount; i++) {
        createFallingEmoji(emojiContainer);
    }
});

function createFallingEmoji(container) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = '💩';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 3 + 2 + 's'; // Vary the falling speed
    container.appendChild(emoji);

    // Remove the emoji after animation to avoid cluttering the DOM
    setTimeout(() => {
        emoji.remove();
    }, 5000);
}
