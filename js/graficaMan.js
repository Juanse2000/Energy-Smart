new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'GraficaI1',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
    { period: '2020-01', value: 6, man: 0 },
    { period: '2020-02', value: 5, man: 1 },
    { period: '2020-03', value: 4, man: 2 },
    { period: '2020-04', value: 6, man: 0 },
    { period: '2020-05', value: 3, man: 3 },
    { period: '2020-06', value: 5, man: 1 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'period',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value', 'man'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Prevencion', 'Mantenimiento'],
    resize: true,
    lineColors: ['#4CFF33', '#FF5733']
});