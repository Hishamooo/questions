import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }
  setHeader(){
    let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers = headers.set('Accept', 'application/json');
    console.log(headers)
    return headers;
    
  }
  getAllQuestions(){
    const headers = this.setHeader();
    return  this.http.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow', { headers:headers });

  }
  getQuestionDetails(id){
    const headers = this.setHeader();
    return  this.http.get('https://api.stackexchange.com/2.3/questions/'+id+'?order=desc&sort=activity&site=stackoverflow', { headers:headers });

  }
}
