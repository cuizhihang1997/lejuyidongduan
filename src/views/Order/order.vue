<template>
  <div class="order">
    <BaseLayer>


      <template v-slot:header>

        <div class="creative-title">



          <Title title="订单列表">


          </Title>

          <ul class="title-nav">
            <li class="nav-item" :class=" liClass=='全部' ?' act':  '' " @click="liClass='全部'">全部</li>
            <li class="nav-item" :class=" liClass=='待付款' ?' act':  '' " @click="liClass='待付款'">待付款</li>
            <li class="nav-item" :class=" liClass=='已付款' ?' act':  '' " @click="liClass='已付款'">已付款</li>
            <li class="nav-item" :class=" liClass=='已完成' ?' act':  '' " @click="liClass='已完成'">已完成</li>
          </ul>
        </div>





      </template>


      <template v-slot:default>

        <div class="order-content">


          <ul class="content-nav">

            <li class="content-item" v-for="item in list " :key="item.img">
              <div class="item-top"> <span class="top-left">订单编号:{{item.orderId}}</span>
                <span class="top-right">{{item.fk}}</span> </div>

              <div class="item-c" v-for="itemz in item.subList" :key="itemz.sukId">

                <div class="item-baner">
                  <img :src="itemz.cover_img" alt="">
                  <div class="banner-left">
                    <p class="title">{{itemz.descr}}</p>
                    <p class="bh">编号:{{itemz.orderId}}</p>
                    <p class="gg">规格:{{itemz.color_text}}</p>
                  </div>
                  <div class="banner-right">
                    <p class="right-top">¥{{itemz.price}}</p>
                    <p class="right-bom">x{{itemz.count}}</p>

                  </div>

                </div>
                <div class="tk" @click="gotk(item.orderId , itemz )">申请退款</div>


              </div>
              <div class="banner-bom">
                合计¥{{item.totalPrice}}
              </div>
              <div class="xx">


                <span class="xx-left"> {{item.fk=="待付款" ? "取消订单" : "查看物流"}} </span>
                <span class="xx-right" @click="doDone(item.orderId)"> {{item.fk=="待付款" ? "付款" : "确认收货"}} </span>
              </div>
            </li>
          </ul>

          <div class="zz"></div>
        </div>





      </template>
    </BaseLayer>
  </div>
</template>

<script>
  import BaseLayer from "@/components/BaseLayer.vue"
  import Title from "@/components/Titlez.vue"
  import Api from "@/api/order/index.js"
  export default {
    data() {
      return {

        liClass: "全部",
        list: [

          {
            img: require("@/assets/图片切图/我的页面/订单列表-头层牛皮沙发.png"),
            title: "头层牛皮沙发",
            bh: "114534",
            ddh: "1727384727",
            gg: "长430X宽522X高848mm",
            jg: "560",
            fk: "待付款"

          },
          {
            img: require("@/assets/图片切图/我的页面/订单列表-布袋香薰机 .png"),
            title: "布袋香薰机",
            bh: "114534",
            ddh: "2718371628",

            gg: "948X472mm",
            jg: "392",
            fk: "已发货"

          },
          {
            img: require("@/assets/图片切图/我的页面/订单列表-吊灯.png"),
            title: "圆形垂吊装饰品",
            bh: "182910",
            ddh: "8271829234",

            gg: "长1628mm",
            jg: "1527",
            fk: "已发货"

          },

        ]

      }
    },
    methods: {
    

    gotk(orderIdz , skuz){
          

          this.$router.push({name:"sale" , params:{  orderId :orderIdz ,   sku : skuz} } )
          
    },
     

     doDone(idz){

       Api.doAllDone({
         id:idz
       }).then(res =>{
         console.log(res)
       })

     },
      getList() {


        Api.getOrderList({
          userId: localStorage.getItem("username")
        }).then(res => {
          console.log(res)
          this.list = res.data.data.list

          console.log(this.list)
        })
      }
    },
    components: {
      BaseLayer,
      Title
    },
    created() {


      this.getList()
    },
    mounted() {

    },
  }
</script>

<style scoped lang='scss'>
  .order {
    height: 100%;
    width: 100%;
    background-color: #F1ECE7;

    .zz {
      height: 100px;
    }

    .creative-title {
      background: #354E44;
      height: 70px;
      padding-top: 20px;

      .title-nav {
        width: 85%;
        display: flex;
        justify-content: space-around;
        margin: 25px auto;
        overflow: hidden;

        li {
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #FFFFFF;
          letter-spacing: 1.07px;
          position: relative;
          height: 37px;
        }

        .nav-item.act:after {
          display: block;
          position: absolute;
          bottom: 17px;
        
          left: 1px;
          content: "";
          width: 93%;
          height: 2px;
          // background: #F1ECE7;
          background-color: #fff;

          border-radius: 5px 5px 0 0;
        }
      }
    }

    .order-content {
      margin-top: 50px;

      .content-nav {
        width: 90%;
        margin: 0px auto;

        .item-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: 20px;

          .top-left {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #3E3E3E;
            letter-spacing: 0.86px;
            margin-top: 18px;

          }

          .top-right {
            font-family: PingFangSC-Semibold;
            font-size: 12px;
            color: #3E3E3E;
            letter-spacing: 0.86px;
            margin-top: 18px;

          }
        }

        .content-item {

          background-color: #fff;
          width: 336px;
          // height: 167px;
          box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
          border-radius: 12px;
          border-radius: 12px;
          margin-top: 15px;
          padding-bottom: 5px;


          .tk {
            height: 25px;
            width: 62px;
            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 220px;
            // margin-bottom: 10px;
            opacity: 0.76;
            border: 1px solid #2D4F43;
            border-radius: 5px;
            border-radius: 5px;
          }

          .item-c {
            width: 90%;
            margin: 0 auto;
            padding: 15px;
            text-align: left;
          }

          img {
            width: 81px;
            height: 81px;
          }



          .item-baner {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;


            .banner-left {
              //  margin-left: 10px;
            }

            .title {
              font-family: PingFangSC-Semibold;
              font-size: 13px;
              color: #3E3E3E;
              letter-spacing: 0.93px;
              margin-top: 5px;
              margin-bottom: 10px;
            }

            .bh {
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: #8D8D8D;
              letter-spacing: 0.79px;
              margin-bottom: 10px;

            }

            .gg {
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: #8D8D8D;
              letter-spacing: 0.79px;
            }

            .right-top {
              font-family: PingFangSC-Regular;
              font-size: 13px;
              color: #8D8D8D;
              letter-spacing: 0;
            }

            .right-bom {
              //  margin-left: 18px;
              text-align: right
            }
          }


        }

        .banner-bom {
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #3E3E3E;
          letter-spacing: 0.93px;
          text-align: right;
          margin-top: -10px;
          margin-bottom: 10px;
          margin-right: 15px;

        }

        .xx {
          text-align: right;
          display: flex;
          width: 150px;

          margin-left: 150px;
          margin-bottom: 8px;
          justify-content: space-between;

          .xx-left {
            display: block;
            width: 68px;
            height: 25px;
            opacity: 0.25;
            border: 1px solid #6C6C6C;
            border-radius: 5px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .xx-right {
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 62px;
            height: 25px;
            opacity: 0.76;
            border: 1px solid #2D4F43;
            border-radius: 5px;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>