<template>
  <div class="card">
    <BaseLayer>


      <template v-slot:header>

        <div class="creative-title">



          <Title title="卡包">


          </Title>

          <!-- <ul class="title-nav">
            <li class="nav-item" :class=" liClass=='全部' ?' act':  '' " @click=" liClass='全部'">全部</li>
            <li class="nav-item" :class=" liClass=='待付款' ?' act':  '' " @click=" liClass='待付款'">待付款</li>
            <li class="nav-item" :class=" liClass=='已付款' ?' act':  '' " @click=" liClass='已付款'">已付款</li>
           
          </ul> -->



        </div>


      </template>


      <template v-slot:default>
        <div class="card-content">

          <ul class="content-nav">

            <li class="content-item" v-for="item in list" :key="item.img">

              <img :src="item.img" alt="">

              <div class="left">
                <div class="title"> <span class="jq">¥{{item.jg}}</span> <span class="mj">满{{item.mj}}减</span>

                </div>
                <p class="dp">店铺优惠券</p>
                <p class="sj">2019.1.3-2019.5.11</p>

              </div>
              <div class="right">去使用</div>
              <div class="line"></div>
            </li>
          </ul>
        </div>


      </template>

    </BaseLayer>

  </div>
</template>

<script>
  import BaseLayer from "@/components/BaseLayer.vue"
  import Title from "@/components/Titlez.vue"
  export default {
    data() {
      return {
        list: [

          {
            img: require("@/assets/imgs/卡包1.png"),
            mj: "500",
            jg: "50",





          },
          {
            img: require("@/assets/imgs/卡包3.png"),

            mj: "200",

            jg: "30"

          },
          {
            img: require("@/assets/imgs/卡包4.png"),

            mj: "150",

            jg: "10"

          },
        ]
      }
    },
    methods: {

    },
    components: {
      BaseLayer,
      Title
    },
    created() {

    },
    mounted() {

    },
  }
</script>

<style scoped lang='scss'>
  .card {
    height: 100%;
    width: 100%;
    background-color: #fff;
    background-color: #F1ECE7;


    .creative-title {
      background: #354E44;
      height: 60px;
      display: flex;
      align-items: center;
    }

    .card-content {
      height: 100%;
      width: 100%;

      .content-nav {
        width: 90%;
        margin: 0 auto;

        .content-item {
          height: 110px;
          width: 330px;
          margin-top: 15px;
          box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
          background: url("../../assets/imgs/卡包卷形状.png") no-repeat;
        
          background-size: 100% 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: left;
          position: relative;
          img {
            width: 64px;
            height: 64px;
            margin-left: 20px;
          }

          .title {
            margin-bottom: 8px;
          }

          .jq {
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            color: #000000;
            letter-spacing: 1.14px;
            line-height: 18px;
          }

          .mj {
            font-family: PingFangSC-Semibold;
            font-size: 12px;
            color: #000000;
            letter-spacing: 0.86px;
            line-height: 18px;
          }

          .dp {
            font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #8D8D8D;
            letter-spacing: 0.71px;
            margin-bottom: 5px;
          }

          .sj {
            font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #8D8D8D;
            letter-spacing: 0.71px;
          }

          .right {
            font-family: PingFangSC-Semibold;
            font-size: 13px;
            color: #354E44;
            letter-spacing: 0;
          }
          .line{
            height: 72px;
            width: .1px;
            border: .5px dashed #979797;
            position: absolute;
            right: 80px;
            bottom: 22px;
          }
        }
      }
    }
  }
</style>