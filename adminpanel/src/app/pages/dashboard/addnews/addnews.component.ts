import { CategoryService } from './../../../services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  myform: FormGroup;
  resData;
  catData;
  myImage;
  constructor(private fb: FormBuilder, private cser: CategoryService) { }
  ci(event)
  {
    if(event.target.files.length > 0)
    {
      this.myImage = event.target.files[0];
      console.log(this.myImage);
    }
  }
  addnews(){
      let formData = new FormData;
      formData.append('cname', this.myform.controls.cname.value);
      formData.append('title', this.myform.controls.title.value);
      formData.append('body', this.myform.controls.body.value);
      formData.append('Image', this.myImage);
      console.log(formData);
      console.log(this.myform.controls.title.value);
      this.cser.addpostnews(formData)
      .subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        })
  }
  ngOnInit() {
    this.validate();
    this.cser.addgetcategory()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catData=this.resData.cdata;
        }
      })
  }
  validate() {
    this.myform = this.fb.group({
    'cname' : ['', Validators.required],
    'title' : ['', Validators.required],
    'body'  : ['', Validators.required]
  });
}
}

