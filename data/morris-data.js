$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2018 T1',
            operacion1: 2666,
            operacion2: null,
            operacion3: 2647
        }, {
            period: '2018 Q2',
            operacion1: 2778,
            operacion2: 2294,
            operacion3: 2441
        }, {
            period: '2018 Q3',
            operacion1: 4912,
            operacion2: 1969,
            operacion3: 2501
        }, {
            period: '2018 Q4',
            operacion1: 3767,
            operacion2: 3597,
            operacion3: 5689
        }, {
            period: '2019 Q1',
            operacion1: 6810,
            operacion2: 1914,
            operacion3: 2293
        }, {
            period: '2019 Q2',
            operacion1: 5670,
            operacion2: 4293,
            operacion3: 1881
        }, {
            period: '2019 Q3',
            operacion1: 4820,
            operacion2: 3795,
            operacion3: 1588
        }, {
            period: '2019 Q4',
            operacion1: 15073,
            operacion2: 5967,
            operacion3: 5175
        }, {
            period: '2020 Q1',
            operacion1: 10687,
            operacion2: 4460,
            operacion3: 2028
        }, {
            period: '2020 Q2',
            operacion1: 8432,
            operacion2: 5713,
            operacion3: 1791
        }],
        xkey: 'period',
        ykeys: ['operacion1', 'operacion2', 'operacion3'],
        labels: ['OP1.2 ', 'OP1.1', 'OP3.1'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2018',
            a: 40,
            b: 20,
            c: 10
        }, {
            y: '2019',
            a: 60,
            b: 40,
            c: 20
        }, {
            y: '2020',
            a: 20,
            b: 80,
            c: 70
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Contratado', 'Ejecutado', 'Justificado'],
        hideHover: 'auto',
        resize: true
    });
    
});
