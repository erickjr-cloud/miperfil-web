import { Injectable } from '@angular/core';

export interface Deporte {
  nombre: string;
  frecuencia: string;
  nivel: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeportesService {
  private deportes: Deporte[] = [
    {
      nombre: 'Fútbol',
      frecuencia: '3 veces por semana',
      nivel: 'Avanzado',
      descripcion: 'Juego en un equipo local los fines de semana'
    },
    {
      nombre: 'Natación',
      frecuencia: '2 veces cada 3 semanas',
      nivel: 'Intermedio',
      descripcion: 'Entreno para mantener resistencia cardiovascular'
    },
    {
      nombre: 'Ciclismo',
      frecuencia: 'Fines de semana',
      nivel: 'Intermedio',
      descripcion: 'Rutas de montaña y carretera'
    }
  ];

  constructor() { }

  obtenerDeportes(): Deporte[] {
    return this.deportes;
  }
}