import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportesService, Deporte } from '../../services/deportes.service';
import { PrimeraMayusculaPipe } from '../../pipes/primera-mayuscula.pipe';
import { HighlightOnHoverDirective } from '../../directives/highlight-on-hover.directive';

@Component({
  selector: 'app-deportes',
  standalone: true,
  imports: [CommonModule, PrimeraMayusculaPipe, HighlightOnHoverDirective],
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent implements OnInit {
  deportes: Deporte[] = [];

  constructor(private deportesService: DeportesService) {}

  ngOnInit(): void {
    this.deportes = this.deportesService.obtenerDeportes();
  }
}
