<template>
    <div class="address">
        <BaseLayer>


            <template v-slot:header>

                <div class="creative-title">



                    <Title title="收货地址">


                    </Title>


                    <router-link to='/saveaddress'>
                    <img src="@/assets/icon/加号.png" alt="">

                    </router-link>
                    <!-- <ul class="title-nav">
            <li class="nav-item" :class=" liClass=='全部' ?' act':  '' " @click=" liClass='全部'">全部</li>
            <li class="nav-item" :class=" liClass=='待付款' ?' act':  '' " @click=" liClass='待付款'">待付款</li>
            <li class="nav-item" :class=" liClass=='已付款' ?' act':  '' " @click=" liClass='已付款'">已付款</li>
           
          </ul> -->
                </div>





            </template>


            <template v-slot:default>

                <div class="address-content">

                    <ul class="content-nav">

                        <li class="content-item" v-for="item in list" :key=item.tel>

                            <img src="@/assets/imgs/qq.png" alt="">
                            <div class="left">
                                <p class="title">{{item.name}}</p>
                                <p class="dz">地址:{{item.cityStr}}{{item.cityBak}}</p>

                                <p class="tel">联系方式:{{item.tel}}</p>

                            </div>

                            <div class="right">编辑</div>
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
    import Api from "@/api/address/index"
    export default {
        data() {
            return {

                list: [{
                        img: require("@/assets/imgs/qq.png"),
                        name: "勿二君",
                        dz: '湖南省长沙市镇北街',
                        tel: "1328394722"

                    },
                    {
                        img: require("@/assets/imgs/qq.png"),
                        name: "叶小飞",
                        dz: '河南省郑州市金水区80号',
                        tel: "1527364527"

                    },
                    {
                        img: require("@/assets/imgs/qq.png"),
                        name: "韩立",
                        dz: '河南省郑州市郑东新区60号',
                        tel: "1837264829"

                    },
                ]
            }
        },
        methods: {
        


        getList(){
            

            Api.getList({
                userId:localStorage.getItem("username")
            }).then(res=>{
                console.log(res)
                this.list =res.data.data
                localStorage.setItem("addressId",this.list[0].id)
            })
        },

        getDetil(){

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
    .address {

        height: 100%;
        width: 100%;
        background-color: #F1ECE7;

        .creative-title {
            background: #354E44;
            height: 60px;
            display: flex;
            align-items: center;

            img {
                height: 22px;
                width: 22px;
                margin-right: 20px;
            }
        }

        .address-content {
            height: 100%;
            width: 100%;

            .content-nav {
                width: 90%;
                margin: 0 auto;

                .content-item {
                    display: flex;
                    width: 90%;
                    margin: 0 auto;
                    text-align: left;
                    background-color: #fff;
                    height: 100px;
                    border-radius: 10px;
                    margin-top: 20px;
                    justify-content: space-around;
                    align-items: center;

                    img {
                        height: 40px;
                        width: 40px;
                    }

                    p {
                        width: 150px;
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #8D8D8D;
                        letter-spacing: 0.79px;
                        margin-bottom: 6px;
                    }

                    .title {
                        font-family: PingFangSC-Semibold;
                        font-size: 13px;
                        color: #3E3E3E;
                        letter-spacing: 0.93px;
                        margin-bottom: 5px;
                    }

                    .right {
                        font-family: PingFangSC-Regular;
                        font-size: 13px;
                        color: #8D8D8D;
                        letter-spacing: 0;

                    }

                }
            }
        }
    }
</style>