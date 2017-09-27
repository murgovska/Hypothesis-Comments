import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as _ from 'lodash';

@Injectable()
export class AuthenticationService {
    authenticated : boolean;
    constructor(private http: Http) {
     }
    

    login(username: string, password: string) {
        return this.http.get('https://demo3203312.mockable.io/users')
            .map((response: Response) => {
                let user = _.find(response.json(), { 'username': username });
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.authenticated = true;
                }
                else{
                    this.authenticated = false;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}