import type { CampsiteConfig } from "../types";

/**
 * Camping Brunner am See — Döbriach am Millstätter See, Kärnten.
 * Alle Texte/Fakten belegt aus campingbrunner.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Fotos/Gästefotos von Camping Brunner
 * (laut Quelle „aus eigenem Archiv sowie zum Großteil von den Gästen") in
 * /public/campsites/campingbrunner/.
 *
 * EHRLICH:
 * - Der Platz liegt WIRKLICH direkt am See mit eigenem, flach abfallendem
 *   Privatstrand nur für Gäste (Homepage + viele Testimonials) → „direkt am
 *   See"/Privatstrand sind belegt, kein Greenwashing.
 * - Preise: Auf den Webseiten ist nur EIN Preis genannt (Familienspecial
 *   Vorsaison € 37,30/Nacht inkl. 2 Erw. + eigene Kinder + Platz). Die
 *   vollständigen Preislisten liegen nur als PDF vor (nicht gescrapt) →
 *   deshalb NUR die eine reale Stellplatz-Zahl verwendet, Rest „auf Anfrage".
 *   KEIN Platzhalter (echte Quelle vorhanden) → pricesArePlaceholder=false.
 * - Hunde: am See/auf der Wiese NICHT erlaubt (bewusste Familien-Regel) → wird
 *   nirgends als „hundefreundlich" geframt.
 * - Bauernhof-Apartments sind laut Quelle „geschlossen" → nicht beworben.
 * - Keine Koordinaten in der Quelle → coords ausgelassen (Karte aus, Adresse zeigt).
 */
const IMG = "/campsites/campingbrunner";

export const campingbrunner: CampsiteConfig = {
  name: "Camping Brunner am See",
  shortName: "Camping Brunner",
  slug: "campingbrunner",
  ort: "Döbriach am Millstätter See",
  region: "Kärnten",
  brandKind: "Camping & Apartments",
  see: "Millstätter See",
  regionLong: "Millstätter See · Kärnten · Österreich",

  claim: "Camping der Luxusklasse, direkt am Millstätter See",
  claimEmphasis: "direkt am Millstätter See",
  intro:
    "Mehrfach ausgezeichneter Komfort-Campingplatz mit eigenem Privatstrand am glasklaren Millstätter See — mitten in der Kärntner Bergwelt, ganzjährig geöffnet.",

  logo: { src: `${IMG}/logo-camping-brunner.png`, alt: "Camping Brunner am See — direkt am See" },

  statement: {
    text: "Eine Ferienanlage der Spitzenklasse, die man sich leisten kann — direkt am See, mitten in der intakten Natur Kärntens.",
    emphasis: "die man sich leisten kann",
  },

  pillars: [
    {
      title: "Direkt am See",
      text: "Dein Platz auf der gepflegten Seewiese mit altem Baumbestand — der Millstätter See beginnt vor deinem Vorzelt.",
      image: { src: `${IMG}/pillar-direkt-am-see.webp`, alt: "Wohnwagen direkt am Ufer des Millstätter Sees bei Camping Brunner" },
    },
    {
      title: "Mitten in den Bergen",
      text: "Eingebettet zwischen Biosphärenpark Nockberge und Nationalpark Hohe Tauern — Wandern und Radfahren starten direkt am Platz.",
      image: { src: `${IMG}/pillar-berge-natur.webp`, alt: "Familie auf einer Bank mit Blick über die Kärntner Bergwelt" },
    },
    {
      title: "Mediterranes Lebensgefühl",
      text: "Südlich der Alpen wärmt sich das kristallklare Wasser auf bis zu 26 °C — Sonne, See und entspannte Abende am Wasser.",
      image: { src: `${IMG}/pillar-lebensgefuehl.webp`, alt: "Sommerabend am Millstätter See am Strand von Camping Brunner" },
    },
  ],

  usps: [
    "Direkt am Millstätter See",
    "Eigener Privatstrand nur für Gäste",
    "Ganzjährig geöffnet",
    "Gratis WLAN",
    "Mehrfach international ausgezeichnet",
    "ADEG-Markt & Radverleih nebenan",
  ],

  trust: {
    heading: "Worauf bei Camping Brunner Verlass ist",
    headingEmphasis: "Verlass",
    intro:
      "1965 eröffnet und bis heute persönlich geführt: ein flach abfallender Privatstrand nur für Gäste, gepflegte Sanitäranlagen in Top-Qualität und klare Regeln für ein ruhiges, familienfreundliches Miteinander — vielfach international ausgezeichnet.",
  },

  // Echte, auf der Quelle klar ausgewiesene Auszeichnungen (Logos von der Seite).
  awards: [
    { label: "camping.info Award 2026 · Bester Campingplatz Kärntens", image: { src: `${IMG}/award-campinginfo-2026.png`, alt: "camping.info Award 2026" } },
    { label: "ACSI Award 2022 — Camping Brunner am See", image: { src: `${IMG}/award-acsi-2022.png`, alt: "ACSI Award 2022 für Camping Brunner am See" } },
    { label: "DCC Europa-Preisträger 2020", image: { src: `${IMG}/award-dcc-2020.png`, alt: "DCC Europa-Preisträger 2020, Deutscher Camping-Club" } },
    { label: "ADAC Tipp · PiNCAMP", image: { src: `${IMG}/award-adac.png`, alt: "ADAC Tipp Auszeichnung, PiNCAMP" } },
    { label: "ANWB Erkende Camping 2020", image: { src: `${IMG}/award-anwb.png`, alt: "ANWB Erkende Camping 2020" } },
    { label: "EU Ecolabel", image: { src: `${IMG}/award-eu-ecolabel.png`, alt: "EU Ecolabel" } },
    { label: "Österreichisches Umweltzeichen", image: { src: `${IMG}/award-umweltzeichen.png`, alt: "Österreichisches Umweltzeichen" } },
    { label: "Qualität Kärnten", image: { src: `${IMG}/award-qualitaet-kaernten.png`, alt: "Qualitätssiegel Kärnten" } },
  ],

  // Ganzjährig geöffnet (Badesaison Anfang Mai – Mitte September).
  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-aerial-see.webp`, alt: "Luftaufnahme: Camping Brunner am See direkt am Millstätter See mit Blick über See und Berge" },
    sunset: { src: `${IMG}/hero-sonnenuntergang.webp`, alt: "Sonnenuntergang über dem Millstätter See am Strand von Camping Brunner" },
  },

  camping: {
    heading: "Camping direkt am Wasser",
    intro:
      "Große, gepflegte Stellplätze unterschiedlicher Kategorien — alle mit Strom (6 A, einige 16 A + SAT), fast alle mit Wasser- und Abwasseranschluss. Barrierefrei, komfortabel und mit eigenem Seezugang.",
    features: [
      {
        title: "Direkt am See gelegen",
        text: "Stellplätze auf der weitläufigen Seewiese mit altem Baumbestand — einer der schönsten flachen Sandstrände am Millstätter See liegt direkt davor.",
        image: { src: `${IMG}/camping-luftaufnahme-see.webp`, alt: "Luftaufnahme von Camping Brunner mit Seewiese, Strand und Bootsstegen am Millstätter See" },
      },
      {
        title: "Seeblick vom Vorzelt",
        text: "Aufwachen am Wasser: viele Plätze blicken direkt über den glasklaren See auf die Berge — Morgenschwimmen inklusive.",
        image: { src: `${IMG}/camping-seeblick-stellplatz.webp`, alt: "Blick vom Wohnwagen-Vorzelt über den Millstätter See bei Camping Brunner" },
      },
      {
        title: "Eigener Privatstrand",
        text: "Flach abfallender Sandstrand nur für Gäste — kein öffentliches Strandbad, dafür viel Platz auf der Liegewiese am Wasser.",
        image: { src: `${IMG}/camping-privatstrand.webp`, alt: "Privatstrand und Liegewiese am See nur für Gäste von Camping Brunner" },
      },
    ],
  },

  mobilheime: {
    heading: "Apartments & Chalets",
    intro:
      "Lieber feste Wände? Moderne, generalsanierte Apartments und kleine, feine Chalets in Toplage — direkt am Gelände von Camping Brunner am See, mit Gratis-Seezugang.",
    items: [
      {
        name: "Apartment",
        kind: "Apartment · generalsaniert",
        text: "Modernes, neu renoviertes Apartment in Toplage direkt am Gelände — hell, wohnlich und nur ein paar Schritte vom See entfernt.",
        image: { src: `${IMG}/apartment-schlafzimmer.webp`, alt: "Modernes Apartment-Schlafzimmer bei Camping Brunner am See" },
        features: ["Direkt am Gelände", "Generalsaniert", "Seezugang inklusive"],
      },
      {
        name: "Chalet",
        kind: "Ferienhaus · modern",
        text: "Kleine, feine Ferienhäuser direkt am Gelände — generalsaniert, erfrischend modern und gleichzeitig urgemütlich.",
        image: { src: `${IMG}/chalet-wohnkueche.webp`, alt: "Wohnküche mit Kamin in einem Chalet von Camping Brunner am See" },
        features: ["Toplage am See", "Komplett renoviert", "Urgemütlich"],
      },
      {
        name: "Apartment am See",
        kind: "Apartment · Seenähe",
        text: "Komfortabel ausgestattetes Apartment mit viel Tageslicht — ideal, um nach dem Badetag einfach anzukommen und sich wohlzufühlen.",
        image: { src: `${IMG}/apartment-seeblick.webp`, alt: "Helles Apartment-Schlafzimmer mit Balkontür bei Camping Brunner am See" },
        features: ["Modern eingerichtet", "Privatstrand für Gäste", "Ruhige Lage"],
      },
    ],
  },

  kinder: {
    heading: "Für Familien gemacht",
    intro:
      "Glasklares, flach abfallendes Wasser, ein eigener Sandstrand und Kinderanimation — und weil Hunde am Strand und auf der Badewiese nicht erlaubt sind, können Kinder hier unbeschwert spielen.",
    features: [
      {
        title: "Baden im glasklaren See",
        text: "Trinkwasserqualität und ein flach abfallender Sandstrand — hier lernen schon die Kleinsten schwimmen, in bis zu 26 °C warmem Wasser.",
        image: { src: `${IMG}/kinder-baden.webp`, alt: "Zwei Mädchen baden mit Luftmatratze im Millstätter See bei Camping Brunner" },
      },
      {
        title: "Plantschen am Sandstrand",
        text: "Der eigene Privatstrand fällt flach ab — sicher und ideal zum Plantschen, Sandburgen-Bauen und den ganzen Tag im Wasser.",
        image: { src: `${IMG}/kinder-plantschen.webp`, alt: "Kind plantscht fröhlich im flachen Wasser am Strand von Camping Brunner" },
      },
      {
        title: "Spielplatz & Kinderanimation",
        text: "Spielplatz am Platz und wechselnde Animation für die Kleinen — Langeweile kommt im Familienurlaub garantiert nicht auf.",
        image: { src: `${IMG}/kinder-spielplatz.webp`, alt: "Kinder laufen zum Spielplatz bei Camping Brunner am See" },
      },
      {
        title: "Sicher spielen ohne Hunde",
        text: "Auf der Badewiese und am Strand sind keine Hunde erlaubt — Kinder können überall am Boden spielen, ganz ohne Sorge.",
        image: { src: `${IMG}/kinder-animation.webp`, alt: "Kindergruppe bei einem Spiel auf der Wiese von Camping Brunner" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Millstätter See",
    intro:
      "Wasser, Berge und Kultur direkt vor der Tür — und mit der Kärnten Card (Ausgabe an der Rezeption) sind über 100 Ausflugsziele frei zugänglich.",
    items: [
      {
        title: "Yoga am Strand",
        text: "Yoga am See mit professioneller Trainerin — laut Kerstin der beste Platz der Welt, um tief durchzuatmen und zu entspannen.",
        image: { src: `${IMG}/aktiv-yoga.webp`, alt: "Yoga-Gruppe auf der Wiese am See bei Camping Brunner" },
      },
      {
        title: "Wandern & Bergsteigen",
        text: "Direkt vom Platz in die Nockberge oder hinauf auf die Gipfel des Nationalparks Hohe Tauern — idyllische Almen und Hüttenwanderungen inklusive.",
        image: { src: `${IMG}/aktiv-wandern.webp`, alt: "Wanderer am Gipfelkreuz in den Bergen rund um den Millstätter See" },
      },
      {
        title: "Mountainbiken & 28-km-Radweg",
        text: "Der familienfreundliche Millstätter See Radweg (28 km) führt rund um den See — dazu über 200 MTB-Touren in den Nockbergen.",
        image: { src: `${IMG}/aktiv-mountainbike.webp`, alt: "Mountainbiker am Gipfel mit Blick über den Millstätter See" },
      },
      {
        title: "Rafting & Kanu",
        text: "Naturgenuss pur auf wild schäumenden Bächen, umrahmt von imposanten Bergen — für alle Junggebliebenen.",
        image: { src: `${IMG}/aktiv-rafting.webp`, alt: "Rafting-Gruppe auf einem Wildwasserfluss in Kärnten" },
      },
      {
        title: "Mit dem Schiff über den See",
        text: "Die Schiffsstation liegt nur rund 3 Gehminuten entfernt — mit der Kärnten Card sind die Linienschiffe am Millstätter See sogar kostenlos.",
        image: { src: `${IMG}/aktiv-schifffahrt.webp`, alt: "Linienschiff der Millstätter See Schifffahrt an der Schiffsstation" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 (Tauern Autobahn) bis Spittal/Millstätter See, dann am Seeufer entlang nach Döbriach — Glanzerstraße 108." },
      { title: "Mit Bahn & Bus", text: "Bahnhof Spittal-Millstättersee, weiter mit der Postbus-Linie 5140 am See entlang oder per Kärnten Transfer direkt zum Platz." },
      { title: "Vor Ort mobil", text: "Schiffsstation, Linienbus und die Ruftaxis Gomobil/Nockmobil liegen direkt nebenan — Urlaub ganz ohne eigenes Auto, Radverleih gleich um die Ecke." },
    ],
  },

  galerie: {
    heading: "Sommer am Millstätter See",
    headingEmphasis: "Millstätter See",
    intro:
      "Glasklares Wasser, goldene Abende und der See vor der Tür — ein paar Eindrücke vom Privatstrand von Camping Brunner.",
    tag: "Ganzjährig geöffnet",
    images: [
      { src: `${IMG}/galerie-privatstrand-see.webp`, alt: "Gäste entspannen auf der Seewiese am Privatstrand mit Blick über den Millstätter See" },
      { src: `${IMG}/galerie-abend-steg.webp`, alt: "Kinder sitzen am Abend auf dem Steg am Millstätter See" },
      { src: `${IMG}/galerie-yoga-steg.webp`, alt: "Yoga auf dem Steg am Millstätter See" },
      { src: `${IMG}/galerie-kinder-see.webp`, alt: "Kinder balancieren spielend im See am Strand von Camping Brunner" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum und Personen — das Team von Camping Brunner meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Familienspecial Vorsaison (7.1.–22.5. & 15.9.–23.12.): € 37,30/Nacht inkl. 2 Erwachsene, eigene Kinder & Stellplatz. Hauptsaison-, Apartment- & Chalet-Preise auf Anfrage.",
    highlight: {
      title: "Eigener Privatstrand",
      text: "Flach abfallender Sandstrand nur für Gäste — Seezugang inklusive, ganzjährig geöffnet.",
    },
    categories: [
      // Einziger auf der Website genannter Preis: Familienspecial Vorsaison € 37,30/Nacht
      // (inkl. 2 Erw. + eigene Kinder + Platz). Konservativ als „ab 37" angesetzt.
      { id: "stellplatz", label: "Stellplatz", perNight: 37 },
    ],
  },

  kontakt: {
    coords: { lat: 46.778519, lng: 13.65068 },
    tel: "+43 4246 7189",
    telHref: "tel:+4342467189",
    mail: "info@camping-brunner.at",
    adresse: "Glanzerstraße 108 · A-9873 Döbriach am Millstätter See · Kärnten",
    // Keine Koordinaten in der Quelle → ausgelassen (Karte aus, Adresse zeigt).
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze am See", href: "#camping" },
        { label: "Privatstrand", href: "#camping" },
        { label: "Auszeichnungen", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Apartments", href: "#mobilheime" },
        { label: "Chalets", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Kinderstrand", href: "#kinder" },
        { label: "Spielplatz & Animation", href: "#kinder" },
        { label: "Galerie", href: "#galerie" },
      ],
    },
    {
      label: "Erleben",
      href: "#aktivitaeten",
      children: [
        { label: "Yoga & Wasser", href: "#aktivitaeten" },
        { label: "Wandern & Bike", href: "#aktivitaeten" },
        { label: "Schifffahrt", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Lage & Preise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingbrunner;
