import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
 let store = new Vuex.Store({
  state: {
    films: [],
    result: 0    
   
},
getters: {    
    getFilms: state => {
        return state.films
    },
    getResult: state => {
        return state.result
    }
},
mutations: {
    setFilms(state, films){
      state.films = films;
    }, 
    setResult(state, result){
        state.result = result;
      }, 
},
actions: {   
    async findFilms ({commit}, str) {                   
         await axios.get(str, {onUploadProgress: (data)=> console.log(data)})
        .then(response => {commit('setFilms', response.data.Search)});            
               
    },
    async findResult ({commit}, str) {                   
        const response = await axios.get(str);                 
        commit('setResult', response.data.totalResults);        
    },
 
}
 })

export default store;