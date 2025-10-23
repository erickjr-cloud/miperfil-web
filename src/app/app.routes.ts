import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { HobbiesFavoritosComponent } from './components/hobbies-favoritos/hobbies-favoritos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'deportes', component: DeportesComponent },
  { path: 'hobbies', component: HobbiesFavoritosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '**', redirectTo: '' } // Redirige rutas no encontradas a Bienvenida
];