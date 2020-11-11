import { CategoryService } from './../../../services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  myImage;
  myform: FormGroup;
  constructor(private fb: FormBuilder, private catser: CategoryService) { }
  ci(event) {
    if (event.target.files.length > 0) {
      this.myImage = event.target.files[0];
      console.log(this.myImage);
    }
  }
  ngOnInit() {
    this.validate();
  }
  addcat() {
    let formData = new FormData();
    formData.append('cname', this.myform.controls.cname.value);
    formData.append( 'description', this.myform.controls.description.value);
    formData.append('Image', this.myImage);
    this.catser.addpostcategory(formData)
   .subscribe(res => {
     console.log(res);
   });
  }
  validate() {
    this.myform = this.fb.group(
    {
      'cname' : ['', Validators.required],
      'description' : ['', Validators.required],

    }
  )
  }
}
