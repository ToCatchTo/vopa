// Statické texty webu
export interface ServiceSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

// Blok právního textu: odstavec nebo odrážkový seznam
export type LegalBlock = string | { list: string[] }

export interface LegalSection {
  heading: string
  blocks: LegalBlock[]
}

export interface ServicePhoto {
  src: string
  // Výřez fotky (CSS object-position), výchozí střed
  position?: string
}

export interface ServiceContent {
  slug: string
  path: string
  title: string
  intro: string
  heroImage: string
  heroImageAlt: string
  photos: ServicePhoto[]
  photoAlt: string
  sections: ServiceSection[]
  cta: { title: string; text: string }
}

const paths = {
  home: '/',
  maintenance: '/udrzba-zelene',
  gardening: '/zahradni-prace',
  treeFelling: '/kaceni-stromu',
  groundwork: '/terenni-prace',
  otherServices: '/dalsi-sluzby',
  inquiry: '/poptavka',
  inquirySent: '/poptavka/odeslano',
  contact: '/kontakt',
  terms: '/obchodni-podminky',
  privacy: '/ochrana-osobnich-udaju',
} as const

const contact = {
  person: 'Tomáš Vondráček',
  role: 'Jednatel',
  phone: '+420 606 403 490',
  phoneHref: 'tel:+420606403490',
  email: 'vopa-pce@seznam.cz',
  emailHref: 'mailto:vopa-pce@seznam.cz',
  facebookUrl: 'https://www.facebook.com/',
}

const content = {
  paths,
  contact,

  brand: {
    name: 'VOPA',
    legalName: 'Vondráček – VoPa s.r.o.',
    logoAlt: 'VoPa Vondráček – realizace exteriérové zeleně, úklidové služby',
  },

  header: {
    responseNote: 'Odpovíme do 24h.',
    inquiryButton: 'Poptejte nás',
  },

  menu: {
    label: 'MENU - nabídka služeb',
    openAria: 'Otevřít menu',
    closeAria: 'Zavřít menu',
    items: [
      { label: 'Údržba zeleně', path: paths.maintenance },
      { label: 'Zahradní práce', path: paths.gardening },
      { label: 'Kácení stromů', path: paths.treeFelling },
      { label: 'Terénní práce', path: paths.groundwork },
      { label: 'Další služby', path: paths.otherServices },
      { label: 'Poptávka', path: paths.inquiry },
      { label: 'Kontakt', path: paths.contact },
    ],
  },

  ctaButton: 'Odeslat nezávaznou poptávku',

  home: {
    heroTitle: ['Údržba zeleně', 'v Pardubicích a okolí'],
    heroText:
      'Komplexní údržba zeleně, kácení stromů\na terénní úpravy pro obce, firmy i domácnosti\nv Pardubickém kraji. Už přes 30 let.',
    heroImageAlt: 'Sekání trávníku zahradním traktorem',
    intro: {
      title: 'Představení společnosti',
      paragraphs: [
        'Jsme rodinná firma s více než 30 letou tradicí. Společnost Vondráček – VoPa s.r.o. se od roku 1994 stará o zeleň v Pardubicích a v celém Pardubickém kraji. Jsme rodinná firma, která za tři desetiletí vybudovala zázemí, techniku a zkušený tým pro zakázky jakéhokoli rozsahu.',
        'Pečujeme o veřejná prostranství obcí, areály průmyslových podniků a obchodních center, pozemky škol i soukromé zahrady. Zajistíme jednorázový zásah stejně jako dlouhodobou pravidelnou údržbu podle dohodnutého harmonogramu.',
        'Každou zakázku si nejprve prohlédneme na místě, navrhneme vhodný postup a předložíme jasnou cenovou nabídku. Práci odvádíme vlastními pracovníky a vlastní mechanizací, včetně odvozu a likvidace vzniklého odpadu.',
      ],
      clientsTitle: 'Pečujeme o zeleň obcí, firem i domácností',
      clients: [
        'Obce a města – veřejná zeleň, parky, hřbitovy, dětská hřiště a zeleň podél komunikací.',
        'Firmy a správci areálů – průmyslové podniky, sklady, obchodní centra, kancelářské budovy, SVJ a bytová družstva.',
        'Školy a instituce – školní zahrady, sportoviště a okolí budov.',
        'Domácnosti – rodinné domy, chaty a zahrady všech velikostí.',
      ],
    },
    services: {
      title: 'Naše služby',
      subtitle: 'Služby pro péči o zeleň a pozemky',
      items: [
        {
          name: 'Údržba zeleně',
          description: 'Komplexní a pravidelná péče o zeleň pro obce, firmy i domácnosti. Jeden dodavatel pro celý rok.',
          linkLabel: 'Více o údržbě zeleně',
          path: paths.maintenance,
          icon: '/icons/service_maintenance_icon.svg',
        },
        {
          name: 'Zahradní práce',
          description: 'Sečení trávníků, likvidace plevele a stříhání živých plotů a keřů.',
          linkLabel: 'Více o zahradních pracích',
          path: paths.gardening,
          icon: '/icons/service_gardening_icon.svg',
        },
        {
          name: 'Kácení a prořez stromů',
          description: 'Kácení a prořezávání stromů, rizikové kácení pomocí mechanizace a frézování pařezů.',
          linkLabel: 'Více o kácení stromů',
          path: paths.treeFelling,
          icon: '/icons/service_tree_felling_icon.svg',
        },
        {
          name: 'Terénní práce',
          description: 'Vyrovnání terénu, příprava ploch pro trávníky a záhony, navezení zeminy a substrátu.',
          linkLabel: 'Více o terénních pracích',
          path: paths.groundwork,
          icon: '/icons/service_groundwork_icon.svg',
        },
        {
          name: 'Další služby',
          description: 'Odvoz a likvidace zeleného odpadu, údržba dětských hřišť a prodej palivového dřeva.',
          linkLabel: 'Více o dalších službách',
          path: paths.otherServices,
          icon: '/icons/service_other_icon.svg',
        },
      ],
    },
    cta: {
      title: 'Potřebujete se postarat o zeleň?',
      text: 'Popište nám, co potřebujete. Ozveme se do jednoho pracovního dne, domluvíme prohlídku na místě a připravíme nezávaznou cenovou nabídku.',
    },
  },

  services: [
    {
      slug: 'maintenance',
      path: paths.maintenance,
      title: 'Údržba zeleně',
      intro:
        'Pravidelně udržovaná zeleň reprezentuje\nobec i firmu a ušetří vám náklady na\npozdější nápravu zanedbaných ploch.\nPečujeme o veřejnou zeleň, firemní areály\ni soukromé zahrady v Pardubickém kraji\nuž od roku 1994.',
      heroImage: '/images/maintenance_hero.webp',
      heroImageAlt: 'Sekání trávníku zahradním traktorem',
      photos: [
        { src: '/images/maintenance_photo_1.webp', position: '50% 0%' },
        { src: '/images/maintenance_photo_2.webp', position: '50% 23%' },
        { src: '/images/maintenance_photo_3.webp', position: '50% 42%' },
      ],
      photoAlt: 'Posečený travnatý svah',
      sections: [
        {
          heading: 'Komunální údržba zeleně\npro obce a města',
          paragraphs: [
            'Obcím zajišťujeme péči o veřejná prostranství v celém rozsahu – od pravidelného sečení travnatých ploch přes stříhání živých plotů a keřů až po ošetření a kácení stromů. Pečujeme také o zeleň podél komunikací a o dětská hřiště.',
            'S veřejnými zadavateli pracujeme dlouhodobě. Rozumíme nárokům na dodržování harmonogramu, bezpečnost práce na veřejných plochách a průběžnou komunikaci se správcem.',
          ],
        },
        {
          heading: 'Údržba zeleně pro firmy\na správce areálů',
          paragraphs: [
            'Udržovaný areál je vizitkou firmy. Staráme se o zeleň kolem výrobních hal, skladů, obchodních center, administrativních budov i bytových domů ve správě SVJ a družstev.',
            'Nastavíme pravidelný servis podle charakteru areálu a požadované úrovně péče. Vy máte jednoho dodavatele a pevný harmonogram, my se postaráme o vše ostatní včetně odvozu odpadu.',
          ],
        },
        {
          heading: 'Údržba zahrad pro domácnosti',
          paragraphs: [
            'Majitelům rodinných domů a chat nabízíme jednorázové i pravidelné práce na zahradě. Posekáme trávník, zastřihneme živý plot, odstraníme plevel nebo pokácíme přerostlý strom. Zahrada je pak připravená k odpočinku, nikoli k další práci.',
          ],
        },
        {
          heading: 'Co údržba zeleně zahrnuje',
          paragraphs: [],
          list: [
            'pravidelné i jednorázové sečení trávníků a travnatých ploch',
            'chemická i ruční likvidace plevele',
            'stříhání živých plotů a tvarování keřů',
            'kácení a prořezávání stromů, štěpkování větví',
            'odstranění pařezů frézováním',
            'úklid po polomech',
            'odvoz a likvidace zeleného odpadu',
          ],
        },
      ],
      cta: {
        title: 'Chcete mít o zeleň\npostaráno celý rok?',
        text: 'Pošlete nám nezávaznou poptávku a připravíme\nvám plán údržby na míru.',
      },
    },
    {
      slug: 'gardening',
      path: paths.gardening,
      title: 'Zahradní práce',
      intro:
        'Zdravý trávník a upravené živé ploty vyžadují\npravidelnou a odbornou péči. Zahradní práce\nprovádíme jednorázově i v rámci pravidelného\nservisu na zahradách, firemních pozemcích\ni veřejných plochách.',
      heroImage: '/images/gardening_hero.webp',
      heroImageAlt: 'Sekání trávy zahradním traktorem',
      photos: [
        { src: '/images/gardening_photo_1.webp', position: '50% 43%' },
        { src: '/images/gardening_photo_2.webp' },
        { src: '/images/gardening_photo_3.webp' },
      ],
      photoAlt: 'Zahradní práce na živém plotu',
      sections: [
        {
          heading: 'Pravidelné i jednorázové sečení trávníků',
          paragraphs: [
            'Sečeme okrasné trávníky u rodinných domů stejně jako rozsáhlé travnaté plochy v areálech a na veřejných prostranstvích. Technologii volíme podle velikosti plochy, terénu a výšky porostu.',
          ],
          list: [
            'sečení se sběrem trávy pro reprezentativní plochy',
            'sečení s mulčováním, kdy posečená hmota zůstává jako přirozené hnojivo',
            'sečení vysokých a přerostlých porostů a zanedbaných pozemků',
            'pravidelné sečení podle dohodnutého harmonogramu',
          ],
        },
        {
          heading: 'Likvidace plevele – chemická i ruční',
          paragraphs: [
            'Plevel odstraňujeme ručně ze záhonů a výsadeb, kde je potřeba šetrný přístup k okolním rostlinám. Na chodníky, dlažby, parkoviště a zpevněné plochy areálů používáme chemickou likvidaci registrovanými přípravky s ohledem na okolní zeleň.',
          ],
        },
        {
          heading: 'Stříhání živých plotů a keřů',
          paragraphs: [
            'Pravidelný střih udržuje živý plot hustý, zdravý a v požadovaném tvaru. Zastřihneme nízké i vysoké živé ploty, tvarujeme keře a odstraníme přerostlé a suché větve. Odstřižené větve odvezeme nebo zpracujeme štěpkováním.',
          ],
        },
      ],
      cta: {
        title: 'Potřebujete se postarat o trávník\nnebo zastřihnout živý plot?',
        text: 'Pošlete nám nezávaznou poptávku,\ntermín domluvíme obratem.',
      },
    },
    {
      slug: 'tree-felling',
      path: paths.treeFelling,
      title: 'Kácení stromů',
      intro:
        'Kácení stromů v Pardubicích a okolí.\nNemocný, poškozený nebo nevhodně rostoucí\nstrom ohrožuje majetek i bezpečnost lidí.\nStromy kácíme a prořezáváme bezpečně,\ns vlastní mechanizací a včetně kompletního\núklidu – od zahrad rodinných domů po\nveřejná prostranství a firemní areály.',
      heroImage: '/images/tree_felling_hero.webp',
      heroImageAlt: 'Arborista při prořezávání stromu',
      photos: [
        { src: '/images/tree_felling_photo_1.webp', position: '50% 14%' },
        { src: '/images/tree_felling_photo_2.webp', position: '50% 16%' },
        { src: '/images/tree_felling_photo_3.webp', position: '50% 42%' },
      ],
      photoAlt: 'Prořez stromu z pracovní plošiny',
      sections: [
        {
          heading: 'Kácení a prořezávání stromů',
          paragraphs: [
            'Prořez prodlužuje život stromu a snižuje riziko pádu větví. Provádíme zdravotní a bezpečnostní řez, odstranění suchých a poškozených větví a redukci koruny u stromů v blízkosti budov, vedení nebo komunikací.',
            'Pokud strom nelze zachránit, nebo překáží plánované stavbě, provedeme jeho pokácení. Postup vždy volíme podle velikosti stromu, jeho stavu a prostoru v okolí.',
          ],
        },
        {
          heading: 'Rizikové kácení stromů pomocí mechanizace',
          paragraphs: [
            'Rizikové kácení je nutné tam, kde strom nelze složit vcelku – v blízkosti domů, plotů, garáží, elektrického vedení nebo komunikací. Strom postupně odřezáváme po částech a jednotlivé díly bezpečně spouštíme k zemi pomocí mechanizace.',
            'Minimalizujeme tak riziko poškození okolního majetku a práci provedeme i na stísněném pozemku.',
          ],
        },
        {
          heading: 'Likvidace dřevní hmoty štěpkováním',
          paragraphs: [
            'Větve a menší dřevní hmotu zpracujeme na místě štěpkovačem. Objem odpadu se tím výrazně zmenší a štěpku můžete využít jako mulč do záhonů, nebo ji odvezeme k likvidaci.',
          ],
        },
        {
          heading: 'Odstranění pařezů frézováním',
          paragraphs: [
            'Pařez po pokáceném stromu odstraníme postupným frézováním do hloubky pod úroveň terénu. Na místě pak můžete založit trávník nebo záhon. Frézování je šetrné k okolí a nevyžaduje vykopávání ani těžkou techniku.',
          ],
        },
        {
          heading: 'Úklid v místech polomu',
          paragraphs: [
            'Po bouřkách a vichřicích odstraníme vyvrácené a zlomené stromy, rozřežeme kmeny, zpracujeme větve a uvolníme cesty, příjezdy i pozemky. U polomů reagujeme podle aktuálních kapacit co nejrychleji.',
          ],
        },
      ],
      cta: {
        title: 'Máte strom, který potřebuje\npokácet nebo prořezat?',
        text: 'Pošlete nám nezávaznou poptávku ideálně\ns fotografií stromu a jeho okolí.',
      },
    },
    {
      slug: 'groundwork',
      path: paths.groundwork,
      title: 'Terénní práce',
      intro:
        'Terénní úpravy zahrad a pozemků v Pardubicích.\nKvalitní trávník i záhon začíná správně\npřipraveným terénem. Pozemek vyrovnáme,\npřipravíme plochy pro výsadbu a navezeme\npotřebnou zeminu nebo substrát –\nu novostaveb, při rekonstrukci zahrady\ni na firemních a veřejných plochách.',
      heroImage: '/images/groundwork_hero.webp',
      heroImageAlt: 'Sklápěč s navezenou zeminou',
      photos: [
        { src: '/images/groundwork_photo_1.webp' },
        { src: '/images/groundwork_photo_2.webp', position: '50% 45%' },
        { src: '/images/groundwork_photo_3.webp', position: '50% 43%' },
      ],
      photoAlt: 'Terénní úpravy pozemku mechanizací',
      sections: [
        {
          heading: 'Vyrovnání nerovností terénu',
          paragraphs: [
            'Srovnáme propadlá místa, terénní vlny i nerovnosti po stavební činnosti. Rovný povrch usnadní pozdější sečení, zabrání tvorbě louží a připraví pozemek pro založení trávníku, dlažby nebo výsadby.',
          ],
        },
        {
          heading: 'Příprava ploch pro trávníky a záhony',
          paragraphs: [
            'Plochu vyčistíme od kamenů, kořenů a zbytků porostu, půdu zpracujeme a urovnáme do požadované roviny nebo spádu. Takto připravený podklad zajistí, že trávník vzejde rovnoměrně a záhony budou mít pro rostliny vhodné podmínky.',
          ],
        },
        {
          heading: 'Navezení zeminy a substrátu',
          paragraphs: [
            'Dovezeme a rozprostřeme ornici, zahradní zeminu nebo substrát v potřebném množství. Navážku využijete pro dorovnání terénu, zvýšení úrovně pozemku, založení trávníku nebo vyvýšených záhonů.',
          ],
        },
      ],
      cta: {
        title: 'Chystáte novou zahradu\nnebo potřebujete srovnat pozemek?',
        text: 'Popište nám rozsah prací a přiložte fotografii,\npřipravíme vám nabídku.',
      },
    },
    {
      slug: 'other-services',
      path: paths.otherServices,
      title: 'Další služby',
      intro:
        'Odvoz odpadu, údržba hřišť a palivové dřevo.\nNaše služby doplňujeme o práce, které s péčí\no zeleň a pozemky přímo souvisejí. Díky tomu\nvám zajistíme vše potřebné od jednoho\ndodavatele.',
      heroImage: '/images/other_services_hero.webp',
      heroImageAlt: 'Vysypávání mulčovací kůry ze sklápěče',
      photos: [
        { src: '/images/other_services_photo_1.webp', position: '50% 40%' },
        { src: '/images/other_services_photo_2.webp', position: '50% 0%' },
        { src: '/images/other_services_photo_3.webp', position: '50% 74%' },
      ],
      photoAlt: 'Úklid listí v parku',
      sections: [
        {
          heading: 'Odvoz a likvidace vzniklého odpadu',
          paragraphs: [
            'Po každé zakázce po sobě uklidíme. Odvezeme posečenou trávu, listí, větve, štěpku i dřevní hmotu a zajistíme jejich ekologickou likvidaci. Odvoz zeleného odpadu nabízíme také samostatně, například po jarním nebo podzimním úklidu zahrady.',
          ],
        },
        {
          heading: 'Údržba dětských hřišť',
          paragraphs: [
            'Dětské hřiště musí být bezpečné a upravené. Pro obce, školy, školky a správce bytových domů zajišťujeme údržbu ploch hřišť – sečení trávy, úklid, údržbu zeleně v okolí herních prvků.',
          ],
        },
        {
          heading: 'Prodej palivového dřeva',
          paragraphs: [
            'Nabízíme prodej palivového dřeva – sypané nebo metrové. Na přání zákazníka zajistíme dovoz na místo v Pardubicích a okolí.',
          ],
        },
      ],
      cta: {
        title: 'Máte zájem o palivové dřevo\nnebo odvoz odpadu?',
        text: 'Zavolejte nám nebo pošlete\nnezávaznou poptávku.',
      },
    },
  ] satisfies ServiceContent[],

  // Ovládání fotogalerie služby na mobilu
  carousel: {
    prevAria: 'Předchozí fotografie',
    nextAria: 'Další fotografie',
  },

  contactPage: {
    lead: 'Rádi s vámi probereme vaše požadavky. Zavolejte nám, napište e-mail nebo využijte poptávkový formulář.',
    cta: {
      title: 'Chcete rovnou nezávaznou nabídku?',
      text: 'Popište nám, co potřebujete. Ozveme se do jednoho pracovního dne, domluvíme prohlídku na místě a připravíme nezávaznou cenovou nabídku.',
    },
    billing: {
      title: 'Fakturační údaje',
      lines: [
        'Vondráček – VoPa s.r.o.',
        'IČO: 25946242, DIČ: CZ25946242',
        'Palackého třída 2627, Zelené Předměstí',
        '530 02 Pardubice',
        'Společnost je zapsaná v obchodním rejstříku vedeném Krajským soudem v Hradci Králové, oddíl C, vložka 16526.',
      ],
    },
    premises: {
      title: 'Provozovna',
      lines: ['Areál UMA (budova M-56)', '532 17 Pardubice – Semtín'],
    },
    facebookAria: 'Facebook VoPa',
  },

  inquiry: {
    lead: 'Vyplňte krátký formulář\na popište, s čím vám můžeme pomoci. Poptávka je zcela nezávazná a nabídku vám připravíme zdarma.',
    text: 'Zajišťujeme komplexní péči o zeleň a pozemky\nv Pardubicích a v celém Pardubickém kraji. Pravidelnou\núdržbu zeleně pro obce, firmy i domácnosti, zahradní práce,\nkácení a prořez stromů včetně rizikového kácení, terénní\núpravy, odvoz odpadu i prodej palivového dřeva.\nPostaráme se o jednorázovou zakázku stejně jako\no dlouhodobou spolupráci.',
    form: {
      title: 'Poptávka',
      fields: {
        name: '*Jméno příjmení',
        company: 'Firma nebo organizace',
        phone: '*Telefon',
        location: '*Lokalita',
        email: '*E-mail',
        frequency: 'Četnost',
        description: '*Popis požadované služby…',
      },
      fileButton: 'Vybrat soubor',
      photoUpload: {
        maxPhotos: 5,
        label: 'Fotografie',
        processing: 'Zpracovávám fotku…',
        removeAria: 'Odebrat fotografii',
      },
      consent: {
        before: 'Souhlasím se ',
        privacyLink: 'zpracováním osobních údajů',
        after: '.',
      },
      submit: 'Odeslat poptávku',
    },
  },

  inquirySent: {
    message: 'Děkujeme, vaše poptávka byla úspěšně odeslána. Budeme se jí věnovat co nejdříve a brzy se vám ozveme.',
  },

  privacy: {
    title: 'Informace o zpracování osobních údajů',
    sections: [
      {
        heading: 'I. Základní ustanovení',
        blocks: [
          'Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR“) je Vondráček - VoPa s.r.o., IČ 259 46 242, DIČ CZ25946242, se sídlem Palackého třída 2627, Zelené Předměstí, 530 02 Pardubice, zapsaná v obchodním rejstříku vedeném Krajským soudem v Hradci Králové, oddíl C, vložka 16526 (dále jen: „správce“).',
          'Kontaktní údaje správce jsou:',
          { list: [
            'adresa: Palackého třída 2627, Zelené Předměstí, 530 02 Pardubice',
            'e-mail: vopa-pce@seznam.cz',
            'datová schránka: bjsa8fx',
          ] },
          'Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.',
          'Správce nejmenoval pověřence pro ochranu osobních údajů.',
        ],
      },
      {
        heading: 'II. Zdroje a kategorie zpracovávaných osobních údajů',
        blocks: [
          'Správce zpracovává osobní údaje, které mu poskytnete prostřednictvím kontaktního formuláře nebo v rámci následné komunikace.',
          'Zpracovávány mohou být zejména:',
          { list: [
            'jméno, příjmení, název firmy nebo organizace;',
            'e-mailová adresa;',
            'telefon;',
            'lokalita a četnost vztahující se k dotazu nebo žádosti;',
            'nahrané fotografie a soubory prostřednictvím kontaktního formuláře;',
            'obsah dotazu nebo žádosti;',
            'osobní údaje obsažené v následné komunikaci;',
            'IP adresa, datum a čas odeslání formuláře a další technické údaje zaznamenávané za účelem zabezpečení formuláře a ochrany před jeho zneužitím.',
          ] },
        ],
      },
      {
        heading: 'III. Právní základ a účel zpracování osobních údajů',
        blocks: [
          'Zákonným důvodem zpracování osobních údajů je:',
          { list: [
            'oprávněný zájem správce podle čl. 6 odst. 1 písm. f) GDPR, který spočívá v přijímání, vyřizování a zodpovídání dotazů a žádostí zaslaných prostřednictvím kontaktního formuláře a ve vedení související komunikace.',
          ] },
          'Účelem zpracování osobních údajů je:',
          { list: [
            'vyřízení a zodpovězení dotazu nebo žádosti zaslané prostřednictvím kontaktního formuláře na webových stránkách www.vopa-pce.cz.',
          ] },
          'Ze strany správce nedochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR.',
          'Poskytnutí osobních údajů prostřednictvím kontaktního formuláře je dobrovolné a není zákonným ani smluvním požadavkem. Bez poskytnutí funkční e-mailové adresy a obsahu dotazu nebo žádosti však správce nebude schopen dotaz nebo žádost vyřídit a odesílateli odpovědět.',
        ],
      },
      {
        heading: 'IV. Doba uchovávání údajů',
        blocks: [
          'Správce uchovává osobní údaje v nezbytném rozsahu po dobu vyřízení dotazu nebo žádosti a následně po dobu 12 měsíců od ukončení komunikace, není-li v konkrétním případě nezbytné jejich delší uchování pro ochranu práv a oprávněných zájmů správce.',
          'Po uplynutí doby uchovávání osobních údajů správce osobní údaje vymaže.',
        ],
      },
      {
        heading: 'V. Příjemci osobních údajů (subdodavatelé správce)',
        blocks: [
          'K osobním údajům mohou mít v nezbytném rozsahu přístup pověření zaměstnanci správce a dodavatelé zajišťující:',
          { list: [
            'vývoj, provoz a správu webových stránek,',
            'hosting webových stránek a databáze kontaktního formuláře,',
            'provoz e-mailových a dalších IT služeb,',
            'zabezpečení formuláře a ochranu proti jeho zneužití.',
          ] },
          'Dodavatelé zpracovávají osobní údaje pouze v rozsahu nezbytném pro poskytování příslušných služeb a na základě pokynů správce, pokud nevystupují jako samostatní správci.',
          'Správce nemá v úmyslu předat osobní údaje do třetí země (do země mimo EU) nebo mezinárodní organizaci. Příjemci osobních údajů ve třetích zemích jsou poskytovatelé mailingových služeb / cloudových služeb.',
        ],
      },
      {
        heading: 'VI. Vaše práva',
        blocks: [
          'Za podmínek stanovených v GDPR máte:',
          { list: [
            'právo získat potvrzení, zda správce zpracovává vaše osobní údaje, a právo na přístup k těmto údajům,',
            'právo na opravu nepřesných nebo neúplných osobních údajů,',
            'právo na výmaz osobních údajů,',
            'právo na omezení zpracování,',
            'právo vznést námitku proti zpracování založenému na oprávněném zájmu správce.',
          ] },
          'Máte rovněž právo podat stížnost u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.gov.cz, pokud se domníváte, že zpracováním vašich osobních údajů dochází k porušení GDPR.',
        ],
      },
      {
        heading: 'VII. Podmínky zabezpečení osobních údajů',
        blocks: [
          'Správce přijal přiměřená technická a organizační opatření odpovídající povaze a rozsahu zpracování osobních údajů. Přístup k osobním údajům mají pouze pověřené osoby a příslušní poskytovatelé služeb v rozsahu nezbytném pro plnění jejich úkolů.',
        ],
      },
      {
        heading: 'VIII. Závěrečná ustanovení',
        blocks: [
          'Správce může tyto informace aktualizovat zejména v případě změny způsobu zpracování osobních údajů nebo souvisejících právních předpisů. Aktuální znění je vždy dostupné na webových stránkách www.vopa-pce.cz',
          'Tyto zásady nabývají účinnosti dnem 1. 9. 2026.',
        ],
      },
    ] satisfies LegalSection[],
  },

  notFound: {
    title: 'Stránka nenalezena',
    text: 'Omlouváme se, tato stránka neexistuje.',
    link: 'Zpět na úvod',
  },

  footer: {
    lines: ['Rádi s vámi probereme vaše požadavky.', 'Staráme se o zeleň v Pardubicích a Pardubickém kraji.'],
    madeBy: 'tvoříme weby s radostí',
    madeByMobile: 'copyright 2025, vytvoříme web i vám',
    madeByUrl: 'https://www.matfix.cz',
    madeByAria: 'Matfix – tvorba webů',
  },

  // Skryté nadpisy pro SEO
  hiddenHeadings: {
    contact: 'Kontakt – Vondráček – VoPa s.r.o.',
    inquiry: 'Poptávka údržby zeleně',
    inquirySent: 'Poptávka odeslána',
  },
}

export default content
