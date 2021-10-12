import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NewsWizardService {

    constructor() { }

    //* Data Set for page 1
    getNewsWizardData = (): any => {
        return {
             "btnPrev": "Önceki",
             "btnNext": "Sonraki",
             "btnFinish": "Bitir",
             "items": [
                 {
                    "avatarImage": "https://decouikit.com/presentationEnvato/deco-news-android/magic.png",
                     "title": "Teşekkürümüz Var",
                     "description": "Kriptofoni uygulamasını indirdiğiniz ve kullandığınız için teşekkür ederiz."
                 },
                 {
                    "avatarImage": "https://decouikit.com/presentationEnvato/deco-news-android/design.png",
                     "title": "Gizliliğe Önem Veriyoruz",
                     "description": "Kriptofoni olarak gizliliğinize önem veriyor, gizliliğin çok daha önemli olduğu Bitcoin ve kripto para ekosisteminde hiçbir kişisel bilginizle veya kişisel verinizle ilgilenmediğimizi bilmenizi istiyoruz."
                 },
                 {
                    "avatarImage": "https://decouikit.com/presentationEnvato/deco-news-android/code.png",
                     "title": "Sürekli Yenileniyor, Gelişiyoruz",
                     "description": "7/24 güncellenen içeriklerimiz gibi, en iyi Bitcoin ve kripto para haber mobil uygulaması olarak sürekli olarak gelişiyor, yenileniyoruz. Görüş, öneri, istek ve şikayetleriniz için info@kriptofoni.com'u kullanabilirsiniz."
                 }
             ]
        };
    }
}
