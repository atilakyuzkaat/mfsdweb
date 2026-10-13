// Türkçe site metinleri. İngilizce karşılıkları en.js içinde, aynı anahtarlarla.

const tr = {
  lang: "tr",
  langName: "Türkçe",
  switchTo: { label: "EN", aria: "Switch to English" },

  meta: {
    home: {
      title: "MFSD | Maternal Fetal Sağlık ve Danışmanlık",
      description:
        "MFSD, perinatoloji uzmanlığını dijital sağlık teknolojisiyle buluşturur: hastanelere klinik danışmanlık, doğumhane eğitimleri ve PartoAI dijital partogram sistemi.",
    },
    services: { title: "Hizmetler", description: "Perinatoloji ve doğumhane danışmanlığı, dijital sağlık çözümleri ve hekim, ebe, hemşire eğitim programları." },
    projects: { title: "Projeler", description: "MFSD'nin klinik ve dijital sağlık projeleri. PartoAI dijital partogram ve doğum karar destek sistemi." },
    partoai: {
      title: "PartoAI: dijital partogram ve doğum karar destek",
      description: "WHO Labour Care Guide temelli dijital partogram, maternal erken uyarı, NST/CTG değerlendirme ve Robson kalite analizi. Kurum içi veya Türkiye'de barındırılan kurulum.",
    },
    team: { title: "Ekip", description: "MFSD'nin kurucuları: perinatoloji uzmanı Prof. Dr. Resul Arısoy ve teknoloji lideri M. Atıl Akyüz." },
    about: { title: "Hakkımızda", description: "Maternal Fetal Sağlık ve Danışmanlık Hizmetleri Tic. Ltd. Şti. (MFSD) hakkında: amacımız, çalışma ilkelerimiz ve şirket bilgileri." },
    contact: { title: "İletişim", description: "PartoAI demo talebi, klinik danışmanlık, eğitim ve iş birlikleri için MFSD ile iletişime geçin." },
    privacy: { title: "KVKK aydınlatma metni", description: "MFSD kişisel verilerin korunması aydınlatma metni." },
    cookies: { title: "Çerez politikası", description: "MFSD çerez politikası." },
  },

  nav: [
    ["services", "Hizmetler"],
    ["projects", "Projeler"],
    ["team", "Ekip"],
    ["about", "Hakkımızda"],
    ["contact", "İletişim"],
  ],
  header: { demo: "Demo isteyin", menu: "Menü", close: "Kapat", home: "MFSD ana sayfa", skip: "İçeriğe geç", mainNav: "Ana menü" },
  crumbHome: "Ana sayfa",

  company: {
    registry: (no) => `İstanbul Ticaret Sicil Müdürlüğü, Sicil No: ${no}`,
    mersis: "MERSIS No",
    tagline: "Anne ve bebek sağlığında klinik danışmanlık ve dijital sağlık",
  },

  ctg: { aria: "Kardiyotokografi kaydını andıran çizim: fetal kalp hızı ve uterus kasılmaları", fhr: "Fetal kalp hızı", toco: "Uterus kasılması" },

  home: {
    h1: "Doğumhanede doğru karar, doğru zamanda.",
    lead: "MFSD, perinatoloji uzmanlığını yazılımla buluşturan bir sağlık ve danışmanlık şirketidir. Hastanelere klinik danışmanlık, eğitim ve PartoAI dijital partogram sistemini sunuyoruz.",
    ctaPrimary: "PartoAI'yi inceleyin",
    ctaSecondary: "Bizimle iletişime geçin",
    asideTitle: "Klinik liderlik",
    asideText: "Çalışmalarımızın klinik içeriği, Türk Perinatoloji Derneği Yönetim Kurulu Başkanı Prof. Dr. Resul Arısoy tarafından yönetilir.",
    whatTitle: "Ne yapıyoruz",
    whatText: "Anne ve bebek sağlığında üç alanda çalışıyoruz. Her biri diğerini besliyor: sahada gördüğümüz sorunlar ürüne, üründen gelen veri eğitime dönüşüyor.",
    servicesMore: "Hizmetlerin ayrıntıları",
    teamLink: "Ekibimizi tanıyın",
    ctaTitle: "Kurumunuz için ne yapabileceğimizi konuşalım",
    ctaText: "Bir demo, pilot uygulama, eğitim ya da danışmanlık projesi için bize yazın. Doğum hacminizi ve mevcut sistemlerinizi paylaşırsanız ilk görüşmeyi buna göre hazırlarız.",
    ctaConsult: "Danışmanlık talebi",
  },

  services: [
    {
      id: "danismanlik",
      title: "Perinatoloji ve doğumhane danışmanlığı",
      text: "Hastanelerin doğumhane süreçlerini klinik kılavuzlara göre gözden geçiriyor, yüksek riskli gebelik ve acil obstetrik protokollerini kurumla birlikte yazıyoruz.",
      items: [
        "Doğumhane süreç ve protokol değerlendirmesi",
        "Robson sınıflamasıyla sezaryen oranı analizi",
        "Maternal erken uyarı (MEWS) ve eskalasyon akışlarının kurulması",
        "Kalite göstergeleri ve denetim hazırlığı",
      ],
    },
    {
      id: "dijital",
      title: "Dijital sağlık çözümleri",
      text: "Klinik bilgiyi yazılıma dönüştürüyoruz. İlk ürünümüz PartoAI, doğum eylemini dijital partogram üzerinde izleyen ve ekibe zamanında uyarı veren bir karar destek sistemidir.",
      items: ["PartoAI dijital partogram ve karar destek", "HBYS, HL7 ve CTG santrali entegrasyonları", "Kurum içi (on-prem) ya da Türkiye'de barındırılan kurulum"],
      link: { key: "partoai", label: "PartoAI'yi inceleyin" },
    },
    {
      id: "egitim",
      title: "Eğitim programları",
      text: "Hekim, ebe ve hemşirelere yönelik, vaka temelli ve uygulamalı eğitimler düzenliyoruz. Programlar kurumun ihtiyacına göre yerinde ya da çevrim içi verilir.",
      items: ["İntrapartum CTG/NST yorumlama (FIGO ve NICHD sınıflamaları)", "WHO Labour Care Guide ile modern partogram kullanımı", "Obstetrik acil durum simülasyonları"],
    },
  ],

  servicesPage: {
    title: "Hizmetler",
    lead: "Hastanelerle doğumhane kalitesini birlikte iyileştiriyoruz: süreci değerlendiriyor, araçları kuruyor ve ekibi eğitiyoruz.",
    writeUs: "Bu hizmet için bize yazın",
    processTitle: "Bir projeye nasıl başlıyoruz",
    processText: "Her kurumun doğum hacmi, ekip yapısı ve altyapısı farklıdır. Önerimizi bunları gördükten sonra hazırlarız.",
    steps: [
      ["Ön görüşme", "İhtiyacı, doğum hacmini ve mevcut sistemleri konuşuruz."],
      ["Yerinde değerlendirme", "Doğumhane süreçlerini, kayıtları ve altyapıyı inceleriz."],
      ["Öneri ve plan", "Kapsam, takvim ve başarı ölçütlerini yazılı olarak sunarız."],
      ["Uygulama ve ölçüm", "Pilotu başlatır, sonuçları birlikte izler ve raporlarız."],
    ],
  },

  partoai: {
    status: "Klinik doğrulama ve pilot aşamasında",
    lead: "Doğum eylemini kâğıt partogram yerine ekranda izleyin. PartoAI verileri tek yerde toplar, kılavuz eşiklerini sizin yerinize takip eder ve müdahale gerektiren anı ekibe bildirir.",
    origin: "MFSD bünyesinde, Prof. Dr. Resul Arısoy'un klinik yönlendirmesiyle geliştirildi. Eşikler hastane bazında yapılandırılabilir.",
    demo: "Demo isteyin",
    modulesLink: "Modülleri görün",
    disclaimer: "PartoAI bir klinik karar destek yazılımıdır; tanı koymaz. Her çıktı sağlık profesyonelinin değerlendirmesine sunulur ve son karar hekime aittir.",
    modules: [
      ["Dijital partogram", "WHO Labour Care Guide temelli; serviks açıklığı, baş seviyesi, fetal kalp hızı ve kasılmalar otomatik grafiklenir."],
      ["Risk sınıflama ve alarm", "Hasta kabulünde risk grubu belirlenir; eşik aşımlarında kırmızı ve sarı uyarı verilir."],
      ["Maternal erken uyarı (MEWS)", "Vital bulgulardan skor ve eskalasyon süresi hesaplanır; skordan bağımsız tetikleyiciler ayrıca izlenir."],
      ["NST/CTG değerlendirme", "Kural motoru ve yapay zekâ birlikte çalışır; ikisi ayrışırsa daha riskli kategori esas alınır. Resmi yorumu hekim imzalar."],
      ["Sezaryen ve Robson analizi", "Doğumlar Robson 10 gruba otomatik ayrılır; endikasyonlar kanıt düzeyine göre katmanlanır, yazdırılabilir kalite raporu üretilir."],
      ["Entegrasyon ve güvenlik", "HBYS, HL7 ve e-Nabız katmanı; rol tabanlı erişim, hasta verisi şifreleme ve tam denetim izi."],
    ],
  },

  projectsPage: {
    title: "Projeler",
    lead: "Klinik ekibimizin sahada karşılaştığı sorunlardan doğan projeler. Her biri klinik doğrulamadan geçmeden kullanıma açılmaz.",
    validationTitle: "Klinik doğrulama yaklaşımımız",
    validationLead: "Bir karar destek aracının güvenilirliği, uzman kararlarıyla ne kadar örtüştüğüyle ölçülür.",
    validation: [
      "PartoAI'nin eşikleri ve skorlama kuralları yayımlanmış kılavuzlara (WHO Labour Care Guide, FIGO, NICHD, Robson) dayanır ve klinik ekibimizce tek tek gözden geçirilir.",
      "Klinik kullanıma geçmeden önce sistem çıktıları, gerçek vakalarda uzman hekim kararlarıyla karşılaştırılır. Pilot uygulamalar etik ve KVKK gereklilikleri tamamlandıktan sonra başlar.",
    ],
    details: "PartoAI ayrıntıları",
  },

  partoaiPage: {
    lead: "Dijital partogram ve doğum karar destek sistemi. Ebe, hemşire ve hekimin aynı ekranda çalıştığı, eşikleri sürekli izleyen bir doğumhane yazılımı.",
    modulesTitle: "Modüller",
    modulesText: "Her modül tek başına ya da birlikte kullanılabilir. Eşik ve kurallar hastaneye göre yapılandırılır.",
    journeyTitle: "Bir hastanın yolculuğu",
    journeyText: "PartoAI, kabulden doğum sonrası kalite raporuna kadar tüm süreci tek kayıtta tutar.",
    journey: [
      ["Hasta kabul", "Öykü ve bulgular girilir; risk grubu otomatik belirlenir."],
      ["Travay izlemi", "Muayeneler partograma işlenir; ilerlemeyen travay kriterleri izlenir."],
      ["Erken uyarı", "MEWS skoru ve NST/CTG kategorisi hesaplanır, gerekirse ekip uyarılır."],
      ["Doğum kapanışı", "Doğum şekli ve endikasyon kaydedilir; Robson grubu atanır."],
      ["Kalite analizi", "Birim ve hekim düzeyinde göstergeler raporlanır."],
    ],
    blocks: [
      ["Kurulum seçenekleri", "Yazılım hastanenin kendi sunucusunda (on-prem) çalışabilir; bu durumda hasta verisi kurumdan çıkmaz. Alternatif olarak Türkiye'de barındırılan bulut kurulumu sunulur."],
      ["Entegrasyon", "HBYS ile HL7 üzerinden, CTG santralleriyle cihaz çıktısı üzerinden bağlantı kurulur. e-Nabız katmanı resmi yetkilendirmeye hazırdır."],
      ["Veri güvenliği", "Rol tabanlı erişim (yönetici, hekim, ebe, hemşire), hasta verisinin şifrelenmesi, otomatik yedekleme ve kim neyi ne zaman değiştirdi sorusunu yanıtlayan tam denetim izi."],
    ],
    calloutTitle: "Karar destek, tanı değil.",
    callout: "PartoAI'nin uyarıları sağlık profesyonelinin değerlendirmesine sunulur. Klinik karar ve sorumluluk hekimdedir.",
    pilotTitle: "Pilot hastane arıyoruz",
    pilotText: "Yüksek doğum hacmine sahip ve dijital dönüşüme açık doğumhanelerle pilot uygulama yapmak istiyoruz.",
    pilotCta: "Demo ve pilot talebi",
  },

  team: {
    title: "Ekip",
    lead: "Klinik deneyim ve yazılım mühendisliği aynı masada. Her ürün kararını hekim ve mühendis birlikte veriyor.",
    careerTitle: "Eğitim ve kariyer",
    focusTitle: "Klinik ilgi alanları",
    membershipsTitle: "Üyelikler",
    joinTitle: "Birlikte çalışalım",
    joinText: "Klinik danışman, araştırmacı ya da pilot kurum olarak projelerimize katılmak isterseniz bize yazın.",
    joinCta: "İş birliği için yazın",
    resul: {
      role: "Kurucu ortak, klinik direktör",
      summary:
        "Kadın hastalıkları ve doğum uzmanı, perinatoloji yan dal uzmanı. Yirmi yılı aşkın klinik deneyimini yüksek riskli gebelikler, doğum yönetimi ve perinatal kalite üzerine yoğunlaştırdı. Türk Perinatoloji Derneği Yönetim Kurulu Başkanı. MFSD'de klinik içeriğin, protokollerin ve PartoAI'nin klinik doğrulamasının sorumlusudur.",
      focus: [
        "Yüksek riskli gebelik takibi ve ayrıntılı fetal ultrasonografi",
        "Gestasyonel diyabet, preeklampsi, plasenta previa ve plasenta akreta",
        "Amniyosentez, fetal tanı ve tedavi girişimleri",
        "Doğum planlaması ve doğumhane yönetimi",
      ],
      timeline: [
        ["2005", "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi"],
        ["2011", "Kadın Hastalıkları ve Doğum uzmanlığı, Okmeydanı Eğitim ve Araştırma Hastanesi"],
        ["2015", "Perinatoloji yan dal uzmanlığı, Zeynep Kamil Kadın ve Çocuk Hastalıkları Eğitim ve Araştırma Hastanesi"],
        ["2015–2017", "Perinatoloji kliniği ve başhekim yardımcılığı, Gaziantep Cengiz Gökçek Kadın Doğum ve Çocuk Hastanesi"],
        ["2017–2025", "Perinatoloji uzmanı, Memorial Ataşehir ve Şişli hastaneleri"],
        ["2019", "Doçent, Kadın Hastalıkları ve Doğum"],
        ["2020", "Öğretim üyesi, Üsküdar Üniversitesi Tıp Fakültesi"],
        ["2025", "Türk Perinatoloji Derneği Yönetim Kurulu Başkanı"],
      ],
      memberships: ["Türk Perinatoloji Derneği (Yönetim Kurulu Başkanı)", "World Association of Perinatal Medicine", "Türk Jinekoloji ve Obstetrik Derneği", "Türk Tabipleri Birliği"],
    },
    atil: {
      role: "Kurucu ortak, teknoloji ve ürün",
      summary:
        "Yazılım geliştirme ve kurumsal BT alanında yaklaşık yirmi yıllık deneyime sahip. PartoAI'nin mimarisini ve geliştirmesini yürütüyor; hastane bilgi sistemleri, HL7 entegrasyonu ve sağlık verisi güvenliği üzerine çalışıyor. Sağlık turizmi platformu MedicallAI'nin de kurucusudur.",
    },
  },

  about: {
    title: "Hakkımızda",
    lead: "MFSD, anne ve bebek sağlığına odaklanan bir sağlık ve danışmanlık şirketidir. İstanbul'da kuruldu; perinatoloji uzmanları ve yazılım mühendislerinden oluşan bir ekiple çalışır.",
    whyTitle: "Neden varız",
    why: [
      "Doğumhanelerde kritik kararlar çoğu zaman yoğun mesai altında, kâğıt formlar ve dağınık kayıtlar üzerinden verilir. Kılavuzlarda tanımlı uyarı işaretleri bu koşullarda gözden kaçabilir.",
      "MFSD'yi, perinatoloji alanındaki klinik birikimi hastanelerin her gün kullanabileceği süreçlere, eğitimlere ve yazılımlara dönüştürmek için kurduk. Amacımız sağlık ekiplerinin yerine karar vermek değil, doğru bilgiyi doğru anda önlerine koymak.",
    ],
    principlesTitle: "Çalışma ilkelerimiz",
    principles: [
      ["Kılavuza dayalı", "Her eşik, skor ve öneri yayımlanmış uluslararası kılavuzlara dayanır ve kaynağı gösterilir."],
      ["Son karar hekimin", "Ürünlerimiz karar destek sağlar; tanı koymaz. Klinik sorumluluk her zaman sağlık profesyonelindedir."],
      ["Önce doğrulama", "Hiçbir klinik özellik, uzman kararlarıyla karşılaştırılarak doğrulanmadan kullanıma açılmaz."],
      ["Veri kurumda kalır", "Hasta verisinin sahibi hastanedir. KVKK'ya uygun çalışır, mümkün olduğunda veriyi kurumun kendi sunucusunda tutarız."],
    ],
    companyTitle: "Şirket bilgileri",
    companyNote: "6102 sayılı Türk Ticaret Kanunu m.1524 uyarınca.",
    facts: { legalName: "Ticaret unvanı", shortName: "Kısa ad", mersis: "MERSIS no", registry: "Ticaret sicili", tax: "Vergi dairesi / no", address: "Merkez adresi", email: "E-posta", kep: "KEP" },
    registryValue: (no) => `İstanbul Ticaret Sicil Müdürlüğü, Sicil No: ${no}`,
    outro: ["Ekibimizi tanıyın", "veya", "bizimle iletişime geçin"],
  },

  contact: {
    title: "İletişim",
    lead: "Demo, pilot, eğitim ya da danışmanlık talebiniz için formu doldurun. Mesajınız doğrudan ekibimize ulaşır.",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    map: "Haritada açın",
    notice: "Hasta randevusu ve muayene talepleri için bu formu kullanmayın. MFSD hastalara doğrudan sağlık hizmeti vermez; kurumsal iş birlikleriyle çalışır.",
    form: {
      topics: [
        ["demo", "PartoAI demo talebi"],
        ["danismanlik", "Klinik danışmanlık"],
        ["egitim", "Eğitim programları"],
        ["isbirligi", "İş birliği / yatırım"],
        ["diger", "Diğer"],
      ],
      name: "Ad soyad",
      org: "Kurum",
      orgPh: "Hastane, klinik veya şirket",
      email: "E-posta",
      phone: "Telefon",
      optional: "(isteğe bağlı)",
      topic: "Konu",
      message: "Mesajınız",
      messagePh: "Kurumunuzu, doğum hacminizi ve neye ihtiyaç duyduğunuzu kısaca yazın.",
      consentPre: "",
      consentLink: "KVKK aydınlatma metnini",
      consentPost: " okudum; bilgilerimin talebime yanıt verilmesi amacıyla işlenmesini kabul ediyorum.",
      noPatientData: "Lütfen bu forma hasta bilgisi veya tıbbi kayıt yazmayın.",
      submit: "Mesajı gönder",
      sending: "Gönderiliyor…",
      doneTitle: "Mesajınız gönderildi",
      doneText: "E-posta adresinize bir onay gönderdik. Ekibimiz en geç iki iş günü içinde size dönüş yapacak.",
      genericError: "Mesaj gönderilemedi.",
    },
  },

  newsletter: {
    title: "Gelişmelerden haberdar olun",
    text: "PartoAI pilot sonuçları, eğitim takvimi ve klinik yayınlar hakkında yılda birkaç kez e-posta gönderiyoruz.",
    label: "E-posta adresiniz",
    placeholder: "ornek@hastane.com.tr",
    submit: "Abone ol",
    sending: "Kaydediliyor…",
    consentPre: "MFSD'den duyuru ve bülten e-postaları almayı kabul ediyorum. Kişisel verilerim ",
    consentLink: "aydınlatma metnine",
    consentPost: " uygun işlenir; dilediğim an abonelikten çıkabilirim.",
    done: "Abone oldunuz. Yeni duyurularımızı e-postanıza göndereceğiz.",
    genericError: "Kayıt tamamlanamadı.",
  },

  footer: {
    site: "Site",
    legal: "Yasal",
    contact: "İletişim",
    privacy: "KVKK aydınlatma metni",
    cookies: "Çerez politikası",
    rights: "Tüm hakları saklıdır.",
  },

  // API yanıtları ve e-postalar
  api: {
    badRequest: "Form verisi okunamadı. Sayfayı yenileyip tekrar deneyin.",
    rate: "Kısa sürede çok fazla mesaj gönderildi. 10 dakika sonra tekrar deneyin.",
    name: "Adınızı ve soyadınızı yazın.",
    email: "Geçerli bir e-posta adresi yazın.",
    message: "Mesajınız en az 10 karakter olmalı.",
    kvkk: "Devam etmek için aydınlatma metnini onaylayın.",
    unavailable: (mail) => `Form şu anda çalışmıyor. Lütfen ${mail} adresine e-posta gönderin.`,
    failed: (mail) => `Mesaj gönderilemedi. Lütfen ${mail} adresine doğrudan yazın.`,
    subConsent: "Abone olmak için e-posta iznini onaylayın.",
    subRate: "Çok fazla deneme yapıldı. Birkaç dakika sonra tekrar deneyin.",
    subUnavailable: "Bülten kaydı şu anda çalışmıyor. Daha sonra tekrar deneyin.",
    subFailed: "Kayıt tamamlanamadı. Lütfen daha sonra tekrar deneyin.",
    autoReplySubject: "Mesajınız MFSD'ye ulaştı",
    autoReplyBody: (name, topic) => [`Sayın ${name},`, `"${topic}" konulu mesajınızı aldık. Ekibimiz en kısa sürede size dönüş yapacak.`],
  },

  notFound: { title: "Bu sayfa bulunamadı", text: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.", home: "Ana sayfaya dönün", contact: "Bize yazın" },
};

export default tr;
