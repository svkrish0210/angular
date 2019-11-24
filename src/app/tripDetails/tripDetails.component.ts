import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })

@Component({selector: 'app-root',templateUrl: 'tripDetails.component.html',styleUrls: ['tripDetails.component.css']})
export class TripDetailsComponent {

    constructor(
        private authenticationService: AuthenticationService
    ) {}

    texto : string = 'Wenceslau Braz - Cuidado com as cargas';
    lat: number = -23.8779431;
    lng: number = -49.8046873;
    zoom: number = 15;
    currentUser = this.authenticationService.currentUserValue;

    getMap(textTo,latitude,longitude){
        console.log(textTo);
        this.texto=textTo;
        this.lat=latitude;
        this.lng=longitude;
        this.zoom=15;
    }
}
