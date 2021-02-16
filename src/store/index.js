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
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
