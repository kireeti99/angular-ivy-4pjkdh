import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appt',
  templateUrl: './appt.component.html',
  styleUrls: ['./appt.component.scss'],
})
export class ApptComponent implements OnInit {
  constructor() {}

  public warning: boolean = false;

  ngOnInit() {}
}
