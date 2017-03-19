import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';


@Component({
    selector: 'page-sing-up',
    templateUrl: 'sing-up.html'
})

export class SingUpPage {
    constructor(private nav: NavController, private menu: MenuController) {
    }

    startApp() {
        this.nav.push(HomePage);
    }

    ionViewDidEnter() {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    }

    ionViewWillLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }

}