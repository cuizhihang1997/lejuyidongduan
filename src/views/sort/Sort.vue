<template>
  <div class="sort">


    <BaseLayer>

      <template v-slot:header>

        <div class="headercm">
          <div class="header-c">


            <img src="@/assets/icon/消息.png" alt="" class="fimg">

            <div class="headerr">
              <router-link to="/search">
                <img src="@/assets/icon/搜索.png" alt="" class="shr">
              </router-link>
              <img src="@/assets/icon/购物车.png" alt="" class="buycar">

            </div>
          </div>
        </div>

      </template>

      <template v-slot:default>


        <div class="sort-content">


          <div class="content-ogi" @click='gocea(list[0].id)'>
            <!-- <router-link to="/Creative"> -->
            <img src="@/assets/图片切图/分类页面/chuangyi.png" alt="">
            <p class="title">创意</p>
            <p class="etitle">Originality</p>
            <!-- </router-link> -->
          </div>



          <div class="content-dec"  @click='gocea(list[1].id)'>

            <img src="@/assets/图片切图/分类页面/zhuangshipin.png" alt="">
            <p class="title">装饰品</p>
            <p class="etitle">Decorations</p>



          </div>

          <div class="content-main"  @click='gocea(list[2].id)'>
            <!-- <div class="content-main-c"> -->
            <div class="content-style">

              <img src="@/assets/图片切图/分类页面/风格.png" alt="">
              <p class="title">风格</p>
              <p class="etitle">Style</p>



            </div>
            <div class="content-lamp"  @click='gocea(list[3].id)'>

              <img src="@/assets/图片切图/分类页面/灯具.png" alt="">
              <p class="title">灯具</p>
              <p class="etitle">The lamp</p>



            </div>
          </div>

          <!-- </div> -->
          <div class="zzc">

          </div>
        </div>

      </template>

    </BaseLayer>

  </div>

</template>

<script>
  import BaseLayer from "@/components/BaseLayer.vue"

  import Api from "@/api/kind/index"


  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      gocea(id) {
        this.$router.push({
          name: 'Creative',
          params: {
            id
          }
        });
      },


      getList() {
        Api.getKindList().then(res => {
          console.log(res)
          this.list=res.data.data
          console.log(this.list)
        })
      }
    },
    components: {
      BaseLayer
    },
    created() {
      this.getList()

    },
    mounted() {

    },
  }
</script>

<style scoped lang='scss'>
  .sort {
    height: 100%;
    background-color: #F1ECE7;

    width: 100%;

    .headercm {
      width: 100%;

      background: #354E44;

      .header-c {
        width: 90%;
        margin: 0 auto;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .fimg {
          height: 21px;
          width: 21px;
        }

        img {
          height: 18px;
          width: 18px;
        }

        .headerr {
          width: 60px;
          display: flex;
          justify-content: space-around;
        }

        // 


      }
    }

    .sort-content {

      background-color: #F1ECE7;
      height: 100%;
      width: 100%;

      .content-ogi {
        margin: 0 auto;
        width: 335px;
        height: 151px;
        background: #D5D5D5;
        box-shadow: 0 6px 10px 0 rgba(83, 66, 49, 0.05);
        border-radius: 10px;
        border-radius: 10px;
        position: relative;

        img {
          width: 208px;
          height: 126px;
          margin-left: 127px;
          margin-top: 20px;
        }

        // background: url("../../assets/图片切图/分类页面/chuangyi.png") no-repeat  127px 25px ;
        // background-size: 208px 126px;
        .title {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #3E3E3E;
          letter-spacing: 1.71px;
          position: absolute;
          top: 80px;
          left: 20px;
        }

        .etitle {
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #7F7F7F;
          position: absolute;
          letter-spacing: 1.07px;
          top: 120px;
          left: 20px;
        }
      }

      .content-dec {
        overflow: hidden;
        margin: 30px auto;
        width: 335px;
        height: 151px;
        background: white;
        box-shadow: 0 6px 10px 0 rgba(83, 66, 49, 0.05);
        border-radius: 10px;
        border-radius: 10px;
        position: relative;

        img {
          width: 208px;
          height: 191px;
          margin-left: 127px;
          // margin-top: 20px;
        }

        .title {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #3E3E3E;
          letter-spacing: 1.71px;
          position: absolute;
          top: 80px;
          left: 20px;
        }

        .etitle {
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #7F7F7F;
          position: absolute;
          letter-spacing: 1.07px;
          top: 120px;
          left: 20px;
        }
      }

      .content-main {
        width: 335px;
        height: 221px;
        margin: 0 auto;

        .content-style {
          float: left;
          background: #FAFAFA;
          box-shadow: 0 6px 10px 0 rgba(83, 66, 49, 0.03);
          border-radius: 10px;
          border-radius: 10px;

          border-radius: 10px;

          border-radius: 10px;

          position: relative;


          width: 156px;

          img {
            width: 156px;
            height: 221px;


          }

          .title {
            font-family: PingFangSC-Semibold;
            font-size: 24px;
            color: #3E3E3E;
            letter-spacing: 1.71px;
            position: absolute;
            top: 140px;
            left: 20px;
          }

          .etitle {
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #7F7F7F;
            position: absolute;
            letter-spacing: 1.07px;
            top: 180px;
            left: 20px;
          }
        }

        .content-lamp {
          position: relative;
          float: left;
          margin-left: 23px;
          width: 156px;

          img {
            width: 156px;
            height: 221px;

          }

          .title {
            font-family: PingFangSC-Semibold;
            font-size: 24px;
            color: #3E3E3E;
            letter-spacing: 1.71px;
            position: absolute;
            top: 140px;
            left: 20px;
          }

          .etitle {
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #7F7F7F;
            position: absolute;
            letter-spacing: 1.07px;
            top: 180px;
            left: 20px;
          }

        }
      }
    }


  }

  .zzc {
    height: 200px;
  }
</style>