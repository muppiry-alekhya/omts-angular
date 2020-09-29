import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieserviceService} from '../movieservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit 
{
  message: string;
  constructor(public movieservice: MovieserviceService,private router: Router) { }
  ngOnInit(): void {
  }
}
