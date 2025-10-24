import { Injectable } from '@angular/core';

export interface Contacto {
  nombre: string;
  correo: string;
  telefono: string;
  direccion?: string;
  redes?: {
    facebook?: string;
    instagram?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() {}

  obtenerContacto(): Contacto {
    return {
      nombre: 'Erick Jr',
      correo: 'huamancruzerick@gmail.com',
      telefono: '+51 974 817 819',
      direccion: 'Andahuaylas, Apurimac, Peru',
      redes: {
        facebook: 'https://www.facebook.com/erick.jr.huaman.cruz/?locale=es_LA',
        instagram: 'https://www.instagram.com/erick._2704/',
      }
    };
  }
}
