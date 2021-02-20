import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects:[
    {
      name: 'Clingo.io',
      overview: 'My homepage ',
      startDate: 'Jan 2021',
      status: 'ongoing',
      version: '2.0',
      details: 'This page is created using Vue.js and operates as a Single Page Application. All of the data and components are reactive.',
      reveal: false,
    },
    {
      name: 'Meal Planner',
      overview: 'Final Capstone Project',
      startDate: 'Jan 2021',
      status: 'ongoing',
      version: '1.0',
      details: 'A culmination of what I learned at Tech Elevator. The backend is written in Java, using a PostgreSQL relational database and a Vue application on the front end. Axios is used on the front end to access an API of recipies.',
      reveal: false,
    },
    {
      name: 'Deck of Cards',
      overview: 'API and Vue project',
      startDate: 'Feb 2021',
      status: 'ongoing',
      version: 'In Development',
      details: 'This side project is an exercise in using an external API calls to operate as the backend, While displaying card images and tracking data in memory using the Vuex store.',
      reveal: false,
    },
    {
      name: 'Vending Machince CLI',
      overview: 'Module 1 Java capstone project',
      startDate: 'Nov 2020',
      status: 'completed',
      version: '1.0',
      details: 'The capstone project for the Java module at Tech Elevator. This project demonstrates an understanding of the basics of Object Oriented programming. It reads inventory from a file and tracks a users purchases and inventory, tracking everything to a log file.',
      reveal: false,
    },

  ],
  techSkills:[
    {
      name: 'Java',
      type: 'Object Oriented Programming',
      icon: 'mdi-language-java',

    },
    {
      name: 'PostgreSQL',
      type: 'Relational Database',
      icon: 'mdi-database'

    },
    {
      name: 'HTML5',
      type: 'Web Deveopment',
      icon: 'mdi-language-html5',

    },
    {
      name: 'CSS',
      type: 'Web Development',
      icon: 'mdi-language-css3',

    },
    {
      name: 'JavaScript',
      type: 'Web Development',
      icon: 'mdi-language-javascript'

    },
    {
      name: 'Visual Studio Code',
      type: 'Development Software',
      icon: 'mdi-microsoft-visual-studio-code'

    },
    {
      name: 'Vue.js',
      type: 'Web Development',
      icon: 'mdi-vuejs',
    },
    {
      name: 'Vuetify',
      type: 'Web Development',
      icon: 'mdi-vuetify',
    },
    {  
      name: 'NodeJs',
      type: 'Web Development',
      icon: 'mdi-nodejs',
    },
    {
      name: 'Git',
      type: 'Version Control',
      icon: 'mdi-git',
    },
    {
      name: 'Github',
      type: 'Version Control',
      icon: 'mdi-github',
    },
    {
      name: 'BitBucket',
      type: 'Version Control',
      icon: 'mdi-bitbucket',
    },

      
  ],
  LearningTech: [
    {
      name: 'Ubuntu',
      type: 'Operating System',
      icon: 'mdi-ubuntu'
    },
    {
      name: 'php',
      type: 'Object Oriented Programming',
      icon: 'mdi-language-php'
    }
  ],
  workExperience: [
    {
      title: 'Service Technician',
      company: 'Multiflow Dispensers of Ohio',
      skills: [
        'Troubleshooting ',
        'Communication ',
        'Mechanical Aptitude ',
        'Teamwork ',
      ],
    },
    {
      title: 'Owner',
      company: 'Humblebee Family Farm',
      skills: [
        'Customer Service ',
        'Marketing ',
        'Animal Husbandry ',
        'Resource Management ',
        'Product Development '
      ],
    },
  ],
  education: [
    {
      name: 'Tech Elevator',
      major: 'Full Stack Software Development',
      skills: 'Object Oriented Programming, Relational Databases, Front end Development',
    },
    {
      name: 'Hocking College',
      major: 'Ecotourism and Adventure Travel',
      skills: 'Leadership, Team Facilitation, Planning and Implementing Adventures',
    },
    {
      name: 'Udemy',
      major: 'Software Develpment',
      skills: 'Vue Mastery, Nuxt.js, Penetration Testing, Front End Design',
    }
  ],
  hobbies: [
    {
      name: 'music',
      icon: 'mdi-music',
    },
    {
    name: 'arduino',
    icon: 'mdi-robot',
    },
    {
      name: 'hiking',
      icon: 'mdi-hiking',
    },
    {
      name: 'scuba',
      icon: 'mdi-diving-scuba-flag',
    },
    {
      name: 'fine dining',
      icon: 'mdi-silverware-variant',
    },
    {
      name: 'wood working',
      icon: 'mdi-hand-saw',
    },
    {
      name: 'gardening',
      icon: 'mdi-shovel',
    },
  ],
  
  },
  
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
