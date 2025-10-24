import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilService, PerfilInfo } from '../../services/perfil.service';

@Component({
  selector: 'app-sobre-mi',
  standalone: true, // ✅ Importante para proyectos standalone
  imports: [CommonModule], // ✅ Permite usar *ngIf, *ngFor y otras directivas
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

  experiencia: { puesto: string; empresa: string; periodo: string; descripcion: string }[] = [
    {
      puesto: 'Desarrollador Frontend',
      empresa: 'Tech Company',
      periodo: '2023 - Presente',
      descripcion: 'Desarrollo de aplicaciones web con Angular y React'
    },
    {
      puesto: 'Desarrollador Junior',
      empresa: 'StartUp XYZ',
      periodo: '2021 - 2023',
      descripcion: 'Desarrollo y mantenimiento de sitios web'
    }
  ];

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.perfil = this.perfilService.obtenerPerfil();
  }
}
