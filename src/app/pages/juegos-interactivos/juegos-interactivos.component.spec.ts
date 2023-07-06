import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosInteractivosComponent } from './juegos-interactivos.component';

describe('JuegosInteractivosComponent', () => {
  let component: JuegosInteractivosComponent;
  let fixture: ComponentFixture<JuegosInteractivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosInteractivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosInteractivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
