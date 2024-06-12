import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalTasksComponent } from './form-modal-tasks.component';

describe('FormModalTasksComponent', () => {
  let component: FormModalTasksComponent;
  let fixture: ComponentFixture<FormModalTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModalTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormModalTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
