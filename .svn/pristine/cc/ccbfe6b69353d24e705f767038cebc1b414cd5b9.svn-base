<template>
  <div class="weeklyRanking">
    <ul v-if="viewShow1">
      <h3>
         <span>一周排行</span>
         <span></span>
      </h3>
      <li><router-link to="" ><span>1</span>广州港新增内外贸两条集装箱航线</router-link></li>
      <li><router-link to="" ><span>2</span>广州港新增内外贸两条集装箱航线</router-link></li>
      <li><router-link to="" ><span>3</span>广州港新增内外贸两条集装箱航线</router-link></li>
      <li><router-link to="" ><span>4</span>广州港新增内外贸两条集装箱航线</router-link></li>
      <li><router-link to="" ><span>5</span>广州港新增内外贸两条集装箱航线</router-link></li>
      <li><router-link to="" ><span>6</span>广州港新增内外贸两条集装箱航线</router-link></li>
    </ul>
    <ul v-if="viewShow2">
      <h3>
        <span>一周排行</span>
        <span>评论最多</span>
      </h3>
      <li><router-link to="" ><span>1</span>湖北建成首个公铁水多式联运港口</router-link></li>
      <li><router-link to="" ><span>2</span>湖北建成首个公铁水多式联运港口</router-link></li>
      <li><router-link to="" ><span>3</span>湖北建成首个公铁水多式联运港口</router-link></li>
      <li><router-link to="" ><span>4</span>湖北建成首个公铁水多式联运港口</router-link></li>
      <li><router-link to="" ><span>5</span>湖北建成首个公铁水多式联运港口</router-link></li>
      <li><router-link to="" ><span>6</span>湖北建成首个公铁水多式联运港口</router-link></li>
    </ul>
    <ul v-if="viewShow3">
      <h3>
        <span>一周排行</span>
        <span style="font-size: 12px;color: #000000">评论最多</span>
      </h3>
      <li><router-link to="" ><span>1</span>长江干线年货物通过量连续多年居世界内河首位</router-link></li>
      <li><router-link to="" ><span>2</span>长江干线年货物通过量连续多年居世界内河首位</router-link></li>
      <li><router-link to="" ><span>3</span>长江干线年货物通过量连续多年居世界内河首位</router-link></li>
      <li><router-link to="" ><span>4</span>长江干线年货物通过量连续多年居世界内河首位</router-link></li>
      <li><router-link to="" ><span>5</span>长江干线年货物通过量连续多年居世界内河首位</router-link></li>
      <li><router-link to="" ><span>6</span>长江干线年货物通过量连续多年居世界内河首位</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "WeeklyRanking",
    data(){
      return{
        viewShow1:false,
        viewShow2:false,
        viewShow3:false,
        valueFromParent:'', //用来接收props
      }
    },
    props: ['parentToChild'],
    created(){
      this.valueFromParent = this.parentToChild;
      this.isShow();
    },
    methods:{
      isShow:function () {
          if( this.valueFromParent == 'ShipMarketTanker'|| this.valueFromParent == 'ShipMarketPort'|| this.valueFromParent == 'ShipMarketShip'|| this.valueFromParent == 'ShipMarketWaterTransport'|| this.valueFromParent == 'ShipMarketEconomyTrade'|| this.valueFromParent == 'ShipMarketLogistics'|| this.valueFromParent == 'ShipMarketComprehensive'|| this.valueFromParent == 'ShipMarketIndex' ){
            this.viewShow1 = true;
          }else {
            this.viewShow1 = false;
          }
          if(this.valueFromParent == 'ShipMarketContainer'|| this.valueFromParent == 'ShipMarketDryCargo'){
            this.viewShow2 = true;
          }else {
            this.viewShow2 = false;
          }
          if(this.valueFromParent == 'InfCenterDetail'|| this.valueFromParent == 'InfCenterDocumentAttached'){
            this.viewShow3 = true;
          }else {
            this.viewShow3 = false;
          }
      }
    }
  }
</script>

<style lang = scss scoped>
  .weeklyRanking{
    ul{
      h3{
        text-align: left;
        font-size: 18px;
        color: #2258c2;
        border-bottom: 1px solid #e8e8e8;
        cursor: pointer;
        margin-bottom: 20px;
        padding-bottom: 5px;
        span{
          padding-right: 10px;
        }
      }
      li{
        margin-bottom: 15px;
        color: #2258c2;
        margin-left: 15px;
        a{
          span{
            color: #ff8a00;
            padding-right: 15px;
          }
        }
      }
    }
  }
</style>
