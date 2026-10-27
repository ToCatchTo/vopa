// Statické texty webu
export interface ServiceSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export interface ServiceContent {
  slug: string
  path: string
  title: string
  intro: string
  heroImage: string
  heroImageAlt: string
  photo: string
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
      photo: '/images/maintenance_hero.webp',
      photoAlt: 'Sekání travnaté plochy podél chodníku',
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
      heroImageAlt: 'Stříhání živého plotu',
      photo: '/images/gardening_hero.webp',
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
      photo: '/images/tree_felling_photo.webp',
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
      heroImageAlt: 'Bagr při terénních úpravách',
      photo: '/images/groundwork_hero.webp',
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
      heroImageAlt: 'Řezání dřeva motorovou pilou',
      photo: '/images/other_services_photo.webp',
      photoAlt: 'Naskládané palivové dřevo',
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

  // Počet fotek ve sloupci na stránce služby
  servicePhotoCount: 3,

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
      consent: {
        before: 'Souhlasím s ',
        termsLink: 'obchodními podmínkami',
        middle: ' a zpracováním ',
        privacyLink: 'osobních údajů',
        after: '.',
      },
      submit: 'Odeslat poptávku',
    },
  },

  inquirySent: {
    message: 'Děkujeme, vaše poptávka byla úspěšně odeslána. Budeme se jí věnovat co nejdříve a brzy se vám ozveme.',
  },

  notFound: {
    title: 'Stránka nenalezena',
    text: 'Omlouváme se, tato stránka neexistuje.',
    link: 'Zpět na úvod',
  },

  footer: {
    lines: ['Rádi s vámi probereme vaše požadavky.', 'Staráme se o zeleň v Pardubicích a Pardubickém kraji.'],
    madeBy: 'tvoříme weby s radostí',
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
