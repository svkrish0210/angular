import { Component,OnInit, Input   } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../_services';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

@Component({selector: 'app',
templateUrl: 'tripDetails.component.html',
styleUrls: ['tripDetails.component.css']})
export class TripDetailsComponent implements OnInit{
     constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {}
    
    texto : string = 'Wenceslau Braz - Cuidado com as cargas';
    lat: number = -23.8779431;
    lng: number = -49.8046873;
    zoom: number = 15;
    currentUser = this.authenticationService.currentUserValue;
    response: any={};
    
    getRow(event){
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(target.attributes.location.value);
    console.log(target.attributes.latitude.value);
    console.log(target.attributes.longitude.value);

    this.texto=target.attributes.location.value;
    this.lat=Number(target.attributes.latitude.value);
    this.lng=Number(target.attributes.longitude.value);
    this.zoom=15;
    }

    ngOnInit(){
            this.http.get(`${config.apiUrl}/tripDetails`).subscribe((data:any)=>{
            this. response= data;
        });
     }


    getResponse(){
        console.log(this.response);
    }



    
}
