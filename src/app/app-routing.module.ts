import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ViewAllMovieComponent } from './view-all-movie/view-all-movie.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-movie',component:AddMovieComponent},
   {path:'update-movie',component:UpdateMovieComponent},
   {path:'view-all-movies',component:ViewAllMovieComponent},
   {path:'admin-logout',component:LogoutComponent},
   
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
