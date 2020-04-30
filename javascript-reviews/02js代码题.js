// 1. 实现(5).add(3).minus(2) ，输出结果为6
(function () {
  // 每个方法执行完，都要返回Number这个类的实例，这样才能继续链式调用
  function check(n) {
    n = Number(n)
    return isNaN(n) ? 0 : n
  }
  function add(n) {
    n=check(n)
    return this + n;
  }
  function minus(n) {
    n=check(n)
    return this - n;
  }
  ["add", "minus"].forEach((item) => {
    Number.prototype[item] = eval(item);
  });
})();
console.log((5).add(3).minus(2));
