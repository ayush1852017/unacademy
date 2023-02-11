import { Component,OnInit } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unacademy';
  logout: boolean = false;
  user:any;
  constructor(private userService:UserService,private snackbarService:SnackbarService){}
   /*** close sidepanel */
   ngOnInit(){
    this.user = this.userService.getUser();
   }
  closePanel(drawer: any) {
    drawer.toggle();
  }
  onLogout(){
    this.userService.logout().subscribe({
      next: (resp: any) => {
        this.logout = false;
        this.snackbarService.showSnackbar(
          'User successfully logged in',
          null,
          'info'
        );
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
