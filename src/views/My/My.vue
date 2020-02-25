<template>
    <div class="my">

        <div class="my-header">
            <div class="header-c">
                <img src="@/assets/图片切图/我的页面/头像.png" alt="" class="acaoter">
                <div class="header-left" >
                    <p class="header-top" >hi～</p>
                    <p class="header-botm" v-if="!iflogin">你还没有登录呢</p>
                    <p class="header-botm" v-if="iflogin">{{username}}</p>


                   
                </div>
                <img src="@/assets/icon/设置.png" class="sz" alt="">
            </div>

        </div>
        <div class="my-login">

            <router-link to='/registered' v-if="!iflogin">


                <span class="zc">注册</span>
            </router-link>

            <router-link to='/login' v-if="!iflogin">
                <sp class="dl">登录</sp>
            </router-link>


        
                <span class="dl" v-if="iflogin" @click="doBackz">退出登录</span>
          
        </div>
        <div class="my-order">

            <router-link to="/order">
                <div class="order-title">

                    <span class="order">我的订单</span>

                    <img src="@/assets/imgs/arr-right.png" alt="" class="jt">
                </div>
            </router-link>
            <ul class="order-nav">

                <li class="order-item"> <img src="@/assets/imgs/代付款.png" alt="">
                    <p class="dfk">待付款</p>
                </li>
                <li class="order-item"><img src="@/assets/imgs/待收货.png" alt="">
                    <p class="dsh">待收货</p>
                </li>
                <li class="order-item"><img src="@/assets/imgs/已完成.png" alt="">
                    <p class="ywc">已完成</p>
                </li>
                <router-link to='/sale'>
                    <li class="order-item"><img src="@/assets/imgs/售后.png" alt="">
                        <p class="sh">售后</p>
                    </li>
                </router-link>
            </ul>
        </div>

        <div class="my-main">

            <ul class="main-nav">

                <router-link to="/collect">
                    <li class="main-item"><img src="@/assets/icon/收藏2.png" alt="">
                        <p>收藏</p>
                    </li>
                </router-link>
                <router-link to="/brand">

                    <li class="main-item"><img src="@/assets/icon/品牌.png" alt="">
                        <p>品牌</p>
                    </li>

                </router-link>

                <router-link to="/article">
                    <li class="main-item"><img src="@/assets/icon/文章.png" alt="">
                        <p>文章</p>
                    </li>
                </router-link>
                <router-link to="/address">

                    <li class="main-item"><img src="@/assets/icon/地址.png" alt="">
                        <p>地址</p>
                    </li>

                </router-link>

                <router-link to="/card">

                    <li class="main-item"><img src="@/assets/icon/卡包.png" alt="">
                        <p>卡包</p>
                    </li>
                </router-link>

                <li class="main-item"><img src="@/assets/icon/客服.png" alt="">
                    <p>客服</p>
                </li>

                <li class="main-item"><img src="@/assets/icon/安全.png" alt="">
                    <p>安全</p>
                </li>

                <li class="main-item"><img src="@/assets/icon/关于.png" alt="">
                    <p>关于</p>
                </li>



            </ul>


        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                iflogin:false,
                username:""
            }
        },
        methods: {
             


             doBackz(){
                //  localStorage.removeItem("username")

                 localStorage.removeItem("nickname")

             }
        },
        components: {

        },
        created() {
          

          if(localStorage.getItem("nickname")){
              this.iflogin = true
              console.log(localStorage.getItem("nickname"))
              this.username= localStorage.getItem("nickname")
          }
        },
        mounted() {

        },
    }
</script>

<style scoped lang='scss'>
    .my {
        background-color: #F1ECE7;
        height: 100%;
        width: 100%;

        .my-header {
            width: 95%;
            margin: auto;
            overflow: hidden;
            position: relative;
            text-align: left;

            .header-c {
                // margin: 0px;
                margin-top: 20px;
            }

            .acaoter {
                height: 75px;
                width: 75px;
                float: left;
            }

            .header-left {
                float: left;
                margin-top: 20px;
                margin-left: 10px;

                .header-top {
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    color: #3D4C46;
                    letter-spacing: 1px;

                }

                .header-botm {
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    color: #3D4C46;
                    letter-spacing: 1px;
                }
            }

            .sz {
                height: 25px;
                width: 25px;
                position: absolute;
                right: 10px;
                top: 10px;
            }
        }

        .my-login {
            display: flex;
            justify-content: space-between;
            width: 60%;
            margin: 0 auto;

            .zc {
                display: block;
                height: 38px;
                width: 91px;
                border: 1px solid #3D4C46;
                border-radius: 5px;
                border-radius: 5px;
                font-family: PingFangSC-Semibold;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                color: #3D4C46;
                letter-spacing: 1.07px;
            }

            .dl {
                display: block;
                background: #354E44;
                height: 38px;
                width: 91px;
                border: 1px solid #3D4C46;
                border-radius: 5px;
                border-radius: 5px;
                font-family: PingFangSC-Semibold;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                color: #ffffff;
                letter-spacing: 1.07px;

            }
        }

        .my-order {
            width: 90%;
            margin: 20px auto;
            background-color: #fff;
            height: 104px;
            box-shadow: 0 8px 12px 0 rgba(122, 98, 75, 0.04);
            border-radius: 5px;
            border-radius: 5px;

            .order-title {

                width: 90%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                padding-bottom: 5px;
                border-bottom: 1px solid #DDDDDD;

                .order {
                    margin-top: 8px;
                    font-family: PingFangSC-Regular;
                    font-size: 13px;
                    color: #3E3E3E;
                    letter-spacing: 0.93px;

                }

                img {
                    margin-top: 8px;

                    width: 13px;
                    height: 13px;
                }
            }

            .order-nav {
                margin-top: 20px;
                display: flex;
                justify-content: space-around;
                align-items: center;

                li {
                    img {
                        width: 28px;
                        height: 25px;
                    }

                    p {
                        margin-top: 5px;
                    }

                    width: 42px;
                }
            }

        }

        .my-main {



            .main-nav {
                background-color: #fff;
                border-radius: 5%;
                overflow: hidden;
                width: 90%;
                margin: 0 auto;

                li {
                    float: left;
                    width: 20%;
                    margin: 20px;

                    img {
                        width: 27px;
                        height: 25px;
                    }
                }
            }
        }
    }
</style>