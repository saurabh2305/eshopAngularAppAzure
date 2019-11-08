import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    userForm: FormGroup;

    constructor(private fb: FormBuilder, private userSvc: UserService) {
        this.userForm = this.fb.group({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(8)])),
            fullname: new FormControl("", Validators.required),
            email: new FormControl("", Validators.compose([Validators.required, Validators.email]))            
        })
    }

    ngOnInit() {
    }

    public get Username() {
        return this.userForm.controls["username"];
    }
    public get Password() {
        return this.userForm.controls["password"];
    }
    public get Fullname() {
        return this.userForm.controls["fullname"];
    }
    public get Email() {
        return this.userForm.controls["email"];
    }

    register() {
        if (this.userForm.valid) {
            let user: User = this.userForm.value;
            user.role="user";
            this.userSvc.addUser(user)
                .subscribe(
                    result => {
                        console.log(result);
                        alert("Registered successfully");
                    },
                    err => { alert("Error in registering user") }
                )
        } else {
            alert("Invalid form data")
        }
    }

}
