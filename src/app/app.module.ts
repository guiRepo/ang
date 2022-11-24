import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FisrtComponentComponent } from './components/fisrt-component/fisrt-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FisrtComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
