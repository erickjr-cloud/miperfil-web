import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    this.proyectos = this.proyectosService.obtenerProyectos();
  }
}
