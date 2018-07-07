import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabasesComponent } from './databases/databases.component';
import { LanguagesComponent } from './languages/languages.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';

const routes: Routes = [
  {path : 'Databases', component:DatabasesComponent},
  {path : 'languages' ,component:LanguagesComponent},
  {path : 'OperatingSystem' ,component:OperatingSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
