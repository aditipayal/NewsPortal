import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
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
      this.cser.addgetcategorybyid(this.cid)
      .subscribe(res => {
        this.resdata = res;
        if (this.resdata.err == 0) {
            this.myform.controls.cname.patchValue(this.resdata.cdata[0].cname);
            this.myform.controls.description.patchValue(this.resdata.cdata[0].description);
        }
      });
    });
  }
  editcat(id) {
    let formData = new FormData();
    let uid = this.cid;
    formData.append(
      'cname', this.myform.controls.cname.value);
    formData.append(
      'description', this.myform.controls.description.value);
    formData.append(
      'Image', this.myImage);
    this.cser.addpostcategorybyid(formData, uid)
   .subscribe(res => {
     console.log(res);
   });
  }
  validate() {
      this.myform = this.fb.group({
        'cname' : ['', Validators.required],
        'description' : ['', Validators.required]
      })
  }
}
