<template>
    <div class="creativedel">
        <BaseLayer>


            <template v-slot:header>
            </template>


            <template v-slot:default>

                <div class="detil-main">
                    <div class="topimg">

                        <swiper class="bannerswiper" :options="bannerswiperOption" ref="mySwiper">
                            <swiper-slide v-for="item in bannerImg" :key="item.img">

                                <div class="sw-main">


                                    <img class="swimg" :src="item" alt="" />
                                    <!-- <div class="sw-right"></div>
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
                                </div> -->

                                </div>
                                <div class="quan" @click="doSc()"> <img src="@/assets/imgs/收藏.png" alt="@/assets/imgs/收藏.png"> </div>

                            </swiper-slide>

                            <!-- Optional controls -->

                            <div class="siper-pagination" slot="pagination">


                                <!-- <span class="my-bullet" v-for='item in  list.skuList' :key="item.id"> </span> -->
                            </div>

                            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
                        </swiper>

                    </div>

                    <div class="detil-content">

                        <p class="title">{{list.gname}}</p>

                        <p class="etitle">by Adrianne Ho</p>
                        <div class="jg">¥{{list.price_now}}</div>


                        <p class="detailtitle">{{list.detail_title}}</p>

                        <div class="zz" v-html='list.content'></div>

                    </div>



                    .

                </div>



            </template>


        </BaseLayer>

        <div class="delog" v-if='ifdelog' @click="ifdelog =false">

            <div class="delog-main" @click.stop=''>

                <div class="delo-content">

                    <img :src="dd.img? dd.img:list.cover_img " alt="">

                    <div class="content-top">
                        <p class="title">{{list.gname}}</p>
                        <p class="kc">库存{{kcz ?  kcz: list.sku_count  }}</p>
                    </div>

                    <div class="fl">
                        <p class="title">颜色分类</p>

                        <ul class="fl-nav">
                            <li class="fl-item" :class="idzz==item.id ? 'act':''" v-for=" (item , index) in list.skuList" :key="item.id" @click="xz(item.id,index,item.id)">经典款[{{item.color_text}}]
                            </li>
                        </ul>
                    </div>
                    <div class="fw">
                        <p class="title">特色服务</p>

                        <div class="fw-content">

                            <div class="left">
                                {{list.service_promise == 0 ? '无服务' :list.service_promise == 1 ? '送货入户': list.service_promise == 2 ? '上门安装':'' }}
                            </div>

                            <div class="right">[商家赠送]</div>
                        </div>


                        <div class="line"></div>

                        <div class="delo-footer">

                            <div class="footer-left">购买数量</div>
                            <div class="foot-right">
                                <div class="spsl">

                                    <div class="jian" @click="dd.count>0 ? sl-- : sl">-</div>
                                    <div class="slz">{{dd.count}}</div>
                                    <div class="jia" @click="dd.count++">+</div>

                                </div>
                            </div>
                        </div>
                      
                        <div class="qd" @click="doBuy()">确定</div>

                    </div>
                </div>


            </div>
        </div>
        <div class="footer">

            <div class="kf">

                <img src="@/assets/icon/客服.png" alt="">

                客服

            </div>

            <div class="gwc">

                <img src="@/assets/icon/购物车2.png" alt="">

            </div>

            <div class="gm" @click="ifdelog= !ifdelog">立即购买</div>

        </div>




    </div>
</template>

<script>
    import BaseLayer from "@/components/BaseLayer.vue"
    import Api from "@/api/Creative/detil.js"
    export default {

        data() {
            var that = this
            return {
                listzz: {

                    //  service_promise:this.list.service_promise,

                },
                dd: {
                    count: 1,
                    bh:"123123",
                    img:"",
                    skuId:"",
                    price:"",
                    radio:"",
                    title:""

                    

                },
                idzz:"",
                kcz: "",
                ifdelog: false,
                list: [],
                skuList: '',
                price_in: '',
                bannerImg: [],

                bannerswiperOption: {


                
                    autoplay: {
                        // disableOnInteraction: false
                    },
                    loop: true,
                    pagination: {
                        el: '.siper-pagination',
                        type: 'custom', 
                        clickable: true,


                        renderCustom: function (swiper, current, total) {
                            console.log(swiper, current, total)
                            var paginationHtml = " ";
                            for (var i = 0; i < total; i++) {
                                // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                                if (i === (current - 1)) {
                                    paginationHtml +=
                                        '<span class="my-bullet active" style="  background:' + [that.list.skuList[
                                            i].color] + '"  ></span>';
                                } else {
                                    paginationHtml += '<span class="my-bullet" style="  background:' + [that.list
                                        .skuList[i].color
                                    ] + '" ></span>';
                                }
                            }
                            return paginationHtml;
                        },
                    }


                },

            }
        },
        methods: {
        doSc(){
              

              this.$store.state.scList.push(this.list)
        },

       doBuy(){
          this.dd.price   =this.list.price_now 
           this.dd.title= this.list.gname
         
         this.$store.state.listz.push(this.dd)
         console.log(this.$store.state.listz)

         this.$router.push( { name: 'buycar' })
       },
       
         xz(id ,index ,idz){
             this.idzz= id
             this.dd.img = this.bannerImg[index]
             this.dd.skuId = idz
         },
            getDetil() {


                Api.getDetil({
                    productId: this.$route.params.id
                }).then(res => {
                    console.log(res)
                    this.list = res.data.data
                    console.log(this.list)
                    this.bannerImg = this.list.imgs.split(',')

                    console.log(this.bannerImg)
                })

            }
        },
        components: {
            BaseLayer
        },
        created() {

            this.getDetil()
        },
        mounted() {

        },
    }
</script>

<style scoped lang='scss'>
    .creativedel {
        height: 100%;
        width: 100%;
        background-color: white;

        .topimg {
            // height: 300px;
            width: 100%;

            .swimg {
                height: 300px;
                width: 100%;
                border-radius: 0 0 0 20%;

            }

            .siper-pagination {
                overflow: hidden;
                margin-top: 20px;
                margin-left: 50px;
                position: relative;
            }

            /deep/.my-bullet {

                display: block;
                float: left;
                // margin: 0 auto;
                margin-top: 5px;
                margin-left: 10px;
                border-radius: 50%;
                height: 25px;
                width: 25px;


            }

            /deep/.my-bullet.active {


                //  margin-bottom: 10px;
                margin-top: 0px;
                height: 35px;
                width: 35px;

                // background: #B95734;
                box-shadow: 0 2px 7px 0 rgba(216, 81, 33, 0.64);
            }

            .swiper-pagination-custom {
                bottom: 5%;
                left: 0;
                //  display: flex;
                //  justify-content: center;
                // width: 30%;
                height: 50px;
                // margin: 0 auto;
                margin-left: 130px;
                /* background-color: red; */
                text-align: center;


            }


        }

        .quan {
            height: 50px;
            width: 50px;
            background-color: #354E44;
            border-radius: 50%;
            position: absolute;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 270px;
            right: 20px;

            img {
                width: 24px;
                height: 24px;

            }

        }

        .detil-content {
            text-align: left;
            width: 90%;
            margin: 0 auto;

            .title {
                font-family: PingFangSC-Semibold;
                font-size: 18.2px;
                color: #3E3E3E;
                letter-spacing: 1.3px;
            }

            .etitle {
                font-family: PingFangSC-Regular;
                font-size: 15.4px;
                color: #B0B0B0;
                letter-spacing: 1.1px;
                margin-top: 10px;

            }

            .jg {
                font-family: PingFangSC-Regular;
                font-size: 18.2px;
                color: #3E3E3E;
                letter-spacing: 1.3px;
                margin-top: 10px;

            }

            .detailtitle {
                margin-top: 20px;
                font-family: PingFangSC-Semibold;
                font-size: 14px;
                color: #3E3E3E;
                letter-spacing: 1px;
            }

            .zz {
                margin-top: 10px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #8A8A8A;
                letter-spacing: 1px;
                text-align: justify;
            }
        }

        .delog {

            height: 100%;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            text-align: left;

            .delog-main {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                border-radius: 20px;
                height: 350px;
                width: 90%;
                background-color: #fff;
                opacity: 1;

                .delo-content {
                    width: 90%;
                    margin: 0 auto;

                    img {
                        position: absolute;
                        height: 96px;
                        top: -40px;
                        left: 20px;
                        width: 96px;
                        border-radius: 10px;

                    }

                    .fl {
                        margin-top: 30px;

                        .title {
                            font-family: PingFangSC-Semibold;
                            font-size: 14px;
                            color: #3E3E3E;
                            letter-spacing: 1px;
                        }

                        ul {
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            width: 85%;
                            margin: 10px auto;

                            li {
                                // opacity: 0.06;   
                                background: #e5e5e5;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 5px;
                                border-radius: 5px;
                                height: 30px;
                                width: 121px;
                                font-family: PingFangSC-Regular;
                                font-size: 13px;
                                color: #3E3E3E;
                                letter-spacing: 0.93px;


                            }
                            li.act{
                                background-color: #354E44 ;
                                color: #fff
                            }
                        }

                    }

                    .fw {
                        margin-top: 30px;

                        .title {
                            font-family: PingFangSC-Semibold;
                            font-size: 14px;
                            color: #3E3E3E;
                            letter-spacing: 1px;
                        }

                        .fw-content {
                            margin-left: 26px;
                            margin-top: 8px;
                            padding-left: 10px;
                            padding-right: 10px;

                            width: 160px;
                            height: 30px;
                            background: #e5e5e5;

                            border-radius: 5px;
                            font-family: PingFangSC-Regular;
                            font-size: 13px;
                            color: #3E3E3E;
                            letter-spacing: 0.93px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                }

                .content-top {
                    margin-left: 120px;
                    margin-top: 20px;

                    .title {
                        font-family: PingFangSC-Semibold;
                        font-size: 14px;
                        color: #3E3E3E;
                        letter-spacing: 1px;
                    }

                    .kc {
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #B0B0B0;
                        letter-spacing: 0.86px;
                    }
                }
            }

            .line {
                height: 1px;
                width: 255px;
                margin: 0 auto;
                background-color: #979797;
                opacity: 0.24;
                margin-top: 20px;
            }

            .qd {
                width: 104px;
                height: 40px;
                background: #354E44;
                border-radius: 7px;
                border-radius: 7px;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #FFFFFF;
                letter-spacing: 1.14px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
            }

            .delo-footer {
                width: 90%;
                margin: 20px auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .footer-left {
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    color: #3E3E3E;
                    letter-spacing: 1px;
                }



                .spsl {
                    // position: absolute;
                    // right: 20px;
                    // bottom: 35px;
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

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 90%;
            margin-left: 20px;
            //  margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .kf {
                width: 25px;
            }

            img {
                height: 25px;
                width: 25px;
            }

            .gwc {
                height: 40px;
                width: 64px;
                background-color: #E2E2E2;
                display: flex;
                justify-content: center;
                border-radius: 7px;
                align-items: center;
                margin-left: 90px;
            }

            .gm {
                background: #354E44;
                border-radius: 7px;
                border-radius: 7px;
                width: 119px;
                height: 40px;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #FFFFFF;
                letter-spacing: 1.14px;
                display: flex;
                justify-content: center;
                align-items: center
            }
        }
    }

    // .swiper-pagination-customs {
    //     width: 12px;
    //     height: 12px;
    //     display: inline-block;

    //     opacity: .3;
    //     border-radius: 50%;
    //     /* box-shadow: 0 0 2px  #000; */
    //     margin: 0 5px;
    //     outline: 0;
    // }


    // .swiper-pagination-customs-active {
    //     opacity: 1;
    //     border: 3px solid #8e2829;
    //     background-color: #8e2829;

    // }
</style>