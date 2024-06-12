import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalUsersComponent } from './form-modal-users.component';

describe('FormModalUsersComponent', () => {
  let component: FormModalUsersComponent;
  let fixture: ComponentFixture<FormModalUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModalUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormModalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
