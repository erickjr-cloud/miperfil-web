import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';  // <-- importa tu Navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],  // <-- agrega Navbar aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // <-- plural y array
})
export class App {
  protected readonly title = signal('mi-perfil-web');
}
