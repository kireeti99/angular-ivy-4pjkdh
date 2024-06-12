import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseQuestionComponent } from '../base-question/base-question.component';

@Component({
  selector: 'app-css-list',
  templateUrl: './css-list.component.html',
  styleUrls: ['./css-list.component.scss'],
})
export class CssListComponent extends BaseQuestionComponent implements OnInit {
  // example data
  public listA = ['A1', 'A2', 'A3', 'A4']; // Can have 0 or more values
  public listB = ['B0', 'B1', 'B2', 'B3']; // Has at least 1 value
  public listC = ['C1', 'C2', 'C3', 'C4']; // Can have 0 or more values

  // example data
  public listA2 = [];
  public listB2 = ['B0'];
  public listC2 = [];

  public componentListA$: Observable<string[]> = of(this.listA);
  public componentListB$: Observable<string[]> = of(this.listB);
  public componentListC$: Observable<string[]> = of(this.listC);

  constructor() {
    super();
  }

  ngOnInit() {}
}
