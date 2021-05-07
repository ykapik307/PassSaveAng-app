import { Component, OnInit } from '@angular/core';
import { Apps } from '../apps';
import{AppsService} from '../apps.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {


  app:Apps=new Apps();
  constructor(private appService: AppsService,private router:Router) { }

  ngOnInit(): void {
  }

  saveapp(){
    this.appService.addnewapp(this.app).subscribe(data=>{
      this.gotoAppList();
    },
    error =>console.log(error))
    
  }
  gotoAppList(){
    this.router.navigate(['/app-list']);
  }
  onSubmit(){
   this.saveapp();
  }
 
  
}
