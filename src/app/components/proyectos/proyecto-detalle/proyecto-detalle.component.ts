import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proyecto } from '../../../services/proyectos.service';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [CommonModule], // ✅ Habilita *ngIf y *ngFor
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent {
  // 🔹 Recibe un proyecto desde el componente padre (ProyectosComponent)
  @Input() proyecto!: Proyecto;

  // 🔹 Emite un evento al padre para cerrar el detalle
  @Output() cerrar = new EventEmitter<void>();

  // 🔸 Lógica del botón "Cerrar Detalle"
  cerrarDetalle(): void {
    this.cerrar.emit();
  }
}
