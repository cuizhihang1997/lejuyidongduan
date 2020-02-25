<template>
    <div class="creative">
        <BaseLayer>


            <template v-slot:header>

                <div class="creative-title">



                    <Title title="创意家居">


                    </Title>

                    <ul class="title-nav">
                        <li class="nav-item" :class=" liClass=='新品' ?' act':  '' " @click=" liClass='新品'">新品</li>
                        <li class="nav-item" :class=" liClass=='销量' ?' act':  '' " @click=" liClass='销量'">销量</li>
                        <li class="nav-item" :class=" liClass=='价格' ?' act':  '' " @click=" liClass='价格'">价格</li>
                        <li class="nav-item" :class=" liClass=='筛选' ?' act':  '' " @click=" liClass='筛选'">筛选</li>
                    </ul>
                </div>





            </template>


            <template v-slot:default>



                <div class="creative-content">

                    <ul class="content-nav">
                             

                            <!-- <router-link to='/buycar'> -->


                        <li class="content-list" v-for="item in list" :key='item.title' @click="gobuyz(item.id)">
                            <!-- {{item}} -->
                            <img :src="item.cover_img" alt="">
                       
                              <div class="zz">
                            <p class="title">{{item.gname ? item.gname : '暂无名称'}}</p>

                            <p class="sc">1426人以收藏</p>

                            <div class="list-footer">
                                <span class="jq">¥{{item.price_now}}</span>
                                <span class="dz">{{ item.origin_city ?  item.origin_city :'暂无城市'}}</span>
                            </div>
                     </div>

                        </li>
                        <!-- </router-link> -->
                    </ul>


                </div>





            </template>


        </BaseLayer>






    </div>
</template>

<script>
    import BaseLayer from "@/components/BaseLayer.vue"
    import Title from "@/components/Titlez.vue"
   
   import Api from "@/api/product/index"
    export default {
        data() {
            return {


                liClass: "新品",
                list: [{
                        img: require("@/assets/图片切图/分类-创意家具/单人沙发.png"),
                        title: "Valley 单人沙发",
                        jg: "560"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/现代极简实木.png"),
                        title: "现代极简实木椅休闲椅",
                        jg: "359"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/欧式屏风隔断.png"),
                        title: "欧式屏风隔断",
                        jg: "1721"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/书桌.png"),
                        title: "简约书桌",
                        jg: "451"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/单人沙发.png"),
                        title: "Worcester 电视柜",
                        jg: "4261"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/茶几.png"),
                        title: "Jenner 茶几",
                        jg: "2162"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/现代橱柜.png"),
                        title: "现代橱柜",
                        jg: "8234"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/休闲椅.png"),
                        title: "创意休闲椅",
                        jg: "829"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/单人木椅.png"),
                        title: "单人木椅",
                        jg: "218"
                    },
                    {
                        img: require("@/assets/图片切图/分类-创意家具/书柜.png"),
                        title: "几何图形书柜",
                        jg: "5372"
                    },


                ]
            }
        },
        methods: {   
        

        gobuyz(id){
       

       this.$router.push({ name:"Creativedetil" , params:{ id :id}} ,)
        },
 

            getList(){ 

                Api.getProductList({
                    kindId:this.$route.params.id
                }).then(  res =>{
                    console.log(res)
                    this.list = res.data.data.list
                
                })
            }

        },
        components: {
            BaseLayer,
            Title
        },
        created() {
          
              console.log(this.$route.params.id)
          this.getList()
        },
        mounted() {

        },
    }
</script>

<style scoped lang='scss'>
    .creative {
        height: 100%;
        // height: 2000px;
        width: 100%;
        background-color: #F1ECE7;


        .creative-title {
            background: #354E44;
            height: 70px;
            padding-top: 20px;

            .title-nav {
                width: 85%;
                display: flex;
                justify-content: space-around;
                margin: 25px auto;

                li {
                    font-family: PingFangSC-Regular;
                    font-size: 15px;
                    color: #FFFFFF;
                    letter-spacing: 1.07px;
                    position: relative;
                }

                .nav-item.act:after {
                    display: block;
                    position: absolute;
                    bottom: -4px;
                    left: 1px;
                    content: "";
                    width: 28px;
                    height: 2px;
                    background: #F1ECE7;

                    border-radius: 5px 5px 0 0;
                }
            }
        }

        .creative-content {
            // height: 560px;
            width: 100%;
            margin-bottom: 200px;


            .content-nav {
                //    width: 340px;
                width: 100%;
                margin: 0 auto;
                overflow: hidden;

                .content-list {
                    float: left;
                    height: 208px;
                    width: 158px;
                    margin-left: 20px;
                    // background: 
                    margin-top: 20px;
                    background: #FFFFFF;
                    box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.06);
                    border-radius: 5px;
                    border-radius: 5px;
                      text-align: left;
                      .zz{
                        
                        width: 80%;
                        margin: 0 auto;
                      
                    .title {
                        font-family: PingFangSC-Semibold;
                        font-size: 13px;
                        color: #3E3E3E;
                        letter-spacing: 0.93px;
                        margin-top: 8px;
                        width: 110px;
                    }

                    .sc {
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #8D8D8D;
                        letter-spacing: 0.79px;
                        margin-top: 8px;

                    }

                    .list-footer { 
                        display: flex;
                        justify-content: space-between;
                        margin-top: 8px;

                        .jq {
                            font-family: PingFangSC-Semibold;
                            font-size: 13px;
                            color: #3E3E3E;
                            letter-spacing: 0.93px;
                        }

                        .dz {
                            font-family: PingFangSC-Regular;
                            font-size: 11px;
                            color: #3E3E3E;
                            letter-spacing: 0.79px;
                        }
                    }
                 }
                    img {
                        width: 100%;
                        height: 119px;
                    }
                }

            }
        }
    }
</style>