<template>
  <div class="footer" v-if="$route.meta.iffooter">
  

  <div class="footer-main">
  
 <router-link class="footer-home" to="/">
     <span>首页</span>
 </router-link>



   
 <router-link class="footer-sort" to="/sort">
          <span>分类</span>

 </router-link>

      
  
 <router-link class="footer-find" to="/find">
        <span>发现</span>

 </router-link>

  
 <router-link class="footer-my" to="/my">
         <span>我的</span>

 </router-link>

  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  },
  created(){

  },
  mounted(){

  },
}
</script>

<style scoped lang='scss'>

.footer{
  z-index: 1000;
    height: 88px;
    width: 100%;
    position: fixed;
     bottom: 0;
     left: 0;
   background-color: white;


    .footer-main{
  height: 70%;
  width: 100%;
   background-color: white;
   display: flex;
   justify-content: space-around;
    

     span{
         display: block;
        margin-top: 50px;
     }
        
 .footer-home{
        background: url("../assets/imgs/首页.png") no-repeat  center;
             background-size: 26px;
       flex-grow: 1;
       text-align: bottom;
    }

    .footer-home.router-link-exact-active{
        background: url("../assets/imgs/首页选中.png") no-repeat  center;
             background-size: 26px;

        
    }
     
     .footer-sort{
        background: url("../assets/imgs/分类.png") no-repeat center ; 

             background-size: 26px;

       flex-grow: 1;
         
    }
    .footer-sort.router-link-exact-active{
        background: url("../assets/imgs/分类选中效果.png") no-repeat  center;
             background-size: 26px;

        
    }
  
     .footer-find{
        background: url("../assets/imgs/指南.png") no-repeat center ;
             background-size: 26px;

       flex-grow: 1;
         
    }
      .footer-find.router-link-exact-active{
          background: url("../assets/imgs/指南选中.png") no-repeat center ;
             background-size: 26px;
    }
    .footer-my{
        background: url("../assets/imgs/我的.png") no-repeat  center;
             background-size: 26px;

       flex-grow: 1;
         
    }
     .footer-my.router-link-exact-active{
        background: url("../assets/imgs/我的选中.png") no-repeat  center;
             background-size: 26px;

       flex-grow: 1;
         
    }

    }
   
}



</style>


