import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    ser;
  constructor(private router:Router) { }
  search()
  {
      if(this.ser!= undefined){
        this.router.navigate(['/search/' + this.ser]);
      }
  }
  ngOnInit() {
  }

}
