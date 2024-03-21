import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[authGuard]},
  {path:'post',component:PostlistComponent,canActivate:[authGuard]},
  {path:'addPost',component:AddpostComponent,canActivate:[authGuard]},
  {path:'post/:id',component:PostdetailsComponent,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
