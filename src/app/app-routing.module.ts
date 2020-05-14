import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientComponent } from './http-client/http-client.component';


const routes: Routes = [
  { path: '**', component: HttpClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
