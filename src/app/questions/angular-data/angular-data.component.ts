import { Component, OnInit } from '@angular/core';
import { BaseQuestionComponent } from '../base-question/base-question.component';

@Component({
  selector: 'app-angular-data',
  templateUrl: './angular-data.component.html',
  styleUrls: ['./angular-data.component.scss'],
})
export class AngularDataComponent extends BaseQuestionComponent {
  public showExtraCredit: boolean = false;
  public showHints: boolean = false;

  constructor() {
    super();
  }

  public toggleExtraCredit() {
    this.showExtraCredit = !this.showExtraCredit;
  }

  public toggleHints() {
    this.showHints = !this.showHints;
  }
}
