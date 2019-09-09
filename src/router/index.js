import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//首页
const IndexHome = () => import("@/page/home/IndexHome");
const SiteMap = () => import("@/page/home/SiteMap");
const AboutUs = () => import("@/page/home/AboutUs");
const LegalStatement = () => import("@/page/home/LegalStatement");
const ContactUs = () => import("@/page/home/ContactUs");
const Login = () => import("@/page/Login");
const Register = () => import("@/page/Register");Search
const ForgetPwd = () => import("@/page/ForgetPwd");
const Search = () => import("@/page/Search");
//咨询中心
const InfCenter = () => import("@/page/infCenter/InfCenter");
const InfCenterHome = () => import("@/page/infCenter/InfCenterHome");
const InfCenterShanghai = () => import("@/page/infCenter/InfCenterShanghai");
const InfCenterDomestic = () => import("@/page/infCenter/InfCenterDomestic");
const InfCenterInternational = () => import("@/page/infCenter/InfCenterInternational");
const InfCenterShipping = () => import("@/page/infCenter/InfCenterShipping");
const InfCenterTrade = () => import("@/page/infCenter/InfCenterTrade");
const InfCenterPort = () => import("@/page/infCenter/InfCenterPort");
const InfCenterTechnology = () => import("@/page/infCenter/InfCenterTechnology");
const InfCenterService = () => import("@/page/infCenter/InfCenterService");
const InfCenterPolicy = () => import("@/page/infCenter/InfCenterPolicy");
const InfCenterLook = () => import("@/page/infCenter/InfCenterLook");
const InfCenterEncy = () => import("@/page/infCenter/InfCenterEncy");
//详情页
const Detail = () => import("@/page/infCenter/Detail");

//航运市场
const ShipMarket = () => import("@/page/shipMarket/ShipMarket");
const ShipMarketHome = () => import("@/page/shipMarket/ShipMarketHome");
const ShipMarketContainer = () => import("@/page/shipMarket/ShipMarketContainer");
const ShipMarketDryCargo = () => import("@/page/shipMarket/ShipMarketDryCargo");
const ShipMarketTanker = () => import("@/page/shipMarket/ShipMarketTanker");
const ShipMarketPort = () => import("@/page/shipMarket/ShipMarketPort");
const ShipMarketShip = () => import("@/page/shipMarket/ShipMarketShip");
const ShipMarketWaterTransport = () => import("@/page/shipMarket/ShipMarketWaterTransport");
const ShipMarketEconomyTrade = () => import("@/page/shipMarket/ShipMarketEconomyTrade");
const ShipMarketLogistics = () => import("@/page/shipMarket/ShipMarketLogistics");
const ShipMarketComprehensive = () => import("@/page/shipMarket/ShipMarketComprehensive");
const ShipMarketIndex = () => import("@/page/shipMarket/ShipMarketIndex");
//政策公告
/*按行业主题*/
const PolicyMntGPort = () => import("@/page/policyMnt/PolicyMntGPort");
const PolicyMntKPort = () => import("@/page/policyMnt/PolicyMntKPort");
const PolicyMntWaterway = () => import("@/page/policyMnt/PolicyMntWaterway");
const PolicyMntLand = () => import("@/page/policyMnt/PolicyMntLand");
const PolicyMntAviation = () => import("@/page/policyMnt/PolicyMntAviation");
const PolicyMntTrade = () => import("@/page/policyMnt/PolicyMntTrade");
const PolicyMntFinance = () => import("@/page/policyMnt/PolicyMntFinance");
const PolicyMntMaritime = () => import("@/page/policyMnt/PolicyMntMaritime");
/*按公文文种*/
const PolicyMnt = () => import("@/page/policyMnt/PolicyMnt");
const PolicyMntPolicy = () => import("@/page/policyMnt/PolicyMntPolicy");
const PolicyMntUnscramble = () => import("@/page/policyMnt/PolicyMntUnscramble");
const PolicyMntNotice = () => import("@/page/policyMnt/PolicyMntNotice");
const PolicyMntAnnouncement = () => import("@/page/policyMnt/PolicyMntAnnouncement");
/*按来源单位*/
const PolicyMntCustoms = () => import("@/page/policyMnt/PolicyMntCustoms");
const PolicyMntShanghaiCustoms = () => import("@/page/policyMnt/PolicyMntShanghaiCustoms");
const PolicyMntMinistry = () => import("@/page/policyMnt/PolicyMntMinistry");
const PolicyMntCommunications = () => import("@/page/policyMnt/PolicyMntCommunications");
const PolicyMntChineseGovernment = () => import("@/page/policyMnt/PolicyMntChineseGovernment");
const PolicyMntShanghaiGovernment = () => import("@/page/policyMnt/PolicyMntShanghaiGovernment");
const PolicyMntTaxation = () => import("@/page/policyMnt/PolicyMntTaxation");
const PolicyMntShanghaiTaxBureau = () => import("@/page/policyMnt/PolicyMntShanghaiTaxBureau");
const PolicyMntPostBureau = () => import("@/page/policyMnt/PolicyMntPostBureau");
const PolicyMntShanghaiPostAdm = () => import("@/page/policyMnt/PolicyMntShanghaiPostAdm");
const PolicyMntCivilChina = () => import("@/page/policyMnt/PolicyMntCivilChina");
// 在线应用
const OnlineApplication = () => import("@/page/onlineApplication/OnlineApplication");
const OnlineAppHome = () => import("@/page/onlineApplication/OnlineAppHome");
const OnlineAppEntCation = () => import("@/page/onlineApplication/OnlineAppEntCation");
const OnlineAppInfSearch = () => import("@/page/onlineApplication/OnlineAppInfSearch");
const OnlineAppBulletin = () => import("@/page/onlineApplication/OnlineAppBulletin");
//企业应用
const OnlineAppClearance = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppClearance");
const OnlineAppLogistics = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppLogistics");
const OnlineAppFinance = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppFinance");
const OnlineAppInformation = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppInformation");
const OnlineAppGovernmentAffairs = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppGovernmentAffairs");
const OnlineAppMobile = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppMobile");
const OnlineAppShipper = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppShipper");
const OnlineAppFreight = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppFreight");
const OnlineAppFleet = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppFleet");
const OnlineAppShippingCompany = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppShippingCompany");
const OnlineAppCustomsBroker = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppCustomsBroker");
const OnlineAppCommodityBroker = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppCommodityBroker");
const OnlineAppExpressOperator = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppExpressOperator");
const OnlineAppWharf = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppWharf");
const OnlineAppPreviewPoint = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppPreviewPoint");
const OnlineAppYard = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppYard");
const OnlineAppTally = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppTally");
const OnlineAppStorage = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppStorage");
const OnlineAppShipGeneration = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppShipGeneration");
const OnlineAppNewspaper = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppNewspaper");
const OnlineAppShipDynamics = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppShipDynamics");
const OnlineAppCrossRegional = () => import("@/page/onlineApplication/OnlineApplicationOthers/OnlineAppCrossRegional");
//信息查询
const OnlineAppGoods = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppGoods");
const OnlineAppTransportMeans = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppTransportMeans");
const OnlineAppDocuments = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppDocuments");
const OnlineAppCustoms = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppCustoms");
const OnlineAppInspectionQuarantine = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppInspectionQuarantine");
const OnlineAppMaritimeAffairs = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppMaritimeAffairs");
const OnlineAppPortArea = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppPortArea");
const OnlineAppScheduledFlights = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppScheduledFlights");
const OnlineAppRoadTraffic = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppRoadTraffic");
const OnlineAppShippingMarket = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppShippingMarket");
const OnlineAppLogisticsResources = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppLogisticsResources");
const OnlineAppMarineMeteorology = () => import("@/page/onlineApplication/OnlineApplicationOthers2/OnlineAppMarineMeteorology");

//在线应用详情页
const yyDetail = () => import("@/page/onlineApplication/yyDetail");

//航运发展
const ShippingDevelopment = () => import("@/page/shippingDevelopment/ShippingDevelopment");
const ShippingDevHome = () => import("@/page/shippingDevelopment/ShippingDevHome");
const ShippingDevDynamics = () => import("@/page/shippingDevelopment/ShippingDevDynamics");
const ShippingDevProcess = () => import("@/page/shippingDevelopment/ShippingDevProcess");
const ShippingDevSupport = () => import("@/page/shippingDevelopment/ShippingDevSupport");
// 办事指南
const HandlingGuide = () => import("@/page/handlingGuide/HandlingGuide");
// 专项资金
const SpecialFund = () => import("@/page/specialFund/SpecialFund");
// 洋山频道
const YsChannel = () => import("@/page/ysChannel/YsChannel");
const YsChannelHome = () => import("@/page/ysChannel/YsChannelHome");
const YsChannelSituation = () => import("@/page/ysChannel/YsChannelSituation");
const YsChannelCallCenter = () => import("@/page/ysChannel/YsChannelCallCenter");

// 上海国际航运中心建设专项资金申请
const FundLogin = () => import("@/page/specialFund/FundLogin");
//普通用户
const FundHome = () => import("@/page/specialFund/CollectiveTransportation/FundHome");
const ApplyAlready = () => import("@/page/specialFund/CollectiveTransportation/ApplyAlready");
const NewApplication = () => import("@/page/specialFund/CollectiveTransportation/NewApplication");
const MyMessage = () => import("@/page/specialFund/CollectiveTransportation/MyMessage");
//管理员用户
const FundHomeAdmin = () => import("@/page/specialFund/Admin/FundHomeAdmin");
const AllApplications = () => import("@/page/specialFund/Admin/AllApplications");
const UserListAll = () => import("@/page/specialFund/Admin/UserListAll");
//上海市促进现代航运服务业创新项目申请
//只有普通用户
const ServiceHome = () => import("@/page/specialFund/Service/ServiceHome");
const NewHyUser = () => import("@/page/specialFund/Service/NewHyUser");
const ExistApply = () => import("@/page/specialFund/Service/ExistApply");
// 简讯信息平台报送系统
const NewsletterLogin = () => import("@/page/specialFund/NewsletterLogin");
const NewsletterHome = () => import("@/page/specialFund/Newsletter/NewsletterHome");
const Report = () => import("@/page/specialFund/Newsletter/Report");
const ShowPost = () => import("@/page/specialFund/Newsletter/ShowPost");
//新的系统  航运服务
const NewService = () => import("@/page/specialFund/HyService/NewService");
const HyAdmin = () => import("@/page/specialFund/HyService/HyAdmin");
const HangList = () => import("@/page/specialFund/HyService/HangList");
const ExpertList = () => import("@/page/specialFund/HyService/ExpertList");
const ExpertSum = () => import("@/page/specialFund/HyService/ExpertSum");
const Zjpf = () => import("@/page/specialFund/HyService/Zjpf");
const FinalList = () => import("@/page/specialFund/HyService/FinalList");
const ApplicationAll = () => import("@/page/specialFund/HyService/ApplicationAll");
const UserAll = () => import("@/page/specialFund/HyService/UserAll");
Vue.use(Router)
export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'IndexHome',
      component: IndexHome,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/siteMap',
      name: 'SiteMap',
      component: SiteMap,
      meta: {
        title: '网站地图'
      }
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs,
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '/legalStatement',
      name: 'LegalStatement',
      component: LegalStatement,
      meta: {
        title: '法律声明'
      }
    },
    //资讯中心
    {
      path: '/infCenter',
      name: 'InfCenter',
      component: InfCenter,
      meta: {
        title: '咨询中心'
      },
      children: [
        {
          path: '/infCenter/infCenterHome',
          name: 'InfCenterHome',
          component: InfCenterHome,
          meta: {
            title: '咨询中心-首页'
          }
        },
        {
          path: '/infCenter/infCenterShanghai',
          name: 'InfCenterShanghai',
          component: InfCenterShanghai,
          meta: {
            title: '咨询中心-上海'
          }
        },
        {
          path: '/infCenter/infCenterDomestic',
          name: 'InfCenterDomestic',
          component: InfCenterDomestic,
          meta: {
            title: '咨询中心-国内'
          }
        },
        {
          path: '/infCenter/infCenterInternational',
          name: 'InfCenterInternational',
          component: InfCenterInternational,
          meta: {
            title: '咨询中心-国际'
          }
        },
        {
          path: '/infCenter/infCenterShipping',
          name: 'InfCenterShipping',
          component: InfCenterShipping,
          meta: {
            title: '咨询中心-航运'
          }
        },
        {
          path: '/infCenter/infCenterTrade',
          name: 'InfCenterTrade',
          component: InfCenterTrade,
          meta: {
            title: '咨询中心-经贸'
          }
        },
        {
          path: '/infCenter/infCenterPort',
          name: 'InfCenterPort',
          component: InfCenterPort,
          meta: {
            title: '咨询中心-口岸'
          }
        },
        {
          path: '/infCenter/infCenterTechnology',
          name: 'InfCenterTechnology',
          component: InfCenterTechnology,
          meta: {
            title: '咨询中心-科技'
          }
        },
        {
          path: '/infCenter/infCenterService',
          name: 'InfCenterService',
          component: InfCenterService,
          meta: {
            title: '咨询中心-服务'
          }
        },
        {
          path: '/infCenter/infCenterPolicy',
          name: 'InfCenterPolicy',
          component: InfCenterPolicy,
          meta: {
            title: '咨询中心-政策'
          }
        },
        {
          path: '/infCenter/infCenterLook',
          name: 'InfCenterLook',
          component: InfCenterLook,
          meta: {
            title: '咨询中心-观察'
          }
        },
        {
          path: '/infCenter/infCenterEncy',
          name: 'InfCenterEncy',
          component: InfCenterEncy,
          meta: {
            title: '咨询中心-百科'
          }
        },
        {
            path: '/detail/:id(\\d+)',
            name: 'Detail',
            component: Detail,
            meta: {
                title: '详情页'
            }
        },



      ],
        redirect:'/infCenter/infCenterHome'//想要默认展示的子路由名字
    },
   //航运市场
    {
      path: '/shipMarket',
      name: 'ShipMarket',
      component: ShipMarket,
      meta: {
        title: '航运市场'
      },
      children: [
        {
          path: '/shipMarket/shipMarketHome',
          name: 'ShipMarketHome',
          component: ShipMarketHome,
          meta: {
            title: '航运市场-首页'
          }
        },
        {
          path: '/shipMarket/shipMarketContainer',
          name: 'ShipMarketContainer',
          component: ShipMarketContainer,
          meta: {
            title: '航运市场-集装箱'
          }
        },
        {
          path: '/shipMarket/shipMarketDryCargo',
          name: 'ShipMarketDryCargo',
          component: ShipMarketDryCargo,
          meta: {
            title: '航运市场-干散货'
          }
        },
        {
          path: '/shipMarket/shipMarketTanker',
          name: 'ShipMarketTanker',
          component: ShipMarketTanker,
          meta: {
            title: '航运市场-游轮'
          }
        },
        {
          path: '/shipMarket/shipMarketPort',
          name: 'ShipMarketPort',
          component: ShipMarketPort,
          meta: {
            title: '航运市场-港口'
          }
        },
        {
          path: '/shipMarket/shipMarketShip',
          name: 'ShipMarketShip',
          component: ShipMarketShip,
          meta: {
            title: '航运市场-船舶'
          }
        },
        {
          path: '/shipMarket/shipMarketWaterTransport',
          name: 'ShipMarketWaterTransport',
          component: ShipMarketWaterTransport,
          meta: {
            title: '航运市场-水运'
          }
        }, {
          path: '/shipMarket/shipMarketEconomyTrade',
          name: 'ShipMarketEconomyTrade',
          component: ShipMarketEconomyTrade,
          meta: {
            title: '航运市场-经贸'
          }
        },
        {
          path: '/shipMarket/shipMarketLogistics',
          name: 'ShipMarketLogistics',
          component: ShipMarketLogistics,
          meta: {
            title: '航运市场-物流'
          }
        },
        {
          path: '/shipMarket/shipMarketComprehensive',
          name: 'ShipMarketComprehensive',
          component: ShipMarketComprehensive,
          meta: {
            title: '航运市场-综合'
          }
        },
        {
          path: '/shipMarket/shipMarketIndex',
          name: 'ShipMarketIndex',
          component: ShipMarketIndex,
          meta: {
            title: '航运市场-指数'
          }
        }
      ],
      redirect:'/shipMarket/shipMarketHome'//想要默认展示的子路由名字
    },
    //政策公告
    {
      path: '/policyMnt',
      name: 'PolicyMnt',
      component: PolicyMnt,
      meta: {
        title: '政策公告'
      },
      children: [
        // 按行业主题
        {
          path: '/policyMnt/policyMntGPort',
          name: 'PolicyMntGPort',
          component: PolicyMntGPort,
          meta: {
            title: '政策公告-行业主题-港口'
          }
        },
        {
          path: '/policyMnt/policyMntKPort',
          name: 'PolicyMntKPort',
          component: PolicyMntKPort,
          meta: {
            title: '政策公告-行业主题-口岸'
          }
        },
        {
          path: '/policyMnt/policyMntWaterway',
          name: 'PolicyMntWaterway',
          component: PolicyMntWaterway,
          meta: {
            title: '政策公告-行业主题-水路'
          }
        },
        {
          path: '/policyMnt/policyMntLand',
          name: 'PolicyMntLand',
          component: PolicyMntLand,
          meta: {
            title: '政策公告-行业主题-陆路'
          }
        },
        {
          path: '/policyMnt/policyMntAviation',
          name: 'PolicyMntAviation',
          component: PolicyMntAviation,
          meta: {
            title: '政策公告-行业主题-航空'
          }
        },
        {
          path: '/policyMnt/policyMntTrade',
          name: 'PolicyMntTrade',
          component: PolicyMntTrade,
          meta: {
            title: '政策公告-行业主题-贸易'
          }
        },
        {
          path: '/policyMnt/policyMntFinance',
          name: 'PolicyMntFinance',
          component: PolicyMntFinance,
          meta: {
            title: '政策公告-行业主题-财税'
          }
        },
        {
          path: '/policyMnt/policyMntMaritime',
          name: 'PolicyMntMaritime',
          component: PolicyMntMaritime,
          meta: {
            title: '政策公告-行业主题-海事'
          }
        },
        //按公文文种
        {
          path: '/policyMnt/policyMntPolicy',
          name: 'PolicyMntPolicy',
          component: PolicyMntPolicy,
          meta: {
            title: '政策公告-公文文种-政策'
          }
        },
        {
          path: '/policyMnt/policyMntUnscramble',
          name: 'PolicyMntUnscramble',
          component: PolicyMntUnscramble,
          meta: {
            title: '政策公告-公文文种-政策解读'
          }
        },
        {
          path: '/policyMnt/policyMntNotice',
          name: 'PolicyMntNotice',
          component: PolicyMntNotice,
          meta: {
            title: '政策公告-公文文种-通知'
          }
        },
        {
          path: '/policyMnt/policyMntAnnouncement',
          name: 'PolicyMntAnnouncement',
          component: PolicyMntAnnouncement,
          meta: {
            title: '政策公告-公文文种-公告'
          }
        },
        //按来源单位
        {
          path: '/policyMnt/policyMntCustoms',
          name: 'PolicyMntCustoms',
          component: PolicyMntCustoms,
          meta: {
            title: '政策公告-来源单位-海关总署'
          }
        },
        {
          path: '/policyMnt/policyMntShanghaiCustoms',
          name: 'PolicyMntShanghaiCustoms',
          component: PolicyMntShanghaiCustoms,
          meta: {
            title: '政策公告-来源单位-上海海关'
          }
        },
        {
          path: '/policyMnt/policyMntMinistry',
          name: 'PolicyMntMinistry',
          component: PolicyMntMinistry,
          meta: {
            title: '政策公告-来源单位-交通运输部'
          }
        },
        {
          path: '/policyMnt/policyMntCommunications',
          name: 'PolicyMntCommunications',
          component: PolicyMntCommunications,
          meta: {
            title: '政策公告-来源单位-上海交通委'
          }
        },
        {
          path: '/policyMnt/policyMntChineseGovernment',
          name: 'PolicyMntChineseGovernment',
          component: PolicyMntChineseGovernment,
          meta: {
            title: '政策公告-来源单位-中国政府'
          }
        },
        {
          path: '/policyMnt/policyMntShanghaiGovernment',
          name: 'PolicyMntShanghaiGovernment',
          component: PolicyMntShanghaiGovernment,
          meta: {
            title: '政策公告-来源单位-上海政府'
          }
        },
        {
          path: '/policyMnt/policyMntTaxation',
          name: 'PolicyMntTaxation',
          component: PolicyMntTaxation,
          meta: {
            title: '政策公告-来源单位-国家税务总局'
          }
        },
        {
          path: '/policyMnt/policyMntShanghaiTaxBureau',
          name: 'PolicyMntShanghaiTaxBureau',
          component: PolicyMntShanghaiTaxBureau,
          meta: {
            title: '政策公告-来源单位-上海国税局'
          }
        },
        {
          path: '/policyMnt/policyMntPostBureau',
          name: 'PolicyMntPostBureau',
          component: PolicyMntPostBureau,
          meta: {
            title: '政策公告-来源单位-国家邮政局'
          }
        },
        {
          path: '/policyMnt/policyMntShanghaiPostAdm',
          name: 'PolicyMntShanghaiPostAdm',
          component: PolicyMntShanghaiPostAdm,
          meta: {
            title: '政策公告-来源单位-上海市邮政管理局'
          }
        },
        {
          path: '/policyMnt/policyMntCivilChina',
          name: 'PolicyMntCivilChina',
          component: PolicyMntCivilChina,
          meta: {
            title: '政策公告-来源单位-中国民航局'
          }
        },


      ],
      redirect:'/policyMnt/policyMntPolicy'//想要默认展示的子路由名字
    },
    //在线应用
    {
      path: '/onlineApplication',
      name: 'OnlineApplication',
      component: OnlineApplication,
      meta: {
        title: '在线应用'
      },
      children: [
        {
          path: '/onlineApplication/onlineAppHome',
          name: 'OnlineAppHome',
          component: OnlineAppHome,
          meta: {
            title: '在线应用-首页'
          }
        },
        {
          path: '/onlineApplication/onlineAppEntCation',
          name: 'OnlineAppEntCation',
          component: OnlineAppEntCation,
          meta: {
            title: '在线应用-企业应用'
          }
        },
        //企业应用---业务分类
        {
          path: '/onlineApplication/onlineAppClearance',
          name: 'OnlineAppClearance',
          component: OnlineAppClearance,
          meta: {
            title: '在线应用-业务分类-通关'
          }
        },
        {
          path: '/onlineApplication/onlineAppLogistics',
          name: 'OnlineAppLogistics',
          component: OnlineAppLogistics,
          meta: {
            title: '在线应用-业务分类-物流'
          }
        },
        {
          path: '/onlineApplication/onlineAppFinance',
          name: 'OnlineAppFinance',
          component: OnlineAppFinance,
          meta: {
            title: '在线应用-业务分类-金融'
          }
        },
        {
          path: '/onlineApplication/onlineAppInformation',
          name: 'OnlineAppInformation',
          component: OnlineAppInformation,
          meta: {
            title: '在线应用-业务分类-资讯'
          }
        },
        {
          path: '/onlineApplication/onlineAppGovernmentAffairs',
          name: 'OnlineAppGovernmentAffairs',
          component: OnlineAppGovernmentAffairs,
          meta: {
            title: '在线应用-业务分类-政务'
          }
        },
        {
          path: '/onlineApplication/onlineAppMobile',
          name: 'OnlineAppMobile',
          component: OnlineAppMobile,
          meta: {
            title: '在线应用-业务分类-移动'
          }
        },
        //企业应用---用户行业
        {
          path: '/onlineApplication/onlineAppShipper',
          name: 'OnlineAppShipper',
          component: OnlineAppShipper,
          meta: {
            title: '在线应用-用户行业-货主'
          }
        },
        {
          path: '/onlineApplication/onlineAppFreight',
          name: 'OnlineAppFreight',
          component: OnlineAppFreight,
          meta: {
            title: '在线应用-用户行业-货代'
          }
        },
        {
          path: '/onlineApplication/onlineAppFleet',
          name: 'OnlineAppFleet',
          component: OnlineAppFleet,
          meta: {
            title: '在线应用-用户行业-车队'
          }
        },
        {
          path: '/onlineApplication/onlineAppShippingCompany',
          name: 'OnlineAppShippingCompany',
          component: OnlineAppShippingCompany,
          meta: {
            title: '在线应用-用户行业-船公司'
          }
        },
        {
          path: '/onlineApplication/onlineAppCustomsBroker',
          name: 'OnlineAppCustomsBroker',
          component: OnlineAppCustomsBroker,
          meta: {
            title: '在线应用-用户行业-报关行'
          }
        },
        {
          path: '/onlineApplication/onlineAppCommodityBroker',
          name: 'OnlineAppCommodityBroker',
          component: OnlineAppCommodityBroker,
          meta: {
            title: '在线应用-用户行业-报检行'
          }
        },
        {
          path: '/onlineApplication/onlineAppExpressOperator',
          name: 'OnlineAppExpressOperator',
          component: OnlineAppExpressOperator,
          meta: {
            title: '在线应用-用户行业-快件营运人'
          }
        },
        {
          path: '/onlineApplication/onlineAppWharf',
          name: 'OnlineAppWharf',
          component: OnlineAppWharf,
          meta: {
            title: '在线应用-用户行业-码头'
          }
        },
        {
          path: '/onlineApplication/onlineAppPreviewPoint',
          name: 'OnlineAppPreviewPoint',
          component: OnlineAppPreviewPoint,
          meta: {
            title: '在线应用-用户行业-预录点'
          }
        },
        {
          path: '/onlineApplication/onlineAppYard',
          name: 'OnlineAppYard',
          component: OnlineAppYard,
          meta: {
            title: '在线应用-用户行业-堆场'
          }
        },
        {
          path: '/onlineApplication/onlineAppTally',
          name: 'OnlineAppTally',
          component: OnlineAppTally,
          meta: {
            title: '在线应用-用户行业-理货'
          }
        },
        {
          path: '/onlineApplication/onlineAppStorage',
          name: 'OnlineAppStorage',
          component: OnlineAppStorage,
          meta: {
            title: '在线应用-用户行业-仓储'
          }
        },
        {
          path: '/onlineApplication/onlineAppShipGeneration',
          name: 'OnlineAppShipGeneration',
          component: OnlineAppShipGeneration,
          meta: {
            title: '在线应用-用户行业-船代'
          }
        },
        //企业应用-主题应用
        {
          path: '/onlineApplication/onlineAppNewspaper',
          name: 'OnlineAppNewspaper',
          component: OnlineAppNewspaper,
          meta: {
            title: '在线应用-主题应用-一单两报'
          }
        },
        {
          path: '/onlineApplication/onlineAppShipDynamics',
          name: 'OnlineAppShipDynamics',
          component: OnlineAppShipDynamics,
          meta: {
            title: '在线应用-主题应用-船舶动态'
          }
        },
        {
          path: '/onlineApplication/onlineAppCrossRegional',
          name: 'OnlineAppCrossRegional',
          component: OnlineAppCrossRegional,
          meta: {
            title: '在线应用-主题应用-跨区域通关'
          }
        },
        {
          path: '/onlineApplication/onlineAppInfSearch',
          name: 'OnlineAppInfSearch',
          component: OnlineAppInfSearch,
          meta: {
            title: '在线应用-信息查询'
          }
        },
        {
          path: '/onlineApplication/onlineAppGoods',
          name: 'OnlineAppGoods',
          component: OnlineAppGoods,
          meta: {
            title: '信息查询-主题数据-货物'
          }
        },
        {
          path: '/onlineApplication/onlineAppTransportMeans',
          name: 'OnlineAppTransportMeans',
          component: OnlineAppTransportMeans,
          meta: {
            title: '信息查询-主题数据-运输工具'
          }
        },
        {
          path: '/onlineApplication/onlineAppDocuments',
          name: 'OnlineAppDocuments',
          component: OnlineAppDocuments,
          meta: {
            title: '信息查询-主题数据-单证'
          }
        },
        {
          path: '/onlineApplication/onlineAppCustoms',
          name: 'OnlineAppCustoms',
          component: OnlineAppCustoms,
          meta: {
            title: '信息查询-主题数据-海关'
          }
        },
        {
          path: '/onlineApplication/onlineAppInspectionQuarantine',
          name: 'OnlineAppInspectionQuarantine',
          component: OnlineAppInspectionQuarantine,
          meta: {
            title: '信息查询-主题数据-检验检疫'
          }
        },
        {
          path: '/onlineApplication/onlineAppMaritimeAffairs',
          name: 'OnlineAppMaritimeAffairs',
          component: OnlineAppMaritimeAffairs,
          meta: {
            title: '信息查询-主题数据-海事'
          }
        },
        {
          path: '/onlineApplication/onlineAppPortArea',
          name: 'OnlineAppPortArea',
          component: OnlineAppPortArea,
          meta: {
            title: '信息查询-主题数据-港区'
          }
        },
        {
          path: '/onlineApplication/onlineAppScheduledFlights',
          name: 'OnlineAppScheduledFlights',
          component: OnlineAppScheduledFlights,
          meta: {
            title: '信息查询-主题数据-船期航班'
          }
        },
        {
          path: '/onlineApplication/onlineAppRoadTraffic',
          name: 'OnlineAppRoadTraffic',
          component: OnlineAppRoadTraffic,
          meta: {
            title: '信息查询-主题数据-路况交通'
          }
        },
        {
          path: '/onlineApplication/onlineAppShippingMarket',
          name: 'OnlineAppShippingMarket',
          component: OnlineAppShippingMarket,
          meta: {
            title: '信息查询-主题数据-航运市场'
          }
        },
        {
          path: '/onlineApplication/onlineAppLogisticsResources',
          name: 'OnlineAppLogisticsResources',
          component: OnlineAppLogisticsResources,
          meta: {
            title: '信息查询-主题数据-物流资源'
          }
        },
        {
          path: '/onlineApplication/onlineAppMarineMeteorology',
          name: 'OnlineAppMarineMeteorology',
          component: OnlineAppMarineMeteorology,
          meta: {
            title: '信息查询-主题数据-海洋气象'
          }
        },
        {
          path: '/onlineApplication/onlineAppBulletin',
          name: 'OnlineAppBulletin',
          component: OnlineAppBulletin,
          meta: {
            title: '在线应用-应用公告'
          }
        },
        {
            path: '/yy_detail/:id(\\d+)',
            name: 'yyDetail',
            component: yyDetail,
            meta: {
                title: '在线应用-详情页'
            }
        },



      ],
      redirect:'/onlineApplication/onlineAppHome'//想要默认展示的子路由名字
    },
    //航运发展
    {
      path: '/shippingDevelopment',
      name: 'ShippingDevelopment',
      component: ShippingDevelopment,
      meta: {
        title: '航运发展'
      },
      children: [
        {
          path: '/shippingDevelopment/shippingDevHome',
          name: 'ShippingDevHome',
          component: ShippingDevHome,
          meta: {
            title: '航运发展-首页'
          }
        },
        {
          path: '/shippingDevelopment/shippingDevDynamics',
          name: 'ShippingDevDynamics',
          component: ShippingDevDynamics,
          meta: {
            title: '航运发展-建设动态'
          }
        },
        {
          path: '/shippingDevelopment/shippingDevProcess',
          name: 'ShippingDevProcess',
          component: ShippingDevProcess,
          meta: {
            title: '航运发展-建设历程'
          }
        },
        {
          path: '/shippingDevelopment/shippingDevSupport',
          name: 'ShippingDevSupport',
          component: ShippingDevSupport,
          meta: {
            title: '航运发展-政策支持'
          }
        },

      ],
      redirect:'/shippingDevelopment/shippingDevHome'//想要默认展示的子路由名字
    },
    // 办事指南
    {
      path: '/handlingGuide',
      name: 'HandlingGuide',
      component: HandlingGuide,
      meta: {
        title: '办事指南'
      }
    },
    // 专项资金
    {
      path: '/specialFund',
      name: 'SpecialFund',
      component: SpecialFund,
      meta: {
        title: '专项资金'
      }
    },
    // 洋山频道
    {
      path: '/ysChannel',
      name: 'YsChannel',
      component: YsChannel,
      meta: {
        title: '洋山频道'
      },
      children: [
        {
          path: '/ysChannel/ysChannelHome',
          name: 'YsChannelHome',
          component: YsChannelHome,
          meta: {
            title: '洋山频道-首页'
          }
        },
        {
          path: '/ysChannel/ysChannelSituation',
          name: 'YsChannelSituation',
          component: YsChannelSituation,
          meta: {
            title: '洋山频道-洋山实况'
        }
        },
        {
          path: '/ysChannel/ysChannelCallCenter',
            name: 'YsChannelCallCenter',
          component: YsChannelCallCenter,
          meta: {
          title: '洋山频道-呼叫中心'
        }
        }
      ],
        redirect:'/ysChannel/ysChannelHome'//想要默认展示的子路由名字
    },
    //登录
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    //注册
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: '搜索'
      }
    },
    //忘记密码
    {
      path: '/forgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd,
      meta: {
        title: '找回密码'
      }
    },
    // 集体化运输系统***************************************************************************************************
    {
      path: '/fundlogin1',
      name: 'FundLogin',
      component: FundLogin,
      meta: {
        title: '专项资金-登录'
      }
    },
    //普通用户
    {
      path: '/fundHome',
      name: 'FundHome',
      component: FundHome,
      meta: {
        title: '专项资金-普通用户',
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
        {
          path: '/p/fund/public/user',
          name: 'ApplyAlready',
          component:ApplyAlready ,
          meta: {
            title: '专项资金-已有申请',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: '/p/fund/public/add',
          name: 'NewApplication',
          component:NewApplication ,
          meta: {
            title: '专项资金-新建申请',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: '/p/fund/public/register/n',
          name: 'MyMessage',
          component:MyMessage ,
          meta: {
            title: '专项资金-我的信息',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },

      ],
      redirect:'/p/fund/public/user'//想要默认展示的子路由名字
    },
    //管理员用户
    {
      path: '/fundHomeAdmin',
      name: 'FundHomeAdmin',
      component: FundHomeAdmin,
      meta: {
        title: '专项资金-管理员'
      },
      children: [
        {
          path: '/p/fund/public/admin',
          name: 'AllApplications',
          component:AllApplications ,
          meta: {
            title: '专项资金-所有申请',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: '/p/fund/public/userlist',
          name: 'UserListAll',
          component:UserListAll ,
          meta: {
            title: '专项资金-用户中心',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },

      ],
      redirect:'/p/fund/public/admin'//想要默认展示的子路由名字
    },

    // 服务创新系统***************************************************************************************************
    //只有普通用户
    {
      path: '/serviceHome',
      name: 'ServiceHome',
      component: ServiceHome,
      meta: {
        title: '创新项目'
      },
      children: [
        {
          path: '/p/fund/public/hyuser',
          name: 'NewHyUser',
          component:NewHyUser ,
          meta: {
            title: '创新项目-新建申请',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: '/p/fund/public/existapply',
          name: 'ExistApply',
          component:ExistApply ,
          meta: {
            title: '创新项目-已有申请',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        }
      ],
      redirect:'/p/fund/public/hyuser'//想要默认展示的子路由名字
    },

    //新的系统 简讯信息平台报送**************************************************************************************************
    {
      path: '/fundlogin',
      name: 'NewsletterLogin',
      component: NewsletterLogin,
      meta: {
        title: '简讯信息平台-登录'
      }
    },
    {
      path: '/NewsletterHome',
      name: 'NewsletterHome',
      component: NewsletterHome,
      meta: {
        title: '简讯信息平台项目'
      },
      children: [
        {
          path: '/p/report',
          name: 'Report',
          component:Report ,
          meta: {
            title: '简讯信息-信息专报-文章列表',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: '/p/report//post/showPost',
          name: 'ShowPost',
          component:ShowPost ,
          meta: {
            title: '简讯信息-信息专报-文章列表-列表详情',
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        }
      ],
      redirect:'/p/report'//想要默认展示的子路由名字
    },

   //新的系统  航运服务**************************************************************************************************
      {
          path: '/p/fund/public/service',
          name: 'NewService',
          component: NewService,
          meta: {
              title: '航运服务'
          },
          children: [
              {
                  path: '/p/fund/public/hyadmin',
                  name: 'HyAdmin',
                  component: HyAdmin,
                  meta: {
                      title: '航运服务-概况',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              },
              {
                  path: '/p/fund/public/hylist',
                  name: 'HangList',
                  component: HangList,
                  meta: {
                      title: '服务创新-申请列表',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              },
              {
                  path: '/p/fund/public/expertlist',
                  name: 'ExpertList',
                  component: ExpertList,
                  meta: {
                      title: '服务创新-专家初审列表汇总',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              },
              {
                  path: '/p/fund/public/expertsum',
                  name: 'ExpertSum',
                  component: ExpertSum,
                  meta: {
                      title: '服务创新-专家签名汇总表',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              },
              {
                  path: '/p/fund/public/zjpf',
                  name: 'Zjpf',
                  component: Zjpf,
                  meta: {
                      title: '服务创新-专家签名评分列表',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              },
              {
                  path: '/p/fund/public/finallist',
                  name: 'FinalList',
                  component: FinalList,
                  meta: {
                      title: '服务创新-专家评分列表汇总',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              },
              {
                  path: '/p/fund/public/application',
                  name: 'ApplicationAll',
                  component: ApplicationAll,
                  meta: {
                      title: '集疏运管理-所有申请',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              },
              {
                  path: '/p/fund/public/userAll',
                  name: 'UserAll',
                  component: UserAll,
                  meta: {
                      title: '集疏运管理-用户申请',
                      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                  }
              }


          ],
          redirect:'/p/fund/public/hyadmin'//想要默认展示的子路由名字
      },



  ]
})
