import { Component, OnInit, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-grafico-demo2',
  templateUrl: './grafico-demo2.component.html',
  styleUrls: ['./grafico-demo2.component.css']
})
export class GraficoDemo2Component implements OnInit {
  @Input() idDiv = 'grf';
  @Input() datosGrafica: any;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.crearGrafica();
    }, 1000);
  }
  crearGrafica() {
    /* Create chart instance */
    const chart = am4core.create(this.idDiv, am4charts.RadarChart);

    /* Add data */
    chart.data = this.datosGrafica;

    /* Create axes */
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererCircular>());
    categoryAxis.dataFields.category = 'country';

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererRadial>());
    valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
    valueAxis.renderer.axisFills.template.fillOpacity = 0.05;

    /* Create and configure series */
    const series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = 'litres';
    series.dataFields.categoryX = 'country';
    series.name = 'Sales';
    series.strokeWidth = 3;
    }
}
