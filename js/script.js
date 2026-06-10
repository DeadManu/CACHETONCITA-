// Script para cargar las fotografías y generar estrellas en el fondo.
// Define las rutas relativas de las imágenes dentro de la carpeta assets/fotos.
const photos = [
  'assets/fotos/img01.jpg',
  'assets/fotos/img02.jpg',
  'assets/fotos/img03.jpg',
  'assets/fotos/img04.jpg',
  'assets/fotos/img05.jpg',
  'assets/fotos/img06.jpg',
  'assets/fotos/img07.jpg',
  'assets/fotos/img08.jpg',
  'assets/fotos/img09.jpg',
  'assets/fotos/img10.jpg',
  'assets/fotos/img11.jpg',
  'assets/fotos/img12.jpg',
  'assets/fotos/img13.jpg',
  'assets/fotos/img14.jpg',
  'assets/fotos/img15.jpg'
];

// Genera las secciones de diapositivas y coloca cada fotografía.
const slidesContainer = document.getElementById('slides');
photos.forEach((src, index) => {
  const section = document.createElement('section');
  section.className = 'slide';
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Recuerdo ${index + 1}`;
  section.appendChild(img);
  slidesContainer.appendChild(section);
});

// Elemento contenedor de estrellas para crear un cielo en movimiento.
const starContainer = document.getElementById('star-container');

// Función que crea una estrella en una posición aleatoria y con una duración de parpadeo distinta.
function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  // Duración de la animación entre 3 y 6 segundos
  const duration = 3 + Math.random() * 3;
  star.style.animationDuration = `${duration}s`;
  starContainer.appendChild(star);
  // Eliminamos la estrella tras completarse su animación para evitar saturar el DOM
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

// Generamos un lote inicial de estrellas al cargar la página.
for (let i = 0; i < 120; i++) {
  createStar();
}

// Seguimos generando estrellas de manera periódica.
setInterval(() => {
  createStar();
}, 500);

// ---------- Control de la música de fondo ----------
// Obtenemos el botón y el elemento de audio del DOM
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

if (musicToggle && bgMusic) {
  // Cambia el estado de reproducción cuando se hace clic en el botón
  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = '❚❚ Pausar audio';
    } else {
      bgMusic.pause();
      musicToggle.textContent = '♪ Escuchar audio';
    }
  });
}