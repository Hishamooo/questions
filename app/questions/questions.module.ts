import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QuestionsPage } from './questions.page';

import { QuestionsPageRoutingModule } from './questions-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule
  ],
  declarations: [QuestionsPage]
})
export class QuestionsPageModule {}
