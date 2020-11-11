import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  resData;
  newsData;
  constructor(private cser: CategoryService) { }
  delnews(id) {
   this.cser.deletegetnews(id)
   .subscribe(res => {
    this.cser.addgetnews()
    .subscribe(res => {
        this.resData = res;
        if(this.resData.err == 0) {
          this.newsData = this.resData.cdata;
        }
    })
   })
  }
  ngOnInit() {
    this.cser.addgetnews()
    .subscribe(res => {
        this.resData = res;
        if(this.resData.err == 0) {
          this.newsData = this.resData.cdata;
        }
    })
  }

}

