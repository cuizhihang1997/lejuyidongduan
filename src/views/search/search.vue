<template>
    <div class="search">


        <div class="search-title">

            <div class="dosearch"> <img src="@/assets/icon/search.png" alt="">

                <input type="text" placeholder="搜索">
            </div>
            <span class="qx">取消</span>

        </div>

        <div class="search-hot">

            <div class="hot-title">热门搜索</div>

            <ul class="hot-nav">

                <li class="hot-item" v-for="(item , index) in list" :key="index">

                    <img :src="item.img" alt="">

                    <p class="title">{{item.title}}</p>
                </li>
            </ul>

        </div>
        <div class="search-jl">
            <div class="title">搜索记录</div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {


                list: [{
                        img: require("@/assets/icon/绿线椅子.png"),
                        title: "椅子"

                    },
                    {
                        img: require("@/assets/icon/绿线椅子.png"),
                        title: "椅子"

                    },
                    {
                        img: require("@/assets/icon/绿线椅子.png"),
                        title: "椅子"

                    },
                    {
                        img: require("@/assets/icon/绿线椅子.png"),
                        title: "椅子"

                    },
                    {
                        img: require("@/assets/icon/绿线椅子.png"),
                        title: "椅子"

                    },
                    {
                        img: require("@/assets/icon/绿线椅子.png"),
                        title: "椅子"

                    },
                    {
                        img: require("@/assets/icon/绿线椅子.png"),
                        title: "椅子"

                    },
                ]
            }
        },
        methods: {

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
    .search {
        width: 100%;
        height: 100%;
        background-color: #F1ECE7;
        padding-top: 20px;

        .search-title {
            display: flex;

            .qx {
                margin-top: 10px;
                margin-left: 10px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #3E3E3E;
                letter-spacing: 1px;
            }
        }

        .dosearch {

            width: 272px;
            height: 35px;
            box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.05);
            border-radius: 32px;
            border-radius: 32px;
            background-color: #fff;
            margin-left: 35px;
            display: flex;
            // justify-content: space-between;
            align-items: center;
            text-align: left;

            img {
                width: 18px;
                height: 18px;
                margin-left: 20px;
            }

            input {
                border: none;
                margin-left: 10px;
            }
        }

        .search-hot {
            .hot-title {
                width: 90%;
                margin: 20px auto 0;
                text-align: left;
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #3E3E3E;
                letter-spacing: 1.14px;
            }

            .hot-nav {
                width: 90%;
                margin: 0 auto;
              overflow: hidden;
                .hot-item {
                    float: left;
                    background: #FFFFFF;
                    box-shadow: 0 2px 6px 0 rgba(83, 66, 49, 0.08);
                    border-radius: 15px;
                    border-radius: 15px;
                    height: 96px;
                    width: 96px;
                    margin: 8px;
                    // display: flex;
                    // justify-content: center;
                    // align-items: center
                    img{
                        margin: 20px;
                        width: 22px;
                        height: 34px;
                    }
                }

            }
        }
    }
</style>