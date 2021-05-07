import { Component, OnInit } from '@angular/core';
import { Apps } from '../apps';
import{AppsService} from '../apps.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  apps:Apps[];
  constructor(private appService: AppsService ,private router:Router) { }

  ngOnInit(): void {
    this.getAllApps();
  }
  getAllApps(){
    this.appService.getappList().subscribe(data=>{
      this.apps=data;
    })
  }

  updateApp(name:String){
    this.router.navigate(['update-app',name])
  }
  deleteApp(name:String){
    this.appService.deleteApp(name).subscribe(data=>{
      this.getAllApps();
    })
  }
}
