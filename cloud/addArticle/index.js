// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "hello-rqbjk"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return cloud.database().collection('list').add({
    data:{
     content: event.content
    }
  });
}