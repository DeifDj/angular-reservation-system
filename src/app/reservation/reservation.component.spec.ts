// reservation.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationComponent],
    });
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getSomeData() should return data', () => {
    const result = component.getSomeData();
    expect(result).toBeDefined();
    // Puedes agregar más aserciones según tu lógica y comportamiento esperado.
  });
});
