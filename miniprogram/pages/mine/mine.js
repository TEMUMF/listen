// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList:[],
    chooseLogin:"微信登录",
    hasLogin:false,
    userInfo:{
      cover:"../../images/homeS.png",
      userName:"保温杯里泡枸杞",
      isVip:false
    },
    checked:false,
    actions:[{
      name:"不开启"
    },{
      name:"播完当前声音关闭"
    },{
      name:"播完2首声音关闭"
    },{
      name:"10分钟后"
    },{
      name: "20分钟后"
    },{
      name: "30分钟后"
    }],
    timeOutClose:false,
    popup:false
  },
  getCurrent:function(){
    wx.cloud.callFunction({
      name:"getCurrentUser",
      data:{},
      success:res=>{
        var result=JSON.parse(res.result);
        var hadLogin=!result.isNeedLogin;
        console.log(result);
        this.setData({
          userList:result,
          hasLogin:hadLogin
        })
        wx.hideLoading();
      },
      fail:err=>{
        console.log(err);
      }
    })
  },
  toWechatLogin:function(){
    this.setData({
      chooseLogin:"登录中...",
      hasLogin:true
    });
    wx.getSetting({
      success:res=>{
      if(res.authSetting['scope.userInfo']){
        wx.getUserInfo({
          success:res=>{
            console.log(res);
            // this.queryUserInfo();
            var mine=res.userInfo;
            this.setData({
              userInfo: {
                cover: mine.avatarUrl,
                userName: mine.nickName,
                isVip: false
              },
            })
          }
        })
      }
      }
    })
  },
  /* 获取用户信息接口 */
  queryUserInfo:function(){
    wx.login({
      success: res => {
        var userCode = res.code;
        wx.request({
          url: 'https://7465-temumf-test-rwlhq-1259655188.tcb.qcloud.la',
          data: {
            code: userCode
          },
          header: { 'content-type': 'application/json' },
          success: res => {
            console.log(res)
            this.setData({
              chooseLogin: "微信登录",
            })
          }
        })
      },
      fail: err => {
        wx.showToast({
          title: '登录失败',
        })
      }
    })
  },
  onChange:function(e){
    this.setData({
      checked:e.detail
    })
  },
  getUserPhone:function(e){
    console.log(e);
    wx.bindgetphonenumber()
    .then(res=>{
      console.log(res)
    })
  },
  setTimeClose:function(){
    var ifClose=!this.data.timeOutClose;
    this.setData({
      timeOutClose:ifClose
    })
  },
  signIn:function(){
    var ifPopup=!this.data.popup;
    this.setData({
      popup:ifPopup
    })
  },
  changeUser:function(){
    this.setData({
      // hasLogin:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading();
    this.getCurrent();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})