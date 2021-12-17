import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { questionProfilePage } from './questionProfile.page';

import { QuestionProfilePageRoutingModule } from './questionProfile-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionProfilePageRoutingModule
  ],
  declarations: [questionProfilePage]
})
export class QustionsProfilePageModule {}
