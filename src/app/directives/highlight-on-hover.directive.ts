import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]',
  standalone: true
})
export class HighlightOnHoverDirective {
  @Input() colorFondo: string = '#e0e0ff';  // color de fondo al pasar el mouse
  @Input() colorTexto: string = '#000';     // color del texto al pasar el mouse

  private originalBackgroundColor: string = '';
  private originalTextColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    // Guardamos los valores originales
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;
    this.originalTextColor = this.el.nativeElement.style.color;

    // Aplicamos efectos
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.colorFondo);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.colorTexto);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 4px 12px rgba(0, 0, 0, 0.2)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Restauramos valores originales
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.originalTextColor);
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
  }
}