import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
 {
  path:"",
  redirectTo:"front",
  pathMatch:"full"
 },
 {
  path:"front",
  loadChildren:() => import('./front/front.module').then((m)=> m.FrontModule)
 },
//  {
//   path:"**",
//   component:PageNotFoundComponent
//  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
