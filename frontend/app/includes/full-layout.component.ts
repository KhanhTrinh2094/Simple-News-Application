import { Component, AfterViewInit, OnInit } from '@angular/core';
import { slideToLeft } 		from 'raven.index';

function routerTransition() {
	return slideToLeft();
}

@Component({
	moduleId: module.id,
	selector: 'full-layout',
	templateUrl: './full-layout.component.html',
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class FullLayoutComponent implements OnInit, AfterViewInit {
	constructor() {}

	ngOnInit() {
		
	}

	ngAfterViewInit(){
		
	}
}