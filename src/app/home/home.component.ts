import { Component } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {

    constructor(
        private authenticationService: AuthenticationService
    ) {}
    currentUser = this.authenticationService.currentUserValue;
}
