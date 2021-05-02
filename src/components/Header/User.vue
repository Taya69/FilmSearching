<template>
<div class="container">
  <a class="open" href="#nav"><i class="fa fa-user open" aria-hidden="true" ></i></a>  
    
  <select name="namesel" class="toggle">
	<option v-for="user in users" :key='user' :value="user"><span>{{user}}</span></option>	
</select>
<div class="support-grid"></div>
  <nav id="nav">      
    <ul>
        <li v-for="user in users" :key='user'>
            <a href="#">{{user}}</a>
        </li>      
    </ul>
  </nav>  

</div>
</template>

<script>

export default {
  data () {
    return {
       users: [
         'Alecsander Borisenko',
         'Victor Chistov'
       ]
    }
  },
   methods: {
 
} }
</script>

<style lang="scss" scoped>
  .container {
  display: flex;
  
}
  select {	
        background-color: #00BFFF;
        border: 0;        
        text-decoration: none;             
        background-position: 0;	
        :focus {
          border: none;
        }	
        :hover :active {
          border: none;
        }
}
.fa {
  margin-right: 1%;
  font-size: 20px;
}
@media (max-width: 1000px){
 
 }

@media (min-width: 1001px){
 
}

/* nav styles */
.container nav {
  background: #136fd2;
}



/* media query for grid layout */
@media only screen and (min-width: 600px) {   
  #nav {
    display: none;
  }
}


@media only screen and (max-width: 599px) {
  
    #nav {
      transition: transform .3s ease-in-out;
      top: 1;       
      position: fixed; 
      width: 300px;
      right: -340px;
    }
  
    #nav:target {     
      transform: translateX(-340px);
    } 
    .toggle {
      display: none;
    }  
}

</style>
