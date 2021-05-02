<template>
  <div class="films-layout">    
    <main-header
     @searchText = 'getSearchText'
     />
    <search-phrase v-if="$store.getters.getResult"
    :searchText = 'searchText'
    />
    <result-not-found v-else/>  
    
    <films-list/>
    <pagination v-if="$store.getters.getResult > 10"/>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import FilmsList from '../components/FilmsList.vue'
import Pagination from '../components/Pagination.vue'
import SearchPhrase from '../components/SearchPhrase.vue'
import ResultNotFound from '../components/ResultNotFound.vue'

export default {
  data (){return {
    searchText: ''
  }},
  components: { MainHeader, FilmsList, Pagination, SearchPhrase, ResultNotFound},
  beforeDestroy() {   
    localStorage.removeItem('searchText')
  },
  methods: {
    getSearchText (value) {      
       this.searchText = value
    }
  }
}

</script>
<style lang="scss" scoped>
 
</style>