/**
 * 在对象中，寻找用连续点符号的keyName属性
 * @param {Object} dataObj 如：{ a: 1, b: { c: 2 } }
 * @param {string} keyName 如： 'b.c'
 */
export default function lookup(dataObj, keyName) {
  console.log({ dataObj, keyName });
  if (keyName === ".") {
    return dataObj;
  }
  // keyName中是否有点符号
  if (keyName.indexOf(".") !== -1) {
    var keys = keyName.split(".");
    // 设置临时变量，用于周转，一层一层找下去
    var temp = dataObj;
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  }
  // 没有点符号
  return dataObj[keyName];
}
