import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { HomeComponent } from './home/home.component';
import { MylistComponent } from './mylist/mylist.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'preference',component:PreferencesComponent},
  {path:'mylist',component:MylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
