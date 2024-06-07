import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SigninFormComponent } from '../../components/signin-form/signin-form.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SigninFormComponent,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {}
