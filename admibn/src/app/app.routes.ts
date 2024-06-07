import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { UsersComponent } from './routes/users/users.component';
import { SigninComponent } from './routes/signin/signin.component';
import { SignupComponent } from './routes/signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'tasks', component: TasksComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'users', component: UsersComponent }],
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
