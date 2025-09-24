
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

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
