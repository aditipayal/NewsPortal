import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  myform: FormGroup;
  msg;
  uid;
  constructor(private fb: FormBuilder, private lser: LoginService) { }
  // tslint:disable-next-line:typedef
  changepass() {
    let fData = this.myform.getRawValue();
    if (fData.newpass == fData.conpass) {
        // tslint:disable-next-line:object-literal-key-quotes
        this.lser.changepass({'oldpass': fData.oldpass, 'newpass': fData.newpass,'uid': localStorage.getItem('sid')})
        .subscribe(res => {
          console.log(res);
        })
    }
    else {
      this.msg = 'New pass and Confirm password does not Match';
    }
  }
  ngOnInit() {
    this.validate();
  }
  validate() {
    this.myform = this.fb.group({
        'oldpass' :['',Validators.required],
        'newpass' :['', Validators.required],
        'conpass' :['',Validators.required]
    })
  }
}
