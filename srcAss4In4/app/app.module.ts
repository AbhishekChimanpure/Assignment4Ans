import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { LanguagesComponent } from './languages/languages.component';
import { DatabasesComponent } from './databases/databases.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatingSystemComponent,
    LanguagesComponent,
    DatabasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
