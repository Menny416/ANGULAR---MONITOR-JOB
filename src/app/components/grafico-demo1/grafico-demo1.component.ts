import { Component, OnInit, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-grafico-demo1',
  templateUrl: './grafico-demo1.component.html',
  styleUrls: ['./grafico-demo1.component.css']
})
export class GraficoDemo1Component implements OnInit {
  
  @Input() idDiv = 'grf';

  // Animate chart data
  currentYear = 1995;

  chartData = {
    1995: [
      { sector: 'Agriculture', size: 6.6 },
      { sector: 'Mining and Quarrying', size: 0.6 },
      { sector: 'Manufacturing', size: 23.2 },
      { sector: 'Electricity and Water', size: 2.2 },
      { sector: 'Construction', size: 4.5 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.6 },
      { sector: 'Transport and Communication', size: 9.3 },
      { sector: 'Finance, real estate and business services', size: 22.5 } ],
    1996: [
      { sector: 'Agriculture', size: 6.4 },
      { sector: 'Mining and Quarrying', size: 0.5 },
      { sector: 'Manufacturing', size: 22.4 },
      { sector: 'Electricity and Water', size: 2 },
      { sector: 'Construction', size: 4.2 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.8 },
      { sector: 'Transport and Communication', size: 9.7 },
      { sector: 'Finance, real estate and business services', size: 22 } ],
    1997: [
      { sector: 'Agriculture', size: 6.1 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 20.9 },
      { sector: 'Electricity and Water', size: 1.8 },
      { sector: 'Construction', size: 4.2 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 13.7 },
      { sector: 'Transport and Communication', size: 9.4 },
      { sector: 'Finance, real estate and business services', size: 22.1 } ],
    1998: [
      { sector: 'Agriculture', size: 6.2 },
      { sector: 'Mining and Quarrying', size: 0.3 },
      { sector: 'Manufacturing', size: 21.4 },
      { sector: 'Electricity and Water', size: 1.9 },
      { sector: 'Construction', size: 4.2 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.5 },
      { sector: 'Transport and Communication', size: 10.6 },
      { sector: 'Finance, real estate and business services', size: 23 } ],
    1999: [
      { sector: 'Agriculture', size: 5.7 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 20 },
      { sector: 'Electricity and Water', size: 1.8 },
      { sector: 'Construction', size: 4.4 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.2 },
      { sector: 'Transport and Communication', size: 10.5 },
      { sector: 'Finance, real estate and business services', size: 24.7 } ],
    2000: [
      { sector: 'Agriculture', size: 5.1 },
      { sector: 'Mining and Quarrying', size: 0.3 },
      { sector: 'Manufacturing', size: 20.4 },
      { sector: 'Electricity and Water', size: 1.7 },
      { sector: 'Construction', size: 4 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.3 },
      { sector: 'Transport and Communication', size: 10.7 },
      { sector: 'Finance, real estate and business services', size: 24.6 } ],
    2001: [
      { sector: 'Agriculture', size: 5.5 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 20.3 },
      { sector: 'Electricity and Water', size: 1.6 },
      { sector: 'Construction', size: 3.1 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.3 },
      { sector: 'Transport and Communication', size: 10.7 },
      { sector: 'Finance, real estate and business services', size: 25.8 } ],
    2002: [
      { sector: 'Agriculture', size: 5.7 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 20.5 },
      { sector: 'Electricity and Water', size: 1.6 },
      { sector: 'Construction', size: 3.6 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.1 },
      { sector: 'Transport and Communication', size: 10.7 },
      { sector: 'Finance, real estate and business services', size: 26 } ],
    2003: [
      { sector: 'Agriculture', size: 4.9 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 19.4 },
      { sector: 'Electricity and Water', size: 1.5 },
      { sector: 'Construction', size: 3.3 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.2 },
      { sector: 'Transport and Communication', size: 11 },
      { sector: 'Finance, real estate and business services', size: 27.5 } ],
    2004: [
      { sector: 'Agriculture', size: 4.7 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 18.4 },
      { sector: 'Electricity and Water', size: 1.4 },
      { sector: 'Construction', size: 3.3 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.9 },
      { sector: 'Transport and Communication', size: 10.6 },
      { sector: 'Finance, real estate and business services', size: 28.1 } ],
    2005: [
      { sector: 'Agriculture', size: 4.3 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 18.1 },
      { sector: 'Electricity and Water', size: 1.4 },
      { sector: 'Construction', size: 3.9 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.7 },
      { sector: 'Transport and Communication', size: 10.6 },
      { sector: 'Finance, real estate and business services', size: 29.1 } ],
    2006: [
      { sector: 'Agriculture', size: 4 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 16.5 },
      { sector: 'Electricity and Water', size: 1.3 },
      { sector: 'Construction', size: 3.7 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.2 },
      { sector: 'Transport and Communication', size: 12.1 },
      { sector: 'Finance, real estate and business services', size: 29.1 } ],
    2007: [
      { sector: 'Agriculture', size: 4.7 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 16.2 },
      { sector: 'Electricity and Water', size: 1.2 },
      { sector: 'Construction', size: 4.1 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.6 },
      { sector: 'Transport and Communication', size: 11.2 },
      { sector: 'Finance, real estate and business services', size: 30.4 } ],
    2008: [
      { sector: 'Agriculture', size: 4.9 },
      { sector: 'Mining and Quarrying', size: 0.3 },
      { sector: 'Manufacturing', size: 17.2 },
      { sector: 'Electricity and Water', size: 1.4 },
      { sector: 'Construction', size: 5.1 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.4 },
      { sector: 'Transport and Communication', size: 11.1 },
      { sector: 'Finance, real estate and business services', size: 28.4 } ],
    2009: [
      { sector: 'Agriculture', size: 4.7 },
      { sector: 'Mining and Quarrying', size: 0.3 },
      { sector: 'Manufacturing', size: 16.4 },
      { sector: 'Electricity and Water', size: 1.9 },
      { sector: 'Construction', size: 4.9 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.5 },
      { sector: 'Transport and Communication', size: 10.9 },
      { sector: 'Finance, real estate and business services', size: 27.9 } ],
    2010: [
      { sector: 'Agriculture', size: 4.2 },
      { sector: 'Mining and Quarrying', size: 0.3 },
      { sector: 'Manufacturing', size: 16.2 },
      { sector: 'Electricity and Water', size: 2.2 },
      { sector: 'Construction', size: 4.3 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.7 },
      { sector: 'Transport and Communication', size: 10.2 },
      { sector: 'Finance, real estate and business services', size: 28.8 } ],
    2011: [
      { sector: 'Agriculture', size: 4.1 },
      { sector: 'Mining and Quarrying', size: 0.3 },
      { sector: 'Manufacturing', size: 14.9 },
      { sector: 'Electricity and Water', size: 2.3 },
      { sector: 'Construction', size: 5 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 17.3 },
      { sector: 'Transport and Communication', size: 10.2 },
      { sector: 'Finance, real estate and business services', size: 27.2 } ],
    2012: [
      { sector: 'Agriculture', size: 3.8 },
      { sector: 'Mining and Quarrying', size: 0.3 },
      { sector: 'Manufacturing', size: 14.9 },
      { sector: 'Electricity and Water', size: 2.6 },
      { sector: 'Construction', size: 5.1 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.8 },
      { sector: 'Transport and Communication', size: 10.7 },
      { sector: 'Finance, real estate and business services', size: 28 } ],
    2013: [
      { sector: 'Agriculture', size: 3.7 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 14.9 },
      { sector: 'Electricity and Water', size: 2.7 },
      { sector: 'Construction', size: 5.7 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.5 },
      { sector: 'Transport and Communication', size: 10.5 },
      { sector: 'Finance, real estate and business services', size: 26.6 } ],
    2014: [
      { sector: 'Agriculture', size: 3.9 },
      { sector: 'Mining and Quarrying', size: 0.2 },
      { sector: 'Manufacturing', size: 14.5 },
      { sector: 'Electricity and Water', size: 2.7 },
      { sector: 'Construction', size: 5.6 },
      { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.6 },
      { sector: 'Transport and Communication', size: 10.5 },
      { sector: 'Finance, real estate and business services', size: 26.5 } ]
  };

  constructor() {

   }

  ngOnInit() {
    setTimeout(() => {
      this.crearGrafica();
    }, 1000);
  }

  crearGrafica() {
    // Create chart instance
    let chart1 = am4core.create(this.idDiv, am4charts.PieChart);
    let label1 = chart1.seriesContainer.createChild(am4core.Label);
      // Add data
    chart1.data = [
        { sector: 'Agriculture', size: 6.6 },
        { sector: 'Mining and Quarrying', size: 0.6 },
        { sector: 'Manufacturing', size: 23.2 },
        { sector: 'Electricity and Water', size: 2.2 },
        { sector: 'Construction', size: 4.5 },
        { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.6 },
        { sector: 'Transport and Communication', size: 9.3 },
        { sector: 'Finance, real estate and business services', size: 22.5 }
      ];

      // Add label
    chart1.innerRadius = 100;

    label1.text = 'AREAS';
    label1.horizontalCenter = 'middle';
    label1.verticalCenter = 'middle';
    label1.fontSize = 20;

      // Add and configure Series
    const pieSeries = chart1.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'size';
    pieSeries.dataFields.category = 'sector';
  }
  /*
  getCurrentData() {
    this.label.text = this.currentYear.toString();
    let data = this.chartData[this.currentYear];
    this.currentYear++;
    if (this.currentYear > 2014){
      this.currentYear = 1995;
    }
    return data;
  }
  */
  /*
  loop() {
    //chart.allLabels[0].text = currentYear;
    let data = this.getCurrentData();
    for(var i = 0; i < data.length; i++) {
      this.chart.data[i].size = data[i].size;
    }
    this.chart.invalidateRawData();
    this.chart.setTimeout( this.loop, 4000 );
  }*/
  
}
