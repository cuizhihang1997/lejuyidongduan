<template>
  <div class="find">


    <BaseLayer>


      <template v-slot:header>


        <div class="find-header">
          <div class="header-c">

            <div class="headerc">


              <span class="tj" :class=" jxwz ? 'tjz' : '' " @click="jxwz=true">精选文章</span>
              <!-- <span class="line line-z"></span> -->
              <span class="pp" :class="!jxwz ? 'ppz' : ''" @click="jxwz=false">好物推荐</span>
              <!-- <span class="line  line-c"></span> -->

            </div>


          </div>


        </div>



      </template>


      <template v-slot:default v-if="jxwz">


        <div class="find-content">


          <div class="content-title">

            <ul class="title-nav">

              <li class="title-list  Lighting" :class="actClass=='我的绿灯' ? 'act': ''"
                @click="actClass='我的绿灯' ; listzz=djlist "> <img v-if="actClass!='我的绿灯'" src="@/assets/icon/绿线灯.png"
                  alt=""> <img v-if="actClass=='我的绿灯'" src="@/assets/icon/白线灯.png" alt=""></li>
              <li class="title-list cabinet" :class="actClass=='我的衣柜' ? 'act': ''"
                @click="actClass='我的衣柜' ; listzz=gzlist"> <img v-if="actClass!='我的衣柜'" src="@/assets/icon/衣柜.png"
                  alt=""> <img v-if="actClass=='我的衣柜'" src="@/assets/icon/白色柜子.png" alt=""></li>
              <li class="title-list chair" :class="actClass=='我的椅子' ? 'act': ''"
                @click="actClass='我的椅子' ; listzz=yzlist"> <img v-if="actClass!='我的椅子'" src="@/assets/icon/绿线椅子.png"
                  alt=""> <img v-if="actClass=='我的椅子'" src="@/assets/icon/白色椅子.png" alt=""> </li>
              <li class="title-list Decorations" :class="actClass=='我的装饰品' ? 'act': ''"
                @click="actClass='我的装饰品' ; listzz=jsplist"> <img v-if="actClass!='我的装饰品'" src="@/assets/icon/绿线装饰品.png"
                  alt=""> <img v-if="actClass=='我的装饰品'" src="@/assets/icon/白色装饰品.png" alt=""> </li>



            </ul>


          </div>

          <div class="content-main">



            <ul class="main-nav">


              <li class="main-item" v-for="( item ,index) in listzz" :key="index">

                <img class="topimg" :src="item.img" alt="">
                <p class="title">{{item.title}}</p>
                <p class="etitle">{{item.etitle}}</p>

                <div class="item-footre">
                  <div class="foot-left">
                    <img src="@/assets/imgs/眼睛.png" alt="" class="ess">

                    <span class="sl">{{item.sl}}</span>
                  </div>
                  <div class="foot-right">

                    <img src="@/assets/imgs/点赞.png" alt="" class="bang">
                    <img src="@/assets/imgs/转发黑色.png" alt="" class="fx">


                  </div>
                </div>

              </li>
            </ul>
          </div>
       
        </div>


      </template>

      <template v-slot:mainz v-if="!jxwz">
   
    <swiper
            class="bannerswiper"
            :options="bannerswiperOption"
            ref="mySwiper"
          >
 <swiper-slide >


        <div class="tj-content" :class="ClassList == 1 ? 'act' : ''">

          <div class="tj-top">

            <p class="top-etitle">
              Cutting furniture
            </p>

            <p class="top-title">切割家具
              系列</p>

          </div>
          <div class="tj-banner">
            <div class="gdz">
              <p class="gd">高度</p>

              <p class="sz1">60</p>

            </div>

            <div class="qyz">
              <p class="qy">区域</p>
              <p class="sz2">45</p>

            </div>





          </div>
  <div class="main">
  <swiper
            class="mainswiper"
            :options="mainswiperOption"
            ref="mySwiper"
          >
 <swiper-slide>
       
       <div class="main-z">
          <img src="@/assets/imgs/banner1.png" alt="">
     
         
       </div>

     
         </swiper-slide>
         <swiper-slide>
       
       <div class="main-z">

          <img src="@/assets/imgs/banner2.png" alt="">
       </div>

     
         </swiper-slide>


          </swiper>
</div>

        </div>

            </swiper-slide>
            <swiper-slide >


        <div class="ztj-content">

          <div class="tj-top">

            <p class="top-etitle">
              Simple wooden type
            </p>

            <p class="top-title">简约木式家具系列</p>

          </div>
          <div class="tj-banner">
            <div class="gdz">
              <p class="gd">高度</p>

              <p class="sz1">50</p>

            </div>

            <div class="qyz">
              <p class="qy">区域</p>
              <p class="sz2">110</p>

            </div>





          </div>




        </div>

            </swiper-slide>


          </swiper>



      </template>


    </BaseLayer>
  </div>

</template>

<script>
  import BaseLayer from "@/components/BaseLayer.vue"
  import Api from "@/api/aritlceList/index.js"
  import kindApi from "@/api/kind/index.js"

  // import Api from "@/api/aritlceList/index.js"

  // import Api from "@/api/aritlceList/index.js"

  export default {
    data() {
    var thaz = this

      return {
        iswz: false,
        jxwz: true,
        actClass: '我的绿灯',
        listzz: '',
        ClassList:"",
        bannerswiperOption: {
       
        direction : 'vertical',
        autoplay: {
        
        },
      
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet"
        }
      },
      mainswiperOption:{
        slidesPerView : 1.1,
        centeredSlides : true,
        on:{
    slideChange: function(){
     console.log('改变了，activeIndex为'+this.activeIndex);
      this.activeIndex == 0 ? thaz.ClassList='0' :''
      this.activeIndex == 1 ? thaz.ClassList='1' :''


    },
  },

      },
        djlist: [{
            img: require("@/assets/图片切图/发现-精选文章/灯具-1.png"),
            title: "莲花吊灯",
            etitle: "Lotus droplight",
            sl: "6851"

          },
          {
            img: require("@/assets/图片切图/发现-精选文章/灯具-2.png"),
            title: "现代极简吊灯",
            etitle: "The minimalist",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/灯具-3.png"),
            title: "现代极简吊灯",
            etitle: "The minimalist",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/灯具-4.png"),
            title: "中世纪吊灯",
            etitle: "Medieval chandelier",
            sl: "17281"


          },



        ],
        gzlist: [{
            img: require("@/assets/图片切图/发现-精选文章/柜子-1.png"),
            title: "现代木质柜",
            etitle: "originality",
            sl: "17281"

          },
          {
            img: require("@/assets/图片切图/发现-精选文章/柜子-2.png"),
            title: "几何图形书柜",
            etitle: "originality",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/柜子-3.png"),
            title: "现代橱柜",
            etitle: "originality",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/柜子-4.png"),
            title: "现代极简橱柜",
            etitle: "originality",

            sl: "17281"

          },



        ],
        yzlist: [

          {
            img: require("@/assets/图片切图/发现-精选文章/装饰品-1.png"),
            title: "Adamantem椅子",
            etitle: "Lotus droplight",

            sl: "17281"

          },
          {
            img: require("@/assets/图片切图/发现-精选文章/装饰品-2.png"),
            title: "简约木式椅",
            etitle: "The minimalist",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/装饰品=3.png"),
            title: "休闲椅",
            etitle: "The minimalist",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/装饰品-4.png"),
            title: "单人休闲椅",
            etitle: "Medieval chandelier",
            sl: "17281"


          },


        ],
        jsplist: [

          {
            img: require("@/assets/图片切图/发现-精选文章/椅子-1.png"),
            title: "装饰落地灯",
            etitle: "Lotus droplight",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/椅子-2.png"),
            title: "几何装饰品",
            etitle: "The minimalist",

            sl: "17281"

          },
          {
            img: require("@/assets/图片切图/发现-精选文章/椅子-3.png"),
            title: "布尔多椭圆形托盘",
            etitle: "The minimalist",
            sl: "17281"


          },
          {
            img: require("@/assets/图片切图/发现-精选文章/椅子-4.png"),
            title: "石膏瓶",
            etitle: "Medieval chandelier",
            sl: "17281"


          },


        ],
      }
    },
    methods: {

      

      getKindList(){

        kindApi.getKindList().then(res =>{
          console.log(res)
        })
      },
      cert() {
        this.listzz = this.djlist
      },

      getList(){
        Api.getList().then(res => {
          console.log(res)
        })
      }
    },
    components: {
      BaseLayer,
    },
    created() {

      this.cert()
      this.getKindList()
      this.getList()
    },
    mounted() {

    },
  }
</script>

<style scoped lang='scss'>
  .find {

    height: 100%;
    width: 100%;
    background-color: #F1ECE7;


    .find-header {

      background-color: #354E44;

      .header-c {
        width: 90%;
        margin: 0 auto;
        height: 50px;
        display: flex;
        justify-content: space-between;

        align-items: center;

        .fimg {
          height: 21px;
          width: 21px;
        }

        .headerc {
          // margin-left: 30px;
          margin: 0 auto;

          span {
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: 1.14px;

          }

          .tj {
            position: relative;

          }

          .tjz:after {
            content: "";
            height: 3px;
            width: 66px;
            background: #FFFFFF;
            border-radius: 1.5px;
            display: inline-block;
            position: absolute;
            bottom: -5px;
            left: 1px;
          }

          .pp {
            margin-left: 20px;
            position: relative;
          }

          .ppz:after {
            content: "";
            height: 3px;
            width: 66px;
            background: #FFFFFF;
            border-radius: 1.5px;
            display: inline-block;
            position: absolute;
            bottom: -5px;
            left: 1px;
          }

          //   .line{
          //     height: 3px;
          //     width: 32px;
          //     background: #FFFFFF;
          // border-radius: 1.5px;
          //   }
        }

      }

    }

    .find-content {
      margin-bottom: 150px;

    
      width: 100%;
      height: 100%;

      .content-title {

        width: 100%;
        // height: ;

      }

      .title-nav {
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: space-around;
        margin-top: 10px;


        .title-list {

          height: 42px;
          width: 42px;
          background-color: #fff;
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
          border-radius: 50%;
          position: relative;

          img {
            height: 25px;
            width: 20px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            display: block;
            margin: auto;

          }

        }

        .title-list.act {
          background-color: #354E44;
        }
      }


    }
  }

  .content-main {

    .main-nav {
      width: 90%;
      margin: 0 auto;

      .main-item {
        background-color: #fff;
        margin-top: 30px;
        height: 241px;
        border-radius: 10%;
        position: relative;

        .title {
          position: absolute;
          //  bottom: 30px;
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #FFFFFF;
          letter-spacing: 1.71px;
          top: 120px;
          left: 20px;
        }

        .etitle {
          position: absolute;
          top: 160px;
          left: 20px;
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #FFFFFF;
          letter-spacing: 1.07px;

        }

        .topimg {
          width: 100%;
          height: 191px;
        }

        .item-footre {
          width: 86%;
          height: 20%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .ess {
            width: 30px;
          }

          .bang {
            margin-right: 15px;
          }

          img {
            height: 20px;
            width: 20px;
          }
        }

      }

    }
  }
 
 .tj-content.act{
   background-position: -780px -100px
 }
  .tj-content {
    background: url("../../assets/图片切图/发现-好物推荐/好物推荐背景图1.png") no-repeat -500px -100px;
   margin-top: 10px;
    background-size: 1500px 700px;
    height: 650px;
    width: 100%;

    text-align: left;
       .main{
           margin-top: 170px;
           margin-left: 70px;
          .main-z{
            height: 132px;
            width: 248px;
            background-color: #fff;
            border-radius: 5px;
            img{
              height: 100%;
              width: 100%;
            }
          }
       }
    .top-etitle {
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #FFFFFF;
      letter-spacing: 0.93px;
      margin-left: 30px;
      margin-bottom: 20px;
    }

    .top-title {
      font-family: PingFangSC-Semibold;
      font-size: 36px;
      color: #FFFFFF;
      letter-spacing: 2.57px;
      width: 155px;
      margin-left: 30px;

    }

    .gd {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 1px;
    }
  .gdz{
    margin-right: 30px;
  }
    .sz1 {
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 1.43px;
    }

    .sz2 {
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 1.43px;
    }
  .qyz{
    margin-left: 10px;
  }
    .qy {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 1px;
    }
    .tj-banner{
      display: flex;
      margin-left: 240px;
      margin-top: 50px;
    }


  }
  .ztj-content {
    background: url("../../assets/图片切图/发现-好物推荐/好物推荐背景图2.png") no-repeat -100px -100px;
   margin-top: 10px;
    background-size: 1000px 800px;
    height: 650px;
    width: 100%;

    text-align: left;

    .top-etitle {
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #FFFFFF;
      letter-spacing: 0.93px;
      margin-left: 30px;
      margin-bottom: 20px;
    }

    .top-title {
      font-family: PingFangSC-Semibold;
      font-size: 36px;
      color: #FFFFFF;
      letter-spacing: 2.57px;
      width: 155px;
      margin-left: 30px;

    }

    .gd {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 1px;
    }
  .gdz{
    margin-right: 30px;
  }
    .sz1 {
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 1.43px;
    }

    .sz2 {
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 1.43px;
    }
  .qyz{
    margin-left: 10px;
  }
    .qy {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 1px;
    }
    .tj-banner{
      display: flex;
      margin-left: 240px;
      margin-top: 50px;
    }
  

  }
</style>