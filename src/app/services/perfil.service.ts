import { Injectable } from '@angular/core';

export interface PerfilInfo {
    nombre: string;
    profesion: string;
    descripcion: string;
    email: string;
    telefono: string;
    ubicacion: string;
    github?: string;
}
@Injectable ({
  providedIn: 'root'
})
export class PerfilService {
  private perfil: PerfilInfo = {
    nombre: 'Erick Jhunior Huaman Cruz',
    profesion: 'Ingenieria de Sistemas',
    descripcion: 'Apasionado por la tecnología y el desarrollo de software. Siempre aprendiendo cosas nuevas.',
    email: 'huamancruzerick@gmail.com',
    telefono: '+51 974 817 819',
    ubicacion: 'Andahuaylas, Apurímac, Perú',
    github: 'https://github.com/erickjr-cloud'
  };
    constructor() { }

  obtenerPerfil(): PerfilInfo {
    return this.perfil;
  }

  actualizarPerfil(nuevoPerfil: PerfilInfo): void {
    this.perfil = nuevoPerfil;
  }
}