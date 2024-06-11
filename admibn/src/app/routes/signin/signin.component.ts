import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../../auth/auth.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzButtonModule,
    RouterLink,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private fb: NonNullableFormBuilder) {}

  authService = inject(AuthService);
  router = inject(Router);

  protected signInForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  error = null;

  public onSubmit() {
    if (this.signInForm.valid) {
      this.authService.signin(this.signInForm.value).subscribe({
        next: () => {
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.error = err.error.message;
        },
      });
    }
  }
}
