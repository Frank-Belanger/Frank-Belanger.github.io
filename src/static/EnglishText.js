const englishText = {
  download: {
    resume: "https://raw.githubusercontent.com/Frank-Belanger/Frank-Belanger.github.io/main/src/static/Francois_Belanger_Resume.pdf"
  },
  navigation: {
    home: 'Home',
    portfolio: 'Portfolio',
    resume: 'Resume',
  },
  home: {
    greetings: 'Hi!',
    description: 'My name is François Bélanger and I am a Full-Stack developer. I have used the following technologies in order to build this site:'
  },
  portfolio: [
    { 
      key: 'musicRecommender', 
      title: 'Music Recommender', 
      desc: 'A simple app using Spotify\'s API',
      src: 'https://github.com/Frank-Belanger/music-recommender',
      url: 'https://frank-belanger.github.io/music-recommender/',
      img: 'https://github.com/Frank-Belanger/Frank-Belanger.github.io/raw/main/src/images/musicRecommender.png'
    }
  ],
  resume: {
    education: {
    title: 'Education',
    degree: 'Computer Science, B. Sc.',
    university: 'Université de Sherbrooke',
    years: '[ 2017-2020 ]'
    },
    experience: {
      title: 'Experience',
      place: 'Wolters Kluwer',
      year: '[ 2020 - 2022 ]',
      work: 'Automation engineer'
    },
    stack: {
      title: 'Stack'
    },
    languages: {
      title: 'Languages',
      english: 'English (Fluent)',
      french: 'French (Native tongue)',
      german: 'German (Basic)'
    }
  }
};

export default englishText;