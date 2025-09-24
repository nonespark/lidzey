const noButton = document.getElementById('no-button');
const yesButton = document.querySelector('.yes-button');

let messageIndex = 0;
let clickCount = 0;
const maxClicks = 11;

const messages = [
    "Emin misin?",
    "Ya ama lütfen??",
    "Gerçekten emin misin?",
    "Lütfen ya...",
    "Bir daha düşün!",
    "Ama çok üzülürüm...",
    "Gerçekten çok üzülürüm...",
    "Çok çok çok üzülürüm...",
    "Tamam artık sormayacağım...",
    "O hayır tuşuna bir daha sakın basma."
];

if (noButton) {
    noButton.addEventListener('click', () => {
        // Mesajı değiştir
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        // Yes butonunu büyüt
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;

        // Tıklama sayacı
        clickCount++;
        if (clickCount >= maxClicks) {
            noButton.style.display = 'none';
        }
    });
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
