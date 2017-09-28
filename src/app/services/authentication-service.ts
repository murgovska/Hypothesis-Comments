import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    Response
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as _ from 'lodash';

@Injectable()
export class AuthenticationService {
    authenticated: boolean;
    constructor(private http: Http) {}


    login(username: string, password: string) {
        return this.http.get('http://demo9405102.mockable.io/hypusers')
            .map((response: Response) => {
                let user = _.find(response.json(), {
                    "username": username,
                    "password": password
                });
                if (user) {
                    this.authenticated = true;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                } else {
                    this.authenticated = false;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}