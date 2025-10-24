import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoService, Contacto } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto!: Contacto;

  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.contacto = this.contactoService.obtenerContacto();
  }
}
