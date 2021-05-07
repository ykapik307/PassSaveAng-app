import { Component } from '@angular/core';
import{LoginoutService} from './loginout.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordSaver-app';
  constructor(private loginoutService:LoginoutService,private router:Router) { }

  Logout(){
    this.loginoutService.logout();
    this.router.navigate(['/login-page']);

  }
}
