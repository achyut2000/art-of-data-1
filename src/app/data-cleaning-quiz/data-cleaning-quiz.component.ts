import { Component, OnInit } from '@angular/core';
import { QuestionbankService } from '../services/questionbank.service';
@Component({
  selector: 'app-data-cleaning-quiz',
  templateUrl: './data-cleaning-quiz.component.html',
  styleUrls: ['./data-cleaning-quiz.component.css']
})
export class DataCleaningQuizComponent implements OnInit {

  constructor(public itemService: QuestionbankService) {}

  ngOnInit(): void {
    console.log('ngOnit ran');
    this.itemService.getItems().subscribe(items => {
      console.log(items);
    });
  }

}
