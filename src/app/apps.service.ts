import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Apps } from './apps';
import{LoginoutService} from './loginout.service';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  private baseUrl="http://localhost:9090/apps";
  
  constructor(private httpClient:HttpClient,private loginoutService:LoginoutService ) { }
  
 private httpheader=new HttpHeaders({
    Authorization:`Bearer ${this.loginoutService.getToken()}`
  });

  getappList():Observable<Apps[]>{
    return this.httpClient.get<Apps[]>(`${this.baseUrl}`,{headers:this.httpheader});
  }
  addnewapp(app:Apps):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,app,{headers:this.httpheader});
  }
  getAppByName(name:String):Observable<Apps>{
    return this.httpClient.get<Apps>(`${this.baseUrl}/${name}`,{headers:this.httpheader});
  }
  deleteApp(name:String):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${name}`,{headers:this.httpheader});
  }
 

}

