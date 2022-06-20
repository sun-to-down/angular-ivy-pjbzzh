import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appTopBar } from './appTopBar/appTopBar';
import { appProductList } from './app-product-list/app-product-list';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, appTopBar, appProductList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
