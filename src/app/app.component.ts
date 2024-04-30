import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GraficosDesarrollados } from './enums/graficos-desarrollados';
import { EarningsComponent } from './pages/dashboard-graph/earnings/earnings.component';
import { InvoicedComponent } from './pages/dashboard-graph/invoiced/invoiced.component';
import { PriceComponent } from './pages/dashboard-graph/price/price.component';
import { GraficosComponent } from './shared/tipo-graficos/graficos/graficos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    GraficosComponent,
    ReactiveFormsModule,
    PriceComponent,
    EarningsComponent,
    InvoicedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'probando-graficos';
  monto: number = 100000;

  // seleccionarTipoGanancia: any = {
  //   totalCotizacion: DetalleGanancia.totalCotizacion,
  //   totalGanancia: DetalleGanancia.totalGanancia,
  //   totalFacturado: DetalleGanancia.totalFacturado,
  // };

  // selectTipoGrafico: any = [
  //   { value: TipoGrafico.bar, viewValue: TipoGrafico.bar },
  //   { value: TipoGrafico.pie, viewValue: TipoGrafico.pie },
  //   { value: TipoGrafico.line, viewValue: TipoGrafico.line },
  // ];

  formGroupTipoGrafico: FormGroup | any;
  formBuilder = inject(FormBuilder);

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

  totalCotizacion: number = GraficosDesarrollados.TotalCotizacion;
  totalGanancia: number = GraficosDesarrollados.NoPresentarGrafico;
  totalFacturado: number = GraficosDesarrollados.NoPresentarGrafico;

  constructor() {}

  ngOnInit(): void {
    this.constructorFormulario();
  }

  constructorFormulario() {
    this.formGroupTipoGrafico = this.formBuilder.group({
      tipoGrafico: ['pie', Validators.required],
    });
  }

  mostrarGrafico(item: number) {
    alert(`Elemento seleccionado ${item}`);
  }

  tapCotizacion() {
    this.totalCotizacion = GraficosDesarrollados.TotalCotizacion;
  }

  tapGanancia() {
    this.totalGanancia = GraficosDesarrollados.TotalGanancia;
  }

  tapFacturado() {
    console.log('se selecciono tapFacturado');
    this.totalFacturado = GraficosDesarrollados.TotalFacturado;
  }
}
