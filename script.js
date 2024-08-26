// Liste der Bilder
const images = [
    'bilder/1.jpeg',
     'bilder/2.jpeg',
    'bilder/3.jpeg',
    'bilder/4.jpeg',
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
