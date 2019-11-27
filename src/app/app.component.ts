import { Component,ChangeDetectorRef,AfterContentChecked  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
@Component({ selector: 'app', templateUrl: 'app.component.html'})
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