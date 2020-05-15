import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {Pipe,Component, OnInit, ElementRef ,ViewChild, NgModule, ApplicationRef, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Injector, NgZone, EventEmitter} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapurl',
  templateUrl: './mapurl.component.html',
  styleUrls: ['./mapurl.component.css']
})
export class MapurlComponent implements OnInit {
	
	TILE_URL : 'http://mapwarper.net/maps/tile/40465/{z}/{x}/{y}.jpg';
	map:any;
	@ViewChild('map') el:ElementRef;
	layer: any;
	layerID = 'my-custom-layer';

  constructor() { }

  ngOnInit() {
    this.initMap();
  	
  }

 markers = [];
 
// First, create an object containing LatLng and population for each city.    
 //citymap = {lat:21.002471054356725, lng:79.12353515625};  
 citymap = {
  chicago: {
    center: new google.maps.LatLng(41.878113, -87.629798),
    population: 200000
  },
  newyork: {
    center: new google.maps.LatLng(40.714352, -74.005973),
    population: 100000
  },
  
};
    
 initMap() {    
      
  this.map = new google.maps.Map(document.getElementById('map'), {    
    zoom: 4,    
    center: new google.maps.LatLng(37.09024, -95.712891),    
    mapTypeId: google.maps.MapTypeId.TERRAIN    
  }); 

  for (var city in this.citymap) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map,
      draggable: true,
      center: this.citymap[city].center,
      radius: Math.sqrt(this.citymap[city].population) * 100
    };
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle(populationOptions);
    var marker = new google.maps.Marker({
      position: this.citymap[city].center,
      draggable: true,
      map: this.map
    });
    marker.bindTo("position", cityCircle, "center");
  }   

  /*var marker = new google.maps.Marker({    
    position: lat_lng,    
    map: this.map    
  });  */

  // This event listener will call addMarker() when the map is clicked.    
  marker.addListener('click', (event) => {    
    //this.addCircle(event.latLng);    
  }); 
   google.maps.event.addListener(marker, 'dragend', ()=> {
        console.log(this.citymap[city].population);
        //console.log(this.citymap[city].LatLng);
    });


} 

   
/* addCircle(location) {    
  // Add the circle for this city to the map.    
    var cityCircle = new google.maps.Circle({    
      strokeColor: '#FF0000',    
      strokeOpacity: 0.8,    
      strokeWeight: 2,    
      fillColor: '#FF0000',    
      fillOpacity: 0.9,    
      map: this.map,    
      center: location,    
      radius: 199999.45454,  
      draggable:false  
    });  
} 
*/
    
}


