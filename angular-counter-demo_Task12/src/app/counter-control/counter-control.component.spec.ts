import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterControlComponent } from './counter-control.component';

describe('CounterControlComponent', () => {
  let component: CounterControlComponent;
  let fixture: ComponentFixture<CounterControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
