var chart = c3.generate({
    bindto: '#StackedArea',
    data: {
        x: 'x',
        columns: [
            ['x', 1890,1891,1892,1893,1894,1895],
            ['America', 300, 350, 300, 0, 0, 120],
            ['Austria', 130, 100, 140, 200, 150, 50],
            ['Germania', 180, 10, 150, 220, 150, 50]
        ],

        types: {
            America: 'area-spline',
            Austria: 'area-spline',
            Germania: 'area-spline',
            // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
        },

      //  groups: [['America'],[ 'Austria', 'Germania']] // QUESTO SERVE SE SI VUOLE STACKED BAR CHART
    },

    /*                  ORA LO ZOOM DA PROBLEMI PERCHE TROPPI POCHI DATI VALUTARE POI SE LASCIARLO
     zoom: {
        enabled: true       
    } */
});