import { Component, inject } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    RouterOutlet,
    RouterLink,
    NzButtonModule,
    NzAvatarModule,
    NzMenuModule,
    NzIconModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);
  signout() {
    this.authService.signout();
    this.router.navigate(['/signin']);
  }
}
