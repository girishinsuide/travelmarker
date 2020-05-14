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
  	this.initialize();
  }

  initialize() {
    var latlng = new google.maps.LatLng(25.321824, 55.520725);
    var mapOpts = {
        center: latlng,
        zoom: 15,
        maxZoom:20,
        minZoom:14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    this.map = new google.maps.Map(this.el.nativeElement,mapOpts);


   /* this.layer = new google.maps.ImageMapType({

        name: this.layerID,
        getTileUrl: (coord, zoom) => {
          console.log(coord);
          //var url = this.TILE_URL;
            
          return ['http://mapwarper.net/maps/tile/40465/{z}/{x}/{y}.jpg'];
        },
        tileSize: new google.maps.Size(256, 256),
        minZoom: 1,
        maxZoom: 20
   });
    this.map.mapTypes.set(this.layerID, this.layer);
      this.map.setMapTypeId(this.layerID);*/



  var layer = new google.maps.ImageMapType({
        //name: this.layerID,
        getTileUrl: function(coord, zoom) {
          console.log(coord);

         /* var url = this.TILE_URL
            .replace('{x}', coord.x)
            .replace('{y}', coord.y)
            .replace('{z}', zoom);*/
          return 'http://mapwarper.net/maps/tile/28216/'+zoom+'/'+coord.x+'/'+coord.y+'.png';
        },
        tileSize: new google.maps.Size(256, 256),
        //maxZoom: 15,
        //minZoom: this.minzoom + 2,
      });
  this.map.overlayMapTypes.push(layer);

     //this.map.mapTypes.set(this.layerID, layer);
      //this.map.setMapTypeId(this.layerID);
}

    
}


