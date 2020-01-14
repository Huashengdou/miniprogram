// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "hello-rqbjk"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //console.log(event)
  if(event.content == '')
    return ;
  return cloud.database().collection('list').add({
    data:{
     content: event.content,
     time: event.time,
     openid: event.openid
    }
  });
}