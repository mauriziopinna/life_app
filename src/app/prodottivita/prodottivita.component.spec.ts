import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottivitaComponent } from './prodottivita.component';

describe('ProdottivitaComponent', () => {
  let component: ProdottivitaComponent;
  let fixture: ComponentFixture<ProdottivitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottivitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottivitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
