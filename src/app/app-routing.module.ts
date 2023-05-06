import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPerfilComponent } from './pages/edit-perfil/edit-perfil.component';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { EditGuard } from './helpers/edit.guard';
import { LoginGuard } from './helpers/login.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate : [LoginGuard]
  },
  {
    path: 'edit-perfil',
    component: EditPerfilComponent,
    canActivate : [EditGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
