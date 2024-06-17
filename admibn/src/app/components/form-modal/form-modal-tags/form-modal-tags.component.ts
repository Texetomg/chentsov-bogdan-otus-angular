import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-form-modal-tags',
  standalone: true,
  imports: [NzModalModule, NzFormModule, NzInputModule, ReactiveFormsModule, NzGridModule],
  templateUrl: './form-modal-tags.component.html',
  styleUrl: './form-modal-tags.component.css',
})
export class FormModalTagsComponent {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() reloadOnChange = new EventEmitter<void>();
  @Input() formData: any = null;

  validateForm: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
    difficulty: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    difficulty: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.validateForm.patchValue({
      name: this.formData?.name,
      description: this.formData?.description,
      difficulty: this.formData?.difficulty,
    });
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.reloadOnChange.emit();
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleChange.emit(false);
  }

  submitForm(): void {}
}
