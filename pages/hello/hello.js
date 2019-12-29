 Page({
  data:{
    artical : []
  },
  onShow:function(options){
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
  },
  handleWrite(){
    console.log("写笔记")
    wx.navigateTo({
      url: '/pages/daily/daily',
    })
  }

})