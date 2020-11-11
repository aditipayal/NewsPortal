import { CatnewsService } from './../../services/catnews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
  newsData;
  constructor(private nser:CatnewsService) { }

  ngOnInit() {
    this.nser.getlatestnews()
    .subscribe(res=>{
      this.resData = res;
      if(this.resData.err == 0){
        this.newsData = this.resData.ndata;
      }
    })
  }

}
