// pages/detail/detail.js
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
    console.log(this.data.msgid)
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
    wx.cloud.callFunction({
      name: "getArticle",
      data: {
        //openid: app.globalData.openid
      },
      success(res) {
        console.log("通过云函数获取数据成功", res)
        that.setData({
          artical: res.result.data
        })
        for (var i = 0; i < that.data.artical.length; ++i) {
          //console.log(that.data.artical[i]._id);
          //获取特定的msg
          if(that.data.artical[i]._id == that.data.msgid)
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
      fail(res) {
        console.log("通过云函数获取数据失败", res)
      }
    })

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