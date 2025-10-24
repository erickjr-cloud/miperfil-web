import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilService, PerfilInfo } from '../../services/perfil.service';
import { PrimeraMayusculaPipe } from '../../pipes/primera-mayuscula.pipe';
import { HighlightOnHoverDirective } from '../../directives/highlight-on-hover.directive';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, PrimeraMayusculaPipe, HighlightOnHoverDirective],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  perfil!: PerfilInfo;

  habilidades: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'Node.js',
    'Git'
  ];

  experiencia = [
    {
      puesto: 'Desarrollador Frontend',
      empresa: 'Tech Company',
      periodo: '2023 - Presente',
      descripcion: 'Desarrollo de aplicaciones web modernas con Angular y React.'
    },
    {
      puesto: 'Desarrollador Junior',
      empresa: 'StartUp XYZ',
      periodo: '2021 - 2023',
      descripcion: 'Implementación y mantenimiento de sitios web y sistemas internos.'
    }
  ];

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.perfil = this.perfilService.obtenerPerfil();
  }
}
