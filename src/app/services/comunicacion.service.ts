import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  // 🔹 Observable para compartir datos entre componentes
  private mensajeFuente = new BehaviorSubject<string>(''); 
  mensajeActual = this.mensajeFuente.asObservable();

  // 🔸 Método para enviar mensajes
  enviarMensaje(mensaje: string) {
    this.mensajeFuente.next(mensaje);
  }
}
