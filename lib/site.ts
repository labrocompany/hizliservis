export const site = {
  name: "HızlıServis",
  whatsappNumber: "905011059846",
  phoneDisplay: "+90 501 105 98 46",
};

export const phoneDisplay = site.phoneDisplay;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const requestMessage = [
  "Merhaba, servis talebi oluşturmak istiyorum.",
  "Cihaz:",
  "Marka:",
  "Arıza:",
  "İlçe / adres:",
].join("\n");

export function serviceMessage(title: string) {
  return [
    `Merhaba, ${title} için servis talebi oluşturmak istiyorum.`,
    "Marka:",
    "Arıza:",
    "İlçe / adres:",
  ].join("\n");
}

export const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetlerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export type Service = {
  slug: string;
  title: string;
  menu: string;
  summary: string;
  body: string;
  issues: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "bulasik-makinesi",
    title: "Bulaşık Makinesi Servisi",
    menu: "Bulaşık Makinesi",
    summary:
      "Su almama, boşaltmama, kurutmama ve programda durma arızalarında yerinde müdahale.",
    body: "Bulaşık makinesi su almıyorsa, yıkama ortasında duruyorsa veya alt taraftan su kaçırıyorsa cihaz yerinde incelenir. Pompa, rezistans, kart ve conta kontrol edilir. Parça gerekiyorsa tutar işlemden önce bildirilir.",
    issues: [
      "Su almıyor veya su boşaltmıyor",
      "Program ortasında duruyor",
      "Kurutmuyor veya bulaşıklar yağlı kalıyor",
      "Alt bölmeden su kaçırıyor",
      "Kapak kilitlenmiyor, aşırı ses var",
    ],
    image: "/images/hizliservis-bulasik.jpg",
    imageAlt: "Teknisyen açık bulaşık makinesini kontrol ediyor",
  },
  {
    slug: "camasir-makinesi",
    title: "Çamaşır Makinesi Servisi",
    menu: "Çamaşır Makinesi",
    summary:
      "Sıkma yapmama, kazan dönmeme, su kaçağı ve kapak kilidi arızalarında yerinde servis.",
    body: "Çamaşır makinesi sıkmıyorsa, kazan dönmüyorsa veya su kaçırıyorsa cihaz sökülmeden yerinde bakılır. Rulman, kayış, pompa ve kart kontrol edilir. Onayınız olmadan parça değişimi yapılmaz.",
    issues: [
      "Sıkma yapmıyor",
      "Kazan dönmüyor",
      "Su kaçırıyor veya su almıyor",
      "Kapak kilitlenmiyor",
      "Çalışırken aşırı ses çıkarıyor",
    ],
    image: "/images/hizliservis-camasir.jpg",
    imageAlt: "Teknisyen çamaşır makinesinin kazanını inceliyor",
  },
  {
    slug: "buzdolabi",
    title: "Buzdolabı Servisi",
    menu: "Buzdolabı",
    summary:
      "Soğutmama, aşırı buzlanma, su akıtma ve ses sorunlarında yerinde buzdolabı bakımı.",
    body: "Buzdolabı soğutmuyorsa, karlanma yapıyorsa veya alt taraftan su akıtıyorsa gaz, fan, termostat ve drenaj hattı yerinde kontrol edilir. Gıdalarınızın bozulmaması için kayıt aynı gün planlanır.",
    issues: [
      "Hiç soğutmuyor veya yetersiz soğutuyor",
      "Dondurucu bölmesi çalışmıyor",
      "Aşırı buzlanma veya karlanma",
      "İçeriden su akıtıyor",
      "Motor sürekli çalışıyor veya ses yapıyor",
    ],
    image: "/images/hizliservis-buzdolabi.jpg",
    imageAlt: "Teknisyen açık buzdolabını kontrol ediyor",
  },
  {
    slug: "firin-ocak",
    title: "Fırın ve Ocak Servisi",
    menu: "Fırın ve Ocak",
    summary:
      "Isıtmama, dengesiz pişirme, fan arızası ve ocak ateşleme sorunlarında yerinde servis.",
    body: "Ankastre fırın ısıtmıyorsa, alt-üst rezistans dengesizse veya ocak ateşlemiyorsa cihaz mutfakta incelenir. Rezistans, termostat, fan ve ateşleme grubu kontrol edilir.",
    issues: [
      "Fırın hiç ısınmıyor",
      "Isı dengesiz, bir taraf pişirmiyor",
      "Fan dönmüyor",
      "Ocak ateşlemiyor veya alev sönüyor",
      "Kapak contası yıpranmış",
    ],
    image: "/images/hizliservis-firin.jpg",
    imageAlt: "Teknisyen ankastre fırının kapağını açarak kontrol ediyor",
  },
  {
    slug: "klima",
    title: "Klima Servisi",
    menu: "Klima",
    summary:
      "Soğutmama, ısıtmama, su damlatma ve koku için bakım ile yerinde klima servisi.",
    body: "Klima soğutmuyorsa, ısıtmıyorsa veya iç üniteden su damlatıyorsa iç ve dış ünite yerinde kontrol edilir. Bakım, filtre temizliği ve gaz kaçağı şüphesi işlem öncesi size anlatılır.",
    issues: [
      "Soğutmuyor veya ısıtmıyor",
      "İç üniteden su damlatıyor",
      "Kötü koku geliyor",
      "Dış ünite çalışmıyor",
      "Bakım ve filtre temizliği gerekiyor",
    ],
    image: "/images/hizliservis-klima.jpg",
    imageAlt: "Teknisyen duvar tipi klimayı temizliyor",
  },
  {
    slug: "kombi",
    title: "Kombi Servisi",
    menu: "Kombi",
    summary:
      "Sıcak su kesilmesi, peteklerin ısınmaması ve basınç düşmesi için yerinde kombi bakımı.",
    body: "Kombi sıcak su vermiyorsa, petekler ısınmıyorsa veya basınç sürekli düşüyorsa cihaz yerinde açılır. Ateşleme, pompa, eşanjör ve sensör kontrol edilir. Yapılacak işlem onayınızdan sonra başlar.",
    issues: [
      "Sıcak su gelmiyor",
      "Petekler ısınmıyor",
      "Basınç düşüyor",
      "Ateşleme arızası veriyor",
      "Çalışırken ses yapıyor",
    ],
    image: "/images/hizliservis-kombi.jpg",
    imageAlt: "Teknisyen açık kombinin iç aksamını inceliyor",
  },
  {
    slug: "televizyon",
    title: "Televizyon Servisi",
    menu: "Televizyon",
    summary:
      "Görüntü gelmeme, ses var görüntü yok, çizgi ve açılmama arızalarında yerinde bakış.",
    body: "Televizyon açılmıyorsa, ses var görüntü yoksa veya ekranda çizgi varsa panel ve anakart yerinde incelenir. LCD, LED ve OLED cihazlarda onarım mümkün değilse bu size işlemden önce söylenir.",
    issues: [
      "Cihaz açılmıyor",
      "Ses var, görüntü yok",
      "Ekranda çizgi veya leke var",
      "Görüntü geliyor, ses yok",
      "Kendiliğinden kapanıyor",
    ],
    image: "/images/hizliservis-televizyon.jpg",
    imageAlt: "Teknisyen duvara monte televizyonun arka panelini inceliyor",
  },
  {
    slug: "kurutma-makinesi",
    title: "Kurutma Makinesi Servisi",
    menu: "Kurutma Makinesi",
    summary:
      "Kurutmama, aşırı ısınma ve tambur dönmeme arızalarında yerinde kurutma makinesi servisi.",
    body: "Kurutma makinesi çamaşırı kurutmuyorsa, aşırı ısınıyorsa veya tambur dönmüyorsa ısıtıcı, sensör, fan ve filtre yerinde kontrol edilir. Tutar, parça gerekip gerekmediği netleştikten sonra iletilir.",
    issues: [
      "Çamaşır kurumuyor",
      "Aşırı ısınıyor",
      "Tambur dönmüyor",
      "Program yarıda kesiliyor",
      "Filtre ve sensör uyarısı veriyor",
    ],
    image: "/images/hizliservis-kurutma.jpg",
    imageAlt: "Teknisyen kurutma makinesinin kapağı açıkken cihazı inceliyor",
  },
  {
    slug: "derin-dondurucu",
    title: "Derin Dondurucu Servisi",
    menu: "Derin Dondurucu",
    summary:
      "Soğutmama, fazla buz ve motorun sürekli çalışması için yerinde derin dondurucu servisi.",
    body: "Çekmeceli ve sandık tipi derin dondurucular soğutmuyorsa veya motor hiç durmuyorsa cihaz yerinde incelenir. Kapak contası, fan ve soğutma devresi kontrol edilir. Gıda kaybını azaltmak için randevu aynı gün tutulur.",
    issues: [
      "Soğutmuyor",
      "Fazla buz yapıyor",
      "Motor sürekli çalışıyor",
      "Kapak contası hava alıyor",
      "İç aydınlatma ve gösterge arızası",
    ],
    image: "/images/hizliservis-dondurucu.jpg",
    imageAlt: "Teknisyen derin dondurucunun kapağını açarak kontrol ediyor",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const steps = [
  {
    n: "01",
    title: "WhatsApp'tan yazın",
    text: "Cihaz türü, marka, arıza ve bulunduğunuz ilçeyi mesajla iletin.",
  },
  {
    n: "02",
    title: "Randevu netleşir",
    text: "Uygun saat size yazılır. Kayıt, onayınızla kesinleşir.",
  },
  {
    n: "03",
    title: "Teknisyen gelir",
    text: "Ekip, bildirilen saatte adrese gelir ve cihazı yerinde inceler.",
  },
  {
    n: "04",
    title: "İşlem tamamlanır",
    text: "Onaylanan iş yapılır. Cihaz teslim edilir, işçilik garantisi verilir.",
  },
];

export const principles = [
  {
    title: "Aynı gün randevu",
    text: "Kayıt gün içinde planlanır. Uygun ekip adresinize yönlendirilir.",
  },
  {
    title: "Yerinde tamir",
    text: "Cihazı servise taşımanız gerekmez. İşlem evde veya iş yerinde yapılır.",
  },
  {
    title: "Önce fiyat",
    text: "Parça ve işçilik tutarı işlemden önce yazılır. Onaysız değişim yapılmaz.",
  },
  {
    title: "İşçilik garantisi",
    text: "Tamamlanan iş için garanti belgesi düzenlenir.",
  },
];
