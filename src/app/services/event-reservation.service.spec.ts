import { TestBed } from '@angular/core/testing';

import { EventReservationService } from './event-reservation.service';

describe('EventReservationService', () => {
  let service: EventReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
