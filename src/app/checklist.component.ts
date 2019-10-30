import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { QuestionDirective } from './question.directive';
import { QuestionItem }      from './question-item';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner-example">
                <h3>Advertisements</h3>
                <ng-template question-host></ng-template>
              </div>
            `
})
export class ChecklistComponent implements OnInit {
  @Input() questions: QuestionItem[];
  @ViewChild(QuestionDirective, {static: true}) adHost: QuestionDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let viewContainerRef = this.adHost.viewContainerRef;

    for (const question of this.questions) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(question.component);
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<QuestionComponent>componentRef.instance).data = question.data;
    }
  }
}
