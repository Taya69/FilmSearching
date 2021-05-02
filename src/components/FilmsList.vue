<template>
  <div class="film-list">
    <div class="lds-hourglass loader" v-if="loaded"></div>
    <film-card v-else
      class="film-card"
      v-for="film in films"
      :key="film.id"
      :film="film"
    />
  </div>
</template>

<script>
import FilmCard from './FilmCard'
export default {
    data() {
            return { 
              loaded: false         
            }
        },
  components: { FilmCard },
  computed: {
    films () {      
       return this.$store.getters.getFilms
    }
  },  
   beforeUpdate() {
    document.onreadystatechange = () => {
      if (document.readyState) {this.loaded = true}      
    }
  } ,     
   updated() {
    document.onreadystatechange = () => {
      if (document.readyState) {this.loaded = false}
    }
  }      
}
</script>

<style lang="scss" scoped>
.film-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-column-gap: 5%;
  grid-row-gap: 15px;
  justify-content: center;  
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>