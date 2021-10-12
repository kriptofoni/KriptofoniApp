import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AboutService {

    constructor() {}

    getAboutInformation() {
      return {
        "headerTitle":"KRİPTOFONİ",
        "title": "Kriptofoni Hakkında / İletişim Bilgileri",
        "titleImage": "../assets/imgs/decoLogo.png",
        "subtitle": "Kriptofoni, 2020 yılında Kriptofoni Teknoloji  Tic. Ltd. Şti. tarafından hayata geçirilmiş bir projedir. Dünya ve Türkiye gündeminde yer alan Bitcoin ve diğer kripto para haberlerini herkesin anlayacağı bir dil ile kullanıcılarına sunar. Sadece gerekli bilgileri vererek ziyaretçilerini kripto para dünyası hakkında bilgilendirmeyi amaç edinmiştir. Kriptofoni, tamamen tarafsız bir kripto para haber platformu olup, içeriklerini kendi yazar kadrosuyla üretmektedir. Ziyaretçilerinin ilgi duyduğu kripto para alanında makaleler ve videolar ile güncel içerikleri onlara ücretsiz olarak sunmaktadır.",
        "adres": "Yeşilova Mahallesi 4023. Cadde Ser Tower Residence 1/29 Etimesgut/Ankara",
        "eposta": "info@kriptofoni.com",
        "telefon": "0850 466 12 34",
        "about_text_button": "İletişime Geç",
        "about_text_button_link": "https://www.kriptofoni.com/iletisim-contact-us/",
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
