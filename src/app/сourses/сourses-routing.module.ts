import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { СoursesComponent } from './сourses.component';
import { CoursesNameComponent } from './courses-name/courses-name.component';
import { CoursesTopicsComponent } from './courses-topics/courses-topics.component';

const routes: Routes = [
  {
    path: '',
    component: СoursesComponent,
    children: [
      { path: '', redirectTo: 'name', pathMatch: 'full' },
      { path: 'name', component: CoursesNameComponent },
      { path: 'topic', component: CoursesTopicsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
