// Contenedor donde se cargará el contenido dinámico
const app = document.getElementById('app');

// HTML de cada página como plantilla
const routes = {
    '/': `
    <section class="hero-section">
      <div class="hero-content">
        <h1>Descubre lo último en <span class="highlight">Moda</span></h1>
        <p>Explora las tendencias más destacadas y las colecciones exclusivas para cada temporada. Vive la moda a tu estilo.</p>
        <a href="#/colecciones" class="cta">Ver colecciones →</a>
      </div>
      <div class="social-icons">
        <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
        <a href="#"><img src="pinterest-icon.png" alt="Pinterest"></a>
      </div>
    </section>
  `,
    '/tendencias': `
    <section class="tendencias-section">
      <h1>Tendencias</h1>
      <p>Descubre las tendencias de moda más populares este año, desde estilos minimalistas hasta estampados vibrantes.</p>
      <img src="images/tendencias.jpg" alt="Tendencias" class="responsive-img">
    </section>
  `,
    '/colecciones': `
    <section class="colecciones-section">
      <h1>Colecciones Exclusivas</h1>
      <p>Explora nuestras colecciones para cada temporada. Diseños únicos y estilos modernos.</p>
      <div class="collection-grid">
        <div class="collection-item"><img src="images/verano.jpg" alt="Verano"></div>
        <div class="collection-item"><img src="images/invierno.jpg" alt="Invierno"></div>
        <div class="collection-item"><img src="images/otoño.jpg" alt="Otoño"></div>
        <div class="collection-item"><img src="images/primavera.jpg" alt="Primavera"></div>
      </div>
    </section>
  `,
    '/contacto': `
    <section class="contacto-section">
      <h1>Contacto</h1>
      <p>¿Tienes preguntas o comentarios? Escríbenos.</p>
      <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `
};

// Función para cargar la ruta según el hash
function loadRoute() {
    const hash = window.location.hash || '#/';
    const route = hash.slice(1);
    app.innerHTML = routes[route] || '<h1>Página no encontrada</h1>';
}

// Escuchar cambios en el hash de la URL
window.addEventListener('hashchange', loadRoute);

// Cargar la ruta inicial al cargar la página
loadRoute();
