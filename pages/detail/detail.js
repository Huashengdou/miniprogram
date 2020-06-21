// pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    artical: [],
    msgid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取前一个页面传递的参数
    this.data.msgid = options.id
    //获取全局变量的值
    this.data.artical = app.globalData.artical
    //console.log(this.data.msgid)
    //console.log(this.data.artical)
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
    var that = this
    for (var i = 0; i < that.data.artical.length; ++i) {
      //console.log(that.data.artical[i]._id);
      //获取特定的msg
      if (that.data.artical[i]._id == that.data.msgid)
      {
        //console.log("find it")
        that.setData({
          artical: that.data.artical[i]
        })
        // console.log(artical.)
      }
      else
        continue;
    }

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