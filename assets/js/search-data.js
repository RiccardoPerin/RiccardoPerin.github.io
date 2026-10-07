
const currentUrl = window.location.href;
const siteUrl = "https://riccardoperin.github.io";
let updatedUrl = currentUrl.replace("https://riccardoperin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research, machine learning and software projects, from clinical ML to tools used in production.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Papers, reports and theses.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education, experience and skills.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My public code on GitHub.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-graduated-in-biomedical-engineering-at-the-university-of-padova-with-110-110-and-started-the-msc-in-bioengineering",
          title: 'Graduated in Biomedical Engineering at the University of Padova with 110/110 and started...',
          description: "",
          section: "News",},{id: "news-finished-our-paper-on-brain-tumour-mri-classification-comparing-a-cae-resnet-50-and-vit-b-16",
          title: 'Finished our paper on brain tumour MRI classification, comparing a CAE, ResNet-50 and...',
          description: "",
          section: "News",},{id: "news-the-compliance-management-system-i-built-for-a-construction-company-is-now-in-production",
          title: 'The compliance management system I built for a construction company is now in...',
          description: "",
          section: "News",},{id: "news-joined-the-diana-project-as-a-student-research-collaborator-working-on-meal-detection-from-cgm-data",
          title: 'Joined the DIANA project as a student research collaborator, working on meal detection...',
          description: "",
          section: "News",},{id: "news-selected-as-a-university-tutor-for-informatics-programming-in-python-at-the-university-of-padova-based-on-a-merit-ranking",
          title: 'Selected as a university tutor for Informatics (programming in Python) at the University...',
          description: "",
          section: "News",},{id: "news-in-february-2027-i-m-moving-to-stockholm-for-my-erasmus-master-s-thesis-at-kth-on-explainable-ai-for-cancer-risk",
          title: 'In February 2027 I’m moving to Stockholm for my Erasmus+ Master’s thesis at...',
          description: "",
          section: "News",},{id: "projects-brain-tumour-mri-classification",
          title: 'Brain tumour MRI classification',
          description: "CAE vs ResNet-50 vs ViT-B/16, with an IEEE-format paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brain-mri/";
            },},{id: "projects-diana-meal-detection-from-cgm",
          title: 'DIANA — meal detection from CGM',
          description: "Digital twin and AI for adaptive management of paediatric Type 1 Diabetes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diana/";
            },},{id: "projects-fetal-health-classification-from-ctg",
          title: 'Fetal health classification from CTG',
          description: "Interpretable tree-based models on cardiotocography data, in Python and R",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fetal-health/";
            },},{id: "projects-explainable-ai-for-cancer-risk",
          title: 'Explainable AI for cancer risk',
          description: "Erasmus+ Master&#39;s thesis at KTH Stockholm (from February 2027)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kth-thesis/";
            },},{id: "projects-nicu-admission-prediction",
          title: 'NICU admission prediction',
          description: "BSc thesis: machine learning on perinatal clinical data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nicu/";
            },},{id: "projects-scadenziario-expiry-amp-compliance-tracker",
          title: 'Scadenziario — expiry &amp;amp; compliance tracker',
          description: "A management system used daily by a construction company, with a public demo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scadenziario/";
            },},{id: "projects-side-projects",
          title: 'Side projects',
          description: "F1 Fantasy predictor and a gym tracker",
          section: "Projects",handler: () => {
              window.location.href = "/projects/side-projects/";
            },},{id: "projects-zerostress",
          title: 'ZeroStress',
          description: "Flutter app for stress and recovery monitoring with wearable sensors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zerostress/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%69%63%63%61%72%64%6F.%70%65%72%69%6E%30%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RiccardoPerin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/riccardo-perin", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/en-us//assets/pdf/[LANG]/CV_Riccardo_Perin.pdf", "_blank");
        },
      },{
          id: 'lang-it',
          title: 'it',
          section: 'Languages',
          handler: () => {
            window.location.href = "/it" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
