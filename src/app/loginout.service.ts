import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginoutService {

  constructor(private httpClient:HttpClient) { }

  private url="https://pass-save-springboot.herokuapp.com";
   //calling server to generate token
   getTokenFromServer(credentials:any){
    return this.httpClient.post(`${this.url}/token`,credentials);
  }
 


  //for login user we need to set the token in the local storage
  loginUser(token){
    localStorage.setItem("token",token);   //key value pair
    return true;
  }
  //for getting the token
  getToken()
  {
    return localStorage.getItem("token");
  }

  //to check weather logged in or not
  isLoggedIn(){
    let token=localStorage.getItem("token");    //as we set the key as token(key)
    if(token==undefined || token==null || token==='')
    {
      return false;
    }
    else{
      return true;
    }
  }
  //logout
  logout(){
    localStorage.removeItem('token');
    return true;
  }
}

