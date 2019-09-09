<template>
    <div class="breadcrumb">
        <!--咨询中心-->
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterShanghai'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>上海</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterDomestic'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>国内</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterInternational'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>国际</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterShipping'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>航运</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterTrade'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>经贸</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterPort'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>口岸</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterTechnology'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>科技</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterService'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>服务</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterLook'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>观察</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'InfCenterEncy'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/infCenter/infCenterHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>国内</el-breadcrumb-item>
            <el-breadcrumb-item>百科</el-breadcrumb-item>
        </el-breadcrumb>

        <!--航运市场-->
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketContainer'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>集装箱运输市场</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketDryCargo'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>干散货</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>

        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketTanker'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>油轮运输市场</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketPort'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>港口发展</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketShip'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>船舶市场</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketWaterTransport'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>水运经济</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketEconomyTrade'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>经贸统计 </el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketLogistics'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>物流统计</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketComprehensive'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>综合交通 </el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShipMarketIndex'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipMarket/shipMarketHome'}">航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>分析报告</el-breadcrumb-item>
            <el-breadcrumb-item>航运指数</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!--政策公告-->
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntPolicy'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>政策</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntUnscramble'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>政策解读</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntNotice'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>通知</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntAnnouncement'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>公告</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntGPort'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>港口</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntKPort'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>口岸</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntWaterway'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>水路</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntLand'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>陆路</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntAviation'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>航空</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntTrade'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>贸易</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyFinance'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>财税</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntMaritime'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>海事</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntCustoms'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>海关总署</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntShanghaiCustoms'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>上海海关</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntMinistry'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>交通运输部</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntCommunications'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>上海交通委</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntChineseGovernment'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>中国政府</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntShanghaiGovernment'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>上海政府</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntTaxation'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>国家税务总局</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntShanghaiTaxBureau'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>上海国税局</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntPostBureau'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>国家邮政局</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntShanghaiPostAdm'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>上海市邮政管理局</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'PolicyMntCivilChina'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/policyMnt/policyMntPolicy'}">政策公告</el-breadcrumb-item>
            <el-breadcrumb-item>公文文种</el-breadcrumb-item>
            <el-breadcrumb-item>中国民航局</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!--在线应用-->
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppEntCation'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppInfSearch'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppBulletin'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>应用公告</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppClearance'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>通关</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppLogistics'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>物流</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppFinance'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>金融</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppInformation'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>资讯</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppGovernmentAffairs'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>政务</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppMobile'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>移动</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppShipper'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>货主</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppFreight'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>货代</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppFleet'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>车队</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppShippingCompany'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>船公司</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppCustomsBroker'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>报关行</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppCommodityBroker'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>报检行</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppExpressOperator'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>快件营运人</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppWharf'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>码头</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppPreviewPoint'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>预录点</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppYard'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>堆场</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppTally'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>理货</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppStorage'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>仓储</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppShipGeneration'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>船代</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppNewspaper'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>一单两报</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppShipDynamics'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>船舶动态</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppCrossRegional'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>企业应用</el-breadcrumb-item>
            <el-breadcrumb-item>跨区域通关</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppGoods'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>货物</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppTransportMeans'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>运输工具</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppDocuments'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>单证</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppCustoms'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>海关</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppInspectionQuarantine'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>检验检疫</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppMaritimeAffairs'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>海事</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppPortArea'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>港区</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppScheduledFlights'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>船期航班</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppRoadTraffic'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>路况交通</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppShippingMarket'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>航运市场</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppLogisticsResources'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>物流资源</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'OnlineAppMarineMeteorology'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">在线应用</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>海洋气象</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!--航运发展-->
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShippingDevDynamics'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>建设动态</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShippingDevProcess'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>建设历程</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="valueFromParent == 'ShippingDevSupport'">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>上海国际航运中心网</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/onlineApplication/onlineAppHome'}">资讯中心</el-breadcrumb-item>
            <el-breadcrumb-item>政策支持</el-breadcrumb-item>
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>



    </div>
</template>

<script>
    export default {
        name: "Breadcrumb",
        props: ['parentToChild'],
        data(){
            return{
                valueFromParent:'', //用来接收props
                shows:null
            }
        },
        created(){
            this.valueFromParent = this.parentToChild;
        },
        methods:{

        }
    }
</script>

<style lang = scss scoped>
  .breadcrumb{
    padding-left: 60px;
    /deep/
    .el-breadcrumb{
      padding-left: 0;
      .el-breadcrumb__item{
          font-size: 15px;
          color: #606266 !important;
          font-weight: 500;
      }
     /deep/
      .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
          color: #606266 !important;
          font-weight: 500;
      }
    }
  }
</style>
