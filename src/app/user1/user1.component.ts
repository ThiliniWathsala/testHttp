import { Component, OnInit } from '@angular/core';
import {UserserviceService } from '../userservice.service';
import { User } from '../model/model';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  userget1:User;
 

  constructor(private _empUser:UserserviceService) {
    
   }

  ngOnInit() {
    this.userget1=this._empUser.getuser();
   
  }

}
