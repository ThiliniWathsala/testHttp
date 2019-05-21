import { Injectable } from '@angular/core';
import { User} from './model/model';


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

  
  constructor() { }
}


    
  

   

  
