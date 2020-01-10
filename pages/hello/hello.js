const app = getApp()

Page({
  data:{
    artical : []
  },
  onShow:function(options){
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

      },
      fail(res) {
        console.log("通过云函数获取数据失败", res)
      }

    })
  }
  /*onShow:function(options){
    var that = this
    wx.cloud.database().collection("list").get({
      success: function (res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({
          artical: res.data
        })
        //artical = res.data[0].content
      }
    })
  }*/,
  handleWrite(){
    console.log("写笔记")
    wx.navigateTo({
      //url: '/pages/daily/daily',
      url:'/pages/editor/editor',
    })
  },
  showDetail(){
    wx.navigateTo({
      //url: '/pages/daily/daily',
      url: '/pages/detail/detail',
    })
  }

})