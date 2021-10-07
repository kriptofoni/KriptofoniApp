export const ConfigData = {

  // DEFINE YOUR URL
  'rootUrl': 'https://www.kriptofoni.com/wp-json/wp/v2/',

  // enableExcludeFromMenu SET TO true TO ENABLE excudeFromMenu
  //if want to exclude from menu your category set value FALSE
  //all category enter with lower case

  // SOCIAL NETWORK
  'socialLink': {
    'facebook': 'https://www.facebook.com/kriptofoni',
    'twitter': 'https://twitter.com/kriptofoni',
    'youtube': 'https://www.youtube.com/',
    'instagram': 'https://www.instagram.com/kriptofoni'
  },


  // SHOW ALL YOUR CATEGORIES ( TRUE - display all category )
  'isExcludeCategoryEnabled': true,

  'excludeFromMenu': {
    '32': true,
  },

  'includeFromMenu': {
    //'travel': true
  },


  // INTRO PAGE IN APP ( TRUE - slider is enable)
  'introData': false,

  // SETTINGS PARAMS fOR ONE SIGNAL
  'oneSignal': {
    "appID": "8f082bf8-1305-481f-b99c-441a7645b971",
    "googleProjectId": "827631053705"
  },


  // ENABLE OR DISABLE PUSH NOTIFICATION
  'defaultValueForPushNotification': true,


  // SETTINGS DEFAUTL COLOR COMBINATION
  'colorTheme': 'light-themes',


  // SETTINGS RTL ( FALSE - is not set rtl default  )
  'defualtValueForRTL': false,


  // SETTINGS FEATURES POTS TO SLIDER (FALSE - slider is enable)
  'isFeaturesPostsGetFromSticky': false,


  // SLIDER NUMBER BUT IT IS NOT STICKY ( isFeaturesPostsGetFromSticky:FALSE)
  'numberOfItemForSlider': 5,

  // SETTINGS NUMBER POSTS ON CATEGORY
  'numberOfItemPerPage': 10,

  'isCacheCategoryEnabled': false,  
  'cacheExpiredTime': 24 * 60 * 60 * 1000, //24H
  

    
  //ADS
  'bannerAds': {
    'enable': false,
    'config': {
      'id': '',
      'isTesting': false,
      'autoShow': false
    }
  },

  // How to set time open ADS page
  'interstitialAds': {
    'showAdsAfterXPosts': 10,
    'enable': false,
    'config': {
      'id': '',
      'isTesting': false,
      'autoShow': false
    }
  }
}