// 📁 app.routes.ts
// ✅ FASE 8: Implementación de Lazy Loading
// ✅ FASE 9: Protección de ruta con Guard (authGuard)

import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // 🔐 Importamos el guard

export const routes: Routes = [
  // 🏠 Ruta de inicio (Bienvenida)
  { 
    path: '', 
    loadComponent: () => import('./components/bienvenida/bienvenida.component')
      .then(m => m.BienvenidaComponent) 
  },

  // 👤 Sobre mí
  { 
    path: 'sobre-mi', 
    loadComponent: () => import('./components/sobre-mi/sobre-mi.component')
      .then(m => m.SobreMiComponent) 
  },

  // 💼 Proyectos
  { 
    path: 'proyectos', 
    loadComponent: () => import('./components/proyectos/proyectos.component')
      .then(m => m.ProyectosComponent) 
  },

  // ⚽ Deportes
  { 
    path: 'deportes', 
    loadComponent: () => import('./components/deportes/deportes.component')
      .then(m => m.DeportesComponent) 
  },

  // 🎨 Hobbies
  { 
    path: 'hobbies', 
    loadComponent: () => import('./components/hobbies-favoritos/hobbies-favoritos.component')
      .then(m => m.HobbiesFavoritosComponent) 
  },

  // ✉️ Contacto (PROTEGIDA por authGuard)
  { 
    path: 'contacto', 
    canActivate: [authGuard], // 🔒 Pregunta antes de entrar
    loadComponent: () => import('./components/contacto/contacto.component')
      .then(m => m.ContactoComponent) 
  },

  // 🚫 Ruta por defecto (redirige si no existe)
  { path: '**', redirectTo: '' }
];
