import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ViewAllMovieComponent } from './view-all-movie/view-all-movie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from '@angular/router';
const adminRoute:Routes=[
  {path:'admin',component:AdminComponent,
  children:[
  
    {path:'add-movie',component:AddMovieComponent},
    {path:'update-movie',component:UpdateMovieComponent},
    {path:'view-all-movies',component:ViewAllMovieComponent},
 {path:'admin-logout',component:LogoutComponent}
]

  }]
@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    ViewAllMovieComponent,
    AdminloginComponent,
    AdminComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(adminRoute, {useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
