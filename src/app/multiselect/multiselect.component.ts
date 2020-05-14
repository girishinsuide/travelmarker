import { Component, OnInit } from '@angular/core';
//import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {

	
	


  constructor() { 
  	

  }
  onFilterChange(value: string) {
        console.log('filter:', value);
    }

  ngOnInit() {
  	
  }
  onSelectedChange(e:any){
  	console.log(e)
  }

}
