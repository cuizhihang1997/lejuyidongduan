<template>
    <div class="login">


        <div class="login-acator">

            <img src="@/assets/imgs/logo.png" alt="">
        </div>

        <div class="login-main">

            <div class="username">
                <img src="@/assets/imgs/艾特.png" alt="">
                <input type="text" v-model="username" placeholder="请输入手机号/邮箱">
            </div>
            <div class="username zz">
                <img src="@/assets/imgs/密码@2x.png" alt="">
                <input type="password" v-model="password" placeholder="请输入密码">
                <img class="closee" src="@/assets/imgs/闭眼.png" alt="">

            </div>
            <div class="dologin" @click="doLogin()">
                登录
            </div>
            <div class="else">
                <span class="hw">海外手机号登录</span>

                <span class="wj">忘记密码</span>
            </div>

            <div class="footer">
                <div class="zc">立即注册</div>
                <div class="dsf">

                    <span class="line"></span>
                    <span class="text">第三方软件登录</span>
                    <span class="linez"></span>
                </div>
                <div class="tb">
                    <img src="@/assets/icon/QQ.png" alt="">
                    <img src="@/assets/icon/微博.png" alt="">

                    <img src="@/assets/icon/微信.png" alt="">

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Api from "@/api/login/index";
    import {
        Toast
    } from 'vant';
    import Apiz from "@/api/address/index"

    export default {
        data() {
            return {

                username: "",
                password: "",

            }
        },
        methods: {


            doLogin() {
                console.log(11)
                Api.doLogin({
                    username: this.username,
                    password: this.password
                }).then(res => {
                    console.log(res)
                    if (res.data.code == "S") {



                        localStorage.setItem("username", res.data.data.id)

                        localStorage.setItem("nickname", res.data.data.nickname)


                        this.$router.push({
                            name: "home"
                        })

                        Apiz.getList({
                            userId: localStorage.getItem("username")
                        }).then(res => {
                            console.log(res)
                            this.list = res.data.data
                            localStorage.setItem("addressId", this.list[0].id)
                        })
                    } else {
                        Toast('用户名或密码错误');
                    }
                })


            }
        },
        components: {

        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style scoped lang='scss'>
    .login {

        height: 100%;
        width: 100%;
        background-color: #F1ECE7;

        .login-acator {
            padding-top: 80px;

            img {
                height: 106px;
                width: 106px;
                border-radius: 50%
            }
        }

        .login-main {
            .username.zz {

                margin: 20px auto 0;

            }

            .username {
                display: flex;
                align-items: center;
                width: 268px;
                height: 39px;

                background: #E3DFDA;
                border-radius: 7px;
                border-radius: 7px;

                margin: 60px auto 0;

                img {
                    height: 16px;
                    width: 16px;
                    margin-left: 10px;


                }

                input {
                    border: none;
                    background: transparent;

                    color: #9F9F9F;
                    margin-left: 10px;


                }

                ::-webkit-input-placeholder {
                    opacity: 1;

                    font-family: DFPYuanW3;
                    font-size: 12px;
                    color: #9F9F9F;
                    letter-spacing: 0.86px;
                }

                .closee {
                    width: 18px;
                    height: 10px;
                    margin-left: 50px;
                }
            }

            .dologin {
                width: 268px;
                height: 47px;
                background: #354E44;
                border-radius: 7px;
                border-radius: 7px;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px auto 0;
                font-family: PingFangSC-Semibold;
                font-size: 15px;
                color: #FFFFFF;
                letter-spacing: 1.07px;
            }

            .else {
                display: flex;
                justify-content: space-between;
                align-content: center;
                width: 280px;
                margin: 10px auto 0;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #A5A5A5;
                letter-spacing: 0.86px;

            }

            .footer {
                .zc {
                    font-family: PingFangSC-Semibold;
                    font-size: 20px;
                    color: #354E44;
                    letter-spacing: 1.43px;
                    margin: 50px auto 0;
                }

                .dsf {
                    width: 80%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 15px auto;

                    .text {
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #A5A5A5;
                        letter-spacing: 0.86px;
                    }

                    .line {
                        width: 63px;
                        height: 1px;
                        background-color: #DDDDDD;
                        ;
                    }

                    .linez {
                        width: 63px;
                        height: 1px;
                        background-color: #DDDDDD;
                        ;
                    }

                }

                .tb {
                    width: 40%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 20px auto;

                    img {
                        height: 32px;
                        width: 32px;




                    }
                }
            }
        }

    }
</style>