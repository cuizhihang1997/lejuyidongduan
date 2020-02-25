<template>
  <div class="collect">
  <BaseLayer>


            <template v-slot:header>

                <div class="creative-title">



                    <Title title="收藏">


                    </Title>

                    <!-- <ul class="title-nav">
            <li class="nav-item" :class=" liClass=='全部' ?' act':  '' " @click=" liClass='全部'">全部</li>
            <li class="nav-item" :class=" liClass=='待付款' ?' act':  '' " @click=" liClass='待付款'">待付款</li>
            <li class="nav-item" :class=" liClass=='已付款' ?' act':  '' " @click=" liClass='已付款'">已付款</li>
           
          </ul> -->
                </div>





            </template>


            <template v-slot:default>

           <div class="collect-content">
<ul class="content-nav">

                            <li class="content-item" v-for="item in list " :key="item.id">

                                <div class="item-c">
                                    <div class="item-top">  </div>

                                    <div class="item-baner">
                                        <img :src="item.cover_img" alt="">
                                        <div class="banner-left">
                                            <p class="title">{{item.gname}}</p>
                                            <p class="bh">编号:{{item.pcode}}</p>
                                            <p class="gg">规格:{{item.detail_title}}</p>
                                        </div>
                                        <div class="banner-right">
                                            <p class="right-top">¥{{item.price_now}}</p>
                                            <p class="right-bom">x1</p>

                                        </div>

                                    </div>
                                    <div class="banner-bom">
                                        
                                        <div class="sc">  收藏:{{item.pcode}} </div>
                                        合计¥{{item.price_out}}
                                    </div>

                                </div>
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
            img: require("@/assets/图片切图/我的页面/订单列表-头层牛皮沙发.png"),
            title: "头层牛皮沙发",
            bh: "114534",
            ddh: "1727384727",
            gg: "长430X宽522X高848mm",
            jg: "560",
            sc:"241",


          },
          {
            img: require("@/assets/图片切图/我的页面/订单列表-布袋香薰机 .png"),
            title: "布袋香薰机",
            bh: "114534",
            ddh: "2718371628",

            gg: "948X472mm",
            jg: "392",
            fk: "已发货",
            sc:"241",


          },
          {
            img: require("@/assets/图片切图/我的页面/订单列表-吊灯.png"),
            title: "圆形垂吊装饰品",
            bh: "182910",
            ddh: "8271829234",
            sc:"241",
            

            gg: "长1628mm",
            jg: "1527",
            fk: "已发货"

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
  created(){
      

    //   console.log(this.$store.state )


     this.list= this.$store.state.scList 


     console.log(this.list)
  },
  mounted(){

  },
}
</script>

<style scoped lang='scss'>

.collect{

 height: 100%;
 width: 100%;
    background-color: #F1ECE7;
 
    .creative-title{
     background: #354E44;
      height: 70px;
    //   padding-top: 20px;
     display: flex;
     align-items: center;
    }
   .collect-content {

            .content-nav {
                width: 90%;
                margin: 0 auto;

                .content-item {

                    background-color: #fff;
                    width: 336px;
                    height: 104px;
                    box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
                    border-radius: 12px;
                    border-radius: 12px;
                    margin-top: 15px;

                    .item-c {
                        width: 90%;
                        margin: 0 auto;
                        text-align: left;
                    }

                    img {
                        width: 81px;
                        height: 81px;
                    }

                    .item-top {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

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

                    .item-baner {
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-between;



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
                    // text-align: right;
                    display: flex;
                    justify-content: space-between;
                   align-items: end;
                    margin-top: -10px;
                    .sc{
                        margin-left: 100px;
                    }
                }

                .xx {
                    text-align: right;
                    display: flex;
                    width: 150px;
                    margin-left: 150px;
                    margin-top: 8px;
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
