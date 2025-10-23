import { Injectable } from '@angular/core';

export interface Hobby {
  nombre: string;
  categoria: string;
  descripcion: string;
  icono?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  private hobbies: Hobby[] = [
    {
      nombre: 'Lectura',
      categoria: 'Cultural',
      descripcion: 'Me encanta leer sobre tecnología, ciencia ficción y desarrollo personal'
    },
    {
      nombre: 'Videojuegos',
      categoria: 'Entretenimiento',
      descripcion: 'Juegos de estrategia y aventura, especialmente RPGs'
    },
    {
      nombre: 'Fotografía',
      categoria: 'Artístico',
      descripcion: 'Fotografía de paisajes y naturaleza'
    },
    {
      nombre: 'Cocinar',
      categoria: 'Culinario',
      descripcion: 'Experimentar con recetas de diferentes culturas'
    }
  ];

  constructor() { }

  obtenerHobbies(): Hobby[] {
    return this.hobbies;
  }

  obtenerPorCategoria(categoria: string): Hobby[] {
    return this.hobbies.filter(h => h.categoria === categoria);
  }
}
