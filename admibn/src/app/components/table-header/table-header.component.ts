import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-table-header[title]',
  standalone: true,
  imports: [NzButtonModule, NzIconModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.css',
})
export class TableHeaderComponent {
  @Input() title!: string;
  @Output() onClick = new EventEmitter<void>();
}
