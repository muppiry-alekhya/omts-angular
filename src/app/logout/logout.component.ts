import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieserviceService } from 'src/app/movieservice.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public movieservice:MovieserviceService, public router: Router) { }

  ngOnInit(): void {
    this.movieservice.logOut();
    this.router.navigate(['adminlogin'])
  }

}
