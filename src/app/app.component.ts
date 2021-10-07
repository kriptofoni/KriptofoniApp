import { ConfigData } from 'src/app/services/config';
import { Component } from '@angular/core';
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [];
  headerMenuItem = {}
  socialLink: any = {};

  rootPage: any = "HomePage";
  pages: Array<{ title: string, component: any, icon: string, url: string }>;

  constructor(
    private oneSignal: OneSignal,
    private navController: NavController,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Anasayfa', component: "HomePage", icon: "book-outline", url: "home" },
      { title: 'Kategoriler', component: "CategoryPage", icon: "reader-outline", url: "category" },
      { title: 'Fiyatlar (CANLI)', component: "price", icon: "price-outline", url: "https://www.kriptofoni.com" },
      { title: 'Favoriler', component: "BookmarkPage", icon: "bookmarks-outline", url: "bookmark" },
      { title: 'Hakkımızda', component: "AboutPage", icon: "flag-outline", url: "about" },
      { title: 'Ayarlar', component: "settings", icon: "settings-outline", url: "settings" },
    ];
  }

  initializeApp() {
    let self = this;
    self.socialLink = ConfigData.socialLink;
    self.platform.ready().then(() => {
      self.loadFromConfig()
      self.defaultLoad();
    });
  }

  loadFromConfig() {
    let isLoadedFromConfig = localStorage.getItem('isLoadedFromConfig');
    if (!isLoadedFromConfig) {
      let isRTLEnabled = localStorage.getItem('isRTLEnabled');
      let colorTheme = localStorage.getItem('color-theme');
      let isPushNotificationEnabled = localStorage.getItem('isPushNotificationEnabled');
      if (!isRTLEnabled) {
        localStorage.setItem('isRTLEnabled', ConfigData.defualtValueForRTL + "")
      }
      if (!colorTheme) {
        localStorage.setItem('color-theme', ConfigData.colorTheme + "")
      }
      if (!isPushNotificationEnabled) {
        localStorage.setItem('isPushNotificationEnabled', ConfigData.defaultValueForPushNotification + "")
      }
      localStorage.setItem('isLoadedFromConfig', "true")
    }
  }

  defaultLoad() {
    if (localStorage.getItem('isRTLEnabled') == "true") {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    }else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    }
    let colorTheme = localStorage.getItem('color-theme');
    if (colorTheme) {
      document.getElementsByTagName("body")[0].setAttribute("class", colorTheme);
    }
    if (this.statusBar) {
      this.statusBar.styleBlackOpaque();
    }
    if (this.splashScreen) {
      this.splashScreen.hide();
    }
    if (ConfigData.oneSignal && ConfigData.oneSignal.appID && ConfigData.oneSignal.googleProjectId) {
      this.oneSignal.startInit(ConfigData.oneSignal.appID, ConfigData.oneSignal.googleProjectId)
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

      // this.oneSignal.handleNotificationReceived().subscribe(() => {
      //   // do something when notification is received
      //   //
      // });
      // this.oneSignal.handleNotificationOpened().subscribe(() => {
      //   // do something when a notification is opened
      // });
      
      this.oneSignal.endInit()
    }
    this.oneSignal.setSubscription(localStorage.getItem('isPushNotificationEnabled') == "true");
  }

  openPage(page) {
    this.navController.navigateForward([page.url], {});
  }
}
