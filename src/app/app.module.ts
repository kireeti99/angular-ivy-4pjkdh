import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CssListComponent } from './questions/css-list/css-list.component';
import { CssFlexboxComponent } from './questions/css-flexbox/css-flexbox.component';
import { AngularRefactorComponent } from './questions/angular-refactor/angular-refactor.component';
import { ApptComponent } from './questions/angular-refactor/appt/appt.component';
import { SpcIconComponent } from './questions/angular-refactor/spc-icon/spc-icon.component';
import { AngularDataComponent } from './questions/angular-data/angular-data.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CssListComponent,
    CssFlexboxComponent,
    AngularRefactorComponent,
    ApptComponent,
    SpcIconComponent,
    AngularDataComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
