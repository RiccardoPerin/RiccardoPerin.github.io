
const currentUrl = window.location.href;
const siteUrl = "https://riccardoperin.github.io";
let updatedUrl = currentUrl.replace("https://riccardoperin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("it".length > 0) {
  updatedUrl = updatedUrl.replace("/it", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-chi-sono",
    title: "chi sono",
    section: "Menu di navigazione",
    handler: () => {
      window.location.href = "/it/";
    },
  },{id: "nav-progetti",
          title: "progetti",
          description: "Progetti di ricerca, machine learning e software, dal ML clinico a strumenti usati in produzione.",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/projects/";
          },
        },{id: "nav-pubblicazioni",
          title: "pubblicazioni",
          description: "Articoli, report e tesi.",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Formazione, esperienza e competenze.",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/cv/";
          },
        },{id: "nav-repository",
          title: "repository",
          description: "Il mio codice pubblico su GitHub.",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/repositories/";
          },
        },{id: "news-laureato-in-ingegneria-biomedica-all-università-di-padova-con-110-110-inizio-della-magistrale-in-bioingegneria",
          title: 'Laureato in Ingegneria Biomedica all’Università di Padova con 110/110; inizio della magistrale in...',
          description: "",
          section: "Novità",},{id: "news-il-gestionale-per-la-conformità-documentale-che-ho-sviluppato-per-un-impresa-edile-è-ora-in-produzione",
          title: 'Il gestionale per la conformità documentale che ho sviluppato per un’impresa edile è...',
          description: "",
          section: "Novità",},{id: "news-ho-iniziato-a-collaborare-al-progetto-diana-lavorando-sul-rilevamento-dei-pasti-da-dati-cgm",
          title: 'Ho iniziato a collaborare al progetto DIANA, lavorando sul rilevamento dei pasti da...',
          description: "",
          section: "Novità",},{id: "news-completato-il-nostro-paper-sulla-classificazione-di-tumori-cerebrali-da-rm-con-il-confronto-tra-cae-resnet-50-e-vit-b-16",
          title: 'Completato il nostro paper sulla classificazione di tumori cerebrali da RM, con il...',
          description: "",
          section: "Novità",},{id: "news-selezionato-come-tutor-didattico-di-informatica-programmazione-in-python-all-università-di-padova-sulla-base-di-una-graduatoria-di-merito",
          title: 'Selezionato come tutor didattico di Informatica (programmazione in Python) all’Università di Padova, sulla...',
          description: "",
          section: "Novità",},{id: "news-a-febbraio-2027-mi-trasferisco-a-stoccolma-per-la-tesi-magistrale-erasmus-al-kth-sull-ai-spiegabile-per-il-rischio-oncologico",
          title: 'A febbraio 2027 mi trasferisco a Stoccolma per la tesi magistrale Erasmus+ al...',
          description: "",
          section: "Novità",},{id: "projects-classificazione-di-tumori-cerebrali-da-rm",
          title: 'Classificazione di tumori cerebrali da RM',
          description: "CAE vs ResNet-50 vs ViT-B/16, con un paper in formato IEEE",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/brain-mri/";
            },},{id: "projects-diana-rilevamento-dei-pasti-da-cgm",
          title: 'DIANA — rilevamento dei pasti da CGM',
          description: "Digital twin e AI per la gestione adattiva del diabete di tipo 1 pediatrico",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/diana/";
            },},{id: "projects-classificazione-della-salute-fetale-da-ctg",
          title: 'Classificazione della salute fetale da CTG',
          description: "Modelli ad albero interpretabili su dati di cardiotocografia, in Python e R",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/fetal-health/";
            },},{id: "projects-ai-spiegabile-per-il-rischio-oncologico",
          title: 'AI spiegabile per il rischio oncologico',
          description: "Tesi magistrale Erasmus+ al KTH di Stoccolma (da febbraio 2027)",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/kth-thesis/";
            },},{id: "projects-previsione-del-ricovero-in-tin",
          title: 'Previsione del ricovero in TIN',
          description: "Tesi triennale: machine learning su dati clinici perinatali",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/nicu/";
            },},{id: "projects-scadenziario-gestione-scadenze-e-conformità",
          title: 'Scadenziario — gestione scadenze e conformità',
          description: "Un gestionale usato ogni giorno da un&#39;impresa edile, con una demo pubblica",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/scadenziario/";
            },},{id: "projects-progetti-personali",
          title: 'Progetti personali',
          description: "Predittore per F1 Fantasy e un&#39;app per la palestra",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/side-projects/";
            },},{id: "projects-zerostress",
          title: 'ZeroStress',
          description: "App Flutter per il monitoraggio di stress e recupero con sensori indossabili",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/zerostress/";
            },},{
        id: 'social-email',
        title: 'Invia un'email',
        section: 'Social',
        handler: () => {
          window.open("mailto:%72%69%63%63%61%72%64%6F.%70%65%72%69%6E%30%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Social',
        handler: () => {
          window.open("https://github.com/RiccardoPerin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Social',
        handler: () => {
          window.open("https://www.linkedin.com/in/riccardo-perin", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Social',
        handler: () => {
          window.open("/assets/pdf/it//assets/pdf/[LANG]/CV_Riccardo_Perin.pdf", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Lingue',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Tema chiaro',
      description: 'Passa al tema chiaro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Tema scuro',
      description: 'Passa al tema scuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Tema di sistema',
      description: 'Usa il tema di sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
