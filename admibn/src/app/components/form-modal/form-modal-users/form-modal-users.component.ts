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
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-form-modal-users',
  standalone: true,
  imports: [
    NzModalModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzGridModule,
    NzSelectModule,
  ],
  templateUrl: './form-modal-users.component.html',
  styleUrl: './form-modal-users.component.css',
})
export class FormModalUsersComponent {
  @Input() entityName = '';
  @Input() isVisible = false;
  @Output() onEditSubmit = new EventEmitter<any>();
  @Output() onAddSubmit = new EventEmitter<any>();
  @Input() formData: any = null;

  usersForm: FormGroup<{
    login: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    role: FormControl<string>;
  }> = this.fb.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.usersForm.patchValue({
      login: this.formData?.login,
      email: this.formData?.email,
      role: this.formData?.role,
    });
  }

  handleOk(): void {
    if (this.formData?.id) {
      this.onEditSubmit.emit(this.usersForm.value);
    } else {
      this.onAddSubmit.emit(this.usersForm.value);
    }
  }

  handleCancel(): void {
    this.onEditSubmit.emit(null);
  }

  submitForm(): void {}
}
