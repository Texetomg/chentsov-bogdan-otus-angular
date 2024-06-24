import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ApiService } from '../../api.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableHeaderComponent } from '../../components/table-header/table-header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormModalUsersComponent } from '../../components/form-modal/form-modal-users/form-modal-users.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NzTableModule,
    FormModalUsersComponent,
    NzButtonModule,
    TableHeaderComponent,
    NzIconModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private apiService: ApiService) {}

  isVisible = false;
  formData = null;

  showModal(data?: any): void {
    this.formData = data;
    this.isVisible = true;
  }

  dataSet = [];
  private readonly reloadSubject = new BehaviorSubject<void>(undefined);

  public readonly users$ = this.reloadSubject.pipe(
    switchMap(() => this.apiService.getUsers())
  );

  public onEditSubmit(formData: any): void {
    if (formData) {
      this.apiService.patchUser(formData).subscribe(() => {
        this.reloadSubject.next();
      });
    }
    this.isVisible = false;
  }

  public onAddSubmit(formData: any): void {
    if (formData) {
      this.apiService.postUser(formData).subscribe(() => {
        this.reloadSubject.next();
      });
    }
    this.isVisible = false;
  }

  public onDelete(id: number): void {
    this.apiService.deleteUser(id).subscribe(() => {
      this.reloadSubject.next();
    });
  }
}
