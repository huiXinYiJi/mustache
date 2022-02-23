/**
 * 扫描类
 */
export default class Scanner {
  constructor(templateStr) {
    // console.log(templateStr);
    this.templateStr = templateStr;
    // 指针
    this.pos = 0;
    // 尾巴
    this.tail = templateStr;
  }

  // 扫描指定内容( {{}}之间的内容)
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      // tag有多长,比如{{长度是2,就让指针后移两位
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // 让指针进行扫描,直到遇见指定内容结束,并且能够返回结束之前的扫描内容
  scanUntil(stopTag) {
    const pos_backup = this.pos;
    // 当尾巴的开头不是stopTag的时候,旧说明还没有扫描到stopTag
    while (!this.eos() && this.tail.indexOf(stopTag) !== 0) {
      this.pos++;
      // 尾巴内容为当前指针(包含)之后所有内容
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos);
  }

  // 指针是否已经到头,返回布尔值
  eos() {
    return this.pos >= this.templateStr.length;
  }
}
