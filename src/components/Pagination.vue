<template>
<div class="container">
 <ul class="pagination">
  <li><a @click="goBack">«</a></li>
  <li v-for="item in numberOfPages"   
  :key='item'
  
  @click="changePage"
  ><a>{{item}}</a></li>  
  <li><a @click="goFoward">»</a></li>
</ul>
</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Pagination',
  data () {
    return {
      numberOfPages: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods: {
    ...mapActions(['findFilms', 'findResult']),
    changePage ($event) {     
     let listOfPages = document.querySelectorAll('a'); 
     listOfPages.forEach(page => {page.classList.remove('active')})        
      $event.target.classList.add('active');
      let link = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${localStorage.getItem('searchText')}&page=${$event.target.innerText}`      
    this.findFilms(link);
    this.findResult(link)
    },
    goBack () {
      if (!(this.numberOfPages[0] === 1)) {      
        let result = this.numberOfPages.map(item => item-10);
        this.numberOfPages = result}      
    },
    goFoward () {
    
       if (this.numberOfPages[9]*10 < this.$store.getters.getResult) {
        let result = this.numberOfPages.map(item => item+10);        
        this.numberOfPages = result;        
       }
    }
  }
}
</script>

<style scoped>
a :hover {
  background-color: cadetblue;
}
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0 auto;
}

ul.pagination li {display: inline;}

ul.pagination li a {
    color: black;
    float: left;
    padding: 5px 5px;
    text-decoration: none;
}
.container {
  display: flex;
  justify-content: center;
}
.active {
  background-color: PaleTurquoise;
}

</style>