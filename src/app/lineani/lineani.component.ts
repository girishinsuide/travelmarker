import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {Pipe,Component, OnInit, ElementRef ,ViewChild, NgModule, ApplicationRef, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Injector, NgZone, EventEmitter} from '@angular/core';
import { TravelMarker, TravelMarkerOptions, TravelData, TravelEvents } from 'travel-marker';
declare var google: any;

@Component({
  selector: 'app-lineani',
  templateUrl: './lineani.component.html',
  styleUrls: ['./lineani.component.css']
})
export class LineaniComponent implements OnInit {
	map:any;
	polyline: any;
  directionsService: any;
  iconSymbol;
  marker: TravelMarker = null;
  len;
	latlng;
  speedMultiplier = 1;
	@ViewChild('map') el:ElementRef;

  constructor() { }
ngOnInit() {
  	this.initialize();
  }
  

  


initialize() {
    var latlng = new google.maps.LatLng(19.1164, 72.90471);
    var mapOpts = {
        center: latlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    this.map = new google.maps.Map(this.el.nativeElement,mapOpts);
    this.getDirections(this.map);
    
}

moveMarker(map, marker, latlng) {
    marker.setPosition(latlng);
    //map.panTo(latlng);
}

// initialize travel marker
  initRoute() {
    const route = this.polyline.getPath();
    // options
    const options: TravelMarkerOptions = {
      map: this.map,  // map object
      speed: 50,  // default 10 , animation speed
      interval: 10, // default 10, marker refresh time
      speedMultiplier: this.speedMultiplier,
      markerType: 'overlay',  // default: 'default'
    overlayOptions: {
      offsetX: 0, // default: 0, x-offset for overlay
      offsetY: 0, // default: 0, y-offset for overlay
      offsetAngle: 0, // default: 0, rotation-offset for overlay
      imageUrl: '/assets/images/bus.png', // image used for overlay
      imageWidth: 20, // image width of overlay
      imageHeight: 48, // image height of overlay
    },     

    };
  
    // define marker
    this.marker = new TravelMarker(options);
    
    // add locations from direction service 
    this.marker.addLocation(route);
     
    setTimeout(() => this.play(), 2000);

  }
  // play animation
  play() {
    this.marker.play();
  }

  // pause animation
  pause() {
    this.marker.pause();
  }

  // reset animation
  reset() {
    this.marker.reset();
  }

  // jump to next location
  next() {
    this.marker.next();
  }

  // jump to previous location
  prev() {
    this.marker.prev();
  }

  // fast forward
  fast() {
    this.speedMultiplier*=2;
    this.marker.setSpeedMultiplier(this.speedMultiplier);
  }

  // slow motion
  slow() {
    this.speedMultiplier/=2;
    this.marker.setSpeedMultiplier(this.speedMultiplier)
  }
 autoRefresh(map, pathCoords) {
    var i, route, marker;
    
    route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        editable: false,
        map:map
    });


    
    marker=new google.maps.Marker({map:map, icon:"http://maps.google.com/mapfiles/ms/micons/blue.png"});

    for (i = 0; i < pathCoords.length; i++) {                
        setTimeout((coords)=> {
            route.getPath().push(coords);
            this.moveMarker(map, marker, coords);
        }, 200 * i, pathCoords[i]);
    }
}

 getDirections(map) {
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: new google.maps.LatLng(19.11643,72.90476),
        destination: new google.maps.LatLng(19.12462,72.89531),
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
            this.autoRefresh(map, result.routes[0].overview_path);
        }
    });
}



}
