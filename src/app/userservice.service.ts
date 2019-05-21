import { Injectable } from '@angular/core';
import { User} from './model/model';
import { HttpClient } from '@angular/common/http';
import { IEemployee } from './Employee';
import { Observable } from 'rxjs';

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

  private _url:string ='/assets/Data/employees.json'
  getuser(){
    return this.user;
  }

  getarray(): Observable<IEemployee[]>{
      return this.http.get<IEemployee[]>(this._url)
   
  }

  
  constructor( private http: HttpClient) { }
}


    
  

   

  
