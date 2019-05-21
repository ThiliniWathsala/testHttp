import { Component, OnInit } from '@angular/core';
import { User } from '../model/model';
import {UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  userget2:User;
  public employees=[];
  constructor(private _emp:UserserviceService) { }

  ngOnInit() {
   this.userget2=this._emp.getuser();
    this._emp.getarray() 
        .subscribe(data => this.employees=data);
  }

}
