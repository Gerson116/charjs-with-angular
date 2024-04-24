import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartTypeRegistry } from 'chart.js/auto';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css',
})
export class GraficosComponent implements OnInit {
  @Input() tipoGrafico: string = 'pie';
  @Input() label: string = '';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() backgroundsColor: string[] = [];
  @Input() borderColor: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    console.log(this.tipoGrafico);
    console.log(this.label);
    console.log(this.labels);
    console.log(this.data);
    console.log(this.backgroundsColor);
    console.log(this.borderColor);

    const ctx = document.getElementById('myChart');
    //"ctx" hace referencia al id del componente canvas

    const myChart = new Chart('ctx', {
      type: this.tipoGrafico as keyof ChartTypeRegistry,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            backgroundColor: this.backgroundsColor,
            borderColor: this.borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
