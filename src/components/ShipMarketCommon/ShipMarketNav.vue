<template>
  <div class="shipMarketNav">
    <ul class="shipMarketNav-ul">
      <li :class="{addActive:valueFromParent == 'ShipMarketHome'}">
        <router-link to="/shipMarket/shipMarketHome" class="">首页</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketContainer'}">
        <router-link to="/shipMarket/shipMarketContainer" class="">集装箱</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketDryCargo'}">
        <router-link to="/shipMarket/shipMarketDryCargo" class="">干散货</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketTanker'}">
        <router-link to="/shipMarket/shipMarketTanker" class="">油轮</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketPort'}">
        <router-link to="/shipMarket/shipMarketPort" class="">港口</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketShip'}">
        <router-link to="/shipMarket/shipMarketShip" class="">船舶</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketWaterTransport'}">
        <router-link to="/shipMarket/shipMarketWaterTransport" class="">水运</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketEconomyTrade'}">
        <router-link to="/shipMarket/shipMarketEconomyTrade" class="">经贸</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketLogistics'}">
        <router-link to="/shipMarket/shipMarketLogistics" class="">物流</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketComprehensive'}">
        <router-link to="/shipMarket/shipMarketComprehensive" class="">综合</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShipMarketIndex'}">
        <router-link to="/shipMarket/shipMarketIndex" class="">指数</router-link>
        <span class="dm-nav-line"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ShipMarketNav",
    data(){
      return{
        valueFromParent:'', //用来接收props
      }
    },
    props: ['parentToChild'],
    created(){
      this.valueFromParent = this.parentToChild;
    },
  }
</script>

<style lang = scss scoped>
  .shipMarketNav{
    width: 1060px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border: none;
    border-bottom: 1px solid #EBEBEB;
    .shipMarketNav-ul{
      width: 100%;
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        width: 9.09%;
        overflow: hidden;
        text-align: center;
        a{
          padding: 5px 10px;
        }
      }
      .addActive{
        a{
          color: #4074C0;
        }
      }
    }
  }
  .dm-nav-line {
    background: url(../.././assets/img/nav-line.png) center top no-repeat;
    width: 1px;
    height: 18px;
    float: right;
    margin-top: 12px;
  }
</style>
