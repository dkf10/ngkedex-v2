import { Component } from '@angular/core';
import { ToastrService } from 'src/app/core/services/toastr/toastr.service';
import { Toast } from '../../interfaces/toastr.interface';

@Component({
  selector: 'ngkdx-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent {

  public toasts: Toast[] = [];

  constructor(private toastrService: ToastrService) {
    this.toasts = this.toastrService.Toasts;
  }

  public hideToast(toast: Toast): void {
    this.toastrService.remove(toast);
  }

  public trackByToast(index: number, item: Toast): number {
    return item.id;
  }
}
