"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LoginComponent = (function () {
    function LoginComponent() {
        window['SE'].init({
            clientId: 8896,
            key: 'KLDMRf*lMVmapIyBANG5Cw((',
            channelUrl: 'https://jorrigala.github.io/MyStackExchange/proxy.html',
            complete: function (data) { console.log(data); }
        });
    }
    LoginComponent.prototype.login = function () {
        window['SE'].authenticate({
            success: function (data) { console.log("success " + data); },
            error: function (data) { console.log("error " + data); },
            scope: ['read_inbox'],
            networkUsers: true
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            template: "\n\t\t <button id=\"login-button\" (click)=\"login()\"> Log into StackOverFlow</button>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map