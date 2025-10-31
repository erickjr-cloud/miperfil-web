import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportesService, Deporte } from '../../services/deportes.service';
import { PrimeraMayusculaPipe } from '../../pipes/primera-mayuscula.pipe';
import { HighlightOnHoverDirective } from '../../directives/highlight-on-hover.directive';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-deportes',
  standalone: true,
  imports: [CommonModule, PrimeraMayusculaPipe, HighlightOnHoverDirective],
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent implements OnInit {
  deportes: Deporte[] = [];
  mensajeEnviado: string = ''; // ✅ Necesario para mostrar confirmación

  constructor(
    private deportesService: DeportesService,
    private comunicacionService: ComunicacionService
  ) {}

  ngOnInit(): void {
    this.deportes = this.deportesService.obtenerDeportes();
  }

  seleccionarDeporte(deporte: Deporte): void {
    const mensaje = `Has seleccionado el deporte: ${deporte.nombre}`;
    this.comunicacionService.enviarMensaje(mensaje);
    this.mensajeEnviado = mensaje; // ✅ Lo mostramos visualmente
  }
}
