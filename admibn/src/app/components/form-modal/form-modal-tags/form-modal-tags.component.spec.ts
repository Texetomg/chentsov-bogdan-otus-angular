import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalTagsComponent } from './form-modal-tags.component';

describe('FormModalTagsComponent', () => {
  let component: FormModalTagsComponent;
  let fixture: ComponentFixture<FormModalTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModalTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormModalTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
