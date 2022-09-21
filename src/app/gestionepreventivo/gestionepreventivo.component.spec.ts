import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionepreventivoComponent } from './gestionepreventivo.component';

describe('GestionepreventivoComponent', () => {
  let component: GestionepreventivoComponent;
  let fixture: ComponentFixture<GestionepreventivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionepreventivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionepreventivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
