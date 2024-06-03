import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { UsersComponent } from './routes/users/users.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
];
