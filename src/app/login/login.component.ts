import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';

import {
    AlertService,
    AuthenticationService
} from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    userAuthenticated: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.userAuthenticated = true;
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.userAuthenticated = this.authenticationService.authenticated;
                },
                error => {
                    this.alertService.error(error);
                });

    }
}