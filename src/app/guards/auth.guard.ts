import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private log:LoginComponent){}
  canActivate(){
    if(this.log.getData()){    
      return true;
    }else{      
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
