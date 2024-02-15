import { TestBed } from '@angular/core/testing';

import { ServicioReservaciones } from './reservation.service';

describe('ReservationService', () => {
  let service: ServicioReservaciones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioReservaciones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
