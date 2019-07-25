// 云函数入口文件
const rq = require("request-promise")

// 云函数入口函数
exports.main = async (event, context) => {
  var url ="https://www.ximalaya.com/revision/category/allCategoryInfo";
  return rq(url)
  .then(res=>{
    return res;
  })
  .catch(err=>{
    console.log(err);
  })
}