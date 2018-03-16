$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016 Q1',
            gasto1: 2666,
            gasto2: null,
            gasto3: 2647
        }, {
            period: '2016 Q2',
            gasto1: 2778,
            gasto2: 2294,
            gasto3: 2441
        }, {
            period: '2016 Q3',
            gasto1: 4912,
            gasto2: 1969,
            gasto3: 2501
        }, {
            period: '2016 Q4',
            gasto1: 3767,
            gasto2: 3597,
            gasto3: 5689
        }, {
            period: '2017 Q1',
            gasto1: 6810,
            gasto2: 1914,
            gasto3: 2293
        }, {
            period: '2017 Q2',
            gasto1: 5670,
            gasto2: 4293,
            gasto3: 1881
        }, {
            period: '2017 Q3',
            gasto1: 4820,
            gasto2: 3795,
            gasto3: 1588
        }, {
            period: '2017 Q4',
            gasto1: 15073,
            gasto2: 5967,
            gasto3: 5175
        }, {
            period: '2018 Q1',
            gasto1: 10687,
            gasto2: 4460,
            gasto3: 2028
        }, {
            period: '2018 Q2',
            gasto1: 8432,
            gasto2: 5713,
            gasto3: 1791
        }],
        xkey: 'period',
        ykeys: ['gasto1', 'gasto2', 'gasto3'],
        labels: ['Gasto 1', 'Gasto 2', 'Gasto 3'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Operación 1",
            value: 12
        }, {
            label: "Operación 2",
            value: 30
        }, {
            label: "Operación 3",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2016',
            a: 50,
            b: 40
        }, {
            y: '2017',
            a: 75,
            b: 65
        }, {
            y: '2018',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
