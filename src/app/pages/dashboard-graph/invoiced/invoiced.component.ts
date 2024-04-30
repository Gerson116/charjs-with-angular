import { Component, OnInit } from '@angular/core';
import { GraficosDesarrollados } from '../../../enums/graficos-desarrollados';
import { Chart, ChartTypeRegistry } from 'chart.js';
import { GraficosComponent } from '../../../shared/tipo-graficos/graficos/graficos.component';

@Component({
  selector: 'app-invoiced',
  standalone: true,
  imports: [GraficosComponent],
  templateUrl: './invoiced.component.html',
  styleUrl: './invoiced.component.css',
})
export class InvoicedComponent implements OnInit {
  tipoGrafico: string = 'pie';
  label: string = '# of Votes';
  labels: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  data: number[] = [12, 19, 3, 5, 2, 1, 15];
  backgroundColor: string[] = [
    '#F8AE5B',
    '#B8F024',
    '#24C8F0',
    '#244CF0',
    '#C524F0',
    '#F024AF',
    '#F51619',
  ];
  borderColor: string[] = [
    'rgba(248, 91, 174, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(240, 128, 128, 1)',
  ];
  totalGanancia: number = GraficosDesarrollados.TotalGanancia;

  constructor() {}

  ngOnInit(): void {
    // this.graficoPie('ctxInvoiced');
  }

  graficoPie(ctx: string): void {
    // const ctx = document.getElementById(`myChart`);
    //"ctx" hace referencia al id del componente canvas

    // Obtén el elemento contenedor donde quieres agregar el canvas
    const container = document.getElementById(
      'ctxGraficoInvoiced'
    ) as HTMLElement;

    // Crea el elemento canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'ctxInvoiced'; // Establece el ID del canvas si es necesario
    canvas.width = 520; // Establece el ancho del canvas
    canvas.height = 200; // Establece la altura del canvas

    // Añade estilos al canvas si es necesario
    // canvas.style.border = '1px solid black'; // Ejemplo de estilo

    // Adjunta el canvas al contenedor
    container.appendChild(canvas);

    const myChart = new Chart(ctx, {
      type: this.tipoGrafico as keyof ChartTypeRegistry,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            backgroundColor: this.backgroundColor,
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
