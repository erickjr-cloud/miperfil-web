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
        descripcion: 'Juego con amigos los fines de semana, y un equipo local por temporadas', 
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
        descripcion: 'Para gustos hay colores jsjs, escucho de todo, soy feliz con un  par de auriculares y a full volumen cuando hago caminata', 
        frecuencia: 'A diario', 
        tipo: 'Arte' 
      }
    ];
  }
}
