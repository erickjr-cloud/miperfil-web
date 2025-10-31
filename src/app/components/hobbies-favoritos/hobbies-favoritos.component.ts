import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesService, Hobby } from '../../services/hobbies.service';
import { PrimeraMayusculaPipe } from '../../pipes/primera-mayuscula.pipe';
import { HighlightOnHoverDirective } from '../../directives/highlight-on-hover.directive';
import { ComunicacionService } from '../../services/comunicacion.service'; // ✅ Nuevo servicio

@Component({
  selector: 'app-hobbies-favoritos',
  standalone: true,
  imports: [CommonModule, PrimeraMayusculaPipe, HighlightOnHoverDirective],
  templateUrl: './hobbies-favoritos.component.html',
  styleUrls: ['./hobbies-favoritos.component.css']
})
export class HobbiesFavoritosComponent implements OnInit {
  hobbies: Hobby[] = [];
  mensajeRecibido: string = ''; // ✅ Variable para mostrar el mensaje

  constructor(
    private hobbiesService: HobbiesService,
    private comunicacionService: ComunicacionService // ✅ Inyección del servicio
  ) {}

  ngOnInit(): void {
    this.hobbies = this.hobbiesService.obtenerHobbies();

    // ✅ Suscripción al mensaje compartido
    this.comunicacionService.mensajeActual.subscribe((mensaje) => {
      this.mensajeRecibido = mensaje;
    });
  }
}
