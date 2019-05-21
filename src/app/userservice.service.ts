import { Injectable } from '@angular/core';
import { User} from './model/model';
//import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  user:User={
    fname:'thilini',
  lname:'wathsala',
 address:{
    no:'10',
    street:'sudarshana road',
  }

  


  }

  getuser(){
    return this.user;
  }

  getarray(){

    return [
      { "Name":"Thilini","Age":"22"},
      {"Name":"janith","Age":"24"}
  
    ]
  }

  
 // constructor( private http:HttpClient) { }
}


    
  

   

  
