import config from "./config";
// 发送ajax请求

/*
1 封装功能函数
    1 功能点明确
    2 函数内部应保留固定代码
    3 将动态的数据抽取成形参，由使用者根据自身的情况动态传入实参
    4 一个良好的功能函数应该设置形参的默认值
2 封装功能组建
    1 功能点明确
    2 组建内部保留静态的代码
    3 将动态的数据抽取成props参数，而使用者根据自身的情况以标签属性的形式动态传入props数据
    4 一个良好的组件应该设置组件的必要性及数据类型
 */

export default (url,data,method = 'GET') =>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:config.url + url,
            data,
            method,
            success:(res)=>{
                console.log(res.data )
                resolve(res.data);
            },
            fail:(res)=>{
                reject(res);
            }
        })
    })
}