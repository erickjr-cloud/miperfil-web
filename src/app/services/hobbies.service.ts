import { Injectable } from '@angular/core';

export interface Hobby {
  nombre: string;
  descripcion: string;
  frecuencia?: string; // ✅ añadida
  tipo?: string;       // ✅ añadida
}

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  obtenerHobbies(): Hobby[] {
    return [
      { 
        nombre: 'Fútbol', 
        descripcion: 'Juego con amigos los fines de semana.', 
        frecuencia: '3 veces por semana', 
        tipo: 'Deporte' 
      },
      { 
        nombre: 'Videojuegos', 
        descripcion: 'Principalmente Dota 2 y Mobile Legends.', 
        frecuencia: 'Casi a diario', 
        tipo: 'Entretenimiento' 
      },
      { 
        nombre: 'Música', 
        descripcion: 'Escucho rock y practico guitarra eléctrica.', 
        frecuencia: 'A diario', 
        tipo: 'Arte' 
      }
    ];
  }
}
