const main = document.querySelector('main');
const btnMain = document.querySelector('#main');
const btnDiseniadores = document.querySelector('#diseniadores');
const btnTendencias = document.querySelector('#tendencias');
let paginaElegida;
const paginas = {
    main:
        `
<section class="main-page">
    <h2>Bienvenido al mundo de la moda</h2>
    <p>Descubre las últimas tendencias y a los diseñadores más influyentes en el mundo de la moda.</p>
    <div class="presentacion">
        <img src="/imagen_moda.jpeg" alt="Imagen de moda" width="40" height="300">
        <p>La moda es una forma de expresión y creatividad que refleja la personalidad y el estilo de cada individuo. En este sitio, te presentamos las últimas tendencias y a los diseñadores más influyentes en la industria.</p>
    </div>
    <div class="destacados">
        <h3>Destacados de la semana</h3>
        <ul>
            <li><a href="#">Tendencia de la semana: Colores vibrantes</a></li>
            <li><a href="#">Diseñador del mes: Juan Pérez</a></li>
            <li><a href="#">Evento de moda: Semana de la moda en Nueva York</a></li>
        </ul>
    </div>
    <button onclick="cambiarPagina('tendencias')">Explorar Tendencias</button>
</section>
        `,
    tendencias:
        `
            <div class="tendencia">Tendencia 1: Colores vibrantes</div>
            <div class="tendencia">Tendencia 2: Estilo retro</div>
            <div class="tendencia">Tendencia 3: Minimalismo</div>
        `,
    diseniadores:
        `
        <iframe src="https://online.fliphtml5.com/chyzd/qwjm/" frameborder="0"></iframe>
        `
};

btnMain.addEventListener('click', () => (cambiarPagina('main')));
btnTendencias.addEventListener('click', () => (cambiarPagina('tendencias')));
btnDiseniadores.addEventListener('click', () => (cambiarPagina('diseniadores')));

function cambiarPagina(pagina) {
    paginaElegida = pagina;
    main.innerHTML = paginas[pagina];

    if (paginaElegida == null) {
        main.innerHTML = paginas.main;
    }
}

cambiarPagina();