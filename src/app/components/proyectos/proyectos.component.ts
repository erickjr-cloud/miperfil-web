import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';
import { PrimeraMayusculaPipe } from '../../pipes/primera-mayuscula.pipe';
import { HighlightOnHoverDirective } from '../../directives/highlight-on-hover.directive';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PrimeraMayusculaPipe,
    HighlightOnHoverDirective,
    ProyectoDetalleComponent
  ],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  filtro: string = '';
  proyectoSeleccionado?: Proyecto;
  cargando: boolean = true; // 🔹 indicador de carga

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    // 🔸 Consumimos el servicio usando Promesa
    this.proyectosService.obtenerProyectosAsync()
      .then((proyectos) => {
        this.proyectos = proyectos;
      })
      .catch((error) => {
        console.error('Error al obtener proyectos:', error);
      })
      .finally(() => {
        this.cargando = false;
      });
  }

  get proyectosFiltrados(): Proyecto[] {
    if (!this.filtro.trim()) return this.proyectos;
    return this.proyectos.filter(p =>
      p.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  mostrarDetalles(proyecto: Proyecto): void {
    this.proyectoSeleccionado = proyecto;
  }

  cerrarDetalle(): void {
    this.proyectoSeleccionado = undefined;
  }
}
