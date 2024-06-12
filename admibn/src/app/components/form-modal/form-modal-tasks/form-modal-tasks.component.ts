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
  selector: 'app-form-modal-tasks',
  standalone: true,
  imports: [
    NzModalModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzGridModule,
    NzSelectModule,
  ],
  templateUrl: './form-modal-tasks.component.html',
  styleUrl: './form-modal-tasks.component.css',
})
export class FormModalTasksComponent {
  @Input() entityName = '';
  @Input() isVisible = false;
  @Output() onEditSubmit = new EventEmitter<any>();
  @Output() onAddSubmit = new EventEmitter<any>();
  @Input() formData: any = null;

  taskForm: FormGroup<{
    id: FormControl<string>;
    name: FormControl<string>;
    description: FormControl<string>;
    difficulty: FormControl<string>;
  }> = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    difficulty: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.taskForm.patchValue({
      id: this.formData?.id,
      name: this.formData?.name,
      description: this.formData?.description,
      difficulty: this.formData?.difficulty,
    });
  }

  handleOk(): void {
    if (this.formData?.id) {
      this.onEditSubmit.emit(this.taskForm.value);
    } else {
      this.onAddSubmit.emit(this.taskForm.value);
    }
  }

  handleCancel(): void {
    console.log(this.taskForm.errors)
    this.onEditSubmit.emit(null);
  }

  submitForm(): void {}
}
