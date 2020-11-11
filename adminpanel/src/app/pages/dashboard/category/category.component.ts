import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  resData;
  catData;
  constructor(private catser: CategoryService) { }
  delcat(id) {
   this.catser.deletegetcategory(id)
   .subscribe(res => {
    this.catser.addgetcategory()
    .subscribe(res => {
        this.resData = res;
        if(this.resData.err == 0) {
          this.catData = this.resData.cdata;
        }
    })
   })
  }
  ngOnInit() {
    this.catser.addgetcategory()
    .subscribe(res => {
        this.resData = res;
        if(this.resData.err == 0) {
          this.catData = this.resData.cdata;
        }
    })
  }

}
