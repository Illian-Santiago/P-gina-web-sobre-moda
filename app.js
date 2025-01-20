const app = document.getElementById('app');

const routes = {
  '/': `
  <section class="hero-section">
    <div class="hero-content">
      <h1>Descubre lo último en <span class="highlight">Moda</span></h1>
      <p>Explora las tendencias más destacadas y las colecciones exclusivas para cada temporada. Vive la moda a tu estilo.</p>
      <a href="#/libro" class="cta">Ver libro →</a>
    </div>
  </section>
`,
  '/tendencias': `
<section class="tendencias-section">
<h1>Tendencias</h1>
<ul>
  <li>
    <strong>Moda Inclusiva:</strong>
    <p>La moda está evolucionando para ser más inclusiva, abarcando una amplia gama de tallas, estilos y necesidades.</p>
    <img src="https://a1.elespanol.com/metropoliabierta/2023/05/05/vivir-en-barcelona/761433906_9245563_1706x1280.jpg" alt="Imagen 4">
  </li>
  <li>
    <strong>Moda Sostenible:</strong>
    <p>El uso de materiales reciclados y procesos de producción éticos está ganando popularidad.</p>
    <img src="https://universidades.app/assets/img/blog/la-moda-sustentable-una-tendencia-que-llego-para-quedarse_1.jpg" alt="Imagen 5">
  </li>
  <li>
    <strong>Moda Digital:</strong>
    <p>La moda digital y los avatares virtuales están emergiendo como nuevas formas de expresión personal.</p>
    <img src="https://www.tworeality.com/wp-content/uploads/2024/06/Para-que-sirve-la-realidad-virtual-845x684.png" alt="Imagen 6">
  </li>
</ul>
</section>
`,
  '/libro': `
  <section>
    <div class="iframe-container">
      <iframe src="https://online.fliphtml5.com/chyzd/rezo/" frameborder="0"></iframe>
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

function loadRoute() {
  const hash = window.location.hash || '#/';
  const route = hash.slice(1);
  app.innerHTML = routes[route] || '<h1>Página no encontrada</h1>';
}

window.addEventListener('hashchange', loadRoute);

loadRoute();


function textToSpeech() {
  const text =
    `
        Bienvenido a Moda Moderna, donde encontrarás lo último en moda y tendencias.
        Explora nuestras secciones en la parte de arriba a la derecha: tendencias, un libro donde poder saber un poco más de la moda y si lo necesitas contactar con nosotros.
        En la parte de abajo del todo, en el centro, encontratas algunos enlaces de interes.
        `;
  const utterance = new SpeechSynthesisUtterance(text)
  window.speechSynthesis.speak(utterance);
}