/**
 * 折叠tokens,将 #和/之间的tokens整合起来,作为它的下标为3的项
 * @param {Array} tokens
 */
export default function nestTokens(tokens) {
  // 结果数组
  var nestedTokens = [];
  // 栈结构,存放小tokens,栈顶(靠近端口的,最新进入的)的tokens数组中当前操作的这个二tokens小数组
  var sections = [];

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    switch (token[0]) {
      case "#":
        // 创建数组收集子元素
        token[2] = [];
        // 压栈(入栈)
        sections.push(token);
        // console.log(i, token, JSON.parse(JSON.stringify(sections)), "入栈");
        break;
      case "/":
        // 出栈, pop()删除数组的最后一个元素，并获取到删除的那个元素
        let section_pop = sections.pop();
        // console.log(
        //   i,
        //   token,
        //   JSON.parse(JSON.stringify(sections)),
        //   section_pop,
        //   "出栈"
        // );
        // 刚收集的子元素数组 加入到结果数组中
        if (sections.length === 0) {
          nestedTokens.push(section_pop);
        } else {
          sections[sections.length - 1][2].push(section_pop);
        }
        break;
      default:
        // console.log(
        //   i,
        //   nestedTokens,
        //   token,
        //   JSON.parse(JSON.stringify(sections))
        // );
        // 判断，栈队列当前情况
        if (sections.length === 0) {
          nestedTokens.push(token);
        } else {
          sections[sections.length - 1][2].push(token);
        }
    }
  }

  return nestedTokens;
}
