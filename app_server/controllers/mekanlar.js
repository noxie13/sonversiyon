var footer="İsmail Koç 2020"
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste', 
  	{
      'baslik': 'Anasayfa',
      'footer':footer,
  	'sayfaBaslik':{
  		'siteAd':'Mekan32',
  		'aciklama':'Isparta civarındaki mekanları keşfedin'
  	},
    'mekanlar':[
    {
      'ad':'Starbucks',
      'adres':'Centrum Garden',
      'puan':5,
      'imkanlar':['kahve','çay','pasta'],
      'mesafe':'10km'
    },
      {
      'ad':'Gloria Jeans',
      'adres':'Iyaş AVM',
      'puan':4,
      'imkanlar':['kahve','kek','çay'],
      'mesafe':'5km'
    },
      {
      'ad':'Köfteci Yusuf',
      'adres':'Iyaş Bulvar',
      'puan':4,
      'imkanlar':['yemek','çay','tatlı'],
      'mesafe':'3km'
    },
      {
      'ad':'Keyf-i Kahve',
      'adres':'Çünür',
      'puan':2,
      'imkanlar':['yemek','paket servis','kahve'],
      'mesafe':'2km'
    }, 
      {
      'ad':'Gloria Jeans',
      'adres':'SDÜ Doğu Kampüsü',
      'puan':3,
      'imkanlar':['kahve','kek','çay'],
      'mesafe':'1km'
    }
    ]
  }

  	);
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', 
    { 
    'baslik': 'Mekan Bilgisi',
    'footer':footer,
    'sayfaBaslik':'Starbucks',
    'mekanBilgisi':{
      'ad':'Starbucks',
      'adres':'Centrum Garden',
      'puan':5,
      'imkanlar':['Kahve','Çay','Pasta'],
      'koordinatlar':{
          'enlem':'37.781885',
          'boylam':'30.566034'
      },
      'saatler':[
        {
          'gunler':'Pazartesi-Cuma',
          'acilis':'7:00',
          'kapanis':'23:00',
          'kapali':false
        },
        {
          'gunler':'Cumartesi',
          'acilis':'9:00',
          'kapanis':'22:30',
          'kapali':false
        },
        {
          'gunler':'Pazar', 
          'kapali':true
        }
      ],
      'yorumlar':[
        {
          'yorumYapan':'İsmail Koç',
          'puan':5,
          'tarih':'30 Kasım 2020',
          'yorumMetni':'Ispartada tek'
        },
        {
          'yorumYapan':'Ali Veli',
          'puan':4,
          'tarih':'1 Aralık 2020',
          'yorumMetni':'Eh'
        }
        
      ]

    }
  }
    );
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}