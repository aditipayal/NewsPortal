import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  resData;
  feedData;
  // tslint:disable-next-line:typedef-whitespace
  constructor(private cser: CategoryService) { }

  ngOnInit() {
    this.cser.addgetfeed()
    .subscribe(res => {
        this.resData = res;
        if(this.resData.err == 0) {
          this.feedData = this.resData.fdata;
        }
    })
  }

}
