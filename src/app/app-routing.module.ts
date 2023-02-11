import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DrawerComponent } from './components/drawer/drawer.component';

const routes: Routes = [
  {
    path: 'login',
    component: DrawerComponent,
    data: { title: 'Login' },
  },
  {
    path: 'signup',
    component: DrawerComponent,
    data: { title: 'SignUp' },
  },
  {
    path: 'home',
    component: AppComponent,
    data: { title: 'Home' },
  },
  {
    path: '**',
    redirectTo: 'Home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
