Page({

  handleWrite(){
    console.log("写笔记")
    wx.navigateTo({
      url: '/pages/daily/daily',
    })
  }

})