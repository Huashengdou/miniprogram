// pages/daily/daily.js
const db = wx.cloud.database().collection("list")
let artical = ""

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  //响应输入完成事件
  handleEditorBlur(event){
    console.log("input:",event)
    artical = event.detail.text
    console.log("artical-->",artical)
  },

  //响应点击保存按钮事件
  handleButtonTap(){
    console.log("点击了保存")
    wx.cloud.callFunction({
        name : "addArticle",
        data:{
          content: artical
        },
        success(res){
          console.log("通过云函数保存成功",res)
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          }),
          wx.navigateBack({
           
          })
        },
        fail(res){
          console.log("通过云函数保存失败", res)
        }

    })
    /*通过小程序端保存数据
    db.add({
      data:{
        content : artical
      },
      success: function(res){
        console.log("保存成功")
      }
    })*/

  },
  //云函数加法
  handleyunfunc(){
    wx.cloud.callFunction({
      name:"add",
      data:{
        a:2,
        b:3
      },
      success:function(res){
        console.log("调用云函数成功",res)
      }
    })
  }
})