<template>
    <div class="registered">

        <div class="zc">
            注册
        </div>

        <div class="username">

            <span class="hm">+86 <span class="sj"></span> </span>
            <input type="text" v-model="username" placeholder="请输入手机号/邮箱">
        </div>

        <div class="dodx" @click="dores()">获取短信验证码</div>

        <div class="ty">

            完成注册即代表你同意 <span>用户协议</span> 和 <span>隐私政策</span>
        </div>

        <div class="zh">

            已有账号 去登录 <div class="sj"></div>
        </div>

    </div>
</template>

<script>
import Api from "@/api/registered.js"
    export default {
        data() {
            return {
            
            username:"",
             regz:{
                 username:"cuizhihang",
                 password:"c123456",
                 nickname:"shiki",
                 tel:"13854637416",
                 email:"453807586@qq.com",
                 avatar:"",

             }

          
            }
        },
        methods: {
       

       dores(){
            
            

           Api.doreg(
               this.regz
           
           ).then(res=>{
               console.log(res)
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
    .registered {
        height: 100%;
        width: 100%;
        background-color: #F1ECE7;

        .zc {
            font-family: PingFangSC-Semibold;
            font-size: 30px;
            color: #354E44;
            letter-spacing: 2.14px;
            padding-top: 60px;
            text-align: left;
            margin-left: 55px;
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

            .hm {
                font-family: DFPYuanW3;
                font-size: 12px;
                color: #3F3F3F;
                letter-spacing: 0.86px;
                margin-left: 8px;
                position: relative;

                .sj {
                    position: absolute;
                    right: -10px;
                    top: 5px;
                    height: 0;
                    width: 0;
                    border: 4px solid black;
                    border-color: #3F3F3F transparent transparent transparent;
                }
            }

            input {
                border: none;
                background: transparent;

                color: #9F9F9F;
                margin-left: 15px;


            }

            ::-webkit-input-placeholder {
                opacity: 1;

                font-family: DFPYuanW3;
                font-size: 12px;
                color: #9F9F9F;
                letter-spacing: 0.86px;
            }


        }

        .dodx {
            width: 268px;
            height: 47px;
            margin: 30px auto 0;
            background: #354E44;
            border-radius: 7px;
            border-radius: 7px;
            font-family: PingFangSC-Semibold;
            font-size: 15px;
            color: #FFFFFF;
            letter-spacing: 1.07px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .ty {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #A5A5A5;
            letter-spacing: 0.86px;
            margin-top: 10px;

            span {
                margin: -2px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #354E44;
                letter-spacing: 0.86px;
                line-height: 17px;
            }
        }

        .zh {
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            color: #354E44;
            letter-spacing: 1.14px;
            margin-top: 90px;
            position: relative;
            .sj{
                width: 0;
                height: 0;
                border: 5px solid ;
                position: absolute;
                top: 3px;
                right: 100px;
                border-color: transparent  transparent transparent #354E44 ;
            }
        }
    }
</style>