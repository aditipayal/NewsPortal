import { CatnewsService } from './../../services/catnews.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myform: FormGroup;
  constructor(private fb: FormBuilder, private nser: CatnewsService) { }
  contactus() {
    let fdata = this.myform.getRawValue();
    console.log(fdata);
    this.nser.postfeedback(fdata)
    .subscribe(res =>{
      console.log(res);
    });
    this.nser.postfeed(fdata)
    .subscribe(res =>{
      console.log(res);
    })
  }
  ngOnInit() {
    this.validate();
  }
 validate(){
   this.myform = this.fb.group({
     'name' : ['',Validators.required],
     'email' : ['',Validators.required],
     'mobile' : ['',Validators.required],
     'message' : ['',Validators.required],
   })
 }
}
