import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { questionProfilePage } from './questionProfile.page';

const routes: Routes = [
  {
    path: '',
    component: questionProfilePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionProfilePageRoutingModule {}
