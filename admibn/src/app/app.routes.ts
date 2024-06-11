import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { UsersComponent } from './routes/users/users.component';
import { SigninComponent } from './routes/signin/signin.component';
import { SignupComponent } from './routes/signup/signup.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { authGuard } from './auth/auth.guard';
import { TagsComponent } from './routes/tags/tags.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'tasks', component: TasksComponent, canActivate: [authGuard] },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'users', component: UsersComponent, canActivate: [authGuard] },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'tags', component: TagsComponent, canActivate: [authGuard] },
    ],
  },
  {
    path: '',
    component: FormLayoutComponent,
    children: [{ path: 'signin', component: SigninComponent }],
  },
  {
    path: '',
    component: FormLayoutComponent,
    children: [{ path: 'signup', component: SignupComponent }],
  },
];
