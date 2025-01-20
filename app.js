const app = document.getElementById('app');

const routes = {
    '/': `
    <section class="hero-section">
      <div class="hero-content">
        <h1>Descubre lo último en <span class="highlight">Moda</span></h1>
        <p>Explora las tendencias más destacadas y las colecciones exclusivas para cada temporada. Vive la moda a tu estilo.</p>
        <a href="#/colecciones" class="cta">Ver colecciones →</a>
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
    '/libro': `
    <section class="colecciones-section">
    <iframe src="https://online.fliphtml5.com/chyzd/rezo/" frameborder="0"></iframe>
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

function loadRoute() {
    const hash = window.location.hash || '#/';
    const route = hash.slice(1);
    app.innerHTML = routes[route] || '<h1>Página no encontrada</h1>';
}

window.addEventListener('hashchange', loadRoute);

loadRoute();
