import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule, } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [NzModalModule, NzFormModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() reloadOnChange = new EventEmitter<void>();
  @Input() formData: any = null

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.validateForm.patchValue({
      userName: this.formData?.name,
      password: this.formData?.description
    })
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.reloadOnChange.emit()
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleChange.emit(false);
  }

  submitForm(): void {
  }
}
