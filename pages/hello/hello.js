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
  }

})