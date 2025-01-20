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
  <ul>
    <li>
      <strong>Transformación Digital:</strong>
      <p>La integración de tecnologías avanzadas como la inteligencia artificial, el aprendizaje automático y la automatización está revolucionando la manera en que las empresas operan.</p>
      <img src="imagen1.jpg" alt="Imagen 1">
    </li>
    <li>
      <strong>Sostenibilidad como Prioridad:</strong>
      <p>Los consumidores y empresas están adoptando prácticas sostenibles, desde productos ecológicos hasta procesos que reducen la huella de carbono.</p>
      <img src="imagen2.jpg" alt="Imagen 2">
    </li>
    <li>
      <strong>Enfoque en la Experiencia del Usuario (UX):</strong>
      <p>Brindar experiencias personalizadas, intuitivas y fluidas es el centro de atención.</p>
      <img src="imagen3.jpg" alt="Imagen 3">
    </li>
  </ul>
</section>

  `,
    '/libro': `
    <section class="colecciones-section">
    <section class="colecciones-section">
  <div class="iframe-container">
    <iframe src="https://online.fliphtml5.com/chyzd/rezo/" frameborder="0"></iframe>
  </div>
</section>
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