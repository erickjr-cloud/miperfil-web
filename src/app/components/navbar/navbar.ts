import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Importa RouterModule completo

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // ✅ Esto habilita routerLink, routerLinkActive y routerLinkActiveOptions
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  menuAbierto = false;

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }
}
