import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {LocationsPage} from '../pages/locations/locations';
import {ProjectsPage} from '../pages/projects/projects';
import {ServicesPage} from '../pages/services/services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public services: Array<{ name: string, icon: string, link: any }> = [];
  public communications: Array<{ name: string, icon: string, link: any }> = [];
  public information: Array<{ name: string, icon: string, link: any }> = [];


  @ViewChild('content') _NAV: NavController;

  rootPage: any = HomePage;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private _MENU: MenuController) {


    this.services = [
      {
        name: 'Website Design & Development',
        icon: 'construct',
        link: ServicesPage
      },
      {
        name: 'Content Management',
        icon: 'folder-open',
        link: ServicesPage
      },
      {
        name: 'iOS Apps',
        icon: 'logo-apple',
        link: ServicesPage
      },
      {
        name: 'Android Apps',
        icon: 'logo-android',
        link: ServicesPage
      },
      {
        name: 'Window Apps',
        icon: 'logo-windows',
        link: ServicesPage
      }];


    this.information = [
      {
        name: 'Our Projects',
        icon: 'cube',
        link: ProjectsPage
      },
      {
        name: 'Our Story',
        icon: 'archive',
        link: AboutPage
      },
      {
        name: 'Our Team',
        icon: 'people',
        link: AboutPage
      }];


    this.communications = [
      {
        name: 'Get In Touch',
        icon: 'call',
        link: ContactPage
      },
      {
        name: 'Our Locations',
        icon: 'pin',
        link: LocationsPage
      },
      {
        name: 'Instagram',
        icon: 'logo-instagram',
        link: ContactPage
      },
      {
        name: 'Tweets',
        icon: 'logo-twitter',
        link: ContactPage
      }];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  sectionToLoad(page) {
    let link: string = page.link,
      section: string = page.name;

    this._NAV.setRoot(link, section);
    this._MENU.close();
  }


  goHome() {
    this._NAV.setRoot(HomePage);
  }

}

