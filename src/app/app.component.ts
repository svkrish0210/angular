import { Component,ChangeDetectorRef,AfterContentChecked  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
@Component({ selector: 'app', templateUrl: 'app.component.html',
/* styleUrls: [
'../vendor/bootstrap/css/bootstrap.min.css',
'../fonts/font-awesome-4.7.0/css/font-awesome.min.css',
'../fonts/iconic/css/material-design-iconic-font.min.css',
'../vendor/animate/animate.css',
'../vendor/css-hamburgers/hamburgers.min.css',
'../vendor/animsition/css/animsition.min.css',
'../vendor/select2/select2.min.css',
'../vendor/daterangepicker/daterangepicker.css',
'../css/util.css',
'../css/main.css'], */
})
    export class AppComponent {

    currentUser: any;
    loading = false;
    error: string;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }



    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}