import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBindingComponent } from './example-binding.component';

describe('ExampleBindingComponent', () => {
  let component: ExampleBindingComponent;
  let fixture: ComponentFixture<ExampleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
