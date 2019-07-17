import { Component, OnInit, NgZone  } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-grafico-mensual',
  templateUrl: './grafico-mensual.component.html',
  styleUrls: ['./grafico-mensual.component.css']
})
export class GraficoMensualComponent implements OnInit {
  // private chart: am4charts.XYChart;
  constructor(private zone: NgZone) { }

  ngOnInit() {
    setTimeout(() => {
      this.crearGrafica();
    }, 1000);
  }


  crearGraficaLineas() {
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    chart.colors.step = 2;
    chart.maskBullets = false;

    // Add data
    chart.data = [{
        date: '2012-01-01',
        distance: 227,
        townName: 'New York',
        townName2: 'New York',
        townSize: 12,
        latitude: 40.71,
        duration: 408
    }, {
        date: '2012-01-02',
        distance: 371,
        townName: 'Washington',
        townSize: 7,
        latitude: 38.89,
        duration: 482
    }, {
        date: '2012-01-03',
        distance: 433,
        townName: 'Wilmington',
        townSize: 3,
        latitude: 34.22,
        duration: 562
    }, {
        date: '2012-01-04',
        distance: 345,
        townName: 'Jacksonville',
        townSize: 3.5,
        latitude: 30.35,
        duration: 379
    }, {
        date: '2012-01-05',
        distance: 480,
        townName: 'Miami',
        townName2: 'Miami',
        townSize: 5,
        latitude: 25.83,
        duration: 501
    }, {
        date: '2012-01-06',
        distance: 386,
        townName: 'Tallahassee',
        townSize: 3.5,
        latitude: 30.46,
        duration: 443
    }, {
        date: '2012-01-07',
        distance: 348,
        townName: 'New Orleans',
        townSize: 5,
        latitude: 29.94,
        duration: 405
    }, {
        date: '2012-01-08',
        distance: 238,
        townName: 'Houston',
        townName2: 'Houston',
        townSize: 8,
        latitude: 29.76,
        duration: 309
    }, {
        date: '2012-01-09',
        distance: 218,
        townName: 'Dalas',
        townSize: 8,
        latitude: 32.8,
        duration: 287
    }, {
        date: '2012-01-10',
        distance: 349,
        townName: 'Oklahoma City',
        townSize: 5,
        latitude: 35.49,
        duration: 485
    }, {
        date: '2012-01-11',
        distance: 603,
        townName: 'Kansas City',
        townSize: 5,
        latitude: 39.1,
        duration: 890
    }, {
        date: '2012-01-12',
        distance: 534,
        townName: 'Denver',
        townName2: 'Denver',
        townSize: 9,
        latitude: 39.74,
        duration: 810
    }, {
        date: '2012-01-13',
        townName: 'Salt Lake City',
        townSize: 6,
        distance: 425,
        duration: 670,
        latitude: 40.75,
        dashLength: 8,
        alpha: 0.4
    }, {
        date: '2012-01-14',
        latitude: 36.1,
        duration: 470,
        townName: 'Las Vegas',
        townName2: 'Las Vegas'
    }, {
        date: '2012-01-15'
    }, {
        date: '2012-01-16'
    }, {
        date: '2012-01-17'
    }];

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.fullWidthTooltip = true;

    const distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
    distanceAxis.title.text = 'Distance';
    distanceAxis.renderer.grid.template.disabled = true;

    const durationAxis = chart.yAxes.push(new am4charts.DurationAxis());
    durationAxis.title.text = 'Duration';
    durationAxis.baseUnit = 'minute';
    durationAxis.renderer.grid.template.disabled = true;
    durationAxis.renderer.opposite = true;

    durationAxis.durationFormatter.durationFormat = `hh'h' mm'min'`;

    const latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis.renderer.grid.template.disabled = true;
    latitudeAxis.renderer.labels.template.disabled = true;

    // Create series
    const distanceSeries = chart.series.push(new am4charts.ColumnSeries());
    distanceSeries.dataFields.valueY = 'distance';
    distanceSeries.dataFields.dateX = 'date';
    distanceSeries.yAxis = distanceAxis;
    distanceSeries.tooltipText = '{valueY} miles';
    distanceSeries.name = 'Distance';
    distanceSeries.columns.template.fillOpacity = 0.7;
    distanceSeries.columns.template.propertyFields.strokeDasharray = 'dashLength';
    distanceSeries.columns.template.propertyFields.fillOpacity = 'alpha';

    const disatnceState = distanceSeries.columns.template.states.create('hover');
    disatnceState.properties.fillOpacity = 0.9;

    const durationSeries = chart.series.push(new am4charts.LineSeries());
    durationSeries.dataFields.valueY = 'duration';
    durationSeries.dataFields.dateX = 'date';
    durationSeries.yAxis = durationAxis;
    durationSeries.name = 'Duration';
    durationSeries.strokeWidth = 2;
    durationSeries.propertyFields.strokeDasharray = 'dashLength';
    durationSeries.tooltipText = '{valueY.formatDuration()}';

    const durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
    const durationRectangle = durationBullet.createChild(am4core.Rectangle);
    durationBullet.horizontalCenter = 'middle';
    durationBullet.verticalCenter = 'middle';
    durationBullet.width = 7;
    durationBullet.height = 7;
    durationRectangle.width = 7;
    durationRectangle.height = 7;

    const durationState = durationBullet.states.create('hover');
    durationState.properties.scale = 1.2;

    const latitudeSeries = chart.series.push(new am4charts.LineSeries());
    latitudeSeries.dataFields.valueY = 'latitude';
    latitudeSeries.dataFields.dateX = 'date';
    latitudeSeries.yAxis = latitudeAxis;
    latitudeSeries.name = 'Duration';
    latitudeSeries.strokeWidth = 2;
    latitudeSeries.propertyFields.strokeDasharray = 'dashLength';
    latitudeSeries.tooltipText = 'Latitude: {valueY} ({townName})';

    const latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
    latitudeBullet.circle.fill = am4core.color('#fff');
    latitudeBullet.circle.strokeWidth = 2;
    latitudeBullet.circle.propertyFields.radius = 'townSize';

    const latitudeState = latitudeBullet.states.create('hover');
    latitudeState.properties.scale = 1.2;

    const latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
    latitudeLabel.label.text = '{townName2}';
    latitudeLabel.label.horizontalCenter = 'left';
    latitudeLabel.label.dx = 14;

    // Add legend
    chart.legend = new am4charts.Legend();

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineX.fill = am4core.color('#000');
    chart.cursor.lineX.fillOpacity = 0.1;
  }
  crearGrafica() {

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    // Modify chart's colors
    chart.colors.list = [
        am4core.color('#fd9a00'),
        am4core.color('#D65DB1'),
        am4core.color('#FF6F91'),
        am4core.color('#FF9671'),
        am4core.color('#FFC75F'),
        am4core.color('#F9F871'),
    ];

    // Add data
    chart.data = this.generateChartData();

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.dateX = 'date';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = '{valueY}';
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12);

    // Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;



  }
  generateChartData() {
    const chartData = [];
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 1000);
    let visits = 1200;
    for (let i = 0; i < 500; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        const newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
            date: newDate,
            visits
        });
    }
    return chartData;
  }
}
