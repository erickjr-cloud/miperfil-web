import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesFavoritos } from './hobbies-favoritos';

describe('HobbiesFavoritos', () => {
  let component: HobbiesFavoritos;
  let fixture: ComponentFixture<HobbiesFavoritos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesFavoritos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesFavoritos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
