import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AboutService {

    constructor() {}

    getAboutInformation() {
      return {
        "headerTitle":"About",
        "title": "Deco News",
        "titleImage": "../assets/imgs/decoLogo.png",
        "subtitle": "WordPress to Ionic 6 / Angular 9 News App",
        "description": "Amazing list of features",
        "about_text_button": "Purchase Now",
        "about_text_button_link": "https://devspush.com/deco-news-ionic-4-mobile-app-for-wordpress-angular-7-sass-firebase-admob-onesignal",
        "items": [
          {
            "title": "No need for development skills",
          },
          {
            "title": "Word press as Backend",
          },
          {
            "title": "Amazing Documentation and Support",
          },
          {
            "title": "Firebase Push Notifications",
          },
          {
            "title": "AdMob Integration",
          },
          {
            "title": "Light and Dark theme",
          },
          {
            "title": "Design files (Sketch, Adobe Xd and Photo shop)",
          },
          {
            "title": "Ionic 6, Sass & Angular 9",
          },
          {
            "title": "Compatible with Android & iOS",
          }
        ]
      };
    }
}
