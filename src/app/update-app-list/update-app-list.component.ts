import { Component, OnInit } from '@angular/core';
import { Apps } from '../apps';
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import{AppsService} from '../apps.service';


@Component({
  selector: 'app-update-app-list',
  templateUrl: './update-app-list.component.html',
  styleUrls: ['./update-app-list.component.css']
})
export class UpdateAppListComponent implements OnInit {

  app:Apps=new Apps();
  name:String;
  constructor(private appService: AppsService,private router:Router,private routee:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.routee.snapshot.params['name'];
    this.appService.getAppByName(this.name).subscribe(data=>{
      this.app=data;
    },error=>console.log(error)
    )
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
