<template>
  <div class="container">
     <h2>You searched for: {{searchText}}, {{result}} results found</h2>
  </div>
</template>

<script>

export default {
 name: 'SearchPhrase',
 data () {
   return {
    // searchText: localStorage.getItem('searchText')
   }
 },
 props: ['searchText'],
 computed: {
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