import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
const routes: Routes = [
  {
       path: 'addcandidate',
       component: AddCandidateComponent
  },
  {
      path: 'viewcandidate',
      component: ViewCandidateComponent
  },
  {
    path: 'searchcandidate',
    component: SearchCandidateComponent,
},
{
  path: 'updateCandidate',
    component: UpdateCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
