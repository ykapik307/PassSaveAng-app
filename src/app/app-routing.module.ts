import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddAppComponent} from './add-app/add-app.component';
import{AppListComponent} from'./app-list/app-list.component';
import {UpdateAppListComponent} from './update-app-list/update-app-list.component';
import{LoginPageComponent} from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'add-app',component:AddAppComponent, canActivate:[AuthGuard]},
  {path:'app-list',component:AppListComponent,canActivate:[AuthGuard]},
  {path:'update-app/:name',component:UpdateAppListComponent,canActivate:[AuthGuard]},
  {path:'login-page',component:LoginPageComponent},
  {path:'',redirectTo:'login-page',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
