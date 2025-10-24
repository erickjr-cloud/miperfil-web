import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectosComponent } from './proyectos.component'; // ✅ ruta y nombre correctos

describe('ProyectosComponent', () => {
  let component: ProyectosComponent;
  let fixture: ComponentFixture<ProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosComponent] // ✅ ahora usa el nombre correcto del componente
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
