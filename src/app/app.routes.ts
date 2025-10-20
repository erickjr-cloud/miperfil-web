import { Routes } from '@angular/router';
import { Bienvenida } from './components/bienvenida/bienvenida';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Contacto } from './components/contacto/contacto';
import { Deportes } from './components/deportes/deportes';
import { HobbiesFavoritos } from './components/hobbies-favoritos/hobbies-favoritos';
import { Proyectos } from './components/proyectos/proyectos';

export const routes: Routes = [
  { path: '', component: Bienvenida, title: 'Inicio' },
  { path: 'sobre-mi', component: SobreMi, title: 'Sobre Mí' },
  { path: 'contacto', component: Contacto, title: 'Contacto' },
  { path: 'deportes', component: Deportes, title: 'Deportes' },
  { path: 'hobbies', component: HobbiesFavoritos, title: 'Hobbies' },
  { path: 'proyectos', component: Proyectos, title: 'Proyectos' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];