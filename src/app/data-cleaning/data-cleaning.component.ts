import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-cleaning',
  templateUrl: './data-cleaning.component.html',
  styleUrls: ['./data-cleaning.component.css']
})
export class DataCleaningComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router){}

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`]);
  }

}
