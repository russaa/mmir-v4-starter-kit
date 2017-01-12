import {RegistrationPage} from './../pages/registration-page/registration-page';

import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { LoginPage } from '../pages/login-page/login-page';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { MmirProvider } from '../providers/mmir';
import { AppConfig } from './../providers/app-config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  mmir;

  constructor(
    public platform: Platform,
    public events: Events,
    public appConfig: AppConfig,
    public mmirProvider: MmirProvider
  ) {

    this.mmir = mmirProvider.mmir;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Registration', component: RegistrationPage },
      { title: 'Welcome', component: Page2 },
      { title: 'Add Appointment', component: Page1 }
    ];

  }

  ngOnInit(){
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

	  this.mmirInit();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  private mmirInit(){

    this.mmirProvider.init(this.platform, this.nav, this.events, this.appConfig, [
      { ctrl: 'Application', name: 'login', view: LoginPage },
      { ctrl: 'Application', name: 'registration', view: RegistrationPage },
      { ctrl: 'Application', name: 'welcome', view: Page2 },
      { ctrl: 'Application', name: 'create_appointment', view: Page1 }
    ]);

    // this.mmir.ready(() => {
    //
    //   this.appConfig.get('speechEngine').then(defCtx => {
    //     this.mmir.MediaManager.setDefaultCtx(defCtx);
    //   });
    //
    // });
  }

}
