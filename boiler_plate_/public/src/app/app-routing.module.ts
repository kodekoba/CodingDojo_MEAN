import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

//update routes dependent on wireframe
const routes: Routes = [
  // {path:'', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component:HomeComponent},
  {path: 'p/new', component:NewComponent},
  {path: 'p/details/:id', component:DetailsComponent},
  {path: 'p/edit/:id', component:EditComponent},
  {path: 'p', component:ParentComponent},
  {path: 'c', component:ChildComponent},
  //catch all
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
