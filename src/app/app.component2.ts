
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {Pipe,Component, OnInit, ElementRef ,ViewChild, NgModule, ApplicationRef, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Injector, NgZone, EventEmitter} from '@angular/core';





declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app';
/*lat: number = 13.021425000;
lng: number = 77.605638333;*/
map:any;
directionsDisplay;
len;
latlng;


  @ViewChild('map') el:ElementRef;
  

  //markers


  constructor(){
  	
  }

  ngOnInit(){
  	this.initialize();
  }
  initMap(url) {
    this.map = new google.maps.Map(this.el.nativeElement, {
          //center: new google.maps.LatLng(28.561263636860318,77.08129386789679),
          zoom:15,
          heading:90,
          rotate: 45, 
         
        });
           
    
}

polyline:any;


cityLocations = [
    

[19.11643,72.90476],
[19.11699,72.90433],
[19.11726,72.90408],
[19.11733,72.90405],
[19.11765,72.90405],
[19.11766,72.90469],
[19.11885,72.90519],
[19.11902,72.90524],
[19.11925,72.90527],
[19.11968,72.90517],
[19.11964,72.90503],
[19.1194,72.9041],
[19.1193,72.90361],
[19.11933,72.90318],
[19.11941,72.90279],
[19.11987,72.901],
[19.12001,72.9003],
[19.12012,72.89993],
[19.12023,72.8997],
[19.12036,72.89951],
[19.12051,72.89935],
[19.12068,72.89921],
[19.12088,72.89911],
[19.12186,72.8987],
[19.12272,72.89834],
[19.12308,72.89812],
[19.12347,72.8978],
[19.12369,72.89757],
[19.12379,72.89744],
[19.12424,72.89676],
[19.12438,72.89648],
[19.12452,72.89607],
[19.12458,72.89581],
[19.12461,72.89557],
[19.12462,72.89531],
[19.12466,72.89427],
[19.12473,72.89387],
[19.12496,72.89308],
[19.1252,72.8923],
[19.12532,72.89205],
[19.12591,72.89092],
[19.12614,72.89043],
[19.1269,72.88928],
[19.12722,72.88892],
[19.12756,72.88848],
[19.12872,72.88689],
[19.12904,72.88632],
[19.12917,72.88602],
[19.12921,72.88585],
[19.12924,72.88566],
[19.12925,72.88505],
[19.12931,72.88192],
[19.12936,72.8807],
[19.1294,72.88031],
[19.12982,72.87806],
[19.12988,72.8778],
[19.12991,72.87766],
[19.13013,72.87685],
[19.1304,72.87617],
[19.13063,72.87573],
[19.13078,72.8755],
[19.13091,72.87534],
[19.13104,72.87518],
[19.13119,72.87505],
[19.13144,72.87489],
[19.13164,72.87479],
[19.1322,72.87466],
[19.13257,72.87463],
[19.13291,72.87463],
[19.13353,72.87457],
[19.13408,72.87446],
[19.13449,72.87433],
[19.13498,72.87413],
[19.1361,72.87357],
[19.1365,72.87336],
[19.13699,72.87305],
[19.13759,72.87261],
[19.13773,72.8725],
[19.13824,72.87194],
[19.13849,72.87163],
[19.13883,72.8711],
[19.13907,72.87066],
[19.1393,72.87006],
[19.13942,72.86966],
[19.13957,72.86916],
[19.13965,72.86871],
[19.13972,72.86815],
[19.13973,72.86762],
[19.13967,72.86724],
[19.13962,72.86697],
[19.13947,72.86645],
[19.13914,72.86546],
[19.13902,72.865],
[19.13893,72.86425],
[19.13887,72.8635],
[19.13887,72.86323],
[19.13916,72.86179],
[19.13942,72.86056],
[19.13951,72.86029],
[19.13967,72.8599],
[19.14038,72.85839],
[19.14064,72.85788],
[19.1408,72.85755],
[19.14087,72.85725],
[19.14089,72.85706],
[19.14088,72.85659],
[19.14084,72.85626],
[19.14056,72.85513],
[19.14041,72.85475],
[19.14036,72.85465],
[19.14059,72.85462],
[19.14097,72.85462],
[19.14125,72.85465],
[19.14189,72.85477],
[19.14292,72.85507],
[19.14518,72.85578],
[19.14548,72.85583],
[19.14653,72.85592],
[19.14869,72.85611],
[19.14925,72.85616],
[19.1494,72.85621],
[19.1495,72.85627],
[19.15046,72.85638],
[19.15048,72.85624],
[19.15049,72.85611],
[19.1522,72.85627],
[19.1531,72.85635],
[19.15323,72.85636],
[19.15328,72.85622],
[19.1533,72.85609],
[19.15324,72.8554],
[19.15315,72.85455],
[19.15295,72.85312],
[19.15286,72.85251],
[19.15282,72.8516],
[19.15287,72.84946],
[19.15286,72.84797],
[19.1528,72.84765],
[19.15267,72.84732],
[19.15193,72.84609],
[19.15182,72.84594],
[19.15184,72.84584],
[19.1519,72.8456],
[19.15227,72.84453],
[19.15436,72.8453],
[19.1554,72.84569],
[19.15575,72.84576],
[19.15601,72.84578],
[19.15697,72.8458],
[19.15756,72.84583],
[19.15894,72.84588],
[19.15938,72.84588],
[19.1603,72.84592],
[19.16174,72.84596],
[19.16173,72.84701],
[19.16247,72.84704],
[19.16252,72.84704],
[19.16255,72.84709],
[19.1627,72.84732],
[19.16282,72.84756],
[19.1633,72.84818],
[19.16342,72.84838],
[19.16363,72.84853],
[19.16393,72.84871],
[19.16412,72.84888],
[19.16419,72.84896],
[19.16431,72.84901],
[19.16453,72.84904],
[19.16482,72.84904],
];



   initialize() {
    var latlng = new google.maps.LatLng(19.1164, 72.90471);
    var mapOpts = {
        center: latlng,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    


    this.directionsDisplay = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "red"
    }
  }); 
    this.map = new google.maps.Map(this.el.nativeElement,mapOpts);
    this.getDirections(this.map);
    
}
	
	moveMarker(map, marker, latlng) {
    marker.setPosition(latlng);
    map.panTo(latlng);
     

}


getDirections(map) {
	
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: new google.maps.LatLng(19.1164, 72.90471),
        destination: new google.maps.LatLng(19.1648436, 72.84951699999999),
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, (result, status)=> {
        if (status == google.maps.DirectionsStatus.OK) {
        	this.directionsDisplay.setDirections(result);
            this.autoRefresh(map, result.routes[0].overview_path);
        }
    });
}

	autoRefresh(map, pathCoords) {
    var i, route, marker;
    
    route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: 'green',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        editable: false,
        map:map
    });
    var travelPath = [];
  /* for ( i = 0, this.len = this.cityLocations.length; i < this.len; i++) {
        travelPath.push(new google.maps.LatLng(this.cityLocations[i][0],
                                             this.cityLocations[i][1]));
    }*/
    var iconSymbol = {
        path: 'M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z',
        
       
        scale: .7,
    strokeColor: 'white',
    strokeWeight: .10,
    fillOpacity: 1,
    fillColor: '#404040',
    offset: '5%',
    // rotation: parseInt(heading[i]),
    anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
    };


    var polyOpts = {
        map: this.map,
        path: travelPath,
        icons: [{
            icon: iconSymbol
        }],
        strokeWeight: 5,
        strokeColor: 'DarkOrange',
        strokeOpacity: 0.75
    }
    this.polyline = new google.maps.Polyline(polyOpts);
    this.moveIcon();


    marker=new google.maps.Marker({map:map, icon:iconSymbol});
    /*var travelPath = [];
    for (var i = 0, len = this.cityLocations.length; i < len; i++) {
        travelPath.push(new google.maps.LatLng(this.cityLocations[i][0],
                                             this.cityLocations[i][1]));
    }*/

    for (i = 0; i < pathCoords.length; i++) {                
        setTimeout((coords)=> {
            route.getPath().push(coords);
            this.moveMarker(map, marker, coords);
             console.log(marker.getPosition().toUrlValue(6));
        }, 1000 * i, pathCoords[i]);


    }
    
}

moveIcon() {
    var counter = 0;
    

    /*setInterval(() => { counter = (counter + 1) % 200; var icons = this.polyline.get('icons');
        icons[0].offset = (counter / 2) + '%';
        this.polyline.set('icons', icons);
        console.log(this.polyline); }, 1000);*/

}

	



}

