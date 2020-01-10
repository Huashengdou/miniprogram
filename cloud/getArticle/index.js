// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "hello-rqbjk"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event)
  console.log(context)
  return await cloud.database().collection('list').where({
    openid: wxContext.OPENID
  }).get()
}