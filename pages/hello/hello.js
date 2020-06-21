const app = getApp()

Page({
  data:{
    artical : []
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {

    //获取前一个页面传递的参数
    //console.log(app.globalData.id)

  },
  onShow:function(options){
    var that = this
    //console.log(app.globalData.artical)

    var that = this
    
    wx.cloud.callFunction({
      name: "getArticle",
      data: {
        //openid: app.globalData.openid
      },
      success(res) {
        console.log("通过云函数获取数据成功", res)
        //赋值给全局变量
        app.globalData.artical = res.result.data
        //console.log(app.globalData.artical)
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
  showDetail(e){
    //打印点击事件传来的参数
    //console.log(e)
    let msgId = e.currentTarget.dataset.id
    //特别注意这种传值的方式
    wx.navigateTo({
      //url: '/pages/daily/daily',
      url: '/pages/detail/detail?id=' + msgId,
    })
  }

})