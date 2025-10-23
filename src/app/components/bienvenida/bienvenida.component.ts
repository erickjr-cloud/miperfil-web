import { Component, OnInit } from '@angular/core';
import { PerfilService, PerfilInfo } from '../../services/perfil.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  perfil!: PerfilInfo;

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfil = this.perfilService.obtenerPerfil();
  }
}