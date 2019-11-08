import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    readonly API_URL: string = "http://localhost:53655/api/auth";
    userSubject: BehaviorSubject<any>;
    currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.userSubject=new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")));
        this.currentUser=this.userSubject.asObservable();
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.API_URL}/register`, user);
    }

    getToken(loginData: any): Observable<any> {
        return this.http.post<any>(`${this.API_URL}/token`, loginData);

    }

    saveUserState(userData){
        localStorage.setItem("user", JSON.stringify(userData));
        this.userSubject.next(userData);
    }

    clearUserState(){
        localStorage.clear();
        this.userSubject.next(null);
    }

    public get User() : any {
        return this.userSubject.value;
    }
    
}
