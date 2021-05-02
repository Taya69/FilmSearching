<template>
   <div class="container">
      <header>
        <h1>Movie Catalog</h1>        
         <div class="container-1">      
      <input type="search" class="search" placeholder="Search..." v-model="searchText" />
  </div>
     
        <user/>
      </header>
    </div>
</template>

<script>
import User from './Header/User.vue'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
       searchText: ''
    }
  },
  components: { User }, 
  methods: {
    ...mapActions(['findFilms', 'findResult'])   
  },
  watch: {
    searchText (value) {
      localStorage.setItem('searchText', this.searchText);
      this.$emit('searchText', value);
      let link = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${this.searchText}`      
      this.findFilms(link);
      this.findResult(link)  
    }
  }
}

</script>

<style lang="scss" scoped>
@media (max-width: 1000px){
  .search {
    width: 200px;
  }
  h1 {
    font-size: 1rem;
  }
}
@media (min-width: 1001px){
  .search {
    width: 700px;
  }
   h1 {
    font-size: 3rem;
  }
}

header {
  background-color: #00BFFF;
  display: flex;  
  justify-content: space-around;
  align-items: center;
}
.container-1 input#search{
  font-size: 20px; 
  height: 30px; 
}
</style>
