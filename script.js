
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
// "Hayır" butonunu seç
const noButton = document.getElementById('no-button');

if (noButton) {
    // Tıklama sayacı
    let clickCount = 0;
    const maxClicks = 11; // 11 tıklamadan sonra kaybolacak

    // Butona tıklama eventi ekle
    noButton.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= maxClicks) {
            // Butonu gizle
            noButton.style.display = 'none';
            // İsteğe bağlı uyarı mesajı
            alert("Artık 'Hayır' butonu kayboldu 😉");
        }
    });
}
