<template>
  <div class="buycar">


    <BaseLayer>


      <template v-slot:header>



        <div class="buycar-header">
          <Title title="购物车"> </Title>


        </div>



      </template>

      <template v-slot:default>

        <div class="buycar-content">

          <ul class="content-nav">


            <li class="content-item" v-for="item in listzz" :key="item.img">

              <div class="item-left">
                <van-checkbox v-model="item.radio" icon-size="14px" shape="square" checked-color="#354E44">
                  <!-- <van-radio name="1"  ></van-radio> -->

                </van-checkbox>
                <img :src="item.img" alt="">
              </div>
              <div class="item-main">

                <p class="title">{{item.title}}</p>
                <p class="bh">{{item.bh}}</p>
                <p class="sl"> 数量:X{{item.count}}</p>
              </div>
              <span class="item-right">
                ¥{{item.price}}

              </span>

              <div class="spsl">

                <div class="jian" @click="item.count>0 ? item.count-- : item.count">-</div>
                <div class="slz">{{item.count}}</div>
                <div class="jia" @click="item.count++">+</div>

              </div>

            </li>
          </ul>

          <div class="cnxh">
            <div class="cnxh-left"></div>
            <div class="text">猜你喜欢</div>
            <div class="cnxh-right"></div>

          </div>
          <div class="footer">

            <img src="@/assets/图片切图/分类-购物列表/床头柜.png" alt="">
            <img src="@/assets/图片切图/分类-购物列表/沙发.png" alt="">

            <img src="@/assets/图片切图/分类-购物列表/椅子.png" alt="">


          </div>



        </div>


      </template>

    </BaseLayer>
    <div class="footerz">

      <div class="qx">
        全选
        <van-checkbox v-model="qx" @click="fx()" icon-size="14px" shape="square" checked-color="#354E44">


        </van-checkbox>
      </div>
      <div class="right">


        <div class="hj">

          合计: ¥{{hj}}


        </div>
        <div class="js" @click="jsz()">
          结算
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Title from '@/components/Titlez.vue'
  import BaseLayer from "@/components/BaseLayer.vue"
   import Api from "@/api/buycar/index.js"
  export default {
    data() {
      return {
        // sl:"1",
        list: [{
            img: require("@/assets/图片切图/分类-购物列表/床头柜.png"),
            title: "切割式床头柜",
            jq: 560,
            bh: "114534",
            sl: 1,
            radio: ""

          },
          {
            img: require("@/assets/图片切图/分类-购物列表/沙发.png"),
            title: "切割式床头柜",
            jq: 560,
            bh: "114534",
            sl:1,

            radio: ""

          },
          {
            img: require("@/assets/图片切图/分类-购物列表/椅子.png"),
            title: "切割式床头柜",
            bh: "114534",
            jq: 560,
            radio: "",
            sl: 1,

          },

        ],
        listzz:[],

      }
    },
    methods: {

      jsz(){
        

        var obj = {

                addressId: localStorage.getItem("addressId"),

                userId: localStorage.getItem("username"),

                count:0,

                price: this.hj

            } 
             
            //  obj.count 

             this.listzz.forEach( ele => ele.radio ==true ? obj.count+= ele.count : "")
            console.log(obj)

            for(var i = 0 ;i  < 2 ; i ++){

                obj['orderDetail['+i+']'] = {

                skuId: this.listzz[i].skuId,

                price: this.listzz[i].price,

                count: this.listzz[i].count,

                }

            }
            console.log(obj)
  


      Api.addOrders(obj).then(res=>{
        console.log(res)
      })
      },
      fx() {
        var sfqx = this.listzz.every(ele => ele.radio == true)
        console.log(sfqx)

        if (sfqx == true) {
          this.listzz.forEach(ele => ele.radio = false)
        }
        if (sfqx == false) {
          this.listzz.forEach(ele => ele.radio = true)

        }
      }
    },
    components: {
      Title,
      BaseLayer
    },
    computed: {


      qx: {
        // getter
        get: function () {
          var sfqx = this.listzz.every(ele => ele.radio == true)
          console.log(sfqx)
          return sfqx
        },
        // setter
        set: function (newValue) {

          return newValue
        }
      },


      // qx(){


      //   var sfqx =  this.list.every( ele => ele.radio == true)
      //        console.log(sfqx)
      //   return sfqx

      // },
      hj() {
        
        var zj = 0 ;
        

        this.listzz.forEach( ele => ele.radio == true ? zj += ele.price * ele.count : zj)

        return zj

      }


    },
    created() {
      
      this.listzz= this.$store.state.listz
      
      // console.lo
      console.log(this.listzz)
    },
    mounted() {

    },
  }
</script>

<style scoped lang='scss'>
  .buycar {
    height: 100%;
    width: 100%;
    background-color: #F1ECE7;

    .buycar-header {
      background: #354E44;
      height: 60px;
      display: flex;
      align-items: center;
    }

    .buycar-content {


      .content-nav {
        width: 90%;
        margin: 0 auto;

        .content-item {
          background-color: #fff;
          border-radius: 12px;
          margin-top: 20px;
          width: 336px;
          height: 104px;
          align-items: center;
          display: flex;
          justify-content: space-between;
          position: relative;

          img {
            width: 67px;
            height: 67px;
          }

          .item-left {
            display: flex;
            justify-content: space-around;
            width: 100px;
            margin-left: 10px;
          }

          .item-main {
            margin-right: 50px;

            .title {
              font-family: PingFangSC-Semibold;
              font-size: 13px;
              color: #3E3E3E;
              letter-spacing: 0.93px;
            }

            .bh {
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: #8D8D8D;
              letter-spacing: 0.79px;
            }

            .sl {
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: #8D8D8D;
              letter-spacing: 0.79px;
            }
          }

          .item-right {
            margin-right: 15px;
          }

          .spsl {
            position: absolute;
            right: 20px;
            bottom: 7px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .jian {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background: #F1ECE7;
              display: flex;
              justify-content: center;
              color: gray;

              align-items: center
            }

            .jia {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background: #F1ECE7;
              display: flex;
              color: gray;
              align-items: center;
              justify-content: center;



            }

            .slz {
              width: 36px;
              height: 20px;
              background: #F1ECE7;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10.8px;
              margin-right: 5px;
              margin-left: 5px;

            }
          }
        }
      }

      .cnxh {
        width: 85%;
        margin: 20px auto;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .cnxh-left {
          width: 85px;
          height: 2px;
          background: #DCCEC0;

        }

        .text {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #3E3E3E;
          letter-spacing: 1.14px;
        }

        .cnxh-right {
          width: 85px;
          height: 2px;
          background: #DCCEC0;

        }
      }
    }

    .footer {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 200px;

      img {
        height: 104px;
        width: 104px;
        border-radius: 10%
      }
    }

    .footerz {
      height: 88px;
      background-color: #fff;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;

      .qx {
        width: 50px;
        display: flex;
        height: 30px;
        margin-left: 20px;
        margin-top: 10px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: rgb(29, 17, 17);
        letter-spacing: 1.14px;
        justify-content: space-between;
        align-items: center
      }

      .right {
        display: flex;
        font-family: PingFangSC-Regular;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        font-size: 16px;
        color: #3E3E3E;
        margin-right: 20px;
        letter-spacing: 1.14px;

        .js {
          margin-left: 10px;
          width: 104px;
          height: 40px;
          border-radius: 7px;
          background: #354E44;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: PingFangSC-Semibold;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 1.29px;
        }
      }
    }
  }
</style>