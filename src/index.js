import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

window.TemplateEngine = {
  // 渲染
  render(templateStr, data) {
    var tokens = parseTemplateToTokens(templateStr);
    var domStr = renderTemplate(tokens, data);
    console.log(domStr);
    return domStr;
  },
};
