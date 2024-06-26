import { Component, Input, OnInit } from '@angular/core'
import { Chart } from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit {
  @Input() label?: string
  @Input() labels?: Float32Array
  @Input() data?: Float32Array

  public chart: any

  ngOnInit(): void {
    this.createChart()
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',

      data: {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    })
  }
}
