import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:8899/api/';
  constructor(private http: HttpClient) {
  }
  addpostcategory(data) {
    return this.http.post(this.url + 'addcategory' , data);
  }
  addpostnews(data) {
    return this.http.post(this.url + 'addnews' , data);
  }

  addgetcategory() {
    return this.http.get(this.url + 'fetchcategory' );
  }
  addgetnews() {
    return this.http.get(this.url + 'fetchnews');
  }
  deletegetcategory(id) {
    return this.http.get(this.url + 'deletecat/' + id);
   }
   deletegetnews(id) {
    return this.http.get(this.url + 'deletenews/' + id);
   }
   addgetcategorybyid(id) {
    return this.http.get(this.url + 'fetchcategorybyid/' + id);
  }
  addgetnewsbyid(id) {
    return this.http.get(this.url + 'fetchnewsbyid/' + id);
  }
  addpostcategorybyid(data, id) {
    return this.http.post(this.url + 'updatecategory/' + id, data);
  }
  addpostnewsbyid(data, id) {
    return this.http.post(this.url + 'updatenews/' + id, data);
  }
  addgetfeed() {
    return this.http.get(this.url + 'fetchfeed');
  }
}
