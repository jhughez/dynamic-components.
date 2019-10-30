import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { TextAreaQuestionComponent }   from './text-area-question.component';
import { ChecklistComponent }    from './checklist.component';
import { TextBoxQuestionComponent } from './text-box-question.component';
import { QuestionDirective }          from './question.directive';

@NgModule({
  imports: [ BrowserModule ],
  providers: [],
  declarations: [ AppComponent,
                  ChecklistComponent,
                  TextAreaQuestionComponent,
                  TextBoxQuestionComponent,
                  QuestionDirective ],
  entryComponents: [ TextAreaQuestionComponent, TextBoxQuestionComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

