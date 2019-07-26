// pages/index/index.js
const ldb=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carousel:[],
    carouselUrl:'//imagev2.xmcdn.com/',
    details:[],
    guess:[],
    indexGuess:[],
  },
  getCarousel:function(){
    wx.cloud.callFunction({
      name:"getCarousel",
      data:{},
      success:res=>{
        var result=JSON.parse(res.result);
        this.setData({
          carousel:result.data.slideshow
        });
      }
    })
  },
  getDetails:function(){
    wx.cloud.callFunction({
      name:"getIndexDetail",
      data:{},
      success:res=>{
        var result=JSON.parse(res.result);
        console.log(result);
        this.setData({
          details: result.data.moduleContent
        })
      }
    });
    wx.cloud.callFunction({
      name:"guess",
      data:{},
      success:res=>{
        var result=JSON.parse(res.result);
        console.log(result)
        this.setData({
          guess: result.data.recommendInfoList,
          indexGuess:result.data.recommendInfoList.slice(0,3)
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCarousel();
    this.getDetails();
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