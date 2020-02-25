<template>
    <div class="sale">
        <BaseLayer>


            <template v-slot:header>

                <div class="creative-title">



                    <Title title="订单列表">


                    </Title>

                    <!-- <ul class="title-nav">
            <li class="nav-item" :class=" liClass=='全部' ?' act':  '' " @click=" liClass='全部'">全部</li>
            <li class="nav-item" :class=" liClass=='待付款' ?' act':  '' " @click=" liClass='待付款'">待付款</li>
            <li class="nav-item" :class=" liClass=='已付款' ?' act':  '' " @click=" liClass='已付款'">已付款</li>
           
          </ul> -->
                </div>





            </template>


            <template v-slot:default>

                <div class="sale-content">

                    <div class="content-title">

                        <p class="title">服务类型</p>
                        <ul class="title-nav">
                            <!-- <li class="title-item" :class=" liClass=='换货' ?' act':  '' " @click=" liClass='换货'">
                                换货
                            </li> -->
                            <li class="title-item" :class=" liClass=='1' ?' act':  '' " @click=" liClass='1'">
                                退货
                            </li>
                            <li class="title-item" :class=" liClass=='2' ?' act':  '' " @click=" liClass='2'">
                                仅退款
                            </li>


                        </ul>

                    </div>

                    <div class="order-content">


                        <ul class="content-nav">

                            <li class="content-item">

                                <div class="item-c">
                                    <div class="item-top"> <span class="top-left">订单编号:{{list.orderId}}</span> </div>

                                    <div class="item-baner">
                                        <img :src="list.sku.cover_img" alt="">
                                        <div class="banner-left">
                                            <p class="title">{{list.sku.descr}}</p>
                                            <p class="bh">编号:{{list.sku.orderId}}</p>
                                            <p class="gg">规格:{{list.sku.color_text}}</p>
                                        </div>
                                        <div class="banner-right">
                                            <p class="right-top">¥{{list.sku.price}}</p>
                                            <p class="right-bom">x{{list.sku.count}}</p>

                                        </div>

                                    </div>
                                    <div class="banner-bom">
                                        合计¥{{list.sku.count* list.sku.price}}
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ques">

                        <div class="ques-title">
                            问题描述
                        </div>
                        <div class="ques-main">

                            <textarea border="none" name="" v-model="tkyy" placeholder="请输入您的评价信息" id="textz" cols="30"
                                rows="10"></textarea>
                        </div>
                    </div>

                    <button class="footerbtn" @click="doBackOrder">提交</button>
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

                liClass: "1",
                tkyy:"",
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


                ]
            }
        },
        methods: { 

            doBackOrder(){
          
                var obj= {
                    

                    userId:localStorage.getItem("username"),
                    orderId:this.list.orderId,
                    skuId:this.list.sku.skuId,
                    reason: this.tkyy,
                    status:this.liClass,
                    count:"1"




                }

              Api.doBackOrder(obj).then(res =>{
                  console.log(res)
              })
            }

        },
        components: {

            BaseLayer,
            Title
        },
        created() {
          

 
          console.log(this.$route.params)

          this.list = this.$route.params

          console.log(this.list)
        },
        mounted() {

        },
    }
</script>

<style scoped lang='scss'>
    .sale {

        width: 100%;
        height: 100%;
        background-color: #F1ECE7;

        .creative-title {
            background: #354E44;
            display: flex;
            align-items: center;
            height: 60px;
        }

        .sale-content {

            width: 100%;
            height: 100%;

            .content-title {
                width: 90%;
                margin: 0 auto;

                .title {
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #3E3E3E;
                    letter-spacing: 1.14px;
                    text-align: left;
                    margin-top: 10px;
                }

                .title-nav {
                    display: flex;
                    justify-content: space-between;
                    width: 40%;
                    margin-top: 10px;

                    .title-item {
                        width: 62px;
                        height: 25px;
                        border: 1px solid #2D4F43;
                        border-radius: 5px;
                        border-radius: 5px;
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #354E44;
                        letter-spacing: 0.79px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .title-item.act {
                        background: #354E44;

                        color: #fff
                    }

                }
            }
        }

        .order-content {

            .content-nav {
                width: 90%;
                margin: 0 auto;

                .content-item {

                    background-color: #fff;
                    width: 336px;
                    height: 167px;
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
                    text-align: right;
                    margin-top: -10px;
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

        .ques {
            .ques-title {
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #3E3E3E;
                letter-spacing: 1.14px;
            }

            .ques-main {
                width: 90%;
                margin: 0 auto;
                height: 167px;
                background: #FFFFFF;
                box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
                border-radius: 12px;
                border-radius: 12px;

                #textz {
                    border: none;
                    height: 90%;
                    width: 90%;

                }
            }
        }

        .footerbtn {
            background: #354E44;
            border-radius: 7px;
            
            height: 47px;
            width: 268px;
            margin: 50px auto;
            font-family: PingFangSC-Semibold;
            font-size: 15px;
            color: #FFFFFF;
            letter-spacing: 1.07px;
        }
    }
</style>