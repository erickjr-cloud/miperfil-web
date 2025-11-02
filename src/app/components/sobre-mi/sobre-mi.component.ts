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
  perfil: PerfilInfo = {
    nombre: '',
    profesion: '',
    descripcion: '',
    email: '',
    telefono: '',
    ubicacion: '',
    github: ''
  };

  habilidades: string[] = [
    'Edición y renderizado de videos',
    'Trabajo en equipo',
    'Aprendizaje rápido',
    'Comunicación efectiva',
    'Disciplina deportiva',
    'Análisis y resolución de problemas'
  ];

  experiencia = [
    {
      puesto: 'Ayudante de construcción',
      empresa: 'Independiente',
      periodo: '2023 - Presente',
      descripcion:
        'Apoyo en labores de construcción, organización del trabajo y colaboración en equipo en obras locales.'
    },
    {
      puesto: 'Editor de video (freelance)',
      empresa: 'Proyectos personales y universitarios',
      periodo: '2022 - Presente',
      descripcion:
        'Edición, montaje y renderizado de videos para redes sociales y proyectos académicos utilizando herramientas como CapCut y Premiere Pro.'
    },
    {
      puesto: 'Jugador competitivo de Mobile Legends',
      empresa: 'Competencias universitarias',
      periodo: '2021 - 2024',
      descripcion:
        'Participación en torneos universitarios representando a mi universidad. Alcancé el Top 7 veces nacional en Perú y clasifiqué a regionales, en el torneo de interuniversidades "INTERU".'
    }
  ];

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    // 🔹 Ahora esto ya no causará errores, porque perfil está inicializado arriba
    this.perfil = this.perfilService.obtenerPerfil();
  }
}
