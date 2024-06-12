import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spc-icon',
  templateUrl: './spc-icon.component.html',
  styleUrls: ['./spc-icon.component.scss'],
})
export class SpcIconComponent implements OnInit {
  @Input() ico: string = '';

  constructor() {}

  ngOnInit() {}
}
