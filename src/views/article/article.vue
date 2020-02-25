<template>
    <div class="article">
        <BaseLayer>


            <template v-slot:header>

                <div class="creative-title">



                    <Title title="文章">


                    </Title>

                    <!-- <ul class="title-nav">
            <li class="nav-item" :class=" liClass=='全部' ?' act':  '' " @click=" liClass='全部'">全部</li>
            <li class="nav-item" :class=" liClass=='待付款' ?' act':  '' " @click=" liClass='待付款'">待付款</li>
            <li class="nav-item" :class=" liClass=='已付款' ?' act':  '' " @click=" liClass='已付款'">已付款</li>
           
          </ul> -->
                </div>





            </template>


            <template v-slot:default>

                <div class="article-content">


                    <ul class="content-nav">
                        <li class="content-item" v-for="item in list" :key="item.img">

                            <img :src="item.img" alt="">
                        <div class="item-z">
                            <div class="title">
                                {{item.title}}
                            </div>
                            <div class="sc">{{item.sc}}人已收藏</div>
                            <div class="jj">{{item.btitle}}</div>
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
                        img: require("@/assets/imgs/莲花吊灯.png"),
                        title: "莲花吊灯",
                        btitle: "一把有温度的好椅子是…",

                        sc: "1426",


                    },
                    {
                        img: require("@/assets/imgs/现代极简实木椅.png"),
                        title: "现代极简实木椅休闲椅",
                        btitle: "一把有温度的好椅子是…",
                        sc: "1426",



                    },
                    {
                        img: require("@/assets/imgs/Savoiardi - room devider on Behance.png"),
                        title: "欧式屏风隔断",
                        btitle: "一把有温度的好椅子是…",

                        sc: "1426",


                    },
                    {
                        img: require("@/assets/imgs/Lotus Pendant Light on Behance备份.png"),
                        title: "现代极简吊灯",
                        // btitle:"一把有温度的好椅子是…",

                        sc: "1426",


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
    .article {
        width: 100%;
        height: 100%;
        background-color: #F1ECE7;

        .creative-title {


            background-color: #354E44;
            background: #354E44;
            height: 70px;
            //   padding-top: 20px;
            display: flex;
            align-items: center;
        }

        .article-content {
            .content-nav {
                //  width: 90%;
                //  margin: 0 auto;
                overflow: hidden;

                .content-item {
                    float: left;
                    margin-left: 20px;
                    background: #fff;
                    margin-top: 15px;
                    box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.06);
                    border-radius: 5px;
                    border-radius: 5px;
                    text-align: left;
                    .item-z{
                        width: 90%;
                        margin: 0 auto;
                    }
                    .title {
                        font-family: PingFangSC-Semibold;
                        font-size: 13px;
                        color: #3E3E3E;
                        letter-spacing: 0.93px;
                        margin-top: 10px;
                        margin-bottom: 6px;
                    }

                    .sc {
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #8D8D8D;
                        letter-spacing: 0.79px;
                        margin-bottom: 18px;

                    }

                    .jj {
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #8D8D8D;
                        letter-spacing: 0.79px;
                        margin-bottom: 10px;

                    }

                    img {
                        width: 158px;
                        height: 119px;
                    }
                }
            }
        }
    }
</style>