import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'questionProfile/:id',
    loadChildren: () => import('./questionProfile/questionProfile.module').then( m => m.QustionsProfilePageModule)
  },
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
