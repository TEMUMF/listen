// 云函数入口文件
const rp=require("request-promise");

// 云函数入口函数
exports.main = async (event, context) => {
  var url ="https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian"
  return rp(url)
  .then(res=>{
    return res;
  })
  .catch(console.error)
}