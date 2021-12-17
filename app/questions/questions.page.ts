import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-questions',
  templateUrl: 'questions.page.html',
  styleUrls: ['questions.page.scss'],
})
export class QuestionsPage {
  questions: [];
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  lastQuestion
  orgQuestion
  constructor(private service:ServiceService) {
      
  }

  ngOnInit() {
    this.getAllQuestions();
  }
getAllQuestions(){
  this.service.getAllQuestions().subscribe((data:any) => {
    this.questions=data.items;
    console.log(this.questions)
    if (data.items.length) {
      this.orgQuestion = data.items;
      this.lastQuestion = data.items[data.items.length - 1];
    } else {
      this.orgQuestion = data.items;
      this.lastQuestion = undefined;
    }
  }) 
}
// loadData(event) {
//   this.service.getAllQuestions().subscribe((data:any) => {
//     const items = data.items;
//     if (items.length) {
//       this.orgQuestion = this.orgQuestion.concat(items);
//       this.lastQuestion = items[items.length - 1];
//       event.target.complete();
//     } else {
//       event.target.disabled = true;
//     }
//   }) 
// }
// toggleInfiniteScroll() {
//   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
// }
}
