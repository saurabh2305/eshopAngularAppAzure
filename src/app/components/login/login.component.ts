import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userForm: FormGroup;

    constructor(private fb: FormBuilder, private userSvc: UserService, private router:Router) {
        this.userForm = this.fb.group({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(8)]))
        })
    }
    public get Username() {
        return this.userForm.controls["username"];
    }
    public get Password() {
        return this.userForm.controls["password"];
    }


    ngOnInit() {
    }

    login() {
        if(this.userForm.valid){
            this.userSvc.getToken(this.userForm.value)
            .subscribe(
                res=>{
                    this.userSvc.saveUserState(res);
                    this.router.navigate(['/']);
                },
                err=>{
                    alert("Login failed")
                }
            )
        }else{
            alert("Invalid login data")
        }
    }
}
