import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  proyectosFiltrados: Proyecto[] = [];
  filtro: string = '';
  proyectoSeleccionado?: Proyecto;
  cargando: boolean = true;

  constructor(
    private proyectosService: ProyectosService,
    private cdr: ChangeDetectorRef // ✅ inyectamos ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('🔵 Iniciando carga de proyectos...');

    this.proyectosService.obtenerProyectosAsync()
      .then((proyectos) => {
        this.proyectos = proyectos;
        this.proyectosFiltrados = proyectos;
        this.cargando = false;

        console.log('✅ Proyectos cargados correctamente:', this.proyectos);

        // 👇 Forzamos la actualización del DOM
        this.cdr.detectChanges();
      })
      .catch((error) => {
        console.error('❌ Error al obtener proyectos:', error);
        this.cargando = false;
        this.cdr.detectChanges();
      });
  }

  filtrarProyectos(): void {
    const texto = this.filtro.trim().toLowerCase();
    this.proyectosFiltrados =
      texto === ''
        ? this.proyectos
        : this.proyectos.filter((p) =>
            p.nombre.toLowerCase().includes(texto)
          );
  }

  mostrarDetalles(proyecto: Proyecto): void {
    this.proyectoSeleccionado = proyecto;
  }

  cerrarDetalle(): void {
    this.proyectoSeleccionado = undefined;
  }
}
