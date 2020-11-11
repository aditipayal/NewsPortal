import { CatnewsService } from './../../services/catnews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  resData;
  catData;
  constructor(private nser: CatnewsService) { }

  ngOnInit() {
    this.nser.getfetchcategory()
    .subscribe(res => {
      this.resData = res;
      if (this.resData.err==0) {
        this.catData = this.resData.cdata;
      }
    })
  }

}
