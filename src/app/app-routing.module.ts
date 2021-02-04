import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormModelComponent } from './form-model/form-model.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form' },
  { path: 'form', component: FormModelComponent },
  { path: '**', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
