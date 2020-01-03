const db = wx.cloud.database().collection("list")

let content = ""

Page({
  data:{
    name: 'world!',
    classmatename: 'XiaoMing',
    students:[
      {name:'code', age:18},
      {name:'jam', age:19},
      {name:'xiaoli', age:20}
      ],
    number:0
    },
    handleClickadd(){
      //this.data.number += 1
      this.setData(
        {
          number: this.data.number += 1
        }
      )
      console.log("点击了按钮", this.data.number)
    },
  handleClickdel(){
    this.setData({
      number: this.data.number -= 1
    })
    //console.log(this.data.number--)
  },
  handlegetinfo(event){
    console.log(event)
  },

  handleBindready(event){
    console.log("editor 初始化完成：",event)
  },
  handlefocus(event) {
    console.log("focus 初始化完成：", event)
  }, 
  handblur(event) {
    console.log("blur 初始化完成：", event)
  },
  handinput(event) {
    console.log("input 初始化完成：", event)
    content = event.detail.text
    console.log(content)
  },

  handleputdata(){
    console.log("点击了上传数据按钮：")
    db.add({
      data:{
        contents:content,
        id:2
      },
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
      }
    })
  },

  handlegetdata() {
    console.log("点击了获取数据按钮：")
    db.get({
      success(res) {
        console.log("获取成功", res)
      },
      fail(res) {
        console.log("获取失败", res)
      }
    })
  }


})