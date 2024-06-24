import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ApiService } from '../../api.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableHeaderComponent } from '../../components/table-header/table-header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormModalTasksComponent } from '../../components/form-modal/form-modal-tasks/form-modal-tasks.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NzTableModule,
    NzButtonModule,
    FormModalTasksComponent,
    TableHeaderComponent,
    NzIconModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private apiService: ApiService) {}

  isVisible = false;
  formData = null;

  showModal(data?: any): void {
    this.formData = data;
    this.isVisible = true;
  }

  private readonly reloadSubject = new BehaviorSubject<void>(undefined);

  public readonly tasks$ = this.reloadSubject.pipe(
    switchMap(() => this.apiService.getTasks())
  );

  public onEditSubmit(formData: any): void {
    if (formData) {
      this.apiService.patchTask(formData).subscribe(() => {
        this.reloadSubject.next();
      });
    }
    this.isVisible = false;
  }

  public onAddSubmit(formData: any): void {
    if (formData) {
      this.apiService.postTask(formData).subscribe(() => {
        this.reloadSubject.next();
      });
    }
    this.isVisible = false;
  }

  public onDelete(id: number): void {
    this.apiService.deleteTask(id).subscribe(() => {
      this.reloadSubject.next();
    });
  }
}
