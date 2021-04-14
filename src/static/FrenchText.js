const frenchText = {  
  download: {
    resume: "https://raw.githubusercontent.com/Frank-Belanger/Frank-Belanger.github.io/main/src/static/2021_Francois_Belanger_CV.pdf"
  },
  navigation: {
    home: 'Accueil',
    portfolio: 'Portfolio',
    resume: 'CV',
  },
  home: {
    greetings: 'Bonjour!',
    description: 'Mon nom est François Bélanger et je suis developpeur Full-Stack. J\'ai utilisé les technologies suivantes pour construire cette application:'
  },
  portfolio: [
    { 
      key: 'musicRecommender', 
      title: 'Music Recommender', 
      desc: 'Une application simple se servant de l\'API de Spotify',
      src: 'https://github.com/Frank-Belanger/music-recommender',
      url: 'https://frank-belanger.github.io/music-recommender/',
      img: 'https://github.com/Frank-Belanger/Frank-Belanger.github.io/raw/main/src/images/musicRecommender.png'
    }
  ],
  resume: {
    education: {
    title: 'Éducation',
    degree: 'Science informatique, B. Sc.',
    university: 'Université de Sherbrooke',
    years: '[ 2017-2020 ]'
    },
    experience: {
      title: 'Expérience',
      place: 'Wolters Kluwer',
      year: '[ 2020 - présent ]',
      work: 'Développeur à l\'automatisation'
    },
    stack: {
      title: 'Stack'
    },
    languages: {
      title: 'Langues',
      english: 'Anglais (Fluent)',
      french: 'Français (Langue natale)',
      german: 'Allemand (Base)'
    }
  }
};

export default frenchText;