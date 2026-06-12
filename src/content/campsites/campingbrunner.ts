import type { CampsiteConfig } from "../types";

/**
 * Camping Brunner am See — Döbriach, Millstätter See, Kärnten.
 * Honest, quellen-gebunden aus raw/digest. Du-Anrede, Original-Palette, heroVariant center.
 */
const IMG = "/campsites/campingbrunner";

const campingbrunner: CampsiteConfig = {
  name: "Camping Brunner am See",
  shortName: "Brunner",
  slug: "campingbrunner",
  ort: "Döbriach",
  region: "Kärnten",
  brandKind: "Camping am See",
  see: "Millstätter See",
  regionLong: "Millstätter See · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Dein Privatstrand am Millstätter See",
  claimEmphasis: "am Millstätter See",
  emailDetail: "eure gepflegte Seewiese mit altem Baumbestand",
  intro:
    "Direkt am Ostufer des Millstätter Sees, mitten in den Bergen: ein vielfach ausgezeichneter Komfort-Campingplatz mit eigenem flachen Sandstrand, gepflegten Stellplätzen und Seewasser in Trinkwasserqualität — ganzjährig geöffnet.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Brunner am See Logo" },

  statement: {
    text: "Der flach abfallende Sandstrand gehört nur den Gästen von Camping Brunner — kein öffentliches Strandbad, nur euer See.",
    emphasis: "nur den Gästen",
  },

  pillars: [
    {
      title: "Privatstrand nur für Gäste",
      text: "Einer der schönsten flachen Sandstrände am Millstätter See — Privatstrand ausschließlich für die Gäste von Camping Brunner, ohne öffentlichen Tagesbetrieb.",
      image: { src: `${IMG}/privatstrand-luftbild.webp`, alt: "Privater Sandstrand von Camping Brunner am Millstätter See aus der Luft" },
    },
    {
      title: "Mitten in den Bergen",
      text: "Eingebettet zwischen Biosphärenpark Nockberge und Nationalpark Hohe Tauern — der See hat Trinkwasserqualität, ringsum Wald und Gipfel über 3000 m.",
      image: { src: `${IMG}/seewiese-abendsonne.webp`, alt: "Seewiese von Camping Brunner in der Abendsonne am Millstätter See" },
    },
    {
      title: "Ganzjährig geöffnet",
      text: "Vom Frühlingsbad bis zum Wintertag am verschneiten Ufer: Camping Brunner ist das ganze Jahr über geöffnet — vier Jahreszeiten am selben Platz.",
      image: { src: `${IMG}/see-winter.webp`, alt: "Verschneites Seeufer von Camping Brunner im Winter" },
    },
  ],

  usps: [
    "Privatstrand nur für Gäste",
    "Direkt am Millstätter See",
    "Ganzjährig geöffnet",
    "Flacher Sandstrand",
    "Gratis WLAN",
    "Vielfach ausgezeichnet",
  ],

  trust: {
    heading: "Seit 1965 am selben Ufer",
    headingEmphasis: "1965",
    intro:
      "1965 eröffnet und bis heute familiär geführt: Camping Brunner zählt zu Europas bestbewerteten Plätzen — ausgezeichnet von Camping.Info, ADAC und dem DCC, und doch vor allem ein Ort zum Ankommen.",
  },

  awards: [
    { label: "Camping.Info Award — Bester Kärntens" },
    { label: "Top 12 Campingplätze Europas" },
    { label: "DCC Europapreis 2020" },
    { label: "ADAC / PiNCAMP" },
    { label: "EU Ecolabel & Österr. Umweltzeichen" },
  ],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme-see.webp`, alt: "Luftaufnahme von Camping Brunner am Ufer des Millstätter Sees" },
  },

  breather: {
    image: { src: `${IMG}/sonnenuntergang-strand.webp`, alt: "Sonnenuntergang über dem Millstätter See am Strand von Camping Brunner" },
    line: "Wenn die Abendsonne das Ufer in goldenes Licht taucht.",
  },

  camping: {
    heading: "Camping direkt am Wasser",
    intro:
      "Große, gepflegte Stellplätze unterschiedlicher Kategorien, alle mit Strom, fast alle mit Wasser- und Abwasseranschluss — und der See immer in Sichtweite.",
    features: [
      {
        title: "Stellplätze mit Seeblick",
        text: "Vom Vorzelt direkt auf den Millstätter See: gepflegte Plätze in erster Reihe, viele mit Wasser- und Abwasseranschluss, alle mit Strom (6 A, einige 16 A).",
        image: { src: `${IMG}/stellplatz-seeblick.webp`, alt: "Stellplatz mit Seeblick und Vorzelt am Millstätter See" },
      },
      {
        title: "Liegewiese am See",
        text: "Die weitläufige Seewiese mit altem Baumbestand ist das Herzstück des Platzes — Sonnen, Spielen und Baden direkt am eigenen Strand.",
        image: { src: `${IMG}/liegewiese-strand.webp`, alt: "Liegewiese mit alten Bäumen am Strand von Camping Brunner" },
      },
      {
        title: "Schiffstation nebenan",
        text: "Die Anlegestelle der Millstätter-See-Schifffahrt liegt gleich neben dem Platz — den ganzen See erreichst du bequem per Schiff.",
        image: { src: `${IMG}/schiffstation.webp`, alt: "Schiffstation der Millstätter-See-Schifffahrt neben Camping Brunner" },
      },
      {
        title: "ADEG-Markt um die Ecke",
        text: "Einkaufen ohne Auto: Der ADEG-Supermarkt mit Bäcker und Feinkost liegt nur wenige Schritte vom Campingplatz entfernt.",
        image: { src: `${IMG}/adeg-markt.webp`, alt: "ADEG-Supermarkt in Döbriach in Gehweite von Camping Brunner" },
      },
      {
        title: "Sport & Spiel",
        text: "Beachvolleyball, Basketball und ein Multifunktionsfeld am Platz — Bewegung und Spiel für Groß und Klein abseits der Liegewiese.",
        image: { src: `${IMG}/sportplatz.webp`, alt: "Sportplatz mit Beachvolleyball und Basketball bei Camping Brunner" },
      },
      {
        title: "Familiäres Platzleben",
        text: "Ruhig gelegen mit klaren Regeln für ein rücksichtsvolles Miteinander — hier können Kinder frei zwischen Stellplätzen und Strand unterwegs sein.",
        image: { src: `${IMG}/platzleben-see.webp`, alt: "Kinder zwischen den Stellplätzen am Seeufer von Camping Brunner" },
      },
    ],
  },

  kinder: {
    heading: "Kinder lieben Camping Brunner",
    intro:
      "Flacher Sandstrand, komfortable Sanitäranlagen und ein Hundeverbot am Strand — hier dürfen die Kleinen den ganzen Tag gefahrlos draußen sein.",
    features: [
      {
        title: "Baden am flachen Strand",
        text: "Der flach abfallende Sandstrand führt sanft ins glasklare, bis zu 26° warme Wasser — ideal für die ersten Schwimmzüge der Kinder.",
        image: { src: `${IMG}/kinder-baden-steg.webp`, alt: "Kinder springen vom Steg in den flachen Millstätter See" },
      },
      {
        title: "Spielplatz am Platz",
        text: "Rutsche, Schaukel und Sandkiste unter schattigen Bäumen, nur ein paar Schritte von den Stellplätzen entfernt.",
        image: { src: `${IMG}/spielplatz.webp`, alt: "Spielplatz mit Rutsche und Sandkiste bei Camping Brunner" },
      },
      {
        title: "Kinderanimation",
        text: "In der Saison gibt es ein wechselndes Animationsprogramm auf der Seewiese — Spiele, Basteln und jede Menge neue Freunde.",
        image: { src: `${IMG}/kinderanimation.webp`, alt: "Kinderanimation auf der Seewiese von Camping Brunner" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Millstätter See",
    intro:
      "Wassersport vor der Tür, Wanderungen und Radtouren direkt ab dem Platz: rund um Camping Brunner ist in allen vier Jahreszeiten etwas los.",
    items: [
      {
        title: "SUP & Wassersport",
        text: "Stand-up-Paddeln, Surfen, Segeln und Bootsverleih gleich nebenan am Strand — der See lädt zu jeder Art von Wassersport ein.",
        image: { src: `${IMG}/sup-strand.webp`, alt: "Stand-up-Paddeln am Strand von Camping Brunner am Millstätter See" },
      },
      {
        title: "Wandern in den Nockbergen",
        text: "Direkt vom Platz hinauf in den Biosphärenpark Nockberge und den Nationalpark Hohe Tauern — zu Almen, Hütten und Gipfeln über 3000 m.",
        image: { src: `${IMG}/wandern-nockberge.webp`, alt: "Gipfelkreuz mit Blick über den Millstätter See in den Nockbergen" },
      },
      {
        title: "Kanu & Kajak",
        text: "Den ruhigen Millstätter See vom Wasser aus erkunden — mit Kajak oder Kanu lässt sich das wasserreichste Gewässer Kärntens still entdecken.",
        image: { src: `${IMG}/kajak-see.webp`, alt: "Kajakfahrer auf dem ruhigen Millstätter See vor den Bergen" },
      },
      {
        title: "Yoga am Strand",
        text: "Morgens auf der Seewiese den Tag begrüßen: Yoga am Strand von Camping Brunner — laut Trainerin Kerstin der beste Platz, um durchzuatmen.",
        image: { src: `${IMG}/yoga-strand.webp`, alt: "Yoga-Gruppe auf der Seewiese am Strand von Camping Brunner" },
      },
      {
        title: "Panoramaflug über den See",
        text: "Den Millstätter See und die Nockberge aus der Vogelperspektive erleben — Panoramaflüge starten gleich in der Nähe des Platzes.",
        image: { src: `${IMG}/panoramaflug.webp`, alt: "Panoramaflug hoch über dem Millstätter See" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt ans Ostufer",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 Tauernautobahn bis Abfahrt Seeboden/Spittal, dann am Millstätter See entlang nach Döbriach ans Ostufer." },
      { title: "Mit der Bahn", text: "Bahnhof Spittal-Millstättersee, von dort per Bus oder Taxi nach Döbriach — rund 20 Minuten." },
      { title: "Per Schiff", text: "Im Sommer mit der Millstätter-See-Schifffahrt: Die Anlegestelle liegt direkt neben dem Platz." },
    ],
  },

  galerie: {
    heading: "Sommer am Millstätter See",
    headingEmphasis: "Millstätter See",
    intro: "Privatstrand, Seewiese und lange Abende am Wasser — ein paar Eindrücke aus dem Camperalltag bei Brunner.",
    tag: "Ganzjährig geöffnet",
    moreCount: 24,
    images: [
      { src: `${IMG}/galerie-baden.webp`, alt: "Kind beim Sprung in den flachen Millstätter See" },
      { src: `${IMG}/galerie-wiese.webp`, alt: "Kinder auf der Seewiese von Camping Brunner" },
      { src: `${IMG}/galerie-luftmatratze.webp`, alt: "Mädchen auf der Luftmatratze im Millstätter See" },
      { src: `${IMG}/galerie-steg-abend.webp`, alt: "Kinder am Steg in der Abendstimmung am See" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am See",
    headingEmphasis: "am See",
    intro: "Wähle Zeitraum und Kategorie — Camping Brunner bestätigt deine Anfrage persönlich. Online buchen ist ganzjährig möglich.",
    pricesArePlaceholder: false,
    priceNote:
      "Familienspecial in der Nebensaison: € 37,30/Nacht für 2 Erwachsene + eigene Kinder inkl. Stellplatz (07.01.–22.05. & 15.09.–23.12.). Alle übrigen Tarife auf Anfrage bzw. im Online-Preisrechner.",
    highlight: { title: "Privatstrand inklusive", text: "Eigener flacher Sandstrand nur für Gäste — kein öffentliches Strandbad." },
    categories: [
      { id: "stellplatz", label: "Stellplatz" },
      { id: "apartment", label: "Apartment" },
      { id: "chalet", label: "Chalet" },
    ],
  },

  kontakt: {
    coords: { lat: 46.767896, lng: 13.648412 },
    tel: "+43 4246 7189",
    telHref: "tel:+4342467189",
    mail: "info@camping-brunner.at",
    adresse: "Glanzerstraße 108 · 9873 Döbriach · Kärnten",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktivitäten", href: "#aktivitaeten" },
    { label: "Preise & Anfahrt", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anfahrt", href: "#anreise" },
    ]},
  ],
};

export default campingbrunner;
