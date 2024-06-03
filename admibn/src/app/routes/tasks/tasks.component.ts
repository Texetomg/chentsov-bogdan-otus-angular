import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ApiService } from '../../api.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { FormModalComponent } from '../../components/form-modal/form-modal.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NzTableModule, FormModalComponent, NzButtonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  constructor(private apiService: ApiService) { }

  isVisible = false;
  formData = null

  showModal(data: any): void {
    this.formData = data
    this.isVisible = true;
  }

  dataSet = []
  private readonly reloadSubject = new BehaviorSubject<void>(undefined);


  public readonly tasks$ = this.reloadSubject.pipe(
    switchMap(() =>
      this.apiService
        .getTasks()
    ),
  );

  public reloadTasks(): void {
    console.log('reload')
    this.reloadSubject.next();
  }
}
