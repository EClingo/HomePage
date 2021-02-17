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
      details: 'This page is created using Vue.js and operates as a Single Page Application. All of the data and components are reactive.'
    },
    {
      name: 'Meal Planner',
      overview: 'Final Capstone Project',
      startDate: 'Jan 2021',
      status: 'ongoing',
      version: '1.0',
      details: 'A culmination of what I learned at Tech Elevator. The backend is written in Java, using a PostgreSQL relational database and a Vue application on the front end. Axios is used on the front end to access an API of recipies.'
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
      icon: 'mdi-iframe'

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
    }
      
  ],
  WorkExperience: [
    {
      title: 'Service Technician',
      company: 'Multiflow Dispensers of Ohio',
      skills: [
        'Troubleshooting',
        'Communication',
        'Mechanical Aptitude',
        'Teamwork',
      ],
    },
    {
      title: 'Owner',
      company: 'Humblebee Family Farm',
      skills: [
        'Customer Service',
        'Marketing',
        'Animal Husbandry',
        'Resource Management',
        'Product Development'
      ],
    },
  ],
  Education: [
    {
      name: 'Tech Elevator',
      major: 'Full Stack Software Development',
      skills: 'Object Oriented Programming, Relational Databases, Front end Development',
    },
    {
      name: 'Hocking College',
      major: 'Ecotourism and Adventure Travel',
      skills: 'Leadership, Team Facilitation, Planning and Implementing Adventures',
    }
  ],
  Hobbies: [
    'arduino',
    'hiking',
    'scuba',
    'fine dining',
    'wood working',
    'gardening',
  ],
  
  },
  
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
