<template>
  <div class="home">


<BaseLayer>

<template v-slot:header>

     <div class="headercm"  :class="!tjm ? 'headerpp' : ''">
<div class="header-c">
    
        
        <img src="@/assets/icon/消息.png" alt="" class="fimg">

<div class="headerc">


<span class="tj"  :class=" tjm ? 'tjz' : '' "  @click="tjm=true">推荐</span>
<!-- <span class="line line-z"></span> -->
<span class="pp"  :class="!tjm ? 'ppz' : ''"   @click="tjm=false"     >品牌</span>
<!-- <span class="line  line-c"></span> -->

</div>

<div class="headerr">

 <router-link to="/search">

<img src="@/assets/icon/搜索.png" alt="" class="shr">

</router-link>
<img src="@/assets/icon/购物车.png" alt="" class="buycar">

</div>
</div>
     </div>
</template>


      <template v-slot:default v-if="tjm">
  
  
   <swiper
           
            :options="topswiperOption"
          >
            <swiper-slide v-for="item in topImgs" :key="item.img">

  <img  class="topimg" :src="item.img_url" alt="">

</swiper-slide>
 


     
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

  <Title title="品牌推荐">


    </Title>



 <div class="banner">
 
 <ul class="b-nav">
   <li class="b-list" v-for="(item , index) in pptlist" :key="item.img">
      
 <div class="listz">
      <img :src="item.img" alt="" :class="'img'+index">

      <p class="title">{{item.title}}</p>
      <p class="etitle">{{item.etitle}}</p>
      </div>
      </li>
 </ul>

 </div>

<div class="swpz">
  <Title title="特色优选">
    </Title>
  <swiper
            class="bannerswiper"
            :options="bannerswiperOption"
            ref="mySwiper"
          >
            <!-- slides -->
            <swiper-slide v-for="item in bannerImgs" :key="item.img">
               

              <div class="sw-main">


  <img class="swimg" :src="item.img" alt=""
            />
          <div class="sw-right"></div>
            <div class="main-left">

              <p class="swtitle">
            {{item.title}}

              </p>
              <p class="swtitlee">
            {{item.etitle}}

              </p>

              <div class="point">

                <span class="sz s1"></span>

                <span class="sz s2"></span>

                <span class="sz s3"></span>

              </div>
              <p class="swfoot">
            {{item.footer}}

              </p>
            </div>

              </div>
            
            
            
            
            
            </swiper-slide>

           

          </swiper>
          
</div>

<div class="zw"></div>
 
</template>


      <template v-slot:mainz v-if="!tjm">


<div class="home-pp-main">

  <div class="zzcc"></div>

 <ul class="pp-nacv">



   <li class="pp-item" v-for="item in pzmmList" :key="item.id">
     
   
   <img :src="item.coverImg" alt="" class="ppimg">
     
     <span class="dian">

     </span>
     <div class="acatirz">
   
          <!-- {{itemz}} -->
        <!-- <img  v-for="itemz in item.avatar " :key="itemz.zz" :src="itemz.zz" alt="" class="actimg" :class="''"> -->

        <img  src="@/assets/图片切图/首页-品牌/头像2.png" class="actimg" :class="''">
        <img  src="@/assets/图片切图/首页-品牌/椭圆形备份3.png" class="actimg" :class="''">

        <img  src="@/assets/图片切图/首页-品牌/头像4.png" class="actimg" :class="''">

          
              
     </div>
    <p class="title">  {{item.ename}}   {{item.cname}}</p>
    <p class="etitle">{{item.descr}}</p>

   </li>
 </ul>

 <div class="ccz"></div>

</div>




</template>

</BaseLayer>
 
  </div>
</template>

<script>


import Api from "@/api/home/home.js"
import axios from "axios"

import Title from "./components/Title.vue"

import BaseLayer from "@/components/BaseLayer.vue"
export default {
  data() {
    return {
       
 
      topImgs:[
        {
          img:require("@/assets/imgs/banner1.png"),
        },
          {
          img:require("@/assets/imgs/banner2.png"),
        },
      ],
       list:[],

       zg:[],
       pzmmList:[],

       yc:false,
       tjm:true,
       pptlist:[
         {img:require("@/assets/imgs/沙发.png"),
            title:"沙发系列",
            etitle:"by Adrianne"
         },
      {img:require("@/assets/imgs/木椅.png"),
        title:"木质系列",
            etitle:"by Hanna"
      },
      {img:require("@/assets/imgs/创意.png"),
      title:"创意系列",
            etitle:"by adais"
      }



       ],
        ppzlist:[
         {img:require("@/assets/图片切图/首页-品牌/品牌1.png"),
            title:"Hartford 系列—休闲椅",
            etitle:"一把有温度的好椅子，让回家的你忘却都…",
            avatar:[
              {

                 zz:require("@/assets/图片切图/首页-品牌/椭圆形.png")
            },
             {

                 zz:require("@/assets/图片切图/首页-品牌/椭圆形备份.png")
            },
             {

                 zz:require("@/assets/图片切图/首页-品牌/椭圆形备份2.png")
            }
            
            
            ,
            
            ],
            
            
           

          
         },
         {img:require("@/assets/图片切图/首页-品牌/品牌2.png"),
            title:"迪欧 极简系列—办公桌",
            etitle:"一把有温度的好椅子，让回家的你忘却都…",
               avatar:[
              {

                 zz:require("@/assets/图片切图/首页-品牌/头像4.png")
            },
             {

                 zz:require("@/assets/图片切图/首页-品牌/椭圆形备份5.png")
            },
           
            
            
            
            
            ],
         },
         {img:require("@/assets/图片切图/首页-品牌/品牌3.png"),
            title:"Manor 创意—现代橱柜",
            etitle:"一把有温度的好椅子，让回家的你忘却都…",
               avatar:[
              {

                 zz:require("@/assets/图片切图/首页-品牌/头像2.png")
            },
             {

                 zz:require("@/assets/图片切图/首页-品牌/椭圆形备份3.png")
            },
           
            
            
            
            
            ],
         },
         {img:require("@/assets/图片切图/首页-品牌/品牌4.png"),
            title:"Lauren 现代感—极简吊灯",
            etitle:"一把有温度的好椅子，让回家的你忘却都…",
               avatar:[
              {

                 zz:require("@/assets/图片切图/首页-品牌/头像3.png")
            },
             {

                 zz:require("@/assets/图片切图/首页-品牌/头像4.png")
            },
               ],
         },
         {img:require("@/assets/图片切图/首页-品牌/品牌5.png"),
            title:"品间居品—现代橱柜",
            etitle:"一把有温度的好椅子，让回家的你忘却都…",
               avatar:[
              {

                 zz:require("@/assets/图片切图/首页-品牌/头像5.png")
            },
             {

                 zz:require("@/assets/图片切图/首页-品牌/椭圆形备份5.png")
            },
               ],
         },
    



       ],
       bannerImgs:[
         {
            img:require("@/assets/图片切图/首页-推荐/特色优选-1.png"),
            title:"现代极简吊灯",
            etitle:"by Adrianne Ho",
            footer:"切割平整圆滑，运用漫反…"
         },
         {
            img:require("@/assets/图片切图/首页-推荐/特色优选-2.png"),
                  title:"现代极简吊灯",
            etitle:"by Adrianne Ho",
            footer:"切割平整圆滑，运用漫反…"
         },
         {
            img:require("@/assets/图片切图/首页-推荐/特色优选-3.png"),
                  title:"现代极简吊灯",
            etitle:"by Adrianne Ho",
            footer:"切割平整圆滑，运用漫反…"
         },
       ],
       bannerswiperOption: {
       

        autoplay: {
          // disableOnInteraction: false
        },
        loop: true,
        pagination: {
    
        }
      },
      topswiperOption: {
       


        loop: true,
          pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet"
        }
      
      },
       
    }
  },
  methods: {
   

  xs(e){
   this.yc = !this.yc 



    //  !true
  }, 
 

 getBrandList(){
      

      Api.getBrandList().then( res=>{
        console.log(res)
           this.pzmmList = res.data.data
         
     
      })
 },

   getBanners(){
         
  
         Api.getBanners({
           use:0
         }).then( res =>{
           console.log(res)
               this.topImgs= res.data.data

        console.log(this.topImgs)
         }) 

   }
  },

  
  components: {

    BaseLayer,
    Title

  },
  created(){
       


       this.getBanners()

       this.getBrandList()


        

  
  },
  mounted(){

  },
}
</script>

<style scoped lang='scss'>

.topimg{

  height: 250px;
  width: 100%;
  

}
.zw{
  height: 100px;
}
.home{
   width: 100%;
   height: 100%;

  background-color: #F1ECE7 ;

}
.headerpp{
  position: static;
  background: url("../../assets/imgs/banner1.png") no-repeat;
  border-radius:  0px 0px 15px 15px;
  height: 60px;


  

}
.headercm{

  // background: red;

  // background: url("../../assets/imgs/banner1.png") no-repeat;
  background-color: transparent;
  position: fixed;
  top: 0 ;
  left: 0;
 z-index: 10000;
  width: 100%;
  // background-size: 100% 100%;
// height: 258px;
  
  .header-c{
    width: 90%;
    margin: 0 auto;
    height: 50px;
    display: flex;
  justify-content:   space-between;
 align-items: center;
 .fimg{
    height: 21px;
    width: 21px;
  }
  .headerc{
    margin-left: 30px;

    span{
      font-family: PingFangSC-Regular;
font-size: 16px;
color: #FFFFFF;
letter-spacing: 1.14px;

    }
    .tj{
       position: relative;

    }
    .tjz:after{
     content:"";
    height: 3px;
    width: 32px;
    background: #FFFFFF;
border-radius: 1.5px;
display: inline-block;
position: absolute;
bottom: -5px;
left: 1px;
    }
  .pp{
   margin-left: 20px;
   position: relative;
  }
  .ppz:after{
     content:"";
    height: 3px;
    width: 32px;
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
   
.headerr{
 width: 15%;
 display: flex;
  justify-content:   space-between;
  z-index: 10000;


  img{
    height: 18px;
    width: 18px;
  }

  
}

}

.swimg{
  height: 140px;
  width: 97px;
}
.banner{
  
  .b-nav{
    height: 100%;
    width: 100%;
     width: 100%;
   display: flex;
   justify-content: space-around;
   margin: 0 auto;
   

  }
  // height: 200px;

 
   .b-list{
     position: relative;
  //  margin-top: 30px;
  width: 107px;
  height: 70px;
     width:30%;
     background: #FFFFFF;
    //  background-size: 104px 70px;
box-shadow: 0 4px 12px 0 rgba(122,98,75,0.06);
border-radius: 10px;
// border-radius: 10px;
  .listz{
    position: absolute;
    top: 30px;
    left: 23px;
  }
   
   .img0{
     width: 72px;
     height: 62px;
     
   }
   .img1{
     width: 58px;
     height: 64px;
     
   }
   .img2{
     width:71px;
     height: 79px;
     margin-top: -17px;
    
   }
  
   }
}
.swpz{
  margin-top: 80px;
  
}
.sw-main{
  width: 295px;
  height: 130px;
  margin: 20px auto ;
  background: #FFFFFF;
box-shadow: 0 8px 24px 0 rgba(122,98,75,0.12);
border-radius: 10px;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.sw-right{
  height: 100px;
  width: 40%;
}
.swimg{
  // margin-bottom: 80px;
  position: absolute;
  top: -25px;
  left: 20px;
}
.main-left{
  margin-right: 15px;
  text-align: left;

.swtitle{
font-family: PingFangSC-Semibold;
font-size: 13px;
color: #3E3E3E;
letter-spacing: 0.93px;
margin-bottom: 5px;
};
.swtitlee{
// font-family: PingFangSC-Regular;
font-size: 2px;
color: #B0B0B0;
// letter-spacing: 0.64px;
margin-bottom: 6px;

};

  .point{
    display: flex; 
    justify-content: space-between;
margin-bottom: 6px;
    width: 40px;
  }
  .sz{
    display: block;
    height: 10px;
    width: 10px;
    background-color: red;
    border-radius: 50%;
  }
  .s1{
    background: #446675;
  }
  .s2{
    background: #6A4826;
  }
  .s3{
    background: #E7D8BB;
  }
}
}
.swiper-container{
  overflow: visible;
}
.home-pp-main{
 
  height: 100%;
  width: 100%;
  .zzcc{
    height: 60px;
  }
  .ccz{
    height: 40px;
  }
  .pp-nacv{
    
    
    width: 90%;
    margin: 0 auto;
    margin-bottom: 150px;

  };
  .pp-item{
      position: relative;
text-align: left;
    margin: 25px auto;
     height: 335px;
     width: 306px;
     background: #FFFFFF;
box-shadow: 0 4px 10px 0 rgba(122,98,75,0.08);
border-radius: 10px;
border-radius: 10px;
     .ppimg{
       height: 213px;
      //  width:  335px;
      width: 100%;
     }
      .title{
        margin-top: 30px;
        margin-left: 20px;
     font-family: PingFangSC-Semibold;
font-size: 16px;
color: #3E3E3E;
letter-spacing: 1.14px;
   }
   .etitle{
     margin-top: 10px;
        margin-left: 20px;

     font-family: PingFangSC-Regular;
font-size: 11px;
color: #B1B1B1;
letter-spacing: 0.79px;
   }
  }

 .acatirz{
  //  width: 120px;
   position: absolute;
   bottom: 105px;
   right: 30px;
  //  display: flex;
  //  justify-content: space-between;
   .actimg{
     float: left;
     height: 40px;
     width: 40px;
     margin-right: -10px;
     display: block;
   }
  
 }

}

.swiper-pagination {
  // position: static;
  top: 205px;
  // bottom: 80px;
  margin: 8px auto;
  display: flex;
  height: 4px;
  justify-content: center;

  /deep/.my-bullet {
    width: 10px;
        height: 10px;
       background: #D8D8D8;
        border-radius: 50%;
        margin: 0 4px;
        transition: all ease 0.4s;

    &.swiper-pagination-bullet-active {
    background-color: #fff;
    }
  }
}
</style>


