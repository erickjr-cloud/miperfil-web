import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const permitido = confirm('🔒 ¿Tienes permiso para acceder a la sección de Contacto?');
  if (!permitido) {
    alert('🚫 Acceso denegado');
  }
  return permitido;
};
