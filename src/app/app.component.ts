import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    currentUser:any;

    constructor(private userSvc:UserService, private router:Router)
    {
        this.userSvc.currentUser.subscribe(user=>this.currentUser=user);
    }

    logout(){
        this.userSvc.clearUserState();
        this.router.navigate(['/login']);
    }
}
