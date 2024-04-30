import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
// import Chart, { ChartTypeRegistry } from 'chart.js/auto';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { Subscription } from 'rxjs';
import { GraficosDesarrollados } from '../../../enums/graficos-desarrollados';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  providers: [provideEcharts()],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css',
})
export class GraficosComponent implements OnInit, OnChanges {
  _chartOption!: EChartsOption;

  subscription!: Subscription;

  @Input() tipoGrafico: string = 'pie';
  @Input() label: string = '';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() backgroundsColor: string[] = [];
  @Input() borderColor: string[] = [];

  @Input() graficoSeleccionado: string = 'ctxGraficosCotizacion';
  @Input() ctx: string = 'ctx1';

  @ViewChild('div') miDiv!: ElementRef;

  graficoSeleccionadoCotizacion: number = GraficosDesarrollados.TotalCotizacion;
  graficoSeleccionadoGanancia: number = GraficosDesarrollados.TotalGanancia;
  graficoSeleccionadoFacturado: number = GraficosDesarrollados.TotalFacturado;

  title: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(`${this.graficoSeleccionado} -- ${this.ctx}`);
    this.graficoPie(this.graficoSeleccionado, this.ctx);
    // if (this.graficoSeleccionado == 'ctxGraficosCotizacion') {
    //   this.title = 'ctxGraficosCotizacion';
    //   this.graficoPie(this.graficoSeleccionado, 'ctx1');
    // }
    // if (this.graficoSeleccionado == 'ctxGraficosGanancia') {
    //   this.graficoPie(this.graficoSeleccionado, 'ctx2');
    //   this.title = 'ctxGraficosGanancia';
    // }
    // if (this.graficoSeleccionado == 'ctxGraficosFacturado') {
    //   this.graficoPie(this.graficoSeleccionado, 'ctx3');
    //   this.title = 'ctxGraficosFacturado';
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.graficoPie(this.graficoSeleccionado, this.ctx);
  }

  /*graficoPie(containerElement: string, ctx: string): void {
    // const ctx = document.getElementById(`myChart`);
    //"ctx" hace referencia al id del componente canvas

    // Obtén el elemento contenedor donde quieres agregar el canvas
    // const container = document.getElementById('ctxGraficos') as HTMLElement;
    // const container = document.getElementById(containerElement) as HTMLElement;

    let container = document.createElement('div');
    container.id = containerElement;
    container.innerHTML = '<p> Prueba 21 </p>';
    container.style.color = 'red';

    // Crea el elemento canvas
    const canvas = document.createElement('canvas');
    canvas.id = ctx; // Establece el ID del canvas si es necesario
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
  }*/

  //TODO
  graficoPie(containerElement: string, ctx: string) {
    this._chartOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    };
  }
}
