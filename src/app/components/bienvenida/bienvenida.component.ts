import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfilService, PerfilInfo } from '../../services/perfil.service';
import { PrimeraMayusculaPipe } from '../../pipes/primera-mayuscula.pipe';
import { HighlightOnHoverDirective } from '../../directives/highlight-on-hover.directive';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule, RouterModule, PrimeraMayusculaPipe, HighlightOnHoverDirective],
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  perfil!: PerfilInfo;
  constructor(private perfilService: PerfilService) {}
  ngOnInit(): void {
    this.perfil = this.perfilService.obtenerPerfil();
  }
}
