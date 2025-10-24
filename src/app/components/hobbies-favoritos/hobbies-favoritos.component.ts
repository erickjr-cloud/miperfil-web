import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesService, Hobby } from '../../services/hobbies.service';

@Component({
  selector: 'app-hobbies-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies-favoritos.component.html',
  styleUrls: ['./hobbies-favoritos.component.css']
})
export class HobbiesFavoritosComponent implements OnInit {
  hobbies: Hobby[] = [];

  constructor(private hobbiesService: HobbiesService) {}

  ngOnInit(): void {
    this.hobbies = this.hobbiesService.obtenerHobbies();
  }
}
