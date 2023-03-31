// dataService.js文件
// 定义没有依赖的模块
define(function () {
  let msg = "www.xianzao.com";
  function getMsg() {
    return msg.toUpperCase();
  }
  return { getMsg }; // 暴露模块
});
