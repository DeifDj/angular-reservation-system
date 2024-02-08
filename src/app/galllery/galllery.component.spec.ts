import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallleryComponent } from './galllery.component';

describe('GallleryComponent', () => {
  let component: GallleryComponent;
  let fixture: ComponentFixture<GallleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
