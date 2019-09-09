global.serviceUrl = process.env.VUE_APP_URL
//ajax请求返回code
global.resultCode = {
  //操作成功
  Success: 200,
  //警告异常,message记录警告信息
  AlertException: 20,
  //错误异常。message记录错误信息
  ErrorException: 30,
  //部分成功
  PartiallySuccess: 11,
  //略过
  SkipOver: 40,
  //操作不成功
  NotSuccess: 50,
  //无权限
  NoPermission: 60
}
