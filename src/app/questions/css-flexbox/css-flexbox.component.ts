import { Component, OnInit } from '@angular/core';
import { BaseQuestionComponent } from '../base-question/base-question.component';

@Component({
  selector: 'app-css-flexbox',
  templateUrl: './css-flexbox.component.html',
  styleUrls: ['./css-flexbox.component.scss'],
})
export class CssFlexboxComponent extends BaseQuestionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
