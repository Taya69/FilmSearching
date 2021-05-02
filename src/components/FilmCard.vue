<template>
  <div class="film-card">
    <img    
      :src="getLink(film.Poster)"
      :alt="film.title"
      class="sizes"
    >
    <div>name: {{ film.Title }}</div>
    <div>type: {{ film.Type }}</div>
    <div>year: {{ film.Year }}</div>
    <div>imdbID: {{ film.imdbID }}</div>   
  </div>
</template>

<script>

export default {
  props: {
    film: {
      type: Object
    }
  },
  methods: {
    getLink (linkFromSite) {    
     let link = (linkFromSite === 'N/A' ? 'https://s5o.ru/storage/simple/ru/ugc/68/07/19/48/ruuf1fd6f447e.jpg' : this.film.Poster)
     return link
    }
  }
}
</script>

<style lang="scss" scoped>
.sizes {
  max-width: 300px;
  
}
</style>