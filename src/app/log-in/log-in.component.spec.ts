import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogInComponent } from './log-in.component';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInComponent],
    });
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form', () => {
    const loginForm = fixture.nativeElement.querySelector('form');
    expect(loginForm).toBeTruthy();
  });

  it('getSomeData() should return data', () => {
    const result = component.getSomeData();
    expect(result).toBeDefined();
    // Puedes agregar más aserciones según tu lógica y comportamiento esperado.
  });
});
