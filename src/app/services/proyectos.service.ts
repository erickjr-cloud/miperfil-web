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
  nombre: 'Plataforma Universitaria Inteligente',
  descripcion: 'Desarrollar una plataforma que integre gestión de tareas, recordatorios, notas y seguimiento académico para estudiantes de Ingeniería de Sistemas.',
  tecnologias: ['Angular', 'Firebase', 'Node.js'],
  fecha: 'Planificado para antes 2030'
},
{
  id: 2,
  nombre: 'Sistema de Análisis de Partidos de Fútbol',
  descripcion: 'Crear una app que use estadísticas y algoritmos para analizar el rendimiento de equipos y jugadores en torneos locales.',
  tecnologias: ['Python', 'Flask', 'MySQL'],
  fecha: 'Planificado para 2027'
},
{
  id: 3,
  nombre: 'Asistente Virtual para Comandos Linux',
  descripcion: 'Proyecto educativo que ayude a los estudiantes a practicar comandos de Linux con ejemplos interactivos y una interfaz amigable.',
  tecnologias: ['Electron', 'Node.js', 'Angular'],
  fecha: 'Planificado para 2027'
},
{
  id: 4,
  nombre: 'Simulador de Estrategias Dota 2 y MLBB',
  descripcion: 'Aplicación experimental que estudie las sinergias entre héroes usando análisis de datos y aprendizaje automático.',
  tecnologias: ['Python', 'TensorFlow', 'Angular'],
  fecha: 'Idea en desarrollo'
},
{
  id: 5,
  nombre: 'Sistema Personal de Gestión de Proyectos',
  descripcion: 'Desarrollar una aplicación para organizar proyectos personales, registrar avances, y generar reportes automáticos de progreso.',
  tecnologias: ['TypeScript', 'Node.js', 'MongoDB'],
  fecha: 'Objetivo para 2029'
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