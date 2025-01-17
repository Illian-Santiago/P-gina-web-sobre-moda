const main = document.querySelector('main');
const btnMain = document.querySelector('#main');
const btnDiseniadores = document.querySelector('#diseniadores');
const btnTendencias = document.querySelector('#tendencias');
const paginas = {
    main:
        `
        <section class="main-page">
            <h2>Bienvenido al mundo de la moda</h2>
            <p>Descubre las últimas tendencias y a los diseñadores más influyentes.</p>
            <button onclick="showPage('tendencias')">Explorar Tendencias</button>
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
        <div>
            <img src="https://via.placeholder.com/300" alt="Diseñador 1">
            <p>Diseñador 1</p>
        </div>

        <div>
            <img src="https://via.placeholder.com/300" alt="Diseñador 2">
            <p>Diseñador 2</p>
        </div>
        `
};

btnMain.addEventListener('click', () => (cambiarPagina('main')));
btnTendencias.addEventListener('click', () => (cambiarPagina('tendencias')));
btnDiseniadores.addEventListener('click', () => (cambiarPagina('diseniadores')));

function cambiarPagina(pagina) {
    if (pagina == null) {
        main.innerHTML = paginas.main;
    } else {
        main.innerHTML = paginas[pagina];
    }
}

cambiarPagina();