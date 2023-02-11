import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  message!: string;
  icon!: string;
  type!: string;
  action!: string;
  snackbarClass!: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public snackbarInputData: any) {}

  ngOnInit(): void {
    this.message = this.snackbarInputData.message;
    this.icon = this.snackbarInputData.icon;
    this.type = this.snackbarInputData.type;
    this.action = this.snackbarInputData.action;
  }
}
