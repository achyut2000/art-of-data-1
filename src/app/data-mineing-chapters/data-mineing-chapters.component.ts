import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-mineing-chapters',
  templateUrl: './data-mineing-chapters.component.html',
  styleUrls: ['./data-mineing-chapters.component.css']
})
export class DataMineingChaptersComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router){}

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`]);
  }

}
