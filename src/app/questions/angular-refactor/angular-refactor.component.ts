// REFACTOR THE CODE BELOW

import { Component, OnInit } from '@angular/core';
import { BaseQuestionComponent } from '../base-question/base-question.component';
import { ApptsModel } from './angular-refactor.model';

@Component({
  selector: 'app-angular-refactor',
  templateUrl: './angular-refactor.component.html',
  styleUrls: ['./angular-refactor.component.scss'],
})
export class AngularRefactorComponent extends BaseQuestionComponent {
  public readonly appts: ApptsModel[] = [
    {
      warning: false,
      date: '07/10/2017',
      time: '8 AM - 9 AM PDT',
      type: 'Installation',
    },
    {
      warning: true,
      date: '07/13/2017',
      time: '9 AM - 10 AM PDT',
      type: 'Service',
    },
  ];

  constructor() {
    super();
  }
}
