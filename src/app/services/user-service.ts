import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions,
    Response
} from '@angular/http';

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    getAll() {
        return this.http.get('http://demo9405102.mockable.io/hypusers').map((response: Response) => response.json());
    }

}