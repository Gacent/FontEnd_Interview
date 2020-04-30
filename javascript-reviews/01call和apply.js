/**call和apply有啥区别，性能哪个更好 */
// fn.call(obj,10,20,30)
// fn.apply(obj,[10,20,30])

/**
 * 答：
 * call和apply都是function原型上的方法，每一个函数作为Function的实例，可以调取原型上的call和apply方法
 * 都是用来改变函数中this的指向
 * 区别在于传参：call传多个参数，apply是以数组的形式传参
 * 
 * bind也可以改变this指向，但没立即指向。
 * 
 * 性能：call的性能更优，尤其是传参超过3个时
 */
let arr=[10,20,30],
    obj={}
function fn(x,y,z){}
fn.apply(obj,arr) // x=10,y=20,z=30  等价于  fn.call(obj,...arr)
fn.call(obj,arr) // x=[10,20,30] y=z=undefined

// 自己实现性能测试，但是受配置等影响
// console.time可以测试出一段程序执行的时间
console.time('A')
for (let i = 0; i < 100000000; i++) {
  
}
console.timeEnd('A')