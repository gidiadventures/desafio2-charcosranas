var config = {
     style: 'mapbox://styles/gidi34/cmkpt4ucd003r01sd4aa3fh0x',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZ2lkaTM0IiwiYSI6ImNta28wcGxiZTAxYmszY3M5aW8yYW10b3QifQ.MssDR_E9kCev2XpHWlT5Cg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Charcos de Ranas',
    subtitle: 'El camibo de los Charcos de agua dulce en Tenerife con ranas.',
    byline: 'Gideon Shinaar',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Charco de Lomo',
            image: './assets/charco 1.jfif',
            description: 'El charco mas grande de tenerife con 5 diferentes especies de ranas y con un tamaño de 5 metros.',
            location: {
                center: [-16.364459075417848, 28.51002738477748],
                zoom: 10.41,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Charco de las Canteras.',
            image: './assets/charco 2.jpg',
            description: 'El Charco de las Canteras ha sufrido un disminución importante por la sequia de 2020',
            location: {
                center: [-16.23025006427331, 28.50903301470274],
                zoom: 10.41,
                pitch: 73,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Charco Verde',
            image: './assets/charco 3.jfif',
            description: 'Charco Verde quedó con solo 3 ranas en 2025',
            location: {
                center: [-16.270141497072427, 28.510143474834067],
                zoom: 10.41,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Charco Santo',
            image: './assets/charco 4.jfif',
            description: 'Las Ranas han volviendo tras 18 años sin estar, gracias a los vecinos que han iliminando los gatos salvajes en el barrio',
            location: {
                center: [-16.308115304674324, 28.563533399015988],
                zoom: 10.41,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
