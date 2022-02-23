import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

/**
 *
 * 将模板字符串变为tokens数组
 */
export default function parseTemplateToTokens(templateStr) {
  var tokens = [];

  // 实例化一个扫描器,构造时候提供一个参数,
  var scanner = new Scanner(templateStr);

  var words;
  // 当scanner没用到头
  while (!scanner.eos()) {
    // 收集开始标记出现之前的文字
    words = scanner.scanUntil("{{");
    // 存起来
    if (words !== "") {
      tokens.push(["text", words]);
    }
    // 过双大括号
    scanner.scan("{{");
    words = scanner.scanUntil("}}");
    // 存起来
    if (words !== "") {
      // 这个words就是{{}}中间的东西. 判断以下首字符
      if (words[0] === "#") {
        tokens.push(["#", words.substring(1)]);
      } else if (words[0] === "/") {
        tokens.push(["/", words.substring(1)]);
      } else {
        tokens.push(["name", words]);
      }
    }
    // 过双大括号
    scanner.scan("}}");
  }

  return nestTokens(tokens);
}
