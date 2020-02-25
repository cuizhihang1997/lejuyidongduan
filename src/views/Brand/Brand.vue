<template>
    <div class="brand">
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



                <div class="brand-content">

                    <ul class="content-nav">

                        <li class="content-item" v-for="item in list" :key="item.img">


                            <img :src="item.img" alt="">

                            <div class="right">
                                <p class="title">{{item.title}}</p>
                                <p class="fs">粉丝:{{item.fs}}</p>
                            </div>
                            <div class="dian">

                                <span></span>
                                <span></span>

                                <span></span>

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
                        img: require("@/assets/imgs/办公桌.png"),
                        title: "Hartford 系列",


                        fs: "91893",


                    },
                    {
                        img: require("@/assets/imgs/迪欧.png"),
                        title: "迪欧 极简系列",


                        fs: "18293",


                    },
                    {
                        img: require("@/assets/imgs/椅子4.png"),
                        title: "KUOKUYO品牌家具",


                        fs: "271890",


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
        created() {

        },
        mounted() {

        },
    }
</script>

<style scoped lang='scss'>
    .brand {
        height: 100%;
        width: 100%;
        background-color: #F1ECE7;


        .creative-title {
            background: #354E44;
            height: 60px;
            display: flex;
            align-items: center;
        }

        .brand-content {
            .content-nav {
                width: 90%;
                margin: 0 auto;

                .content-item {
                    height: 104px;
                    width: 336px;
                    background-color: #fff;
                    box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
                    border-radius: 12px;
                    border-radius: 12px;
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    text-align: left;

                    .right {
                        margin-right: 40px;

                        .title {
                            font-family: PingFangSC-Semibold;
                            font-size: 16px;
                            color: #3E3E3E;
                            letter-spacing: 1.14px;
                            margin-bottom: 10px;
                        }

                        .fs {
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #3E3E3E;
                            letter-spacing: 0.86px;
                        }
                    }

                    img {
                        width: 70px;
                        height: 70px;
                    }
                    .dian{
                        width: 15px;
                        display: flex;
                        justify-content: space-between;
                        // align-items: flex-start;
                        margin-bottom: 70px;
                        span{
                            height: 3px;
                            background: #D8D8D8;
                            width: 3px;
                            border-radius: 50%
                        }
                    }
                }
            }
        }
    }
</style>