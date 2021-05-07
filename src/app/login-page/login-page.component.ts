import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{LoginoutService} from '../loginout.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }  
  constructor(private router:Router,private loginoutService:LoginoutService ) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if((this.credentials.username!="" && this.credentials.password!="")&&(this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log(this.credentials);
      //token generate
      this.loginoutService.getTokenFromServer(this.credentials).subscribe((data:any)=>{
        console.log(data.token);        //the data we recive from the server is an object with property named token so we can use data.token as token is the property of the object we recieve from the server

        // we will login now . The token will be stored in the local storage
        this.loginoutService.loginUser(data.token);
        window.location.href="/add-app";
      },
      error =>console.log(error))
      
    }
    else{
      console.log("Feilds are empty");
    }
  }
}
