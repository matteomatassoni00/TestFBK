var chart = c3.generate({
    bindto: '#StackedArea',
    data: {
        x: 'x',
        url: 'https://raw.githubusercontent.com/matteomatassoni00/TestFBK/main/data/test-c3.json',

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