import lookup from "./lookup";

/**
 * 处理数组，结合renderTemplate实现递归
 * @param {Array} token 如： ['#', 'arr', []]
 * @returns {String}
 */
function parseArray(token, data) {
  // 得到整体数据data中这个数组要使用的部分
  var v = lookup(data, token[1]);
  // 结果字符串
  var resultStr = "";
  // 遍历v，v一定式数组（官方中布尔值的写法暂不处理）
  for (let i = 0; i < v.length; i++) {
    resultStr += renderTemplate(token[2], v[i]);
  }
  return resultStr;
}

/**
 * 让tokens数组变为dom字符串
 */
export default function renderTemplate(tokens, data) {
  // console.log({ tokens, data });
  var resultStr = "";

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    // 看类型
    if (token[0] === "text") {
      resultStr += token[1];
    } else if (token[0] === "name") {
      // lookup函数，处理包含 'a.b.c'类型的对象形式
      resultStr += lookup(data, token[1]);
    } else if (token[0] === "#") {
      resultStr += parseArray(token, data);
    }
  }

  return resultStr;
}
