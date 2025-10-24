import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesService, Hobby } from '../../services/hobbies.service';

// ✅ Importamos la pipe y la directiva
import { PrimeraMayusculaPipe } from '../../pipes/primera-mayuscula.pipe';
import { HighlightOnHoverDirective } from '../../directives/highlight-on-hover.directive';

@Component({
  selector: 'app-hobbies-favoritos',
  standalone: true,
  // ✅ Las añadimos aquí para poder usarlas en el HTML
  imports: [CommonModule, PrimeraMayusculaPipe, HighlightOnHoverDirective],
  templateUrl: './hobbies-favoritos.component.html',
  styleUrls: ['./hobbies-favoritos.component.css']
})
export class HobbiesFavoritosComponent implements OnInit {
  hobbies: Hobby[] = [];

  constructor(private hobbiesService: HobbiesService) {}

  ngOnInit(): void {
    this.hobbies = this.hobbiesService.obtenerHobbies();
  }
}
