<template>
  <div id="app">
   
    <router-view/>

    <Footer>
    </Footer> 
  </div>
</template>

<script>

import Footer  from "@/components/Footer.vue"

 export default {
        data() {
            return {
               



            }
        },
        methods: {

        },
        components: {
             

             Footer

        },
        created() {

        },
        mounted() {

        },
    }


</script>


<style lang="scss">


*{
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  color: black;
}
body, html {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}


</style>


