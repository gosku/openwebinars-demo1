(function(window, document) {

        // {Object} - Rutas y descripción de las imágenes.
    var config,

        // {NodeList} - Almacena los nodos celda de la cuadrícula.
        cells,

        // {Array} - Almacena la pareja actualmente seleccionada. Cada
        //           elemento se representa con un objeto literal con
        //           tres propiedades: El nodo "celda", el nodo "imagen",
        //           y el nombre de la imagen.
        couple = [],

        // {Boolean} - Bandera de bloqueo para evitar que se seleccionen más de
        //             dos imágenes al mismo tiempo.
        locked = false,

        // {number} numero de nodos
        ncells
        ;


    config = {
        themesPath: 'img/shapes/',
        currentTheme: 'superheroes',
        themes: {
            superheroes: {
                dirpath: 'superheroes/',
                suffix: 'sph',
                ext: '.jpg'
            }
        }
    };


    // TODO: Usar algún metodo del DOM para obtener todas celdas de la cuadrícula.

    cells = document.querySelectorAll('.grid-cell');

    // TODO: Añadir manejadores del evento 'click' a todas las celdas.



    // TODO: Llamada a la función principal `setImages()`.




    //---------------------------- Funciones -----------------------------------

    /**
     * Crea imágenes y las añade a las celdas.
     * @param {Object} config - rutas y descripción de las imágenes.
     * @param {NodeList} cells - Las celdas de la cuadrícula.
     */
    function setImages(config, cells) {
        var size = cells.length,
            half = size / 2,
            set1 = createRandomSet(half),
            set2 = createRandomSet(half),
            img1,
            img2,
            i;

        for (i = 0; i < size; i += 2) {
            // TODO: Crear todas las imágenes y añadirlas a las celdas de
            // la cuadrícula. Las imágenes se van añadiendo de dos en dos,
            // configurando la ruta de cada imagen a partir de los conjuntos de
            // números aleatorios `set1` y `set2`.
        }
    }

    /**
     * Crea ruta de una imagen.
     * @param {Object} config - rutas y descripción de las imágenes.
     * @param {Number} n - el número identificador de la imagen.
     */
    function createImgPath(config, n) {
        var currentTheme, themes;

        themes = config.themes;
        currentTheme = config.currentTheme;

        return config.themesPath +
                themes[currentTheme].dirpath +
                themes[currentTheme].suffix +
                n + themes[currentTheme].ext;
    }

    /**
     * Crea un array con números aleatorios no repetidos empezando por 1.
     * @param {Number} size - el tamaño del array.
     */
    function createRandomSet(size) {
        var xs, i, j, k;

        for (i = 1, xs = []; i <= size; i++) {
            xs[i - 1] = i;
        }

        i = size;
        while (i > 1) {
            i--;
            j = Math.random() * i | 0;
            k = xs[i];
            xs[i] = xs[j];
            xs[j] = k;
        }

        return xs;
    }

    /**
     * Manejador del evento 'click'.
     */
    function clickHandler() {
        var self = this,
            img,
            imgName,
            item1,
            item2;

        if (/* TODO: Comprobar si está levantada la bandera de bloqueo. */) {

            // TODO:
            // - Eliminar el manejador del evento en la celda actual (para evitar más clicks).
            // - Obtener el nodo imagen de la celda, mostrar la imagen y
            //   almacenar un nuevo objeto al array `couple`.


            if (/* TODO: Comprobar si en el array ya tenemos una pareja */) {

                // TODO: Levantar la bandera de bloqueo y extraer la pareja.

                if (/* TODO: Comprobar si tenemos una pareja válida */) {

                    // Bajar de nuevo la bandera de bloqueo.

                } else {

                    // Crear un temporizador de 2 segundos para ocultar de nuevo
                    // ambas imágenes, añadir de nuevo los manejadores del evento
                    // 'click' de sus celdas y bajar de nuevo la bandera de bloqueo.

                }

            }
        }
    }

}(window, document));
