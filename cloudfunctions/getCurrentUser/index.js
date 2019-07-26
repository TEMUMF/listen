// 云函数入口文件
const rp=require("request-promise")

// 云函数入口函数
exports.main = async (event, context) => {
  var url ="https://www.ximalaya.com/revision/main/getCurrentUser";
  return rp(url)
  .then(res=>{
    return res;
  })
  .catch(err=>{
    console.log(err);
  })
}