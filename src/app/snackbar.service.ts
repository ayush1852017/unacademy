import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/shared/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  snackbarClass!: string;

  constructor(private snackbar: MatSnackBar) {}

  showSnackbar = (message: any, icon: any, type: string, action?: string) => {
    switch (type) {
      case 'error':
        this.snackbarClass = 'error-snackbar';
        break;
      case 'success':
        this.snackbarClass = 'success-snackbar';
        break;
      default:
        this.snackbarClass = 'info-snackbar';
    }
    if (!message) {
      message = 'Some error has occured.';
    }
    this.snackbar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      data: {
        message: message,
        icon: icon,
        type: type,
        action: action,
      },
      panelClass: this.snackbarClass,
    });
  };
}
