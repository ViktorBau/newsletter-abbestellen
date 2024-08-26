// Liste der Bilder
const images = [
    'bilder/1.jpg',
     'bilder/2.jpg',
    'bilder/3.jpg',
    'bilder/4.jpg',
    // fügen Sie hier Ihre weiteren Bilder hinzu
];

// Zufälliges Bild auswählen
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Bild setzen
function setRandomImage() {
    const randomImage = getRandomImage();
    const imgElement = document.getElementById('randomImage');
    imgElement.src = randomImage;
}

// Wenn das Dokument geladen ist, setze das zufällige Bild
document.addEventListener('DOMContentLoaded', setRandomImage);
