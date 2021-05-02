<template>
  <div class="container">
     <h2>You searched for: {{searchText}}, {{result}} results found</h2>
  </div>
</template>

<script>

export default {
 name: 'SearchPhrase', 
 props: ['searchText'],
 computed: {
   //Кузнецова
 //  searchText () {return localStorage.getItem('searchText')},
   result () {return this.$store.getters.getResult}
 }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-left: 3%;
}
 
</style>