import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.css']
})
export class EditnewsComponent implements OnInit {
  myform: FormGroup;
  cid;
  resdata;
  formData;
  myImage;
  constructor(private fb: FormBuilder, private ar: ActivatedRoute, private cser: CategoryService) { }
  ci(event) {
    if (event.target.files.length > 0) {
      this.myImage = event.target.files[0];
      console.log(this.myImage);
    }
  }
  ngOnInit() {
    this.validate();
    this.ar.params.subscribe(par => {
      this.cid = par.id;
      this.cser.addgetnewsbyid(this.cid)
      .subscribe(res => {
        this.resdata = res;
        if (this.resdata.err == 0) {
            this.myform.controls.cname.patchValue(this.resdata.cdata[0].cname);
            this.myform.controls.title.patchValue(this.resdata.cdata[0].title);
            this.myform.controls.body.patchValue(this.resdata.cdata[0].body);
        }
      });
    });
  }
  editnews(id) {
    let formData = new FormData();
    let uid = this.cid;
    formData.append(
      'cname', this.myform.controls.cname.value);
    formData.append(
      'title', this.myform.controls.title.value);
    formData.append(
        'body', this.myform.controls.body.value);
    formData.append(
      'Image', this.myImage);
    this.cser.addpostnewsbyid(formData, uid)
   .subscribe(res => {
     console.log(res);
   });
  }
  validate() {
      this.myform = this.fb.group({
        'cname' : ['', Validators.required],
        'title' : ['', Validators.required],
        'body' : ['', Validators.required]
      });
  }
}