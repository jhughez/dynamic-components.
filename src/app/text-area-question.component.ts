import { Component, Input } from '@angular/core';

import { QuestionComponent }      from './question.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `
})
export class TextAreaQuestionComponent implements QuestionComponent {
  @Input() data: any;

}

