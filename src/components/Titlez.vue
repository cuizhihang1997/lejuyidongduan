<template>
  <div class="titlez">

 <img src="@/assets/imgs/arr-left.png" alt="" @click="doBack">
 

<span class="title-z">

    {{title}}

</span>
    

 <div class="title-l">

 </div>
  </div>
</template>

<script>
export default {
    name: "CommonzTitle",

      props: {
      title: {
          type: String
      },
     
  },
  data() {
  
    return {
       


    }
  },
  methods: {
  

  doBack(){
    this.$router.go(-1)
  }
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

.titlez{
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  img{
    width: 23px;
    height: 21px;
  }
   .title-z{
   font-family: PingFangSC-Regular;
font-size: 17px;
color: #FFFFFF;
letter-spacing: 1.21px;
   }
}



</style>

