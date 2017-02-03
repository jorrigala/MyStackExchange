import { Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector : 'my-login',
	template:`
		 <button id="login-button" (click)="login()"> Log into StackOverFlow</button>
	`
})
export class LoginComponent {

	constructor(){
		window['SE'].init({
			        clientId: 8896,
	        key: 'KLDMRf*lMVmapIyBANG5Cw((',
	        channelUrl: 'https://jorrigala.github.io/MyStackExchange/proxy.html',
	        complete: function (data: any) { console.log(data)}
    	});
	}	

	login(): void {
		window['SE'].authenticate({
          success: function(data: any) {console.log("success "+data)},
          error: function(data: any) { console.log("error " + data) },
          scope: ['read_inbox'],
          networkUsers: true
      	});
	}	
}