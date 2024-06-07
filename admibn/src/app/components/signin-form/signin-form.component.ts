import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [NzFormModule, NzInputModule, ReactiveFormsModule, NzButtonModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.css',
})
export class SigninFormComponent {
  constructor(private fb: NonNullableFormBuilder) {}

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  submitForm = () => {
    console.log('submit')
  };
}
