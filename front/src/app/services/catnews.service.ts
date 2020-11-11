import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatnewsService {
  url = "http://localhost:8899/api/";
  constructor(private http: HttpClient) { }
  getfetchcategory() {
      return this.http.get(this.url + "fetchcategory");
  }
  getlatestnews(){
    return this.http.get(this.url+"latestnews");
  }
  getnewsCategoryBy(id){
    return this.http.get(this.url+"newsbycategory/"+id);
  }
  postfeedback(data){
    return this.http.post(this.url+"feedback", data);
  }
  getsearch(data){
    return this.http.get(this.url + "search/" + data);
  }
  postfeed(data){
    return this.http.post(this.url+"feed", data);
  }
}
