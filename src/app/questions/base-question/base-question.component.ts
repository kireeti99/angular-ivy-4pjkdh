import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-question',
  template: '',
  styles: [],
})
export abstract class BaseQuestionComponent {
  @Input() questionNumber: number = 0;
}