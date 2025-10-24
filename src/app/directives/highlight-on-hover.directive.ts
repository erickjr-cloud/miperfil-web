import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]',
  standalone: true
})
export class HighlightOnHoverDirective {
  @Input() colorFondo: string = '#e0e0ff';   // Fondo por defecto
  @Input() colorTexto: string = '#000';      // Texto por defecto
  @Input() resplandor: boolean = true;       // 🔹 Agrega un "glow" opcional

  private originalBackgroundColor = '';
  private originalTextColor = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Transición suave inicial
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;
    this.originalTextColor = this.el.nativeElement.style.color;

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.colorFondo);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.colorTexto);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow',
      this.resplandor ? `0 0 12px ${this.colorFondo}` : '0 4px 12px rgba(0,0,0,0.2)'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.originalTextColor);
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
  }
}
