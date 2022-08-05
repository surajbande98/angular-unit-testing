import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  cities: { name: string; image: string; alt: string }[] = [];
  
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getCities().subscribe({
      next: (res) => this.cities = res
    });
  }
}