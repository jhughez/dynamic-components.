import {Component, OnInit} from '@angular/core';
import {QuestionItem} from './question-item';
import {TextBoxQuestionComponent} from "./text-box-question.component";
import {TextAreaQuestionComponent} from "./text-area-question.component";

@Component({
  selector: 'app-root',
  template: `
      <div>
          <app-ad-banner [questions]="questions"></app-ad-banner>
      </div>
  `
})
export class AppComponent implements OnInit {
  questions: QuestionItem[];

  ngOnInit() {
    this.questions = [
      new QuestionItem(TextBoxQuestionComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new QuestionItem(TextBoxQuestionComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new QuestionItem(TextAreaQuestionComponent,   {headline: 'Hiring for several positions',
        body: 'Submit your resume today!'}),

      new QuestionItem(TextAreaQuestionComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
    ];
  }
}

