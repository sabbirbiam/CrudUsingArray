import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { HumanService } from './human.service';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HumanComponent}
    ])
  ],
  providers: [HumanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
