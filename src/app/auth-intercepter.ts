// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable,Injector } from "@angular/core";
// import { Observable } from "rxjs";
// import{LoginoutService} from './loginout.service';

// @Injectable({
//     providedIn: 'root'
//   })
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private injector:Injector ) { }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
//         let loginout=this.injector.get(LoginoutService);
//         let newReq=req;  //taking old header request and assigning it to the new request
//         let token=loginout.getToken()
//         console.log("Interceptor",token);
//         if(token!=null)
//         {
//             newReq=newReq.clone({setHeaders:{Authorization: `Bearer ${token}`}});
//         }
        

//         return next.handle(newReq);

//     }
// }