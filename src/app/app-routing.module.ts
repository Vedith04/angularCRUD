import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { ContactusComponent } from '../app/components/contactus/contactus.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
