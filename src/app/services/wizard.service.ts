import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WizardService {

    constructor() {}

    getWizardData() {
      return {
        "finishButton":"Bitir",
        "skipButton": "Geç",
        "getStartedButton": "Başlat",
        "pages": [
          {
            "title": "Teşekkürümüz Var",
            "subtitle": "Kriptofoni uygulamasını indirdiğiniz ve kullandığınız için teşekkür ederiz.",
            "image": "https://deco-news.s3.eu-central-1.amazonaws.com/Magic.png"
          },
          {
            "title": "Gizliliğe Önem Veriyoruz",
            "subtitle": "Kriptofoni olarak gizliliğinize önem veriyor, gizliliğin çok daha önemli olduğu Bitcoin ve kripto para ekosisteminde hiçbir kişisel bilginizle veya kişisel verinizle ilgilenmediğimizi bilmenizi istiyoruz.",
            "image": "https://deco-news.s3.eu-central-1.amazonaws.com/Design.png"
          },
          {
            "title": "Sürekli Yenileniyor, Gelişiyoruz",
            "subtitle": "7/24 güncellenen içeriklerimiz gibi, en iyi Bitcoin ve kripto para haber mobil uygulaması olarak sürekli olarak gelişiyor, yenileniyoruz. Görüş, öneri, istek ve şikayetleriniz için info@kriptofoni.com'u kullanabilirsiniz.",
            "image": "https://deco-news.s3.eu-central-1.amazonaws.com/Code.png"
          }
        ]
      };
    }
}