import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'questionProfile.page.html',
  styleUrls: ['questionProfile.page.scss'],
})
export class questionProfilePage {
  questionId:any;
  details:any;
  imageProfile;
  constructor(private route: ActivatedRoute,private service:ServiceService
) {}
  ngOnInit() {
    
   
    this.questionId = this.route.snapshot.paramMap.get('id');
    console.log(this.questionId)
    this.getQuestionDetails();

  }
  getQuestionDetails(){
    this.service.getQuestionDetails(this.questionId).subscribe((data:any) => {
      this.details=data.items[0];
      this.imageProfile=data.items[0].owner.profile_image;
      console.log(this.details)
    }) 
  }

}
