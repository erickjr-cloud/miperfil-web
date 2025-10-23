import { Injectable } from '@angular/core';

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  imagen?: string;
  enlace?: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: 'E-commerce App',
      descripcion: 'Tienda online con carrito de compras y pasarela de pago',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
      fecha: '2024-01'
    },
    {
      id: 2,
      nombre: 'Blog Personal',
      descripcion: 'Blog con sistema de comentarios y gestión de contenido',
      tecnologias: ['React', 'Firebase'],
      fecha: '2024-06'
    },
    {
      id: 3,
      nombre: 'App de Tareas',
      descripcion: 'Gestor de tareas con prioridades y recordatorios',
      tecnologias: ['Vue.js', 'Express', 'PostgreSQL'],
      fecha: '2024-09'
    }
  ];

  constructor() { }

  obtenerProyectos(): Proyecto[] {
    return this.proyectos;
  }

  obtenerProyectoPorId(id: number): Proyecto | undefined {
    return this.proyectos.find(p => p.id === id);
  }
}