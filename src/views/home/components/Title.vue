<template>
  <div class="title-main">
   
   <div class="left-area">
          <!-- <span class="line"></span> -->
      
          <span class="text">{{title}}</span>
        
      </div>
        <router-link to="/">

      <div class="right-area">
          <span class="text">{{moreText}}</span>
          <img class="icon" :src="require('@/assets/imgs/arr-right.png')" alt="">
      </div>
          </router-link>





  </div>
</template>

<script>
export default {
    name: "CommonTitle",
  props: {
      title: {
          type: String
      },
      moreText:{
          type: String,
          default: '更多'
      }
  },
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



.title-main {
  width: 90%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
//   padding: 0 $basePadding;
  margin: 8px auto;
  .text{
    font-weight:700
  }
  .left-area {
  font-family: PingFangSC-Semibold;
font-size: 16px;
color: #3E3E3E;
letter-spacing: 1.14px;
    .line {
      display: block;
      width: 4px;
      height: 17px;
      background: linear-gradient(
        rgba(242, 97, 130, 1) 0%,
        rgba(241, 160, 100, 1) 100%
      );
      margin: 5px;
    }
  }
  .right-area {
   font-family: PingFangSC-Regular;
font-size: 13px;
color: #8C8C8C;
letter-spacing: 0.93px;
   
    .icon{
        width: 6px;
        height: 10px;
        margin-left: 4px;
    }
  }
}


</style>
