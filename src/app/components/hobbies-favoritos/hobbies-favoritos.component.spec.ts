import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HobbiesFavoritosComponent } from './hobbies-favoritos.component';

describe('HobbiesFavoritosComponent', () => {
  let component: HobbiesFavoritosComponent;
  let fixture: ComponentFixture<HobbiesFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HobbiesFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
