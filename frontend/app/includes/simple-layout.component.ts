import { Component, OnInit, ViewEncapsulation } 	from '@angular/core';
import { slideToBottom } 		from 'raven.index';

function routerTransition() {
	return slideToBottom();
}

@Component({
	moduleId: module.id,
	selector: 'simple-layout',
	templateUrl: './simple-layout.component.html',
	styleUrls: ['./simple-layout.component.css'],
	encapsulation: ViewEncapsulation.None,
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class SimpleLayoutComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}