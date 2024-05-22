import { Injectable } from '@angular/core';
import { Toast } from '../../../shared/interfaces/toastr.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private _toasts: Toast[] = [];

  public get Toasts(): Toast[] {
    return this._toasts;
  }

  public show(toast: Toast): void {
    this._toasts.push(toast);
  }

  public remove(toast: Toast): void {
    this._toasts = this._toasts.filter((t) => t !== toast);
  }

  public clear(): void {
    this._toasts.splice(0, this._toasts.length);
  }
}
