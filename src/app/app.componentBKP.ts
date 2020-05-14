import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  zoom: number = 10;
  lat: number = 42.858217;
  lng: number = -70.929990;

  //markers
  markers: marker[] = [
  	{
  		name:'company one',
  		lat: 42.868164,
  		lng: -71.889071,
  		draggable: true
  	},

  	{
  		name:'company two',
  		lat: 42.825588,
  		lng: -71.018029,
  		draggable: true
  	},

  	{
  		name:'company three',
  		lat: 42.8258279,
  		lng: -71.930498,
  		draggable: false
  	}
  ];

  constructor(){

  }

  clickedMarker(marker:marker, index:number){
  	console.log('Clicked Marker: '+marker.name+' at index '+index);
  }
  
}

interface marker{
	name?:string;
	lat: number;
	lng: number;
	draggable:boolean;
}